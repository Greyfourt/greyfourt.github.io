
import Footer, { Menu } from '@/components/Navigation'
import "../styles/App.scss";
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import CookieBanner from '@/components/CookieBanner'

import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';

const nunito = Nunito({ subsets: ['latin'] })

const baseUrl = 'https://greyfourt.github.io';

const seoData: Record<string, { title: string; description: string }> = {
  en: {
    title: "Nazlı Özçubukçuoğlu - Creative Designer & Developer",
    description: "Creative Designer & Developer with 5+ years of experience across startups, SaaS, and freelance. I transform complex ideas into delightful, user-centric digital experiences.",
  },
  fr: {
    title: "Nazlı Özçubukçuoğlu - Portfolio Designer & Développeuse Créative",
    description: "Designer & Développeuse Créative avec 5+ ans d'expérience. Je transforme des idées complexes en expériences numériques conviviales et agréables.",
  },
};

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const langPrefix = locale === 'en' ? '' : `/${locale}`;
  const canonicalUrl = `${baseUrl}${langPrefix}`;
  const { title, description } = seoData[locale] || seoData.en;

  return {
    title: {
      default: title,
      template: `%s | Nazlı's Portfolio`,
    },
    description,
    manifest: '/manifest.json',
    verification: {
      google: 'J7DzULl5L0EO25TXMl72GYdA542OstLqFlCPRmO3lPA',
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en': baseUrl,
        'fr': `${baseUrl}/fr`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Nazlı's Portfolio",
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      alternateLocale: locale === 'fr' ? ['en_US'] : ['fr_FR'],
      type: 'website',
      images: [
        {
          url: `${baseUrl}/illustration.png`,
          alt: "Nazlı Özçubukçuoğlu - Creative Designer & Developer",
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/illustration.png`],
    },
  };
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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Nazlı Özçubukçuoğlu',
    url: baseUrl,
    jobTitle: 'Creative Designer & Developer',
    knowsLanguage: ['French', 'English', 'Turkish'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lyon',
      addressCountry: 'France',
    },
    email: 'nazliozcubukcuoglu@gmail.com',
  };

  return (
    <html lang={locale}>
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: `(function(){var t=localStorage.getItem('theme');if(!t)t=window.matchMedia('(prefers-color-scheme:light)').matches?'light':'dark';document.documentElement.setAttribute('data-theme',t);})();` }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={nunito.className}>
        <NextIntlClientProvider messages={messages}>
          <a href="#main-content" className="skip-link">Skip to content</a>
          <Menu locale={locale}/>
          {children}
          <Footer />
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
