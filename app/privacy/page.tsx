import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Privacy Policy | Lumins Lighting LLC',
}

export default function PrivacyPage() {
  return (
    <>
      <NavBar />
      <main style={{ paddingTop: '120px', minHeight: '60vh' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 40px' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 700, marginBottom: '24px' }}>
            Privacy Policy
          </h1>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '16px' }}>
            <em>Last updated: January 2026</em>
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '24px' }}>
            Lumins Lighting LLC (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, and safeguard information when you
            visit our website or contact us regarding our services.
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 600, marginBottom: '16px', marginTop: '40px' }}>
            Information We Collect
          </h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '16px' }}>
            We may collect contact information (name, email, phone number) when you reach out to
            us via email or phone. We do not sell, trade, or rent your personal information to
            third parties.
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 600, marginBottom: '16px', marginTop: '40px' }}>
            Contact Us
          </h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            If you have questions about this Privacy Policy, please contact us at{' '}
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
