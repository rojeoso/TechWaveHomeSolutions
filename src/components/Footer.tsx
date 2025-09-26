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


  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          {/* First line: Logo + Description + Contact */}
          <div className="footer__first-line">
            <div className="footer__logo-section">
              <img
                src="/logo-small.png"
                alt="TechWave Home Solutions"
                className="footer__logo-image"
                width="20"
                height="20"
              />
              <span className="footer__description-inline">
                Veteran-owned home installation services with 40+ years of combined experience.
              </span>
            </div>
            <div className="footer__contact-inline">
              <a href="tel:+1-555-0123" className="footer__contact-link">(555) 123-TECH</a>
              <span className="footer__separator">|</span>
              <a href="mailto:info@techwave.com" className="footer__contact-link">info@techwave.com</a>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="footer__bottom">
          <div className="footer__bottom-content">
            <p className="footer__copyright">
              © {currentYear} TechWave Home Solutions. All rights reserved.
            </p>
            <button
              className="footer__back-to-top"
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              ↑ Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer