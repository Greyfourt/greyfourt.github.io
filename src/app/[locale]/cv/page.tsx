import { routing } from "@/i18n/routing"
import { setRequestLocale } from "next-intl/server"
import type { Metadata } from 'next'
import CV from "@/components/CV"
import { Locale } from "@/types"

const baseUrl = 'https://greyfourt.github.io'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const langPrefix = locale === 'en' ? '' : `/${locale}`
  const isFr = locale === 'fr'
  const title = isFr ? 'CV — Nazlı Özçubukçuoğlu' : 'Resume — Nazlı Özçubukçuoğlu'
  const description = isFr
    ? "CV de Nazlı Özçubukçuoğlu — Designer Créative & Développeuse à Lyon."
    : "Resume of Nazlı Özçubukçuoğlu — Creative Designer & Developer based in Lyon."

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: `${baseUrl}${langPrefix}/cv`,
      languages: {
        'en': `${baseUrl}/cv`,
        'fr': `${baseUrl}/fr/cv`,
      },
    },
  }
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default function CVPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale)
  return <CV locale={locale as Locale} />
}
