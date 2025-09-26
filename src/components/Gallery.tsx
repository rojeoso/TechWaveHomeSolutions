import { useState } from 'react'
import '../styles/Gallery.css'

/**
 * Gallery image interface
 */
interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: string;
  description: string;
}

/**
 * Gallery images data - placeholder images for now
 * In a real implementation, these would be actual job photos
 */
const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: '/Portfolio/TVMounted.jpg',
    alt: 'Professional TV wall mount installation',
    title: 'Bedroom Room TV Mount',
    category: 'TV Mounting',
    description: '75" TV mounted with full motion bracket and cable management'
  },
  {
    id: '2',
    src: '/Portfolio/KitchenPendantLights.jpg',
    alt: 'Modern kitchen pendant lighting installation',
    title: 'Kitchen Lighting Upgrade',
    category: 'Lighting/Fixtures',
    description: 'Smart pendant lighting installation with dimmer controls'
  },
  {
    id: '3',
    src: '/Portfolio/LorexCamera.jpg',
    alt: 'Security camera system installation',
    title: 'Lorex Security System',
    category: 'Security Cameras',
    description: '4K security camera system with night vision capabilities'
  },
  {
    id: '4',
    src: '/Portfolio/CeilingSpeakers.jpeg',
    alt: 'Home theater surround sound speakers',
    title: 'Home Theater Sound',
    category: 'Sound Systems',
    description: '7.1 surround sound system with wireless rear speakers'
  },
  {
    id: '5',
    src: '/Portfolio/PCMonitorsSurround.jpg',
    alt: 'PC Monitors Surround Setup',
    title: 'Monitor Surround',
    category: 'Networking',
    description: '3x27inch Monitor on full articulating arms'
  },
  {
    id: '6',
    src: '/Portfolio/MeshSystem.jpg',
    alt: 'Wireless mesh system for 3,000+ sqft',
    title: 'Mesh Network Setup',
    category: 'Networking',
    description: 'Whole-home mesh WiFi system with extra ethernet connection'
  },
  {
    id: '7',
    src: '/Portfolio/CeilingFan.jpg',
    alt: 'Ceiling Fan Installation',
    title: 'Ceiling Fan',
    category: 'Lighting/Fixtures',
    description: 'Ceiling fan installation with smart controls'
  },
  {
    id: '8',
    src: '/Portfolio/BedFrameLighting.jpg',
    alt: 'Smart lighting control system',
    title: 'Smart Home Controls',
    category: 'Lighting/Fixtures',
    description: 'Automated lighting controls'
  },
  {
    id: '9',
    src: '/Portfolio/PaintingLivingRoom.jpg',
    alt: 'Professional Painting',
    title: 'Living room painting',
    category: 'Home Remodeling',
    description: 'Professional living room painting with accent ceiling'
  },
  {
    id: '10',
    src: '/Portfolio/TransferSwitch.jpg',
    alt: 'Backup Generator Transfer Switch',
    title: 'Backup Generator Transfer Switch',
    category: 'Home Remodeling',
    description: 'Tranfer switch for backup generator'
  },
  {
    id: '11',
    src: '/Portfolio/PaintingOffice.jpg',
    alt: 'Office Remodel',
    title: 'Office Remodel',
    category: 'Home Remodeling',
    description: 'Office painted and new baseboards'
  }
  ,
  {
    id: '12',
    src: '/Portfolio/CeilingFan (2).jpg',
    alt: 'Ceiling Fan',
    title: 'Ceiling Fan',
    category: 'Lighting/Fixtures',
    description: 'Professional ceiling fan installation'
  }
]

/**
 * Gallery categories for filtering
 */
const categories = [
  'All',
  'TV Mounting',
  'Sound Systems',
  'Networking',
  'Security Cameras',
  'Lighting/Fixtures',
  'Home Remodeling'
]

/**
 * Gallery section component - displays portfolio of completed work
 * Features image filtering by category and modal view
 */
const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  // Filter images by category
  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(image => image.category === selectedCategory)

  // Handle category filter
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
  }

  // Handle image selection for modal
  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image)
  }

  // Close modal
  const closeModal = () => {
    setSelectedImage(null)
  }

  // Handle modal backdrop click
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  return (
    <section id="gallery" className="gallery section-padding">
      <div className="container">
        {/* Section header */}
        <div className="gallery__header text-center">
          <h2 className="gallery__title">Our Work</h2>
          <p className="gallery__subtitle">
            See the quality and craftsmanship in our recent installations
          </p>
        </div>

        {/* Category filters */}
        <div className="gallery__filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`gallery__filter ${
                selectedCategory === category ? 'gallery__filter--active' : ''
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Images grid */}
        <div className="gallery__grid">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="gallery__item"
              onClick={() => handleImageClick(image)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleImageClick(image)
                }
              }}
            >
              <div className="gallery__image-container">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="gallery__image"
                  loading="lazy"
                />
                <div className="gallery__overlay">
                  <h3 className="gallery__item-title">{image.title}</h3>
                  <p className="gallery__item-category">{image.category}</p>
                  <div className="gallery__view-icon" aria-hidden="true"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="gallery__modal"
            onClick={handleBackdropClick}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
          >
            <div className="gallery__modal-content">
              <button
                className="gallery__modal-close"
                onClick={closeModal}
                aria-label="Close modal"
              >
                ✕
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="gallery__modal-image"
              />
              <div className="gallery__modal-info">
                <h3 id="modal-title" className="gallery__modal-title">
                  {selectedImage.title}
                </h3>
                <p className="gallery__modal-category">{selectedImage.category}</p>
                <p id="modal-description" className="gallery__modal-description">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}

export default Gallery