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
    src: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&dpr=1',
    alt: 'Professional TV wall mount installation',
    title: 'Living Room TV Mount',
    category: 'TV Mounting',
    description: '75" TV mounted with full motion bracket and cable management'
  },
  {
    id: '2',
    src: 'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&dpr=1',
    alt: 'Modern kitchen pendant lighting installation',
    title: 'Kitchen Lighting Upgrade',
    category: 'Lighting',
    description: 'Smart pendant lighting installation with dimmer controls'
  },
  {
    id: '3',
    src: 'https://images.pexels.com/photos/96612/pexels-photo-96612.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&dpr=1',
    alt: 'Security camera system installation',
    title: 'Lorex Security System',
    category: 'Security Cameras',
    description: '4K security camera system with night vision capabilities'
  },
  {
    id: '4',
    src: 'https://images.pexels.com/photos/164746/pexels-photo-164746.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&dpr=1',
    alt: 'Home theater surround sound speakers',
    title: 'Home Theater Sound',
    category: 'Sound Systems',
    description: '7.1 surround sound system with wireless rear speakers'
  },
  {
    id: '5',
    src: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&dpr=1',
    alt: 'Modern bathroom with updated fixtures',
    title: 'Bathroom Remodel',
    category: 'Home Remodeling',
    description: 'Complete bathroom renovation with smart lighting and fixtures'
  },
  {
    id: '6',
    src: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&dpr=1',
    alt: 'Wireless router and networking equipment',
    title: 'Mesh Network Setup',
    category: 'Networking',
    description: 'Whole-home mesh WiFi system for seamless connectivity'
  },
  {
    id: '7',
    src: 'https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&dpr=1',
    alt: 'Clean TV installation with hidden cables',
    title: 'Cable Management',
    category: 'TV Mounting',
    description: 'Professional cable concealment and organization'
  },
  {
    id: '8',
    src: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&dpr=1',
    alt: 'Smart lighting control system',
    title: 'Smart Home Controls',
    category: 'Lighting',
    description: 'Automated lighting controls with smartphone integration'
  },
  {
    id: '9',
    src: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&dpr=1',
    alt: 'Professional audio speakers installation',
    title: 'Multi-Room Audio',
    category: 'Sound Systems',
    description: 'Seamless audio throughout the entire home'
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
  'Lighting',
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