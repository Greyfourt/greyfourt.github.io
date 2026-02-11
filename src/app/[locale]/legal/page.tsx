import { routing } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import type { Metadata } from 'next';

const baseUrl = 'https://greyfourt.github.io';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const langPrefix = locale === 'en' ? '' : `/${locale}`;
  const title = locale === 'fr' ? 'Mentions légales' : 'Legal Notice';

  return {
    title,
    alternates: {
      canonical: `${baseUrl}${langPrefix}/legal`,
      languages: {
        'en': `${baseUrl}/legal`,
        'fr': `${baseUrl}/fr/legal`,
      },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function LegalPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = useTranslations('legal');

  return (
    <div className="bodyContainer" id="main-content">
      <div className="legalPage">
        <h1>{t('title')}</h1>
        <p className="lastUpdated">{t('lastUpdated')}</p>

        <section>
          <h2>{t('editorTitle')}</h2>
          <p>{t('editorName')}</p>
          <p>{t('editorStatus')}</p>
          <p>{t('editorLocation')}</p>
          <p><a href={`mailto:${t('editorEmail')}`}>{t('editorEmail')}</a></p>
          <p><a href={`tel:${t('editorPhone')}`}>{t('editorPhone')}</a></p>
        </section>

        <section>
          <h2>{t('hostingTitle')}</h2>
          <p>{t('hostingProvider')}</p>
          <p>{t('hostingAddress')}</p>
          <p>{t('hostingPhone')}</p>
          <p><a href={t('hostingWebsite')} target="_blank" rel="noopener noreferrer">{t('hostingWebsite')}</a></p>
        </section>

        <section>
          <h2>{t('intellectualTitle')}</h2>
          <p>{t('intellectualText1')}</p>
          <p>{t('intellectualText2')}</p>
        </section>

        <section>
          <h2>{t('liabilityTitle')}</h2>
          <p>{t('liabilityText1')}</p>
          <p>{t('liabilityText2')}</p>
          <p>{t('liabilityText3')}</p>
        </section>

        <section>
          <h2>{t('linksTitle')}</h2>
          <p>{t('linksText')}</p>
        </section>

        <section>
          <h2>{t('disputeTitle')}</h2>
          <p>{t('disputeText')}</p>
        </section>
      </div>
    </div>
  );
}
