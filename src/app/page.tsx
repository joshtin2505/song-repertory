import NavBar from '@/components/NavBar'
import Hero from '@/components/Home/Hero'
import Features from '@/components/Home/Features'
import Pricing from '@/components/Home/pricing'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </main>
  )
}
