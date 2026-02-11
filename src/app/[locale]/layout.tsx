

import Footer, { Menu } from '@/components/Navigation'
import "../styles/App.scss";
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Matomo from '@/utils/matomo'

import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
 


const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Nazlı's Portfolio",
  description: "I have a passion for web and working towards reducing the friction behind the cursor. I use my background in development to create digital experiences that people love.",
  manifest: '/manifest.json',
  verification: {
    google: 'J7DzULl5L0EO25TXMl72GYdA542OstLqFlCPRmO3lPA'
  }
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
 
  // Enable static rendering
  setRequestLocale(locale);
  
  const messages = await getMessages({locale});

  return (
    <html lang={locale}>
      <head>
        <Matomo />
      </head>
      <body className={nunito.className}>
        <NextIntlClientProvider messages={messages}>
          <a href="#main-content" className="skip-link">Skip to content</a>
          <Menu locale={locale}/>
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
