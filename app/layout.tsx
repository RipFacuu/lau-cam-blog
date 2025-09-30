import './globals.css'
import type { Metadata } from 'next'
import { Inter, Lora } from 'next/font/google'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Providers } from './providers'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const lora = Lora({ 
  subsets: ['latin'],
  variable: '--font-lora',
})

export const metadata: Metadata = {
  title: 'LAU-CAM | Tecnología en Iluminación LED en Córdoba',
  description: 'Especialistas en tecnología de iluminación LED en Córdoba. Soluciones innovadoras y eficientes para proyectos residenciales, comerciales e industriales con máxima eficiencia energética.',
  keywords: ['iluminación LED', 'lámparas LED', 'iluminación eficiente', 'tecnología LED', 'sistemas de iluminación', 'eficiencia energética', 'iluminación Córdoba', 'torres de iluminación', 'proyectos LED'],
  authors: [{ name: 'LAU-CAM' }],
  creator: 'LAU-CAM',
  publisher: 'LAU-CAM',
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.lau-cam.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'LAU-CAM | Tecnología en Iluminación LED en Córdoba',
    description: 'Especialistas en tecnología de iluminación LED en Córdoba. Soluciones innovadoras y eficientes para proyectos residenciales, comerciales e industriales.',
    url: 'https://www.lau-cam.com',
    siteName: 'LAU-CAM',
    locale: 'es_AR',
    type: 'website',
    images: [
      {
        url: 'https://www.lau-cam.com/og-image.jpg', // Deberás crear esta imagen
        width: 1200,
        height: 630,
        alt: 'LAU-CAM - Tecnología en iluminación LED',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LAU-CAM | Tecnología en Iluminación LED en Córdoba',
    description: 'Especialistas en tecnología de iluminación LED en Córdoba. Soluciones innovadoras y eficientes.',
    images: ['https://www.lau-cam.com/og-image.jpg'], // Misma imagen que OpenGraph
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "LAU-CAM",
              "url": "https://www.lau-cam.com",
              "logo": "https://www.lau-cam.com/logo.png",
              "description": "Especialistas en tecnología de iluminación LED en Córdoba. Soluciones innovadoras y eficientes.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Córdoba",
                "addressRegion": "Córdoba",
                "addressCountry": "Argentina"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+5493512576096",
                "contactType": "customer service"
              },
              "sameAs": [
                "https://www.facebook.com/laucamiluminacion",
                "https://www.instagram.com/laucamiluminacion"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${lora.variable} font-sans antialiased`}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}