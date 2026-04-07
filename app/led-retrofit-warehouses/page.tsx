import type { Metadata } from 'next'
import Link from 'next/link'
import '../seo-pages.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'LED Retrofit for Warehouses',
  description:
    'Warehouse LED retrofit services in California with high-bay upgrades, lower energy use, and safer, brighter industrial lighting.',
  alternates: {
    canonical: '/led-retrofit-warehouses',
  },
}

export default function LedRetrofitWarehousesPage() {
  return (
    <>
      <NavBar />
      <main className="seo-page">
        <div className="seo-shell">
          <section className="seo-hero">
            <div className="seo-hero-copy">
              <span className="seo-eyebrow">Industrial Lighting</span>
              <h1 className="seo-title">LED Retrofit for Warehouses in California</h1>
              <p className="seo-lead">
                Warehouse lighting has to do more than turn on. It affects visibility, safety,
                forklift traffic, inventory handling, and the overall operating cost of your
                building. Lumins Lighting helps California warehouses replace outdated high-bay and
                industrial fixtures with efficient LED systems built for demanding environments.
              </p>
              <div className="seo-actions">
                <a className="seo-btn seo-btn-primary" href="mailto:Info@luminslighting.com?subject=Warehouse%20LED%20Retrofit">
                  Talk About a Warehouse Project
                </a>
                <Link className="seo-btn seo-btn-secondary" href="/projects">
                  View Retrofit Services
                </Link>
              </div>
            </div>
            <aside className="seo-hero-card">
              <h2 className="seo-card-title">Warehouse Priorities</h2>
              <div className="seo-stat-grid">
                <div className="seo-stat">
                  <strong>High Bays</strong>
                  <span>Upgrade outdated industrial fixtures</span>
                </div>
                <div className="seo-stat">
                  <strong>Safer Aisles</strong>
                  <span>Improve visibility and uniformity</span>
                </div>
                <div className="seo-stat">
                  <strong>Lower Load</strong>
                  <span>Reduce ongoing utility demand</span>
                </div>
                <div className="seo-stat">
                  <strong>Less Maintenance</strong>
                  <span>Cut lift-based relamping work</span>
                </div>
              </div>
            </aside>
          </section>

          <div className="seo-grid">
            <section className="seo-section">
              <h2>Common Warehouse Lighting Problems</h2>
              <ul className="seo-bullets">
                <li>
                  <strong>Dark aisles and uneven coverage:</strong> old high-bays often create hot
                  spots and shadows that hurt productivity.
                </li>
                <li>
                  <strong>Frequent maintenance:</strong> replacing lamps and ballasts in tall spaces
                  costs time, labor, and lift access.
                </li>
                <li>
                  <strong>High operating costs:</strong> older systems burn more power and produce
                  more heat.
                </li>
              </ul>
            </section>

            <section className="seo-section">
              <h2>What a Warehouse LED Retrofit Can Improve</h2>
              <p>
                A good warehouse retrofit should improve visibility without over-lighting the space.
                That means selecting the right fixture package, spacing, color temperature, and
                controls for your building’s layout and operations.
              </p>
              <ul className="seo-bullets">
                <li><strong>Receiving and shipping areas:</strong> brighter, more dependable task lighting.</li>
                <li><strong>Storage aisles:</strong> clearer sightlines for inventory movement and picking.</li>
                <li><strong>Production floors:</strong> better color rendering and reduced downtime.</li>
              </ul>
            </section>

            <section className="seo-faq">
              <h2>Frequently Asked Questions</h2>
              <div className="seo-faq-item">
                <h3>Do you work around operations?</h3>
                <p>
                  Yes. Warehouse retrofit schedules are usually built around active operations so the
                  project can move with minimal disruption.
                </p>
              </div>
              <div className="seo-faq-item">
                <h3>Do you help with audit and planning first?</h3>
                <p>
                  Yes. Many warehouse projects begin with a free energy audit and facility review.
                </p>
              </div>
            </section>

            <section className="seo-links">
              <h2>Helpful Next Pages</h2>
              <ul className="seo-link-list">
                <li><Link href="/free-energy-audit-california">Free energy audit in California</Link></li>
                <li><Link href="/projects">Retrofit projects overview</Link></li>
                <li><Link href="/led-retrofit-offices">Office LED retrofit service</Link></li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
