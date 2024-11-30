import About from '../components/About'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Hackathons from '../components/Hackathons'
import Skills from '../components/Skills'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Salman Fatahillah
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Fullstack Developer
            </p>
          </div>
        </section>

        <div className="space-y-32">
          <section>
            <About />
          </section>

          <section>
            <Experience />
          </section>

          <section>
            <Education />
          </section>

          <section>
            <Hackathons />
          </section>

          <section>
            <Skills />
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home