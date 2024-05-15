

import Footer, { Menu } from '@/components/Navigation'
import '../styles/App.scss'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Matomo from '@/utils/matomo'


const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Nazlı's Portfolio",
  description: "I have a passion for web and working towards reducing the friction behind the cursor. I use my background in development to create digital experiences that people love.",
  manifest: '/manifest.json',
  verification: {
    google :'J7DzULl5L0EO25TXMl72GYdA542OstLqFlCPRmO3lPA'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Matomo />
      </head>
      <body className={nunito.className}>
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  )
}
