import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const siteUrl = 'https://salmanf.com'

function escapeAttribute(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;')
}

function replaceTagAttribute(document, match, attribute, value) {
  const matchIndex = document.indexOf(match)
  if (matchIndex === -1) throw new Error(`Could not find ${match}`)

  const tagStart = document.lastIndexOf('<', matchIndex)
  const tagEnd = document.indexOf('>', matchIndex)
  const tag = document.slice(tagStart, tagEnd + 1)
  const updatedTag = tag.replace(new RegExp(`${attribute}="[^"]*"`), `${attribute}="${escapeAttribute(value)}"`)

  return `${document.slice(0, tagStart)}${updatedTag}${document.slice(tagEnd + 1)}`
}

export function injectPage(template, page) {
  const canonicalUrl = `${siteUrl}${page.metadata.canonicalPath}`
  let document = template.replace(/<title>[^<]*<\/title>/, `<title>${page.metadata.title}</title>`)

  document = replaceTagAttribute(document, 'name="description"', 'content', page.metadata.description)
  document = replaceTagAttribute(document, 'name="robots"', 'content', page.metadata.robots ?? 'index,follow')
  document = replaceTagAttribute(document, 'rel="canonical"', 'href', canonicalUrl)
  document = replaceTagAttribute(document, 'property="og:title"', 'content', page.metadata.title)
  document = replaceTagAttribute(document, 'property="og:description"', 'content', page.metadata.description)
  document = replaceTagAttribute(document, 'property="og:url"', 'content', canonicalUrl)
  document = replaceTagAttribute(document, 'name="twitter:title"', 'content', page.metadata.title)
  document = replaceTagAttribute(document, 'name="twitter:description"', 'content', page.metadata.description)

  return document.replace('<div id="root"></div>', `<div id="root">${page.html}</div>`)
}

async function prerender() {
  const template = await readFile(resolve('dist/index.html'), 'utf8')
  const { render } = await import(pathToFileURL(resolve('dist-ssr/entry-server.js')).href)
  const routes = [
    ['/', 'dist/index.html'],
    ['/projects', 'dist/projects/index.html'],
  ]

  await Promise.all(
    routes.map(async ([route, outputPath]) => {
      const page = injectPage(template, render(route))
      const output = resolve(outputPath)
      await mkdir(dirname(output), { recursive: true })
      await writeFile(output, page)
      console.log(`Prerendered ${route} -> ${outputPath}`)
    }),
  )
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  await prerender()
}
