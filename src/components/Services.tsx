import type { Service } from '../types'
import '../styles/Services.css'

/**
 * Services data - actual services offered by TechWave Home Solutions
 */
const services: Service[] = [
  {
    id: 'tv-mounts',
    title: 'TV Mount Installation',
    description: 'Professional TV mounting services with proper wall anchoring, cable management, and perfect positioning for optimal viewing.',
    icon: '📺',
    features: [
      'All TV sizes and brands',
      'Fixed, tilt, and full-motion mounts',
      'Cable management and concealment',
      'Wall stud detection and secure mounting',
      'Clean, professional installation'
    ]
  },
  {
    id: 'sound-systems',
    title: 'Sound System Installation',
    description: 'Expert installation of audio systems including surround sound, soundbars, and multi-room audio solutions.',
    icon: '🔊',
    features: [
      'Surround sound system setup',
      'Soundbar installation and configuration',
      'Multi-room audio systems',
      'Speaker placement optimization',
      'Audio calibration and tuning'
    ]
  },
  {
    id: 'mesh-networks',
    title: 'Wireless Mesh Networks',
    description: 'High-performance wireless mesh system installation for seamless WiFi coverage throughout your entire home.',
    icon: '📶',
    features: [
      'Whole-home WiFi coverage',
      'Enterprise-grade mesh systems',
      'Network optimization and testing',
      'Device configuration and setup',
      'Ongoing support and maintenance'
    ]
  },
  {
    id: 'security-cameras',
    title: 'Residential Security Cameras',
    description: 'Professional installation of Lorex security camera systems to protect your home and family.',
    icon: '📹',
    features: [
      'Lorex security camera systems',
      '4K HD video quality',
      'Night vision capabilities',
      'Mobile app monitoring',
      'Professional wiring and setup'
    ]
  },
  {
    id: 'lighting-fixtures',
    title: 'Home Lighting & Fixtures',
    description: 'Complete lighting solutions including fixture installation, smart lighting, and electrical work.',
    icon: '💡',
    features: [
      'Light fixture installation',
      'Smart lighting systems',
      'Dimmer switch installation',
      'Electrical troubleshooting',
      'Energy-efficient LED upgrades'
    ]
  },
  {
    id: 'home-remodel',
    title: 'Home Remodel Services',
    description: 'Comprehensive home improvement and remodeling services to enhance your living space.',
    icon: '🔨',
    features: [
      'Kitchen and bathroom remodeling',
      'Electrical upgrades and installations',
      'Custom built-in solutions',
      'Home automation integration',
      'Project planning and execution'
    ]
  }
]

/**
 * Services section component - displays all available services
 * Features service cards with descriptions and feature lists
 */
const Services = () => {
  return (
    <section id="services" className="services section-padding">
      <div className="container">
        {/* Section header */}
        <div className="services__header text-center">
          <h2 className="services__title">Our Services</h2>
          <p className="services__subtitle">
            Comprehensive technology solutions tailored to your home's unique needs
          </p>
        </div>

        {/* Services grid */}
        <div className="services__grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-card__header">
                <span className="service-card__icon" aria-hidden="true">
                  {service.icon}
                </span>
                <h3 className="service-card__title">{service.title}</h3>
              </div>

              <p className="service-card__description">
                {service.description}
              </p>

              <div className="service-card__features">
                <h4 className="service-card__features-title">What's Included:</h4>
                <ul className="service-card__features-list">
                  {service.features.map((feature, index) => (
                    <li key={index} className="service-card__feature">
                      <span className="service-card__feature-icon" aria-hidden="true">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="service-card__cta">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="services__cta">
          <div className="services__cta-content">
            <h3 className="services__cta-title">Ready to Get Started?</h3>
            <p className="services__cta-description">
              Contact us today for a free consultation and discover how we can transform your home.
            </p>
            <button
              className="services__cta-button"
              onClick={() => {
                const contactSection = document.querySelector('#contact')
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services