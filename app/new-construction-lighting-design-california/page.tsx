import type { Metadata } from 'next'
import Link from 'next/link'
import '../seo-pages.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'New Construction Lighting Design California',
  description:
    'New construction lighting design in California for commercial spaces, including planning, coordination, fixture selection, and commissioning.',
  alternates: {
    canonical: '/new-construction-lighting-design-california',
  },
}

export default function NewConstructionLightingDesignCaliforniaPage() {
  return (
    <>
      <NavBar />
      <main className="seo-page">
        <div className="seo-shell">
          <section className="seo-hero">
            <div className="seo-hero-copy">
              <span className="seo-eyebrow">Commercial New Construction</span>
              <h1 className="seo-title">New Construction Lighting Design in California</h1>
              <p className="seo-lead">
                The best time to get lighting right is before the building is complete. Lumins
                Lighting works with California commercial projects on lighting design, coordination,
                product selection, and handoff so the final system is efficient, practical, and
                aligned with the space from day one.
              </p>
              <div className="seo-actions">
                <a className="seo-btn seo-btn-primary" href="mailto:Info@luminslighting.com?subject=New%20Construction%20Lighting%20Design">
                  Discuss a New Build
                </a>
                <Link className="seo-btn seo-btn-secondary" href="/construction">
                  See Construction Services
                </Link>
              </div>
            </div>
            <aside className="seo-hero-card">
              <h2 className="seo-card-title">Project Support Areas</h2>
              <div className="seo-stat-grid">
                <div className="seo-stat">
                  <strong>Planning</strong>
                  <span>Design intent and fixture strategy</span>
                </div>
                <div className="seo-stat">
                  <strong>Coordination</strong>
                  <span>Architect and contractor collaboration</span>
                </div>
                <div className="seo-stat">
                  <strong>Controls</strong>
                  <span>Integrate smart and efficient systems</span>
                </div>
                <div className="seo-stat">
                  <strong>Commissioning</strong>
                  <span>Final testing and handoff support</span>
                </div>
              </div>
            </aside>
          </section>

          <div className="seo-grid">
            <section className="seo-section">
              <h2>Why Lighting Design Belongs Early in the Build</h2>
              <p>
                When lighting is addressed too late, projects often end up paying more to fix
                layout issues, control mismatches, or performance gaps. Early lighting planning
                improves coordination and reduces the need for expensive changes later.
              </p>
              <ul className="seo-bullets">
                <li><strong>Support the building layout:</strong> align light output with real use of the space.</li>
                <li><strong>Improve efficiency:</strong> avoid overbuilt or poorly matched fixture packages.</li>
                <li><strong>Coordinate trades:</strong> integrate lighting with electrical and controls planning.</li>
              </ul>
            </section>

            <section className="seo-section">
              <h2>Commercial Spaces We Support</h2>
              <ul className="seo-bullets">
                <li><strong>Office and mixed-use buildings:</strong> reception, workspaces, conference rooms, and common areas.</li>
                <li><strong>Industrial and warehouse projects:</strong> high-output fixtures, loading areas, and controls.</li>
                <li><strong>Retail and hospitality:</strong> customer-facing spaces that need both function and presentation.</li>
              </ul>
            </section>

            <section className="seo-faq">
              <h2>Frequently Asked Questions</h2>
              <div className="seo-faq-item">
                <h3>Do you coordinate with contractors and design teams?</h3>
                <p>
                  Yes. Collaboration with the project team is part of making the lighting plan work
                  in the real build, not just on paper.
                </p>
              </div>
              <div className="seo-faq-item">
                <h3>Can you help with future efficiency goals too?</h3>
                <p>
                  Yes. The right system from the start helps reduce future retrofit needs and
                  supports long-term operational savings.
                </p>
              </div>
            </section>

            <section className="seo-links">
              <h2>Helpful Next Pages</h2>
              <ul className="seo-link-list">
                <li><Link href="/construction">New construction services overview</Link></li>
                <li><Link href="/free-energy-audit-california">Energy audit service</Link></li>
                <li><Link href="/led-retrofit-warehouses">Warehouse retrofit page</Link></li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
