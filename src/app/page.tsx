import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Services } from '@/components/Services'
import { Portfolio } from '@/components/Portfolio'
import { Testimonials } from '@/components/Testimonials'
import { Contact } from '@/components/Contact'
import { CallToAction } from '@/components/CallToAction'

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="contenido" className="min-h-screen md:pl-16">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <CallToAction />
      </main>
    </>
  );
}
