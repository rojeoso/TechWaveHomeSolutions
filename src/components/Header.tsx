import { useState, useEffect } from 'react'
import type { HeaderProps, NavItem } from '../types'
import '../styles/Header.css'

/**
 * Navigation items for the header menu
 */
const navItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '#hero' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'gallery', label: 'Gallery', href: '#gallery' },
  { id: 'reviews', label: 'Reviews', href: '#reviews' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]

/**
 * Header component with responsive navigation
 * Includes company logo, navigation menu, and mobile hamburger menu
 */
const Header = ({ isMobileMenuOpen, setIsMobileMenuOpen }: HeaderProps) => {
  // State for scroll position to add background on scroll
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll events to add header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Handle navigation link clicks
  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    // Smooth scroll to target section
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__container">
        {/* Logo and company name */}
        <div className="header__logo">
          <img
            src="/logo.png"
            alt="TechWave Home Solutions"
            className="header__logo-image"
            width="40"
            height="40"
          />
          <span className="header__logo-text">TechWave</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="header__nav" aria-label="Main navigation">
          <ul className="header__nav-list">
            {navItems.map((item) => (
              <li key={item.id} className="header__nav-item">
                <a
                  href={item.href}
                  className="header__nav-link"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`header__mobile-toggle ${isMobileMenuOpen ? 'header__mobile-toggle--active' : ''}`}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
          onClick={toggleMobileMenu}
        >
          <span className="header__hamburger-line"></span>
          <span className="header__hamburger-line"></span>
          <span className="header__hamburger-line"></span>
        </button>

        {/* Mobile Navigation */}
        <nav
          className={`header__mobile-nav ${isMobileMenuOpen ? 'header__mobile-nav--open' : ''}`}
          aria-label="Mobile navigation"
        >
          <ul className="header__mobile-nav-list">
            {navItems.map((item) => (
              <li key={item.id} className="header__mobile-nav-item">
                <a
                  href={item.href}
                  className="header__mobile-nav-link"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header