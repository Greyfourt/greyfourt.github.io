

import Footer, { Menu } from '@/components/Navigation'
import '../styles/App.scss'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Nazlı's Portfolio",
  description: "Mon objectif est de créer des expériences utilisateurs incroyables en alliant ma passion pour le design et ma connaissance technique.",
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  )
}
