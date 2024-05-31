'use client'
import NavBar from '@/components/NavBar'
import Hero from '@/components/Home/Hero'
import Features from '@/components/Home/Features'
import Pricing from '@/components/Home/pricing'
import Footer from '@/components/Footer'
import CursorFollower from '@/components/CursorFollower'
import CTA from '@/components/Home/CTA'
import Testimonials from '@/components/Home/Testimonials'
import Support from '@/components/Home/Support'

export default function Home() {
  return (
    <main>
      <CursorFollower />
      <NavBar />
      <Hero />
      <Features />
      <Pricing />
      <CTA />
      <Testimonials />
      <Support />
      <Footer />
    </main>
  )
}
