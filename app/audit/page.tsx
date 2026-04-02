import './audit.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function AuditPage() {
  return (
    <>
      <NavBar />

      {/* Hero Section */}
      <section className="audit-hero">
        <div className="audit-hero-grid">
          <div className="grid-line grid-line-v"></div>
          <div className="grid-line grid-line-v"></div>
          <div className="grid-line grid-line-v"></div>
          <div className="grid-line grid-line-h"></div>
          <div className="grid-line grid-line-h"></div>
          <div className="grid-line grid-line-h"></div>
        </div>
        <div className="audit-hero-content">
          <div className="hero-stat-badge">
            <span className="stat-icon">📊</span>
            <span>Data-Driven Insights</span>
          </div>
          <h1 className="audit-hero-title">
            Free Energy Audits
            <span className="title-accent-purple"> That Pay for Themselves</span>
          </h1>
          <p className="audit-hero-description">
            Comprehensive onsite analysis revealing exactly where your facility is wasting money. 
            We identify inefficiencies, calculate precise ROI, and map your path to savings—all at no cost.
          </p>
          <div className="audit-metrics-row">
            <div className="metric-card">
              <div className="metric-value">$12K+</div>
              <div className="metric-label">Avg. Annual Savings</div>
              <div className="metric-bar"></div>
            </div>
            <div className="metric-card">
              <div className="metric-value">18 mo</div>
              <div className="metric-label">Typical Payback</div>
              <div className="metric-bar"></div>
            </div>
            <div className="metric-card">
              <div className="metric-value">100%</div>
              <div className="metric-label">Free Assessment</div>
              <div className="metric-bar"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Analyze Section */}
      <section className="analyze-section">
        <div className="section-container-audit">
          <div className="section-header-audit">
            <span className="section-badge-audit">Comprehensive Analysis</span>
            <h2 className="section-title-audit">What We Measure</h2>
            <p className="section-description-audit">
              Our certified energy auditors use professional-grade equipment to capture 
              detailed data across every aspect of your lighting infrastructure.
            </p>
          </div>

          <div className="analysis-grid">
            <div className="analysis-card">
              <div className="analysis-number">01</div>
              <div className="analysis-icon">💡</div>
              <h3 className="analysis-title">Current Consumption</h3>
              <p className="analysis-text">
                Measure exact wattage, lumens output, and operating hours for every fixture. 
                Document baseline energy usage with utility bill analysis spanning 12-24 months.
              </p>
              <ul className="analysis-checklist">
                <li>Fixture count & types</li>
                <li>Wattage per zone</li>
                <li>Operating schedules</li>
                <li>Utility rate analysis</li>
              </ul>
            </div>

            <div className="analysis-card">
              <div className="analysis-number">02</div>
              <div className="analysis-icon">📉</div>
              <h3 className="analysis-title">Inefficiency Mapping</h3>
              <p className="analysis-text">
                Identify problem areas where outdated technology is costing you the most. 
                Thermal imaging reveals heat waste, while lux meter readings expose over/under-lit zones.
              </p>
              <ul className="analysis-checklist">
                <li>Outdated ballast systems</li>
                <li>Over-illumination waste</li>
                <li>Heat loss quantification</li>
                <li>Maintenance cost tracking</li>
              </ul>
            </div>

            <div className="analysis-card">
              <div className="analysis-number">03</div>
              <div className="analysis-icon">💰</div>
              <h3 className="analysis-title">ROI Projections</h3>
              <p className="analysis-text">
                Calculate exact savings with LED upgrades including energy reduction, maintenance 
                elimination, and rebate opportunities. Conservative estimates ensure realistic expectations.
              </p>
              <ul className="analysis-checklist">
                <li>Energy cost reduction</li>
                <li>Rebate maximization</li>
                <li>Maintenance savings</li>
                <li>Payback timeline</li>
              </ul>
            </div>

            <div className="analysis-card">
              <div className="analysis-number">04</div>
              <div className="analysis-icon">📋</div>
              <h3 className="analysis-title">Custom Recommendations</h3>
              <p className="analysis-text">
                Receive a detailed upgrade plan tailored to your facility, budget, and timeline. 
                Multiple scenarios allow you to prioritize high-impact areas first.
              </p>
              <ul className="analysis-checklist">
                <li>Phased implementation</li>
                <li>Product specifications</li>
                <li>Compliance verification</li>
                <li>Priority area ranking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Report Section */}
      <section className="report-section">
        <div className="section-container-audit">
          <div className="report-layout">
            <div className="report-preview">
              <div className="report-mockup">
                <div className="report-header">
                  <div className="report-logo">LUMINS</div>
                  <div className="report-title-text">ENERGY AUDIT REPORT</div>
                </div>
                <div className="report-chart"></div>
                <div className="report-data-rows">
                  <div className="report-data-row"></div>
                  <div className="report-data-row"></div>
                  <div className="report-data-row"></div>
                </div>
                <div className="report-footer-box"></div>
              </div>
            </div>
            <div className="report-content">
              <span className="section-badge-audit">Detailed Documentation</span>
              <h2 className="section-title-audit">Your Comprehensive Report</h2>
              <p className="report-text">
                Within 48 hours of your audit, receive a professionally formatted report you can 
                present to stakeholders, building management, or financial decision-makers.
              </p>
              <div className="report-features">
                <div className="report-feature-item">
                  <span className="feature-check">✓</span>
                  <div>
                    <h4>Executive Summary</h4>
                    <p>One-page overview with key findings and total savings potential</p>
                  </div>
                </div>
                <div className="report-feature-item">
                  <span className="feature-check">✓</span>
                  <div>
                    <h4>Visual Data</h4>
                    <p>Charts, graphs, and facility diagrams illustrating current vs. proposed systems</p>
                  </div>
                </div>
                <div className="report-feature-item">
                  <span className="feature-check">✓</span>
                  <div>
                    <h4>Financial Analysis</h4>
                    <p>Detailed cost-benefit breakdown with conservative ROI calculations</p>
                  </div>
                </div>
                <div className="report-feature-item">
                  <span className="feature-check">✓</span>
                  <div>
                    <h4>Implementation Plan</h4>
                    <p>Step-by-step roadmap with timeline and phasing options</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="audit-process-section">
        <div className="section-container-audit">
          <div className="section-header-audit">
            <span className="section-badge-audit">Simple & Fast</span>
            <h2 className="section-title-audit">How It Works</h2>
          </div>

          <div className="process-steps">
            <div className="step-card">
              <div className="step-number-circle">1</div>
              <h3 className="step-title">Schedule</h3>
              <p className="step-description">
                Contact us to arrange a convenient time. Most audits complete in 2-4 hours 
                depending on facility size.
              </p>
            </div>

            <div className="step-arrow">→</div>

            <div className="step-card">
              <div className="step-number-circle">2</div>
              <h3 className="step-title">On-Site Visit</h3>
              <p className="step-description">
                Our certified auditor arrives with professional equipment to measure, photograph, 
                and document your current lighting.
              </p>
            </div>

            <div className="step-arrow">→</div>

            <div className="step-card">
              <div className="step-number-circle">3</div>
              <h3 className="step-title">Analysis</h3>
              <p className="step-description">
                We crunch the numbers, research available rebates, and develop custom 
                recommendations for your facility.
              </p>
            </div>

            <div className="step-arrow">→</div>

            <div className="step-card">
              <div className="step-number-circle">4</div>
              <h3 className="step-title">Report Delivery</h3>
              <p className="step-description">
                Receive your detailed report with no obligation. We review findings together 
                and answer all questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="audit-cta-section">
        <div className="audit-cta-content">
          <h2 className="audit-cta-title">Ready to Uncover Your Savings?</h2>
          <p className="audit-cta-description">
            Schedule your free energy audit today. No obligation, no pressure—just clear data 
            showing exactly how much you can save with LED retrofits.
          </p>
          <div className="audit-cta-buttons">
            <a href="mailto:Info@luminslighting.com" className="btn btn-primary">
              Schedule Free Audit
              <span className="btn-arrow">→</span>
            </a>
            <a href="tel:714-296-6341" className="btn btn-outline-light">
              Call: (714) 296-6341
            </a>
          </div>
          <div className="cta-trust-badges">
            <div className="trust-badge">
              <span className="trust-icon">🏅</span>
              <span>Certified Auditors</span>
            </div>
            <div className="trust-badge">
              <span className="trust-icon">📊</span>
              <span>Detailed Reports</span>
            </div>
            <div className="trust-badge">
              <span className="trust-icon">🆓</span>
              <span>100% Free</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}