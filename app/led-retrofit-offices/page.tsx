import type { Metadata } from 'next'
import Link from 'next/link'
import '../seo-pages.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'LED Retrofit for Offices',
  description:
    'Office LED retrofit services in California for better light quality, lower operating costs, and more comfortable workspaces.',
  alternates: {
    canonical: '/led-retrofit-offices',
  },
}

export default function LedRetrofitOfficesPage() {
  return (
    <>
      <NavBar />
      <main className="seo-page">
        <div className="seo-shell">
          <section className="seo-hero">
            <div className="seo-hero-copy">
              <span className="seo-eyebrow">Office Lighting Upgrades</span>
              <h1 className="seo-title">LED Retrofit for Office Buildings in California</h1>
              <p className="seo-lead">
                Office lighting should support focus, comfort, and a professional environment
                without creating unnecessary energy costs. Lumins Lighting helps California office
                spaces replace aging fluorescent systems with cleaner, more efficient LED solutions.
              </p>
              <div className="seo-actions">
                <a className="seo-btn seo-btn-primary" href="mailto:Info@luminslighting.com?subject=Office%20LED%20Retrofit">
                  Request an Office Review
                </a>
                <Link className="seo-btn seo-btn-secondary" href="/projects">
                  Explore Retrofit Options
                </Link>
              </div>
            </div>
            <aside className="seo-hero-card">
              <h2 className="seo-card-title">Better Office Outcomes</h2>
              <div className="seo-stat-grid">
                <div className="seo-stat">
                  <strong>Cleaner Light</strong>
                  <span>Reduce flicker and poor color quality</span>
                </div>
                <div className="seo-stat">
                  <strong>Lower Bills</strong>
                  <span>Cut office lighting operating costs</span>
                </div>
                <div className="seo-stat">
                  <strong>Modern Look</strong>
                  <span>Improve the feel of tenant and staff spaces</span>
                </div>
                <div className="seo-stat">
                  <strong>Less Service</strong>
                  <span>Reduce lamp and ballast replacements</span>
                </div>
              </div>
            </aside>
          </section>

          <div className="seo-grid">
            <section className="seo-section">
              <h2>Where Office Retrofits Deliver Value</h2>
              <ul className="seo-bullets">
                <li><strong>Open office areas:</strong> improve consistency, brightness, and comfort for daily work.</li>
                <li><strong>Conference rooms:</strong> support clearer presentation and meeting spaces.</li>
                <li><strong>Reception and common areas:</strong> create a stronger first impression for visitors and tenants.</li>
              </ul>
            </section>

            <section className="seo-section">
              <h2>How Lumins Approaches Office LED Retrofit Work</h2>
              <p>
                We focus on practical upgrades that make sense for your layout, tenant needs, and
                budget. That can include lamp replacements, retrofit kits, or fixture changeouts
                depending on the space and the existing hardware.
              </p>
              <ol className="seo-steps">
                <li><strong>1. Review the existing system:</strong> identify inefficient fixtures and problem zones.</li>
                <li><strong>2. Recommend the right path:</strong> select upgrades based on comfort, savings, and lifespan.</li>
                <li><strong>3. Coordinate installation:</strong> work around occupied office hours where possible.</li>
              </ol>
            </section>

            <section className="seo-faq">
              <h2>Frequently Asked Questions</h2>
              <div className="seo-faq-item">
                <h3>Can you keep the existing look of the office?</h3>
                <p>
                  Yes. Many office retrofits are designed to preserve existing fixture aesthetics
                  while improving performance.
                </p>
              </div>
              <div className="seo-faq-item">
                <h3>Do office projects start with an audit?</h3>
                <p>
                  Often, yes. A free audit helps prioritize the spaces with the strongest return and
                  most immediate comfort benefits.
                </p>
              </div>
            </section>

            <section className="seo-links">
              <h2>Helpful Next Pages</h2>
              <ul className="seo-link-list">
                <li><Link href="/free-energy-audit-california">Free energy audit in California</Link></li>
                <li><Link href="/projects">Commercial retrofit projects</Link></li>
                <li><Link href="/new-construction-lighting-design-california">New construction lighting design</Link></li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
