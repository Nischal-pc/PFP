import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Oswald, Source_Sans_3 } from 'next/font/google'
import './globals.css'

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-oswald',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'PFP Canada | Fire Protection Services in Western Canada',
    template: '%s | PFP Canada',
  },
  description:
    'PFP Canada delivers certified fire protection services across Western Canada — fire alarm systems, extinguishers, emergency lighting, kitchen suppression, and sprinkler inspections. NFPA & ULC code-compliant. 24/7 emergency response.',
  keywords: [
    'fire protection',
    'fire alarm systems',
    'fire extinguishers',
    'sprinkler inspection',
    'kitchen suppression',
    'emergency lighting',
    'Western Canada',
    'NFPA',
    'ULC',
  ],
}

export const viewport: Viewport = {
  themeColor: '#c2410c',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`light ${sourceSans.variable} ${oswald.variable}`}>
      <body className="bg-background font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
