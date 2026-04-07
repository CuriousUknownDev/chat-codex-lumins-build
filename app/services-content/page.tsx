import type { Metadata } from 'next'
import Link from 'next/link'
import '../seo-pages.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'California Commercial Lighting Resources',
  description:
    'Service pages and commercial lighting resources from Lumins Lighting covering audits, retrofits, recycling, and new construction in California.',
  alternates: {
    canonical: '/services-content',
  },
}

export default function ServicesContentPage() {
  return (
    <>
      <NavBar />
      <main className="seo-page">
        <div className="seo-shell">
          <section className="seo-section">
            <h1 className="seo-title" style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)' }}>
              California Commercial Lighting Service Pages
            </h1>
            <p className="seo-lead">
              This resource hub collects Lumins Lighting’s most useful commercial service pages for
              California businesses, facility teams, and dealerships.
            </p>
            <ul className="seo-link-list" style={{ marginTop: 24 }}>
              <li><Link href="/free-energy-audit-california">Free energy audit in California</Link></li>
              <li><Link href="/led-retrofit-warehouses">LED retrofit for warehouses</Link></li>
              <li><Link href="/led-retrofit-offices">LED retrofit for offices</Link></li>
              <li><Link href="/dealership-hazardous-waste-recycling">Dealership hazardous waste recycling</Link></li>
              <li><Link href="/new-construction-lighting-design-california">New construction lighting design in California</Link></li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
