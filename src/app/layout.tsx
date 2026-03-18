import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://pronosticoscl.com'),
  title: {
    default: 'PronosticosCL — Pronósticos de Fútbol Chile y Latinoamérica',
    template: '%s | PronosticosCL',
  },
  description: 'Pronósticos deportivos y análisis de fútbol para Chile y Latinoamérica. Predicciones diarias, comparativa de casas de apuestas y tips de expertos.',
  keywords: ['pronósticos fútbol', 'apuestas deportivas Chile', 'pronósticos fútbol hoy', 'predicciones fútbol Chile', 'casas de apuestas Chile', 'Betano Chile', '1xBet Chile'],
  authors: [{ name: 'PronosticosCL' }],
  creator: 'PronosticosCL',
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: 'https://pronosticoscl.com',
    siteName: 'PronosticosCL',
    title: 'PronosticosCL — Pronósticos de Fútbol Chile',
    description: 'Pronósticos deportivos diarios y análisis experto del fútbol chileno y latinoamericano.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PronosticosCL — Pronósticos de Fútbol Chile',
    description: 'Pronósticos deportivos diarios para Chile y LATAM',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  verification: {
    google: 'GOOGLE_VERIFICATION_CODE',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-CL">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col bg-brand-dark text-brand-white antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
