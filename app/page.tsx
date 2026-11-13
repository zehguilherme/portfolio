import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { Nav } from '@/components/nav'
import { Projects } from '@/components/projects'

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content" tabIndex={-1} className="scroll-mt-16">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
