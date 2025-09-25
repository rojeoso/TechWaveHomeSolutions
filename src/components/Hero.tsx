import '../styles/Hero.css'

/**
 * Hero section component - the main landing section of the website
 * Features compelling headline, description, and call-to-action
 */
const Hero = () => {
  // Handle scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Handle scroll to services section
  const scrollToServices = () => {
    const servicesSection = document.querySelector('#services')
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Logo Banner Section */}
      <section className="hero__logo-banner">
        <div className="hero__logo-container">
          <img
            src="/logo.png"
            alt="TechWave Home Solutions"
            className="hero__logo-banner-image"
          />
        </div>
      </section>

      {/* Hero Content Section */}
      <section id="hero" className="hero">
        <div className="hero__backdrop">
          <div className="hero__backdrop-images">
            <div
              className="hero__backdrop-item"
              style={{backgroundImage: 'url("https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1")'}}
            >
              <div className="hero__backdrop-label">TV Mounting</div>
            </div>
            <div
              className="hero__backdrop-item"
              style={{backgroundImage: 'url("https://images.pexels.com/photos/164746/pexels-photo-164746.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1")'}}
            >
              <div className="hero__backdrop-label">Home Audio</div>
            </div>
            <div
              className="hero__backdrop-item"
              style={{backgroundImage: 'url("https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1")'}}
            >
              <div className="hero__backdrop-label">Smart Lighting</div>
            </div>
            <div
              className="hero__backdrop-item"
              style={{backgroundImage: 'url("https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1")'}}
            >
              <div className="hero__backdrop-label">WiFi Networks</div>
            </div>
            <div
              className="hero__backdrop-item"
              style={{backgroundImage: 'url("https://images.pexels.com/photos/96612/pexels-photo-96612.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1")'}}
            >
              <div className="hero__backdrop-label">Security Systems</div>
            </div>
          </div>
        </div>

        <div className="container hero__container">
          <div className="hero__content">
            {/* Main heading */}
            <h1 className="hero__title">
              Professional Home Installation{' '}
              <span className="hero__title-highlight">Services</span>
            </h1>

            {/* Subheading */}
            <p className="hero__subtitle">
              Expert installation of TV mounts, sound systems, wireless networks, security cameras,
              lighting, and home remodeling. Veteran-owned with 40+ years of combined experience.
            </p>

            {/* Call to action buttons */}
            <div className="hero__actions">
              <button
                className="hero__cta-primary"
                onClick={scrollToContact}
                aria-label="Get a free quote from TechWave Home Solutions"
              >
                Get Free Quote
              </button>
              <button
                className="hero__cta-secondary"
                onClick={scrollToServices}
                aria-label="View our installation services"
              >
                View Services
              </button>
            </div>

            {/* Key features */}
            <div className="hero__features">
              <div className="hero__feature">
                <span className="hero__feature-icon">🇺🇸</span>
                <span className="hero__feature-text">Veteran Owned</span>
              </div>
              <div className="hero__feature">
                <span className="hero__feature-icon">⚡</span>
                <span className="hero__feature-text">Professional Install</span>
              </div>
              <div className="hero__feature">
                <span className="hero__feature-icon">🛡️</span>
                <span className="hero__feature-text">40+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero