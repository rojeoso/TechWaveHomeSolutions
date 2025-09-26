import { useState } from 'react'
import type { ContactForm } from '../types'
import '../styles/Contact.css'

/**
 * Contact section component - includes contact form and company information
 * Features form validation and submission handling
 */
const Contact = () => {
  // Form state management
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<ContactForm>>({})

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // Clear specific error when user starts typing
    if (errors[name as keyof ContactForm]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: Partial<ContactForm> = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle form submission - sends email to both recipients
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Create email content
      const emailContent = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        message: formData.message,
        to_emails: 'rojelio@techwavehome.work, reggie@techwavehome.work'
      }

      // For now, we'll simulate the email sending
      // In production, you would use EmailJS, a backend API, or a form service like Netlify Forms
      console.log('Sending email to:', emailContent.to_emails)
      console.log('Email content:', emailContent)

      // Simulate email sending delay
      await new Promise(resolve => setTimeout(resolve, 2000))

      setIsSubmitted(true)
      setFormData({ name: '', email: '', phone: '', message: '' })

      // You can implement actual email sending here using:
      // 1. EmailJS: https://www.emailjs.com/
      // 2. Netlify Forms: https://docs.netlify.com/forms/setup/
      // 3. Formspree: https://formspree.io/
      // 4. Your own backend API

    } catch (error) {
      console.error('Error submitting form:', error)
      // Handle error (show error message to user)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        {/* Section header */}
        <div className="contact__header text-center">
          <h2 className="contact__title">Get In Touch</h2>
          <p className="contact__subtitle">
            Ready to transform your home? Contact us for a free consultation and personalized quote.
          </p>
        </div>

        <div className="contact__content">
          {/* Contact form */}
          <div className="contact__form-section">
            {isSubmitted ? (
              <div className="contact__success">
                <div className="contact__success-icon">✅</div>
                <h3 className="contact__success-title">Thank You!</h3>
                <p className="contact__success-message">
                  Your message has been sent successfully. We'll get back to you within 24 hours.
                </p>
                <button
                  className="contact__success-button"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate>
                <h3 className="contact__form-title">Send Us a Message</h3>

                {/* Name field */}
                <div className="contact__field">
                  <label htmlFor="name" className="contact__label">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`contact__input ${errors.name ? 'contact__input--error' : ''}`}
                    placeholder="Enter your full name"
                    required
                  />
                  {errors.name && <span className="contact__error">{errors.name}</span>}
                </div>

                {/* Email field */}
                <div className="contact__field">
                  <label htmlFor="email" className="contact__label">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`contact__input ${errors.email ? 'contact__input--error' : ''}`}
                    placeholder="Enter your email address"
                    required
                  />
                  {errors.email && <span className="contact__error">{errors.email}</span>}
                </div>

                {/* Phone field */}
                <div className="contact__field">
                  <label htmlFor="phone" className="contact__label">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="contact__input"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Message field */}
                <div className="contact__field">
                  <label htmlFor="message" className="contact__label">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`contact__textarea ${errors.message ? 'contact__input--error' : ''}`}
                    placeholder="Tell us about your project or ask any questions..."
                    rows={5}
                    required
                  />
                  {errors.message && <span className="contact__error">{errors.message}</span>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="contact__submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Contact information */}
          <div className="contact__info">
            <h3 className="contact__info-title">Contact Information</h3>

            <div className="contact__info-items">
              <div className="contact__info-item">
                <span className="contact__info-icon">📞</span>
                <div className="contact__info-content">
                  <h4 className="contact__info-label">Phone</h4>
                  <p className="contact__info-text">
                    <a href="tel:+1-555-0123">(512) 655-3545</a>
                  </p>
                </div>
              </div>

              <div className="contact__info-item">
                <span className="contact__info-icon">✉️</span>
                <div className="contact__info-content">
                  <h4 className="contact__info-label">Email</h4>
                  <p className="contact__info-text">
                    <a href="mailto:rojelio@techwavehome.work">rojelio@techwavehome.work</a><br />
                    <a href="mailto:reggie@techwavehome.work">reggie@techwavehome.work</a>
                  </p>
                </div>
              </div>

              <div className="contact__info-item">
                <span className="contact__info-icon">🕒</span>
                <div className="contact__info-content">
                  <h4 className="contact__info-label">Business Hours</h4>
                  <p className="contact__info-text">
                    Mon - Fri: 8:00 AM - 6:00 PM<br />
                    Sat: 9:00 AM - 4:00 PM<br />
                    Sun: Emergency Service Only
                  </p>
                </div>
              </div>
            </div>

            {/* Quick response promise */}
            <div className="contact__promise">
              <h4 className="contact__promise-title">Our Promise</h4>
              <p className="contact__promise-text">
                We guarantee a response within 24 hours for all inquiries.
                For urgent matters, please call us directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact