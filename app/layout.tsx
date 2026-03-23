import type { Metadata } from 'next'
import { Source_Sans_3 } from 'next/font/google'
import './globals.css'
import ScrollReveal from '@/components/ScrollReveal'

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-source-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Eden Roc — Jouw thuis aan het water',
  description: 'Vier stijlvolle woningen aan de waterkant in Lede. Rust, natuur en architectuur in perfecte balans.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={sourceSans.variable}>
      <body className="font-sans text-ink bg-white">
        {children}
        <ScrollReveal />
      </body>
    </html>
  )
}
