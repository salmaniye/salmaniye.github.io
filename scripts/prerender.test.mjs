import { describe, expect, it } from 'vitest'
import { injectPage } from './prerender.mjs'

const template = `<!doctype html><html><head>
<title>Salman Fatahillah | Full-stack developer</title>
<meta name="description" content="Home description" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="https://salmanf.com/" />
<meta property="og:title" content="Home title" />
<meta property="og:description" content="Home description" />
<meta property="og:url" content="https://salmanf.com/" />
<meta name="twitter:title" content="Home title" />
<meta name="twitter:description" content="Home description" />
</head><body><div id="root"></div></body></html>`

describe('injectPage', () => {
  it('adds prerendered markup and route metadata to a built HTML document', () => {
    const page = injectPage(template, {
      html: '<main>Projects body</main>',
      metadata: {
        title: 'Projects | Salman Fatahillah',
        description: 'Selected projects.',
        canonicalPath: '/projects/',
      },
    })

    expect(page).toContain('<div id="root"><main>Projects body</main></div>')
    expect(page).toContain('<title>Projects | Salman Fatahillah</title>')
    expect(page).toContain('content="Selected projects."')
    expect(page).toContain('href="https://salmanf.com/projects/"')
  })
})
