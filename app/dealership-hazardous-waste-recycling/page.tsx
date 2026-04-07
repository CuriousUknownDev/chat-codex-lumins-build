import type { Metadata } from 'next'
import Link from 'next/link'
import '../seo-pages.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Dealership Hazardous Waste Recycling',
  description:
    'Hazardous waste recycling for California auto dealerships, including airbags, batteries, gas tanks, pretensioners, and e-waste handling.',
  alternates: {
    canonical: '/dealership-hazardous-waste-recycling',
  },
}

export default function DealershipHazardousWasteRecyclingPage() {
  return (
    <>
      <NavBar />
      <main className="seo-page">
        <div className="seo-shell">
          <section className="seo-hero">
            <div className="seo-hero-copy">
              <span className="seo-eyebrow">Auto Dealership Recycling</span>
              <h1 className="seo-title">Hazardous Waste Recycling for California Dealerships</h1>
              <p className="seo-lead">
                Dealership service departments generate regulated waste that cannot be treated like
                ordinary scrap. Lumins Lighting helps California dealerships handle airbags,
                batteries, gas tanks, seat belt pretensioners, and related materials with trained
                pickup, documentation, and responsible processing.
              </p>
              <div className="seo-actions">
                <a className="seo-btn seo-btn-primary" href="mailto:Info@luminslighting.com?subject=Dealership%20Hazardous%20Waste%20Pickup">
                  Schedule a Pickup
                </a>
                <Link className="seo-btn seo-btn-secondary" href="/recycling">
                  View Recycling Services
                </Link>
              </div>
            </div>
            <aside className="seo-hero-card">
              <h2 className="seo-card-title">Common Dealership Materials</h2>
              <div className="seo-stat-grid">
                <div className="seo-stat">
                  <strong>Airbags</strong>
                  <span>Deployed and undeployed units</span>
                </div>
                <div className="seo-stat">
                  <strong>Batteries</strong>
                  <span>Li-ion, lead acid, hybrid and EV</span>
                </div>
                <div className="seo-stat">
                  <strong>Gas Tanks</strong>
                  <span>Wet and dry tank handling</span>
                </div>
                <div className="seo-stat">
                  <strong>Documentation</strong>
                  <span>Pickup records and compliance support</span>
                </div>
              </div>
            </aside>
          </section>

          <div className="seo-grid">
            <section className="seo-section">
              <h2>Why Dealership Hazardous Waste Handling Matters</h2>
              <p>
                Improper handling creates risk for your staff, your operation, and your compliance
                posture. The safest path is a clear pickup process, proper chain of custody, and a
                partner that understands dealership workflows.
              </p>
              <ul className="seo-bullets">
                <li><strong>Reduce liability:</strong> keep regulated materials out of informal disposal channels.</li>
                <li><strong>Support inspections:</strong> maintain the paperwork needed for compliance records.</li>
                <li><strong>Keep service moving:</strong> clear lots and service areas without disrupting the shop.</li>
              </ul>
            </section>

            <section className="seo-section">
              <h2>What Lumins Can Pick Up for Dealerships</h2>
              <ul className="seo-bullets">
                <li><strong>Airbags and pretensioners:</strong> recalled, aged-out, and collision-related components.</li>
                <li><strong>Batteries:</strong> from standard automotive batteries to EV and hybrid modules.</li>
                <li><strong>Gas tanks and related parts:</strong> including wet tanks with residual fuel.</li>
                <li><strong>Electronics and e-waste:</strong> dealership support equipment and related waste streams.</li>
              </ul>
            </section>

            <section className="seo-faq">
              <h2>Frequently Asked Questions</h2>
              <div className="seo-faq-item">
                <h3>Do you work specifically with dealerships?</h3>
                <p>
                  Yes. This service is built around dealership service departments, parts operations,
                  and the hazardous materials they handle regularly.
                </p>
              </div>
              <div className="seo-faq-item">
                <h3>Do you provide compliance paperwork?</h3>
                <p>
                  Yes. Documentation is a core part of the process so you have records for pickup
                  and responsible disposal.
                </p>
              </div>
            </section>

            <section className="seo-links">
              <h2>Helpful Next Pages</h2>
              <ul className="seo-link-list">
                <li><Link href="/recycling">Certified recycling overview</Link></li>
                <li><Link href="/free-energy-audit-california">Free energy audit service</Link></li>
                <li><Link href="/projects">Commercial retrofit projects</Link></li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
