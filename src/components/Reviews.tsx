import '../styles/Reviews.css'

/**
 * Review interface for customer testimonials
 */
interface Review {
  id: string;
  name: string;
  location: string;
  service: string;
  rating: number;
  text: string;
  date: string;
}

/**
 * Customer reviews data - testimonials from satisfied customers
 */
const reviews: Review[] = [
  {
    id: '1',
    name: 'Michael Johnson',
    location: 'Sacramento, CA',
    service: 'TV Mount Installation',
    rating: 5,
    text: 'Excellent service! The team mounted our 75" TV perfectly with clean cable management. Very professional and arrived on time. The military precision really shows in their work.',
    date: 'September 2024'
  },
  {
    id: '2',
    name: 'Sarah Martinez',
    location: 'Roseville, CA',
    service: 'Wireless Mesh Network',
    rating: 5,
    text: 'Finally have strong WiFi throughout our entire house! The mesh network setup was flawless and they explained everything clearly. Great communication and fair pricing.',
    date: 'August 2024'
  },
  {
    id: '3',
    name: 'David Thompson',
    location: 'Folsom, CA',
    service: 'Security Camera System',
    rating: 5,
    text: 'The Lorex security system installation exceeded our expectations. Professional installation, great image quality, and the mobile app works perfectly. Highly recommended!',
    date: 'July 2024'
  }
]

/**
 * Customer Reviews section component - displays customer testimonials
 * Features star ratings and service-specific reviews
 */
const Reviews = () => {
  // Render star rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`review-card__star ${index < rating ? 'review-card__star--filled' : ''}`}
        aria-hidden="true"
      >
        ★
      </span>
    ))
  }

  return (
    <section id="reviews" className="reviews section-padding">
      <div className="container">
        {/* Section header */}
        <div className="reviews__header text-center">
          <h2 className="reviews__title">What Our Customers Say</h2>
          <p className="reviews__subtitle">
            Real reviews from satisfied customers across the Sacramento area
          </p>
        </div>

        {/* Reviews grid */}
        <div className="reviews__grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              {/* Review header */}
              <div className="review-card__header">
                <div className="review-card__info">
                  <h3 className="review-card__name">{review.name}</h3>
                  <p className="review-card__location">{review.location}</p>
                  <p className="review-card__service">{review.service}</p>
                </div>
                <div className="review-card__rating">
                  <div className="review-card__stars">
                    {renderStars(review.rating)}
                  </div>
                  <span className="review-card__date">{review.date}</span>
                </div>
              </div>

              {/* Review text */}
              <blockquote className="review-card__text">
                "{review.text}"
              </blockquote>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Reviews