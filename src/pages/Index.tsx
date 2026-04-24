import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import Profitability from '../components/Profitability'
import Democratization from '../components/Democratization'
import Security from '../components/Security'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Index() {
  return (
    <div className=\"min-h-screen\">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Profitability />
        <Democratization />
        <Security />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
