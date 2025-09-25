import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './styles/App.css'

/**
 * Main application component that renders all sections of the TechWave Home Solutions website
 * @returns The complete single page application
 */
function App() {
  // State for mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="app">
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Reviews />
        <Contact />
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default App