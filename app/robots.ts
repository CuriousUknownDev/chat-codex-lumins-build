import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/shop?order=success'],
    },
    sitemap: 'https://chat-codex-lumins-build.vercel.app/sitemap.xml',
  }
}
