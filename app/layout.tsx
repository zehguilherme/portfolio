import { Analytics } from '@vercel/analytics/next'
import Link from 'next/link'
import { Inter, JetBrains_Mono } from 'next/font/google'
import localFont from 'next/font/local'
import type { Metadata } from 'next'
import { PERSONAL_INFO } from '@/lib/constants'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
})

const clashDisplay = localFont({
  src: [
    {
      path: './fonts/ClashDisplay-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/ClashDisplay-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    { path: './fonts/ClashDisplay-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-clash-display',
  display: 'swap',
})

const themeInitialization = `try {
  const storedTheme = localStorage.getItem('theme')
  const theme =
    storedTheme === 'light' || storedTheme === 'dark'
      ? storedTheme
      : window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
  document.documentElement.dataset.theme = theme
} catch {}`

const socialDescription =
  'Desenvolvedor de software com 8 anos de experiência em produtos web, interfaces modernas, performance e código sustentável.'

export const metadata: Metadata = {
  metadataBase: new URL('https://joseguilherme.vercel.app/'),
  title: `${PERSONAL_INFO.name} - ${PERSONAL_INFO.role}`,
  description: socialDescription,
  openGraph: {
    title: `${PERSONAL_INFO.name} - ${PERSONAL_INFO.role}`,
    description: socialDescription,
    url: 'https://joseguilherme.vercel.app/',
    siteName: 'José Guilherme',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: `${PERSONAL_INFO.name} - ${PERSONAL_INFO.role}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PERSONAL_INFO.name} - ${PERSONAL_INFO.role}`,
    description: socialDescription,
    images: ['/images/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitialization }} />
      </head>
      <body
        className={`${inter.variable} ${clashDisplay.variable} ${jetbrainsMono.variable}`}
      >
        <Link
          href="#main-content"
          className="focus:bg-action-primary focus:text-text-on-action sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-md focus:px-4 focus:py-2"
        >
          Pular para o conteúdo
        </Link>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
