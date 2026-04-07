import type { Metadata } from 'next'
import Link from 'next/link'
import '../seo-pages.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Free Energy Audit California',
  description:
    'Free commercial lighting energy audits in California with ROI analysis, rebate support, and LED retrofit recommendations from Lumins Lighting.',
  alternates: {
    canonical: '/free-energy-audit-california',
  },
}

export default function FreeEnergyAuditCaliforniaPage() {
  return (
    <>
      <NavBar />
      <main className="seo-page">
        <div className="seo-shell">
          <section className="seo-hero">
            <div className="seo-hero-copy">
              <span className="seo-eyebrow">California Commercial Lighting</span>
              <h1 className="seo-title">Free Energy Audit in California for Commercial Lighting Upgrades</h1>
              <p className="seo-lead">
                Lumins Lighting helps California businesses understand exactly where they are losing
                money on outdated lighting. Our free energy audit gives you a clear baseline,
                upgrade recommendations, and a practical path toward lower utility costs.
              </p>
              <div className="seo-actions">
                <a className="seo-btn seo-btn-primary" href="mailto:Info@luminslighting.com?subject=Free%20Energy%20Audit">
                  Request a Free Audit
                </a>
                <Link className="seo-btn seo-btn-secondary" href="/audit">
                  See the Audit Process
                </Link>
              </div>
            </div>
            <aside className="seo-hero-card">
              <h2 className="seo-card-title">What You Get</h2>
              <div className="seo-stat-grid">
                <div className="seo-stat">
                  <strong>ROI</strong>
                  <span>Clear savings and payback estimates</span>
                </div>
                <div className="seo-stat">
                  <strong>Fixture Count</strong>
                  <span>Site-wide lighting inventory review</span>
                </div>
                <div className="seo-stat">
                  <strong>Rebates</strong>
                  <span>California incentive opportunities</span>
                </div>
                <div className="seo-stat">
                  <strong>No Cost</strong>
                  <span>No-obligation commercial assessment</span>
                </div>
              </div>
            </aside>
          </section>

          <div className="seo-grid">
            <section className="seo-section">
              <h2>Why a Lighting Energy Audit Matters</h2>
              <p>
                Older fluorescent, HID, and metal halide systems usually cost more than most
                facilities realize. The utility bill shows the symptom, but not the cause. A proper
                audit looks at fixture counts, operating hours, wattage, maintenance burden, and the
                spaces where lighting is underperforming or over-consuming.
              </p>
              <ul className="seo-bullets">
                <li>
                  <strong>Find wasted spend:</strong> identify fixtures that are driving unnecessary
                  energy use and maintenance calls.
                </li>
                <li>
                  <strong>Build a phased plan:</strong> prioritize the upgrades with the best return
                  first.
                </li>
                <li>
                  <strong>Support decisions:</strong> give ownership, operations, and facilities
                  teams real numbers instead of guesswork.
                </li>
              </ul>
            </section>

            <section className="seo-section">
              <h2>How Lumins Handles a Free Energy Audit in California</h2>
              <ol className="seo-steps">
                <li>
                  <strong>1. On-site review:</strong> we document your current lighting, fixture
                  types, and operating conditions.
                </li>
                <li>
                  <strong>2. Savings analysis:</strong> we compare current usage against LED retrofit
                  alternatives.
                </li>
                <li>
                  <strong>3. Upgrade roadmap:</strong> you get practical recommendations tailored to
                  your building and budget.
                </li>
                <li>
                  <strong>4. Next-step planning:</strong> if you choose to move forward, we can help
                  with retrofit execution and recycling.
                </li>
              </ol>
            </section>

            <section className="seo-faq">
              <h2>Frequently Asked Questions</h2>
              <div className="seo-faq-item">
                <h3>Who is this audit for?</h3>
                <p>
                  It is best for warehouses, offices, dealerships, retail spaces, and other
                  commercial properties across California with aging lighting infrastructure.
                </p>
              </div>
              <div className="seo-faq-item">
                <h3>Is the audit really free?</h3>
                <p>
                  Yes. The goal is to give you useful information first. If you decide to move ahead
                  with an upgrade, we can scope the project from there.
                </p>
              </div>
              <div className="seo-faq-item">
                <h3>Do you only help with audits?</h3>
                <p>
                  No. Audits are often the starting point for LED retrofits, controls upgrades, new
                  construction planning, and certified recycling services.
                </p>
              </div>
            </section>

            <section className="seo-links">
              <h2>Helpful Next Pages</h2>
              <ul className="seo-link-list">
                <li><Link href="/projects">LED retrofit projects</Link></li>
                <li><Link href="/led-retrofit-warehouses">Warehouse retrofit planning</Link></li>
                <li><Link href="/led-retrofit-offices">Office lighting upgrades</Link></li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
