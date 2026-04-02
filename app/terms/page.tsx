import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Terms of Service | Lumins Lighting LLC',
}

export default function TermsPage() {
  return (
    <>
      <NavBar />
      <main style={{ paddingTop: '120px', minHeight: '60vh' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 40px' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 700, marginBottom: '24px' }}>
            Terms of Service
          </h1>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '16px' }}>
            <em>Last updated: January 2026</em>
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '24px' }}>
            By accessing our website or engaging our services, you agree to the following terms.
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 600, marginBottom: '16px', marginTop: '40px' }}>
            Services
          </h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '16px' }}>
            Lumins Lighting LLC provides LED lighting retrofit, energy audit, new construction
            lighting, and recycling services for commercial clients. All services are subject to
            separate written agreements between Lumins Lighting LLC and the client.
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 600, marginBottom: '16px', marginTop: '40px' }}>
            Limitation of Liability
          </h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '16px' }}>
            Lumins Lighting LLC is not liable for any indirect or incidental damages arising from
            use of this website or reliance on information provided herein.
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 600, marginBottom: '16px', marginTop: '40px' }}>
            Contact Us
          </h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            Questions about these Terms? Contact us at{' '}
            <a href="mailto:Info@luminslighting.com" style={{ color: 'var(--primary)' }}>
              Info@luminslighting.com
            </a>.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
