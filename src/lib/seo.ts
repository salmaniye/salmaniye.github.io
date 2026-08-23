export interface PageMetadata {
  title: string
  description: string
  canonicalPath: string
  robots?: string
}

const homeMetadata: PageMetadata = {
  title: 'Salman Fatahillah | Full-stack developer',
  description:
    'Portfolio of Salman Fatahillah, a full-stack developer building reliable web applications and operational software.',
  canonicalPath: '/',
}

const notFoundMetadata: Omit<PageMetadata, 'canonicalPath'> = {
  title: 'Page not found | Salman Fatahillah',
  description: 'The page you requested could not be found.',
  robots: 'noindex,follow',
}

const routeMetadata: Record<string, PageMetadata> = {
  '/projects': {
    title: 'Projects | Salman Fatahillah',
    description:
      'Selected software projects by Salman Fatahillah, spanning production web applications, native tools, and data products.',
    canonicalPath: '/projects/',
  },
}

export function getPageMetadata(pathname: string): PageMetadata {
  if (pathname === '/') {
    return homeMetadata
  }

  return routeMetadata[pathname] ?? { ...notFoundMetadata, canonicalPath: pathname }
}
