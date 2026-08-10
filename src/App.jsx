import { LazyMotion, MotionConfig, domAnimation } from 'motion/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/ui/BackToTop'

export default function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo
        </a>

        <Navbar />

        <main id="conteudo">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>

        <Footer />
        <BackToTop />
      </MotionConfig>
    </LazyMotion>
  )
}
