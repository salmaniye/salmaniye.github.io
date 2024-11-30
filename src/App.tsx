import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import BlogPage from './pages/BlogPage'
import BlogPost from './pages/BlogPost'
import Footer from './components/Footer'
import Projects from './pages/Projects'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
