import Hero from '@/components/hero'
import Projects from '@/components/projects'
import About from '@/components/about'
import Footer from '@/components/footer'
import Nav from '@/components/nav'

export default function Home() {
  return (
    <>
      <Nav />

      <main id="main-content" tabIndex={-1}>
        <Hero />

        <Projects />

        <About />
      </main>

      <Footer />
    </>
  )
}
