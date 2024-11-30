import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Hackathons from './components/Hackathons'
import Skills from './components/Skills'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Header />
      <main>
        <About />
        <Experience />
        <Hackathons />
        <Skills />
      </main>
    </div>
  )
}

export default App
