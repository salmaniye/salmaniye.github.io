import { describe, expect, it } from 'vitest'
import { render } from './entry-server'

describe('server entry', () => {
  it('renders the homepage body and metadata at build time', () => {
    const page = render('/')

    expect(page.html).toContain("Hi, I&#x27;m Salman Fatahillah")
    expect(page.metadata.canonicalPath).toBe('/')
  })

  it('renders the Projects page with its own canonical path', () => {
    const page = render('/projects')

    expect(page.html).toContain('Projects')
    expect(page.metadata.canonicalPath).toBe('/projects/')
  })
})
