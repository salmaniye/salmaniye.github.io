import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import Projects from './pages/Projects'
import { getPageMetadata } from './lib/seo'

const siteUrl = 'https://salmanf.com'

function RouteMetadata() {
  const { pathname } = useLocation()

  useEffect(() => {
    const metadata = getPageMetadata(pathname)
    const canonicalUrl = `${siteUrl}${metadata.canonicalPath}`

    document.title = metadata.title

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    const robots = document.querySelector<HTMLMetaElement>('meta[name="robots"]')
    const openGraphTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]')
    const openGraphDescription = document.querySelector<HTMLMetaElement>('meta[property="og:description"]')
    const openGraphUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]')
    const twitterTitle = document.querySelector<HTMLMetaElement>('meta[name="twitter:title"]')
    const twitterDescription = document.querySelector<HTMLMetaElement>('meta[name="twitter:description"]')
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')

    if (description) description.content = metadata.description
    if (robots) robots.content = metadata.robots ?? 'index,follow'
    if (openGraphTitle) openGraphTitle.content = metadata.title
    if (openGraphDescription) openGraphDescription.content = metadata.description
    if (openGraphUrl) openGraphUrl.content = canonicalUrl
    if (twitterTitle) twitterTitle.content = metadata.title
    if (twitterDescription) twitterDescription.content = metadata.description
    if (canonical) canonical.href = canonicalUrl
  }, [pathname])

  return null
}

export function AppRoutes() {
  return (
    <>
      <RouteMetadata />
      <div className="min-h-screen bg-orange-100 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            {/* Photography and blog are paused until real photos/captions and posts are ready. */}
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
