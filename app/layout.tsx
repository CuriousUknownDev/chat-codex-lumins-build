import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lumins Lighting LLC - Lighting the way with efficiency & reliability',
  description: 'We take pride in helping businesses upgrade to modern, energy-efficient lighting that meet current standards and cut their overhead. Turnkey LED retrofit solutions with trusted brands.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-US">
      <body>{children}</body>
    </html>
  )
}
