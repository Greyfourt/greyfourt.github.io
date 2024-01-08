

import Footer, { Menu } from '@/components/Navigation'
import '../styles/App.scss'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Script from "next/script";

const nunito = Nunito({ subsets: ['latin'] })



export const metadata: Metadata = {
  title: "Nazlı's Portfolio",
  description: "I have a passion for web and working towards reducing the friction behind the cursor. I use my background in development to create digital experiences that people love.",

  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
            <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <body className={nunito.className}>
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  )
}
