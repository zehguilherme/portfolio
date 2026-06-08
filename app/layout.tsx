import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { PERSONAL_INFO } from '@/lib/constants'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://joseguilherme.vercel.app/'),
  title: `${PERSONAL_INFO.name} - ${PERSONAL_INFO.role}`,
  description: PERSONAL_INFO.description,
  openGraph: {
    title: `${PERSONAL_INFO.name} - ${PERSONAL_INFO.role}`,
    description: PERSONAL_INFO.description,
    url: 'https://joseguilherme.vercel.app/',
    siteName: 'José Guilherme',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/images/profile.png',
        width: 800,
        height: 418,
        alt: `${PERSONAL_INFO.name} - ${PERSONAL_INFO.role}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PERSONAL_INFO.name} - ${PERSONAL_INFO.role}`,
    description: PERSONAL_INFO.description,
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
        <a
          href="#main-content"
          className="focus:bg-primary focus:text-primary-foreground sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-md focus:px-4 focus:py-2"
        >
          Pular para o conteúdo
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
