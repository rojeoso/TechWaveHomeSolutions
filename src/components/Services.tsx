import '../styles/Services.css'


/**
 * Services data for the visual panels
 */
const servicePanels = [
  {
    id: 'tv-mounts',
    title: 'TV Mounting',
    description: 'Professional TV mounting services with proper wall anchoring, cable management, and perfect positioning for optimal viewing.',
    features: [
      'All TV sizes and brands',
      'Fixed, tilt, and full-motion mounts',
      'Cable management and concealment',
      'Wall stud detection and secure mounting',
      'Clean, professional installation'
    ],
    backgroundImage: '/TVMounting.jpg'
  },
  {
    id: 'sound-systems',
    title: 'Home Audio',
    description: 'Expert installation of audio systems including surround sound, soundbars, and multi-room audio solutions.',
    features: [
      'Surround sound system setup',
      'Soundbar installation and configuration',
      'Multi-room audio systems',
      'Speaker placement optimization',
      'Audio calibration and tuning'
    ],
    backgroundImage: '/HomeAudioSystem.webp'
  },
  {
    id: 'smart-lighting',
    title: 'Smart Lighting',
    description: 'Complete lighting solutions including fixture installation, and smart lighting.',
    features: [
      'Light fixture installation',
      'Smart lighting systems',
      'Dimmer switch installation',
      'Energy-efficient LED upgrades'
    ],
    backgroundImage: '/Light.jpg'
  },
  {
    id: 'wifi-networks',
    title: 'WiFi Networks',
    description: 'High-performance wireless mesh system installation for seamless WiFi coverage throughout your entire home.',
    features: [
      'Whole-home WiFi coverage',
      'Enterprise-grade mesh systems',
      'Network optimization and testing',
      'Device configuration and setup',
      'Ongoing support and maintenance'
    ],
    backgroundImage: '/MeshSystem.jpg'
  },
  {
    id: 'security-systems',
    title: 'Security Systems',
    description: 'Professional installation of Lorex security camera systems to protect your home and family.',
    features: [
      'Lorex security camera systems',
      '4K HD video quality',
      'Night vision capabilities',
      'Mobile app monitoring',
      'Professional wiring and setup'
    ],
    backgroundImage: '/SecurityCamera.jpg'
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
          <h2 className="services__title">Services</h2>
          <p className="services__subtitle">
            Comprehensive technology solutions tailored to your home's unique needs
          </p>
        </div>
      </div>

      {/* Service Panels Section */}
      <div className="services__panels">
        <div className="services__panels-grid">
          {servicePanels.map((panel) => (
            <div
              key={panel.id}
              className="services__panel"
              style={{backgroundImage: `url("${panel.backgroundImage}")`}}
            >
              <div className="services__panel-overlay">
                <div className="services__panel-content">
                  <h3 className="services__panel-title">{panel.title}</h3>
                  <div className="services__panel-details">
                    <p className="services__panel-description">{panel.description}</p>
                    <div className="services__panel-features">
                      <h4>What's Included:</h4>
                      <ul>
                        {panel.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services