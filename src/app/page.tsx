'use client'
import NavBar from '@/components/NavBar'
import Hero from '@/components/Home/Hero'
import Features from '@/components/Home/Features'
import Pricing from '@/components/Home/pricing'
import Footer from '@/components/Footer'
import CursorFollower from '@/components/CursorFollower'

export default function Home() {
  return (
    <main>
      <CursorFollower />
      <NavBar />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </main>
  )
}
