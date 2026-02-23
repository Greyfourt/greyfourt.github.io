// "use client"

import Icon from "@/components/Icons";
import Projects from "@/components/Projects";
import "../styles/App.scss";

import { useTranslations } from 'next-intl';
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { Locale, AboutMe, AboutWork, Section } from "@/types";
import About from "@/components/About";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));

  // return [{ locale: 'en' }, { locale: 'fr' }];
}

export default function Home({ params: { locale, aboutMe, aboutWork, sections } }: {
  params: {
    locale: Locale,
    aboutMe: AboutMe,
    aboutWork: AboutWork,
    sections: Section,
  }
}) {
  setRequestLocale(locale);

  const t = useTranslations('home');

  const tRich = (key: string) => t.rich(key, {
    dewwweSite: (chunks) => <a href="https://dewwwe.com">{chunks}</a>,
    mark: (chunks) => <mark>{chunks}</mark>,
  })

  return (
    <div className="bodyContainer" id="main-content">

      <div className="header">
        <div className="illustration">
          <img src="/illustration.png" alt="Nazli illustration" />
        </div>
        <div className="titleSection">
          <h1>Nazlı Özçubukçuoğlu</h1>

          <h3><mark>{t('header.role.one')}</mark></h3>
          <div>
            <h4>{t('header.role.two')}</h4>
            <h4>{t('header.role.three')}</h4>
          </div>
        </div>
      </div>

      <About locale={locale} />

      <Projects locale={locale} />

      <div className="contact">
        <div>
          <h3>{t('contact.letsTalk.one')}</h3>
          <h2>{tRich('contact.letsTalk.two')}</h2>
        </div>
        <div className="contactRow">
          <h4>{t('contact.locations.inPerson')}</h4>
          <div className="locationRow">
            <div className="location">
              <Icon type="location" />
              <h4>{t('contact.locations.places.lyon')}</h4>
            </div>
            <h4>{t('contact.locations.places.or')}</h4>
            <div className="location">
              <Icon type="location" />
              <h4>{t('contact.locations.places.turin')}</h4>
            </div>
          </div>
        </div>

        <div className="contactRow">
          <h4>{t('contact.locations.remote.title')}</h4>
          <div className="location">
            <Icon type="world" />
            <h4>{t('contact.locations.remote.option')}</h4>
          </div>
        </div>

        <a href="mailto:nazliozcubukcuoglu@gmail.com" className="button Secondary">
          {tRich('header.cta.sendMail')}
        </a>
      </div>
    </div>
  );
}
