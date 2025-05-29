import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kanat Endo - Mountain Developer Portfolio',
  description: 'Mountain-inspired portfolio showcasing innovation and natural beauty',
  keywords: ['portfolio', 'developer', 'mountain', 'nature', 'innovation'],
  authors: [{ name: 'Kanat Endo' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Kanat Endo - Mountain Developer Portfolio',
    description: 'Experience the majestic beauty of technology',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          {children}
        </div>
      </body>
    </html>
  )
}
