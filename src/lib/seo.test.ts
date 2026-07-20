import { describe, expect, it } from 'vitest'
import { getPageMetadata } from './seo'

describe('getPageMetadata', () => {
  it('returns portfolio metadata for the home route', () => {
    expect(getPageMetadata('/')).toEqual({
      title: 'Salman Fatahillah | Full-stack developer',
      description:
        'Portfolio of Salman Fatahillah, a full-stack developer building reliable web applications and operational software.',
      canonicalPath: '/',
    })
  })

  it('returns project-specific metadata for the projects route', () => {
    expect(getPageMetadata('/projects')).toEqual({
      title: 'Projects | Salman Fatahillah',
      description:
        'Selected software projects by Salman Fatahillah, spanning production web applications, native tools, and data products.',
      canonicalPath: '/projects/',
    })
  })

  it('uses blog metadata and its own canonical path for a blog post', () => {
    expect(getPageMetadata('/blog/my-first-post')).toEqual({
      title: 'Blog | Salman Fatahillah',
      description:
        'Writing by Salman Fatahillah on software development, product work, and practical technology.',
      canonicalPath: '/blog/my-first-post',
    })
  })

  it('returns noindex metadata for unrecognized routes', () => {
    expect(getPageMetadata('/does-not-exist')).toEqual({
      title: 'Page not found | Salman Fatahillah',
      description: 'The page you requested could not be found.',
      canonicalPath: '/does-not-exist',
      robots: 'noindex,follow',
    })
  })
})
