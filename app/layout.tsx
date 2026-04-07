import Script from 'next/script'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://chat-codex-lumins-build.vercel.app'),
  title: {
    default: 'Lumins Lighting LLC',
    template: '%s | Lumins Lighting LLC',
  },
  description:
    'Commercial LED retrofit, new construction lighting design, energy audits, and certified recycling services for California businesses.',
  applicationName: 'Lumins Lighting LLC',
  keywords: [
    'LED retrofit California',
    'commercial lighting contractor',
    'energy audit California',
    'lighting design',
    'lighting recycling',
    'Lumins Lighting',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://chat-codex-lumins-build.vercel.app',
    siteName: 'Lumins Lighting LLC',
    title: 'Lumins Lighting LLC',
    description:
      'Commercial LED retrofit, new construction lighting design, energy audits, and certified recycling services for California businesses.',
    images: [
      {
        url: 'https://i0.wp.com/luminslighting.com/wp-content/uploads/2025/08/Lumins-Logo-new-1.jpg?fit=1200%2C630&ssl=1',
        width: 1200,
        height: 630,
        alt: 'Lumins Lighting LLC',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumins Lighting LLC',
    description:
      'Commercial LED retrofit, new construction lighting design, energy audits, and certified recycling services for California businesses.',
    images: ['https://i0.wp.com/luminslighting.com/wp-content/uploads/2025/08/Lumins-Logo-new-1.jpg?fit=1200%2C630&ssl=1'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Lumins Lighting LLC',
    url: 'https://chat-codex-lumins-build.vercel.app',
    image:
      'https://i0.wp.com/luminslighting.com/wp-content/uploads/2025/08/Lumins-Logo-new-1.jpg?fit=1200%2C630&ssl=1',
    telephone: '+1-714-296-6341',
    email: 'info@luminslighting.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '229 East Commonwealth Ave',
      addressLocality: 'Fullerton',
      addressRegion: 'CA',
      postalCode: '92832',
      addressCountry: 'US',
    },
    areaServed: 'California',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/luminslighting',
      'https://www.instagram.com/luminslighting',
      'https://www.linkedin.com/company/luminslighting',
    ],
  }

  return (
    <html lang="en-US">
      <body>
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {children}
      </body>
    </html>
  )
}
