import { useState, useEffect } from 'react'
import './Navbar.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          <div className="nav-logo">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="url(#gradient)" />
              <path d="M9 16L14 21L23 11" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="32" y2="32">
                  <stop stopColor="#6366f1" />
                  <stop offset="1" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </svg>
            <span className="logo-text">TaskFlow</span>
          </div>

          <button className="nav-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
          </button>

          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="#features" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="#how-it-works" onClick={() => setIsMenuOpen(false)}>How it Works</a>
            <a href="#pricing" onClick={() => setIsMenuOpen(false)}>Pricing</a>
            <a href="#testimonials" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
          </div>

          <div className={`nav-actions ${isMenuOpen ? 'active' : ''}`}>
            <a href="#login" className="nav-link-btn">Log in</a>
            <a href="#signup" className="btn btn-primary">Get Started</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
