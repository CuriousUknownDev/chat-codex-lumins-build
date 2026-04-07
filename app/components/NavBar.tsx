'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="main-nav">
      <div className="nav-container">
        <Link href="/" className="logo">
          <span className="logo-text">LUMINS LIGHTING, LLC</span>
          <span className="logo-tagline">Lighting &amp; Recycling Solutions</span>
        </Link>

        <button
          className={`hamburger${isOpen ? ' hamburger-open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links${isOpen ? ' nav-links-open' : ''}`}>

          <Link href="/#services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/#brands" onClick={() => setIsOpen(false)}>Partners</Link>
          <Link href="/shop" onClick={() => setIsOpen(false)}>Shop</Link>
          <Link href="/#contact" className="nav-cta" onClick={() => setIsOpen(false)}>
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  )
}
