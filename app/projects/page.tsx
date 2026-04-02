import './projects.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function ProjectsPage() {
  return (
    <>
      <NavBar />

      {/* Hero Section */}
      <section className="projects-hero">
        <div className="tech-grid-bg">
          <div className="tech-square"></div>
          <div className="tech-square"></div>
          <div className="tech-square"></div>
          <div className="tech-square"></div>
        </div>
        <div className="projects-hero-content">
          <div className="hero-tech-badge">
            <span className="tech-icon">🔧</span>
            <span>Seamless Upgrades</span>
          </div>
          <h1 className="projects-hero-title">
            LED Retrofit Projects
            <span className="title-accent-cyan"> That Transform Performance</span>
          </h1>
          <p className="projects-hero-description">
            Upgrade your outdated lighting to state-of-the-art LED technology without replacing 
            fixtures. We maintain your existing aesthetics while dramatically improving efficiency, 
            light quality, and maintenance costs.
          </p>
          <div className="projects-comparison">
            <div className="comparison-col before-col">
              <div className="comparison-label">Before</div>
              <div className="comparison-items">
                <div className="comparison-stat bad">
                  <span className="stat-label-small">Energy</span>
                  <span className="stat-value-small">High Waste</span>
                </div>
                <div className="comparison-stat bad">
                  <span className="stat-label-small">Maintenance</span>
                  <span className="stat-value-small">Frequent</span>
                </div>
                <div className="comparison-stat bad">
                  <span className="stat-label-small">Quality</span>
                  <span className="stat-value-small">Poor CRI</span>
                </div>
              </div>
            </div>

            <div className="comparison-arrow-big">→</div>

            <div className="comparison-col after-col">
              <div className="comparison-label">After</div>
              <div className="comparison-items">
                <div className="comparison-stat good">
                  <span className="stat-label-small">Energy</span>
                  <span className="stat-value-small">85% Less</span>
                </div>
                <div className="comparison-stat good">
                  <span className="stat-label-small">Maintenance</span>
                  <span className="stat-value-small">Rare</span>
                </div>
                <div className="comparison-stat good">
                  <span className="stat-label-small">Quality</span>
                  <span className="stat-value-small">90+ CRI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="outdated-section">
        <div className="section-container-projects">
          <div className="outdated-layout">
            <div className="outdated-visual">
              <div className="old-bulb-visual">
                <div className="bulb-container">
                  <div className="old-bulb-icon">💡</div>
                  <div className="problem-indicators">
                    <div className="indicator heat">🔥 Heat</div>
                    <div className="indicator flicker">⚡ Flicker</div>
                    <div className="indicator mercury">☠️ Mercury</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="outdated-content">
              <span className="section-badge-projects">The Cost of Old Technology</span>
              <h2 className="section-title-projects">Why Outdated Lighting Hurts Your Bottom Line</h2>
              <p className="outdated-text">
                Fluorescent, metal halide, and HID systems waste massive amounts of energy 
                as heat. They require constant ballast replacements, frequent relamping, and 
                disposal of hazardous materials—all while delivering inferior light quality.
              </p>
              <div className="cost-breakdown">
                <div className="cost-item">
                  <div className="cost-icon">💰</div>
                  <div className="cost-details">
                    <h4>Energy Waste</h4>
                    <p>Old systems use 3-5x more electricity than LED equivalents</p>
                  </div>
                </div>
                <div className="cost-item">
                  <div className="cost-icon">🔧</div>
                  <div className="cost-details">
                    <h4>Maintenance Burden</h4>
                    <p>Ballast failures, lamp replacements, and disposal fees add up fast</p>
                  </div>
                </div>
                <div className="cost-item">
                  <div className="cost-icon">😵</div>
                  <div className="cost-details">
                    <h4>Poor Environment</h4>
                    <p>Flicker, hum, and poor color rendering reduce productivity and comfort</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Retrofit Solutions Section */}
      <section className="solutions-section">
        <div className="section-container-projects">
          <div className="section-header-projects">
            <span className="section-badge-projects">Turnkey Solutions</span>
            <h2 className="section-title-projects">Retrofit Options for Every Fixture</h2>
            <p className="section-description-projects">
              We offer multiple retrofit approaches depending on your fixture types, budget, and timeline.
            </p>
          </div>

          <div className="solutions-grid">
            <div className="solution-card">
              <div className="solution-header">
                <div className="solution-icon-box">🔌</div>
                <h3 className="solution-name">Lamp Replacement</h3>
              </div>
              <p className="solution-description">
                Direct LED tube replacement for T8/T12 fluorescent fixtures. Fastest, most 
                cost-effective option that eliminates ballasts entirely.
              </p>
              <div className="solution-specs">
                <div className="spec-item">
                  <span className="spec-label">Installation:</span>
                  <span className="spec-value">15 min per fixture</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Cost:</span>
                  <span className="spec-value">Lowest</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Best For:</span>
                  <span className="spec-value">T8/T12 troffers</span>
                </div>
              </div>
            </div>

            <div className="solution-card">
              <div className="solution-header">
                <div className="solution-icon-box">⚙️</div>
                <h3 className="solution-name">Retrofit Kits</h3>
              </div>
              <p className="solution-description">
                Complete LED module with integrated driver that fits inside existing fixture 
                housings. Maintains original appearance with modern performance.
              </p>
              <div className="solution-specs">
                <div className="spec-item">
                  <span className="spec-label">Installation:</span>
                  <span className="spec-value">30 min per fixture</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Cost:</span>
                  <span className="spec-value">Moderate</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Best For:</span>
                  <span className="spec-value">2x2, 2x4 troffers</span>
                </div>
              </div>
            </div>

            <div className="solution-card">
              <div className="solution-header">
                <div className="solution-icon-box">💡</div>
                <h3 className="solution-name">Fixture Replacement</h3>
              </div>
              <p className="solution-description">
                Full fixture changeout with modern LED luminaires. Provides maximum light 
                quality, aesthetics, and control options when existing fixtures are too old.
              </p>
              <div className="solution-specs">
                <div className="spec-item">
                  <span className="spec-label">Installation:</span>
                  <span className="spec-value">1-2 hrs per fixture</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Cost:</span>
                  <span className="spec-value">Highest (best ROI)</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Best For:</span>
                  <span className="spec-value">High-bays, old fixtures</span>
                </div>
              </div>
            </div>

            <div className="solution-card">
              <div className="solution-header">
                <div className="solution-icon-box">🎛️</div>
                <h3 className="solution-name">Controls Integration</h3>
              </div>
              <p className="solution-description">
                Add occupancy sensors, daylight harvesting, and dimming controls to maximize 
                savings. Smart controls can reduce consumption by an additional 20-30%.
              </p>
              <div className="solution-specs">
                <div className="spec-item">
                  <span className="spec-label">Installation:</span>
                  <span className="spec-value">Varies by system</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Cost:</span>
                  <span className="spec-value">Add-on</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Best For:</span>
                  <span className="spec-value">All retrofit types</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="retrofit-process-section">
        <div className="section-container-projects">
          <div className="section-header-projects">
            <span className="section-badge-projects">Zero Downtime</span>
            <h2 className="section-title-projects">Our Retrofit Process</h2>
          </div>

          <div className="retrofit-timeline">
            <div className="retrofit-step">
              <div className="step-icon-circle">1</div>
              <h3 className="retrofit-step-title">Site Survey</h3>
              <p className="retrofit-step-text">
                Document existing fixtures, measure light levels, and photograph conditions. 
                Identify optimal retrofit solutions for each area.
              </p>
            </div>

            <div className="retrofit-step">
              <div className="step-icon-circle">2</div>
              <h3 className="retrofit-step-title">Proposal & Samples</h3>
              <p className="retrofit-step-text">
                Present detailed proposal with product specs, pricing, and ROI analysis. 
                Install samples in key areas for approval before full rollout.
              </p>
            </div>

            <div className="retrofit-step">
              <div className="step-icon-circle">3</div>
              <h3 className="retrofit-step-title">Scheduled Installation</h3>
              <p className="retrofit-step-text">
                Work during off-hours or phased approach to minimize disruption. Professional 
                installers complete work efficiently and safely.
              </p>
            </div>

            <div className="retrofit-step">
              <div className="step-icon-circle">4</div>
              <h3 className="retrofit-step-title">Testing & Handoff</h3>
              <p className="retrofit-step-text">
                Verify all fixtures operational, light levels meet spec, and controls 
                programmed correctly. Provide documentation and warranty information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="results-section">
        <div className="section-container-projects">
          <div className="section-header-projects">
            <span className="section-badge-projects">Proven Results</span>
            <h2 className="section-title-projects">Example Retrofit Savings</h2>
          </div>

          <div className="results-showcase">
            <div className="result-example">
              <div className="result-label">Manufacturing Facility</div>
              <div className="result-metrics">
                <div className="result-metric">
                  <span className="metric-number-big">$47K</span>
                  <span className="metric-label-big">Annual Savings</span>
                </div>
                <div className="result-metric">
                  <span className="metric-number-big">14 mo</span>
                  <span className="metric-label-big">Payback Period</span>
                </div>
                <div className="result-metric">
                  <span className="metric-number-big">425</span>
                  <span className="metric-label-big">Fixtures Upgraded</span>
                </div>
              </div>
              <p className="result-details">
                Replaced 400W metal halide high-bays with 150W LED equivalents. Eliminated 
                monthly relamping costs and improved light quality on production floor.
              </p>
            </div>

            <div className="result-example">
              <div className="result-label">Office Complex</div>
              <div className="result-metrics">
                <div className="result-metric">
                  <span className="metric-number-big">$18K</span>
                  <span className="metric-label-big">Annual Savings</span>
                </div>
                <div className="result-metric">
                  <span className="metric-number-big">22 mo</span>
                  <span className="metric-label-big">Payback Period</span>
                </div>
                <div className="result-metric">
                  <span className="metric-number-big">850</span>
                  <span className="metric-label-big">Fixtures Upgraded</span>
                </div>
              </div>
              <p className="result-details">
                Retrofit 2x4 troffers with LED kits and added occupancy sensors. Reduced 
                energy consumption by 72% while improving employee comfort and productivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="projects-cta-section">
        <div className="projects-cta-content">
          <h2 className="projects-cta-title">Ready to Upgrade Your Lighting?</h2>
          <p className="projects-cta-description">
            Let&apos;s assess your facility and show you exactly how much you can save with 
            LED retrofits. Free evaluation, no pressure—just real numbers.
          </p>
          <div className="projects-cta-buttons">
            <a href="mailto:Info@luminslighting.com" className="btn btn-primary">
              Request Assessment
              <span className="btn-arrow">→</span>
            </a>
            <a href="tel:714-296-6341" className="btn btn-outline-light">
              Call: (714) 296-6341
            </a>
          </div>
          <div className="projects-features-row">
            <div className="feature-badge-small">
              <span className="badge-icon-small">✓</span>
              <span>Free Site Survey</span>
            </div>
            <div className="feature-badge-small">
              <span className="badge-icon-small">✓</span>
              <span>Product Samples</span>
            </div>
            <div className="feature-badge-small">
              <span className="badge-icon-small">✓</span>
              <span>Rebate Assistance</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
