import '../styles/Footer.css'

/**
 * Footer component - contains company information, links, and copyright
 * Includes contact information and social links
 */
const Footer = () => {
  const currentYear = new Date().getFullYear()

  // Handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Handle navigation to sections
  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          {/* Company info section */}
          <div className="footer__section">
            <div className="footer__logo">
              <img
                src="/logo.png"
                alt="TechWave Home Solutions"
                className="footer__logo-image"
                width="40"
                height="40"
              />
              <span className="footer__logo-text">TechWave</span>
            </div>
            <p className="footer__description">
              Veteran-owned home installation services with 40+ years of combined experience.
              Professional TV mounting, networking, security cameras, and home remodeling.
            </p>
            <div className="footer__social">
              <a
                href="#"
                className="footer__social-link"
                aria-label="Follow us on Facebook"
              >
                📘
              </a>
              <a
                href="#"
                className="footer__social-link"
                aria-label="Follow us on Twitter"
              >
                🐦
              </a>
              <a
                href="#"
                className="footer__social-link"
                aria-label="Follow us on LinkedIn"
              >
                💼
              </a>
              <a
                href="#"
                className="footer__social-link"
                aria-label="Follow us on Instagram"
              >
                📷
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="footer__section">
            <h3 className="footer__section-title">Quick Links</h3>
            <ul className="footer__links">
              <li>
                <button
                  className="footer__link"
                  onClick={() => scrollToSection('#hero')}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  className="footer__link"
                  onClick={() => scrollToSection('#about')}
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  className="footer__link"
                  onClick={() => scrollToSection('#services')}
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  className="footer__link"
                  onClick={() => scrollToSection('#gallery')}
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  className="footer__link"
                  onClick={() => scrollToSection('#reviews')}
                >
                  Reviews
                </button>
              </li>
              <li>
                <button
                  className="footer__link"
                  onClick={() => scrollToSection('#contact')}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer__section">
            <h3 className="footer__section-title">Services</h3>
            <ul className="footer__links">
              <li>
                <span className="footer__link">Smart Home Automation</span>
              </li>
              <li>
                <span className="footer__link">Network & WiFi Setup</span>
              </li>
              <li>
                <span className="footer__link">Security Systems</span>
              </li>
              <li>
                <span className="footer__link">Audio/Video Systems</span>
              </li>
              <li>
                <span className="footer__link">Technical Support</span>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="footer__section">
            <h3 className="footer__section-title">Contact Info</h3>
            <div className="footer__contact">
              <div className="footer__contact-item">
                <span className="footer__contact-icon">📍</span>
                <span className="footer__contact-text">
                  123 Tech Avenue<br />
                  Tech City, TC 12345
                </span>
              </div>
              <div className="footer__contact-item">
                <span className="footer__contact-icon">📞</span>
                <span className="footer__contact-text">
                  <a href="tel:+1-555-0123">(555) 123-TECH</a>
                </span>
              </div>
              <div className="footer__contact-item">
                <span className="footer__contact-icon">✉️</span>
                <span className="footer__contact-text">
                  <a href="mailto:info@techwave.com">info@techwave.com</a>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="footer__bottom">
          <div className="footer__bottom-content">
            <p className="footer__copyright">
              © {currentYear} TechWave Home Solutions. All rights reserved.
            </p>
            <div className="footer__legal">
              <button className="footer__legal-link">Privacy Policy</button>
              <button className="footer__legal-link">Terms of Service</button>
            </div>
            <button
              className="footer__back-to-top"
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              ↑ Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer