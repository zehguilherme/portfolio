import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://joseguilherme.vercel.app/'),
  title: 'José Guilherme - Desenvolvedor de Software',
  description:
    'Portfólio de José Guilherme, desenvolvedor de software especializado em criar interfaces modernas e funcionais.',
  openGraph: {
    title: 'José Guilherme - Desenvolvedor de Software',
    description:
      'Portfólio de José Guilherme, desenvolvedor de software especializado em criar interfaces modernas e funcionais.',
    url: 'https://joseguilherme.vercel.app/',
    siteName: 'José Guilherme',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/images/profile.png',
        width: 1200,
        height: 630,
        alt: 'José Guilherme - Desenvolvedor de Software',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'José Guilherme - Desenvolvedor de Software',
    description:
      'Portfólio de José Guilherme, desenvolvedor de software especializado em criar interfaces modernas e funcionais.',
    images: ['/images/profile.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.variable}>
          {children}
          <Analytics />
        </body>
    </html>
  )
}
