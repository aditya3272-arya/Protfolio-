import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument-serif',
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Aditya Arya — Developer, Designer, Global Citizen',
  description:
    'Portfolio of Aditya Arya — two-time National Design Championship runner-up, student developer & designer from Ghaziabad, India. Building award-winning, empathetic digital experiences.',
  generator: 'v0.app',
  keywords: [
    'Aditya Arya',
    'portfolio',
    'developer',
    'designer',
    'National Design Championship',
    'TELE',
    'LAJF',
    'Ghaziabad',
  ],
  openGraph: {
    title: 'Aditya Arya — Developer, Designer, Global Citizen',
    description:
      'Two-time National Design Championship runner-up. Building award-winning, empathetic digital experiences.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#1a1a22',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
