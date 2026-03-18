import Navbar       from '@layout/Navbar'
import Footer       from '@layout/Footer'
import CustomCursor from '@ui/CustomCursor'
import Hero         from '@sections/Hero'
import About        from '@sections/About'
import Skills       from '@sections/Skills'
import Projects     from '@sections/Projects'
import Resume       from '@sections/Resume'
import Achievements from '@sections/Achievements'
import Contact      from '@sections/Contact'

export default function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
