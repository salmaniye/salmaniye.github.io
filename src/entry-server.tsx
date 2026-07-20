import { renderToString } from 'react-dom/server'
import { Router } from 'react-router-dom'
import { AppRoutes } from './App'
import { getPageMetadata } from './lib/seo'

const staticNavigator = {
  createHref: () => '',
  encodeLocation: (location: { pathname?: string; search?: string; hash?: string }) => ({
    pathname: location.pathname ?? '',
    search: location.search ?? '',
    hash: location.hash ?? '',
  }),
  go: () => {},
  push: () => {},
  replace: () => {},
}

export function render(pathname: string) {
  return {
    html: renderToString(
      <Router
        location={{ pathname, search: '', hash: '', state: null, key: 'static' }}
        navigator={staticNavigator}
        static
      >
        <AppRoutes />
      </Router>,
    ),
    metadata: getPageMetadata(pathname),
  }
}
