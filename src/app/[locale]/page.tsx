// "use client"

import Icon from "@/components/Icons";
import Projects from "@/components/Projects";
import "../styles/App.scss";

import { useTranslations } from 'next-intl';
// import { useState } from "react";
import { setRequestLocale } from "next-intl/server";
import { Link, routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
// import ConfettiBackground from "@/components/ConfettiBackground";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));

  // return [{ locale: 'en' }, { locale: 'fr' }];
}

export default function Home({ params: { locale } }: {
  params: {
    locale: string
  }
}) {
  console.log("Home [locale]")


  if (!locale) {
    console.log("haaaaa")
  }

  setRequestLocale(locale);

  const t = useTranslations('home');

  const tRich = (key: string) => t.rich(key, {
    dewwweSite: (chunks) => <a href="https://dewwwe.com">{chunks}</a>,
    mark: (chunks) => <mark>{chunks}</mark>,
  })

  return (
    <div className="bodyContainer">

      <div className="landingHeader">
        <h1>Nazlı Özçubukçuoğlu</h1>
        <h3><mark>{t('header.role')}</mark></h3>
        <p>{t('header.description')}</p>
        <button
          className="button Primary"

        >
          <Link href="/projects/floof">{t('header.cta.checkLatestCase')}</Link>
          <Icon type="arrowRight" />
        </button>
      </div>

      <div className="about">
        <div className="aboutImage">
          <img src="/illustration.png" alt="" />
        </div>
        <div className="aboutTextCol">
          <h2>{t('about.title')}</h2>
          <div className="aboutText">
            <p>{tRich('about.biography.one')}</p>
            <p>{tRich('about.biography.two')}</p>
            <p>{tRich('about.biography.three')}</p>
            <p>{tRich('about.biography.four')}</p>
          </div>

          <a
            href="https://greyfourt.github.io/CV_English_Nazli.pdf"
            download="CV_English_Nazli"
            target="_blank"
            rel="nofollow"
          >
            {t('header.cta.downloadCV')}
          </a>
        </div>
      </div>

      <Projects />

      <div className="contact">
        <div>
          <h3>{t('contact.help')}</h3>
          <h2>{tRich('contact.letsTalk')}</h2>
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

        <button className="button Primary">
          <a href="mailto:nazliozcubukcuoglu@gmail.com">{tRich('header.cta.sendMail')}</a>
        </button>
      </div>
    </div>
  );
}
