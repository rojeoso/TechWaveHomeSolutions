import '../styles/About.css'

/**
 * About section component - showcases company information and values
 * Includes company description, mission, and key statistics
 */
const About = () => {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <div className="about__content">
          {/* Section heading */}
          <div className="about__header text-center">
            <h2 className="about__title">About TechWave Home Solutions</h2>
            <p className="about__subtitle">
              Veteran-owned business with over 40 years of combined experience
            </p>
          </div>

          {/* Main content grid */}
          <div className="about__grid">
            {/* Company description */}
            <div className="about__description">
              <h3 className="about__section-title">Our Story</h3>
              <p className="about__text">
                TechWave Home Solutions is a proud veteran-owned business bringing over 40 years
                of combined experience in home technology and remodeling services. Founded on the
                principles of service, integrity, and excellence that we learned in the military.
              </p>
              <p className="about__text">
                We specialize in professional installation services including TV mounting, sound systems,
                wireless mesh networks, Lorex security cameras, home lighting, and complete remodeling
                projects. Our attention to detail and commitment to quality reflects our military training.
              </p>
              <p className="about__text">
                Every project is completed with the same precision and dedication that we brought to
                our military service. We treat your home with the respect it deserves and deliver
                results that exceed expectations.
              </p>
            </div>

            {/* Company values */}
            <div className="about__values">
              <h3 className="about__section-title">Our Values</h3>
              <div className="about__value-list">
                <div className="about__value-item">
                  <span className="about__value-icon">🇺🇸</span>
                  <div>
                    <h4 className="about__value-title">Veteran Excellence</h4>
                    <p className="about__value-desc">
                      Military-trained precision and attention to detail in every project
                    </p>
                  </div>
                </div>
                <div className="about__value-item">
                  <span className="about__value-icon">🤝</span>
                  <div>
                    <h4 className="about__value-title">Integrity</h4>
                    <p className="about__value-desc">
                      Honest pricing, transparent communication, and reliable service
                    </p>
                  </div>
                </div>
                <div className="about__value-item">
                  <span className="about__value-icon">⭐</span>
                  <div>
                    <h4 className="about__value-title">Quality Craftsmanship</h4>
                    <p className="about__value-desc">
                      Professional installations backed by decades of hands-on experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="about__stats">
            <div className="about__stat">
              <span className="about__stat-number">40+</span>
              <span className="about__stat-label">Years Experience</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-number about__stat-number--emoji">🇺🇸</span>
              <span className="about__stat-label">Veteran Owned</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-number">500+</span>
              <span className="about__stat-label">Satisfied Customers</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-number">24/7</span>
              <span className="about__stat-label">Customer Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About