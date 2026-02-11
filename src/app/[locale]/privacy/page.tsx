import { routing } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import type { Metadata } from 'next';

const baseUrl = 'https://greyfourt.github.io';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const langPrefix = locale === 'en' ? '' : `/${locale}`;
  const title = locale === 'fr' ? 'Politique de confidentialité' : 'Privacy Policy';

  return {
    title,
    alternates: {
      canonical: `${baseUrl}${langPrefix}/privacy`,
      languages: {
        'en': `${baseUrl}/privacy`,
        'fr': `${baseUrl}/fr/privacy`,
      },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function PrivacyPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = useTranslations('privacy');

  return (
    <div className="bodyContainer" id="main-content">
      <div className="legalPage">
        <h1>{t('title')}</h1>
        <p className="lastUpdated">{t('lastUpdated')}</p>
        <p>{t('intro')}</p>

        <section>
          <h2>{t('controllerTitle')}</h2>
          <p>{t('controllerText')}</p>
          <p><a href={`mailto:${t('controllerEmail')}`}>{t('controllerEmail')}</a></p>
        </section>

        <section>
          <h2>{t('analyticsTitle')}</h2>
          <p>{t('analyticsText1')}</p>
          <p>{t('analyticsText2')}</p>
          <p>{t('analyticsText3')}</p>
        </section>

        <section>
          <h2>{t('legalBasisTitle')}</h2>
          <p>{t('legalBasisText')}</p>
        </section>

        <section>
          <h2>{t('dataTitle')}</h2>
          <p>{t('dataIntro')}</p>
          <ul>
            <li>{t('dataItem1')}</li>
            <li>{t('dataItem2')}</li>
            <li>{t('dataItem3')}</li>
            <li>{t('dataItem4')}</li>
            <li>{t('dataItem5')}</li>
            <li>{t('dataItem6')}</li>
          </ul>
          <p>{t('dataNote')}</p>
        </section>

        <section>
          <h2>{t('cookiesTitle')}</h2>
          <p>{t('cookiesIntro')}</p>
          <ul>
            <li>{t('cookieConsent')}</li>
            <li>{t('cookieMatomo')}</li>
          </ul>
          <p>{t('cookiesText')}</p>
        </section>

        <section>
          <h2>{t('retentionTitle')}</h2>
          <p>{t('retentionText')}</p>
        </section>

        <section>
          <h2>{t('thirdPartyTitle')}</h2>
          <ul>
            <li>{t('thirdPartyText1')}</li>
            <li>{t('thirdPartyText2')}</li>
          </ul>
        </section>

        <section>
          <h2>{t('transferTitle')}</h2>
          <p>{t('transferText')}</p>
        </section>

        <section>
          <h2>{t('rightsTitle')}</h2>
          <p>{t('rightsIntro')}</p>
          <ul>
            <li>{t('rightAccess')}</li>
            <li>{t('rightRectify')}</li>
            <li>{t('rightDelete')}</li>
            <li>{t('rightRestrict')}</li>
            <li>{t('rightPortability')}</li>
            <li>{t('rightObject')}</li>
          </ul>
          <p>{t('rightsText')}</p>
        </section>

        <section>
          <h2>{t('cnilTitle')}</h2>
          <p>{t('cnilText')}</p>
          <p><a href={t('cnilWebsite')} target="_blank" rel="noopener noreferrer">{t('cnilWebsite')}</a></p>
        </section>
      </div>
    </div>
  );
}
