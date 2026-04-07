import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Commercial LED Retrofit and Recycling in California",
  description:
    "Lumins Lighting helps California businesses with LED retrofits, free energy audits, lighting design, and certified recycling services.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <NavBar />
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
          <div className="hero-glow"></div>
        </div>

        <div className="hero-content" id="main-content">
          <h1 className="hero-title">
            Illuminate Your Future with
            <span className="hero-title-highlight"> Smart Lighting </span>
          </h1>

          <p className="hero-description">
            Transform your building with cutting-edge LED technology. Save thousands annually on
            energy costs while meeting California&apos;s latest compliance standards.
          </p>

          <div className="hero-cta-group">
            <a href="#contact" className="btn btn-primary">
              Schedule Free Audit
            </a>
            <a href="#services" className="btn btn-secondary">
              Explore Solutions
            </a>
            <a href="/shop" className="btn btn-primary">Shop Here</a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">50% Avg</div>
              <div className="stat-label">Energy Savings</div>
            </div>

            <div className="stat-divider"></div>

            <div className="stat-item">
              <div className="stat-number">Large</div>
              <div className="stat-label">Project Capabilities</div>
            </div>

            <div className="stat-divider"></div>

            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Compliance Ready</div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          <span>Scroll to explore</span>
        </div>
      </section>

      {/* Recycling Showcase Section */}
      <section className="recycling-hero" id="recycling">
        <div className="section-container">
          <div className="recycling-hero-header">
            <h2 className="recycling-hero-title">Certified Recycling &amp; Disposal</h2>
            <p className="recycling-hero-subtitle">We don&apos;t just install lighting&mdash;we partner with dealerships. From efficiency upgrades to certified waste handling, we take care of the entire process.</p>
            <p className="recycling-hero-description">
              
            </p>
          </div>

          <div className="recycling-content">
            <div className="recycling-images">
              <div className="recycling-image-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1647625383441-645dd5643041?q=80&w=685&auto=format&fit=crop"
                  alt="Airbag and seat belt pretensioners"
                  className="recycling-image"
                />
                <div className="recycling-image-label">
                  <span>Airbag &amp; Seat Belt Pretensioners</span>
                </div>
              </div>

              <div className="recycling-image-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1661997608910-da43d46039a8?q=80&w=735&auto=format&fit=crop"
                  alt="Li-Ion and other batteries"
                  className="recycling-image"
                />
                <div className="recycling-image-label">
                  <span>Li-Ion &amp; Other Batteries</span>
                </div>
              </div>

              <div className="recycling-image-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1762599836341-efcb3c0acb98?q=80&w=1632&auto=format&fit=crop"
                  alt="Wet and dry gas tank recycling"
                  className="recycling-image"
                />
                <div className="recycling-image-label">
                  <span>Wet &amp; Dry Gas Tank Recycling</span>
                </div>
              </div>
            </div>

            <div className="recycling-stats-grid">
              <div className="recycling-stat">
                <div className="recycling-stat-number">0</div>
                <div className="recycling-stat-label">Landfill Waste</div>
                <div className="recycling-stat-desc">100% of materials reclaimed or properly recycled.</div>
              </div>

              <div className="recycling-stat-divider"></div>

              <div className="recycling-stat">
                <div className="recycling-stat-number">100%</div>
                <div className="recycling-stat-label">Compliancy</div>
                <div className="recycling-stat-desc">Certified disposal of all materials, zero dealership liability.</div>
              </div>

              <div className="recycling-stat-divider"></div>

              <div className="recycling-stat">
                <div className="recycling-stat-number">1</div>
                <div className="recycling-stat-label">Dealership at a time</div>
                <div className="recycling-stat-desc">We make sure that our clients needs are met. Always on call.</div>
              </div>
            </div>

            <div className="recycling-cta">
              <Link href="/recycling" className="btn btn-primary">
                Learn About Our Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="section-container">
          <div className="section-header">
            <span className="section-badge">What We Deliver</span>
            <h2 className="section-title">Comprehensive Solutions</h2>
            <p className="section-description">
              From initial consultation to final installation, we provide turnkey LED retrofit
              solutions that transform your space while maximizing energy efficiency and cost savings.
            </p>
          </div>

          <div className="services-grid">
            <Link href="/audit" className="service-card-link">
              <div className="service-card" data-number="01">
                <div className="service-icon">📊</div>
                <h3 className="service-title">Free Energy Audits</h3>
                <p className="service-description">
                  Comprehensive onsite evaluation of your current lighting infrastructure. We identify
                  inefficiencies, calculate ROI, and map out a strategic upgrade path tailored to your
                  facility&apos;s unique needs.
                </p>
                <div className="service-features">
                  <span className="feature-tag">Energy Analysis</span>
                  <span className="feature-tag">Cost Projection</span>
                  <span className="feature-tag">Rebate Optimization</span>
                </div>
              </div>
            </Link>

            <Link href="/projects" className="service-card-link">
              <div className="service-card" data-number="02">
                <div className="service-icon">🔧</div>
                <h3 className="service-title">LED Retrofit Projects</h3>
                <p className="service-description">
                  Seamless upgrade of outdated systems with state-of-the-art LED technology. We
                  maintain your existing fixtures&apos; aesthetics while dramatically improving
                  performance, efficiency, and light quality.
                </p>
                <div className="service-features">
                  <span className="feature-tag">Zero Downtime</span>
                  <span className="feature-tag">Quality Guarantee</span>
                  <span className="feature-tag">Code Compliant</span>
                </div>
              </div>
            </Link>

            <Link href="/construction" className="service-card-link">
              <div className="service-card" data-number="03">
                <div className="service-icon">🏗️</div>
                <h3 className="service-title">New Construction</h3>
                <p className="service-description">
                  Ground-up lighting design and implementation for new builds. Our team collaborates
                  with architects and contractors to integrate advanced, energy-efficient solutions
                  from day one.
                </p>
                <div className="service-features">
                  <span className="feature-tag">Custom Design</span>
                  <span className="feature-tag">Integrated Systems</span>
                  <span className="feature-tag">Future-Proof</span>
                </div>
              </div>
            </Link>

            <Link href="/recycling" className="service-card-link">
              <div className="service-card" data-number="04">
                <div className="service-icon">♻️</div>
                <h3 className="service-title">Sustainable Recycling</h3>
                <p className="service-description">
                  Responsible disposal and recycling of old lighting materials through certified
                  programs. We ensure environmental compliance while minimizing your facility&apos;s
                  ecological footprint.
                </p>
                <div className="service-features">
                  <span className="feature-tag">Fully Compliant</span>
                  <span className="feature-tag">Zero Waste</span>
                  <span className="feature-tag">Documentation</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="brands" id="brands">
        <div className="section-container">
          <div className="section-header">
            <span className="section-badge">Trusted Partners</span>
            <h2 className="section-title">Industry-Leading Brands</h2>
            <p className="section-description">
              We partner exclusively with the most trusted names in commercial lighting to deliver
              solutions that combine reliability, innovation, and performance.
            </p>
          </div>

          <div className="brands-grid">
            <div className="brand-card">
              <div className="brand-image-container">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://i0.wp.com/ajy.dnb.mybluehost.me/wp-content/uploads/2025/08/download.png?fit=300%2C150&ssl=1"
                  alt="Keystone Technologies Logo"
                  className="brand-logo"
                />
              </div>
              <div className="brand-content">
                <h3 className="brand-name">Keystone Technologies</h3>
                <p className="brand-tagline">Light Made Easy</p>
                <p className="brand-description">
                  Since 1945, Keystone has pioneered innovative LED solutions. Their lineup of
                  drivers, retrofit kits, and smart controls simplifies upgrades while delivering
                  exceptional energy efficiency for commercial facilities.
                </p>
                <a href="https://www.keystonetech.com" target="_blank" rel="noopener noreferrer" className="brand-link">
                  Visit Keystone
                </a>
              </div>
            </div>

            <div className="brand-card">
              <div className="brand-image-container">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://i0.wp.com/ajy.dnb.mybluehost.me/wp-content/uploads/2025/08/download-1.png?fit=300%2C168&ssl=1"
                  alt="Falkor Industries Logo"
                  className="brand-logo"
                />
              </div>
              <div className="brand-content">
                <h3 className="brand-name">Falkor Industries</h3>
                <p className="brand-tagline">Local &amp; Versatile</p>
                <p className="brand-description">
                  Southern California&apos;s premier manufacturer of rugged, commercial-grade LED
                  lighting. Falkor specializes in high-performance luminaires and retrofit solutions
                  built to withstand demanding industrial environments.
                </p>
                <a href="https://falkorindustry.com" target="_blank" rel="noopener noreferrer" className="brand-link">
                  Visit Falkor
                </a>
              </div>
            </div>

            <div className="brand-card">
              <div className="brand-image-container">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://i0.wp.com/ajy.dnb.mybluehost.me/wp-content/uploads/2025/08/LED.jpg?fit=200%2C200&ssl=1"
                  alt="Light Efficient Design Logo"
                  className="brand-logo"
                />
              </div>
              <div className="brand-content">
                <h3 className="brand-name">Light Efficient Design</h3>
                <p className="brand-tagline">Lutron Compatible Solutions</p>
                <p className="brand-description">
                  Industry leaders in LED retrofit technology since 2008. Their Lutron-compatible
                  C-Flex systems offer plug-and-play installation with full dimming control,
                  eliminating costly rewiring for fluorescent replacements.
                </p>
                <a href="https://www.led-llc.com" target="_blank" rel="noopener noreferrer" className="brand-link">
                  Visit LED
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Transform Your Lighting?</h2>
          <p className="cta-description">
            Join hundreds of businesses saving thousands annually on energy costs. Our team is ready
            to design your custom LED retrofit solution.
          </p>
          <div className="cta-buttons">
            <a href="mailto:Info@luminslighting.com" className="btn btn-light">
              Start Your Free Audit
            </a>
            <a href="tel:714-296-6341" className="btn btn-outline">
              Call: (714) 296-6341
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
