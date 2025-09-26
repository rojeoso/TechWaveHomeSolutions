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
    <section id="hero" className="hero">
      <div className="container hero__container">
        <div className="hero__content">
          {/* Left side - Text Content */}
          <div className="hero__text-content">
            {/* Main heading */}
            <h1 className="hero__title">
              Professional Home{' '}
              <span className="hero__title-highlight">Services</span>
            </h1>

            {/* Subheading */}
            <p className="hero__subtitle">
              Expert installation of TV mounts, sound systems, wireless networks, security cameras,
              lighting/fixtures, and home remodeling. Veteran-owned with 40+ years of combined experience.
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
          </div>

          {/* Right side - Logo */}
          <div className="hero__logo-content">
            <img
              src="/logo.png"
              alt="TechWave Home Solutions"
              className="hero__logo-image hero__logo-large"
              style={{
                width: '540px !important',
                transform: 'scale(2.16) !important',
                maxWidth: '95% !important'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero