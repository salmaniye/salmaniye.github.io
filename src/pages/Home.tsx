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