import type { Metadata } from 'next'
import './construction.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'New Construction Lighting Design',
  description:
    'Lighting design and implementation for new construction projects in California, from planning and coordination through commissioning.',
  alternates: {
    canonical: '/construction',
  },
}

export default function ConstructionPage() {
  return (
    <>
      <NavBar />

      {/* Hero Section */}
      <section className="construction-hero">
        <div className="blueprint-lines">
          <div className="blueprint-line blueprint-h-1"></div>
          <div className="blueprint-line blueprint-h-2"></div>
          <div className="blueprint-line blueprint-v-1"></div>
          <div className="blueprint-line blueprint-v-2"></div>
        </div>
        <div className="construction-hero-content">
          <div className="hero-architect-badge">
            <span className="architect-icon">🏗️</span>
            <span>Ground-Up Design</span>
          </div>
          <h1 className="construction-hero-title">
            New Construction
            <span className="title-accent-orange"> Lighting Design</span>
          </h1>
          <p className="construction-hero-description">
            From blueprint to buildout, we design and implement advanced lighting systems 
            tailored to your new facility. Smart integration from day one means better efficiency, 
            lower costs, and future-proof infrastructure.
          </p>
          <div className="construction-pillars">
            <div className="pillar-item">
              <div className="pillar-icon">📐</div>
              <div className="pillar-text">Architectural Integration</div>
            </div>
            <div className="pillar-item">
              <div className="pillar-icon">⚡</div>
              <div className="pillar-text">Smart Controls</div>
            </div>
            <div className="pillar-item">
              <div className="pillar-icon">🎯</div>
              <div className="pillar-text">Code Compliance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Start Right Section */}
      <section className="why-section">
        <div className="section-container-construction">
          <div className="why-layout">
            <div className="why-content">
              <span className="section-badge-construction">The Foundation</span>
              <h2 className="section-title-construction">Build It Right From The Start</h2>
              <p className="why-text">
                Retrofitting lighting after construction is expensive and disruptive. By integrating 
                optimal lighting design during the build phase, you save money, avoid future headaches, 
                and ensure your facility meets all energy codes from day one.
              </p>
              <div className="why-benefits">
                <div className="why-benefit">
                  <span className="benefit-number">30%</span>
                  <span className="benefit-label">Lower upfront costs vs. retrofit</span>
                </div>
                <div className="why-benefit">
                  <span className="benefit-number">Zero</span>
                  <span className="benefit-label">Disruption to operations</span>
                </div>
                <div className="why-benefit">
                  <span className="benefit-number">100%</span>
                  <span className="benefit-label">Code compliance guaranteed</span>
                </div>
              </div>
            </div>
            <div className="why-visual">
              <div className="blueprint-stack">
                <div className="blueprint-layer layer-1">
                  <div className="layer-label">ELECTRICAL</div>
                </div>
                <div className="blueprint-layer layer-2">
                  <div className="layer-label">LIGHTING</div>
                </div>
                <div className="blueprint-layer layer-3">
                  <div className="layer-label">CONTROLS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="approach-section">
        <div className="section-container-construction">
          <div className="section-header-construction">
            <span className="section-badge-construction">End-to-End Service</span>
            <h2 className="section-title-construction">Collaborative Design Process</h2>
            <p className="section-description-construction">
              We work alongside your architects, contractors, and engineers to deliver 
              lighting systems that enhance your building&apos;s aesthetics, functionality, and efficiency.
            </p>
          </div>

          <div className="approach-timeline">
            <div className="timeline-phase">
              <div className="phase-marker">
                <div className="phase-dot"></div>
                <div className="phase-line"></div>
              </div>
              <div className="phase-content">
                <div className="phase-stage">Phase 1</div>
                <h3 className="phase-title">Design & Planning</h3>
                <p className="phase-description">
                  Review architectural plans to understand space usage, ceiling heights, and aesthetic goals. 
                  Develop lighting layout optimized for function and energy efficiency.
                </p>
                <ul className="phase-deliverables">
                  <li>Photometric analysis</li>
                  <li>Fixture specifications</li>
                  <li>Energy calculations</li>
                  <li>Cost estimates</li>
                </ul>
              </div>
            </div>

            <div className="timeline-phase">
              <div className="phase-marker">
                <div className="phase-dot"></div>
                <div className="phase-line"></div>
              </div>
              <div className="phase-content">
                <div className="phase-stage">Phase 2</div>
                <h3 className="phase-title">Coordination</h3>
                <p className="phase-description">
                  Collaborate with electrical contractors to integrate lighting with building systems. 
                  Coordinate with HVAC to optimize thermal loads and controls integration.
                </p>
                <ul className="phase-deliverables">
                  <li>Electrical drawings</li>
                  <li>Control system design</li>
                  <li>Integration planning</li>
                  <li>Timeline coordination</li>
                </ul>
              </div>
            </div>

            <div className="timeline-phase">
              <div className="phase-marker">
                <div className="phase-dot"></div>
                <div className="phase-line"></div>
              </div>
              <div className="phase-content">
                <div className="phase-stage">Phase 3</div>
                <h3 className="phase-title">Installation</h3>
                <p className="phase-description">
                  Oversee installation to ensure specifications are met. Coordinate fixture delivery 
                  with construction schedule to avoid delays and damage.
                </p>
                <ul className="phase-deliverables">
                  <li>Site supervision</li>
                  <li>Quality verification</li>
                  <li>Contractor coordination</li>
                  <li>Progress documentation</li>
                </ul>
              </div>
            </div>

            <div className="timeline-phase">
              <div className="phase-marker">
                <div className="phase-dot"></div>
              </div>
              <div className="phase-content">
                <div className="phase-stage">Phase 4</div>
                <h3 className="phase-title">Commissioning</h3>
                <p className="phase-description">
                  Test and program all systems. Train facility staff on controls operation. 
                  Ensure everything performs as designed before final handoff.
                </p>
                <ul className="phase-deliverables">
                  <li>System testing</li>
                  <li>Control programming</li>
                  <li>Staff training</li>
                  <li>As-built documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Building Types Section */}
      <section className="building-types-section">
        <div className="section-container-construction">
          <div className="section-header-construction">
            <span className="section-badge-construction">Experience</span>
            <h2 className="section-title-construction">Project Types We Serve</h2>
          </div>

          <div className="building-grid">
            <div className="building-card">
              <div className="building-icon-large">🏢</div>
              <h3 className="building-type">Commercial Office</h3>
              <p className="building-desc">
                Open offices, private offices, conference rooms, and common areas with 
                daylight harvesting and occupancy controls.
              </p>
            </div>

            <div className="building-card">
              <div className="building-icon-large">🏭</div>
              <h3 className="building-type">Industrial & Warehouse</h3>
              <p className="building-desc">
                High-bay lighting, loading docks, production floors with rugged fixtures 
                designed for demanding environments.
              </p>
            </div>

            <div className="building-card">
              <div className="building-icon-large">🏬</div>
              <h3 className="building-type">Retail & Hospitality</h3>
              <p className="building-desc">
                Accent lighting, display illumination, and ambiance control to enhance 
                customer experience and drive sales.
              </p>
            </div>

            <div className="building-card">
              <div className="building-icon-large">🏥</div>
              <h3 className="building-type">Healthcare & Labs</h3>
              <p className="building-desc">
                Surgical suites, patient rooms, labs with precise color rendering and 
                flicker-free performance for critical applications.
              </p>
            </div>

            <div className="building-card">
              <div className="building-icon-large">🎓</div>
              <h3 className="building-type">Educational Facilities</h3>
              <p className="building-desc">
                Classrooms, auditoriums, libraries with tunable white light to support 
                learning and student wellbeing.
              </p>
            </div>

            <div className="building-card">
              <div className="building-icon-large">🏛️</div>
              <h3 className="building-type">Municipal Buildings</h3>
              <p className="building-desc">
                Government facilities, public spaces, parking structures with emphasis 
                on security, efficiency, and longevity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="construction-cta-section">
        <div className="construction-cta-content">
          <h2 className="construction-cta-title">Planning a New Build?</h2>
          <p className="construction-cta-description">
            Let&apos;s discuss your project early in the design phase. The sooner we collaborate, 
            the better we can optimize your lighting for cost, performance, and aesthetics.
          </p>
          <div className="construction-cta-buttons">
            <a href="mailto:Info@luminslighting.com" className="btn btn-primary">
              Discuss Your Project
              <span className="btn-arrow">→</span>
            </a>
            <a href="tel:714-296-6341" className="btn btn-outline-dark">
              Call: (714) 296-6341
            </a>
          </div>
          <div className="construction-partners">
            <span className="partners-label">We work with:</span>
            <div className="partners-list">
              <span>Architects</span>
              <span>•</span>
              <span>General Contractors</span>
              <span>•</span>
              <span>Electrical Engineers</span>
              <span>•</span>
              <span>Developers</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
