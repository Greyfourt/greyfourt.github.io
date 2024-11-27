"use client"

import Icon from "@/components/Icons";
import Projects from "@/components/Projects";
import "../styles/App.scss";

import { useTranslations } from 'next-intl';
import { useState } from "react";
// import ConfettiBackground from "@/components/ConfettiBackground";


export default function Home() {
  const t = useTranslations('Home');

  const tRich = (key: string) => t.rich(key, {
    dewwweSite: (chunks) => <a href="https://dewwwe.com">{chunks}</a>,
    mark: (chunks) => <mark>{chunks}</mark>,
  })


  return (
    <div className="bodyContainer">

      <div className="landingHeader">
        <h1>Nazlı Özçubukçuoğlu</h1>
        <h3>{tRich('role')}</h3>
        <p>{t('headerDesc')}</p>
        <button
          className="button Primary"
      
        >
          <a href="/projects/floof">{t('checkLatestCase')}</a>
          <Icon type="arrowRight" />
        </button>
      </div>

      <div className="about">
        <div className="aboutImage">
          <img src="/illustration.png" alt="" />
        </div>
        <div className="aboutTextCol">
          <h2>{tRich('aboutText.title')}</h2>
          <div className="aboutText">
            <p>{tRich('aboutText.one')}</p>
            <p>{tRich('aboutText.two')}</p>
            <p>{tRich('aboutText.three')}</p>
            <p>{tRich('aboutText.four')}</p>
          </div>

          <a
            href="https://greyfourt.github.io/CV_English_Nazli.pdf"
            download="CV_English_Nazli"
            target="_blank"
            rel="nofollow"
          >
            {t('downloadCV')}
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
          <h4>{t('contact.inPerson')}</h4>
          <div className="locationRow">
            <div className="location">
              <Icon type="location" />
              <h4>{t('contact.locations.lyon')}</h4>
            </div>
            <h4>{t('contact.locations.or')}</h4>
            <div className="location">
              <Icon type="location" />
              <h4>{t('contact.locations.turin')}</h4>
            </div>
          </div>
        </div>

        <div className="contactRow">
          <h4>{t('contact.remote.title')}</h4>
          <div className="location">
            <Icon type="world" />
            <h4>{t('contact.remote.option')}</h4>
          </div>
        </div>

        <button className="button Primary">
          <a href="mailto:nazliozcubukcuoglu@gmail.com">{t('letsDiscuss')}</a>
        </button>
      </div>
    </div>
  );
}
