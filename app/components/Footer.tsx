import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://i0.wp.com/luminslighting.com/wp-content/uploads/2025/08/Lumins-Logo-new-1.jpg?fit=400%2C258&ssl=1"
                alt="Lumins Lighting Logo"
              />
            </div>
            <p className="footer-tagline">Lighting the way with efficiency &amp; reliability</p>
            <div className="footer-social">
              <a
                href="https://www.facebook.com/luminslighting"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="social-link"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/luminslighting"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social-link"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/luminslighting"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-link"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-heading">Contact</h4>
              <div className="footer-contact">
                <div className="contact-item">
                  <span className="contact-label">Michael</span>
                  <a href="mailto:Michael@luminslighting.com">Michael@luminslighting.com</a>
                  <a href="tel:714-296-6341">(714) 296-6341</a>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Patrick</span>
                  <a href="mailto:Patrick@luminslighting.com">Patrick@luminslighting.com</a>
                  <a href="tel:714-296-6925">(714) 296-6925</a>
                </div>
              </div>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Location</h4>
              <address className="footer-address">
                229 East Commonwealth Ave<br />
                Fullerton, CA 92832<br />
                <a href="mailto:Info@luminslighting.com">Info@luminslighting.com</a>
              </address>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Partners</h4>
              <div className="footer-partner-links">
                <a href="https://www.keystonetech.com" target="_blank" rel="noopener noreferrer">Keystone Technologies</a>
                <a href="https://falkorindustry.com" target="_blank" rel="noopener noreferrer">Falkor Industries</a>
                <a href="https://www.led-llc.com" target="_blank" rel="noopener noreferrer">Light Efficient Design</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Lumins Lighting LLC. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
