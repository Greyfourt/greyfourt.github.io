
import Icon from "@/components/Icons";
import "../styles/App.scss";
import Projects from "@/components/Projects";

import { useTranslations } from 'next-intl';


export default function Home() {
  const trad = useTranslations('Home');

  const tradRich = (key: string) => trad.rich(key, {
    dewwweSite: (chunks) => <a href="https://dewwwe.com">{chunks}</a>,
    mark: (chunks) => <mark>{chunks}</mark>,
  })

  return (

    <div className="bodyContainer">
      <div className="landingHeader">
        <h1>{trad('name')}</h1>
        <h3>{tradRich('role')}</h3>
        <p>{trad('headerDesc')}</p>
        <button className="button Primary">
          <a href="/projects/floof">{trad('checkLatestCase')}</a>
          <Icon type="arrowRight" />
        </button>
      </div>

      <div className="about">
        <div className="aboutImage">
          <img src="/illustration.png" alt="" />
        </div>
        <div className="aboutTextCol">
          <h2>{tradRich('aboutText.title')}</h2>
          <div className="aboutText">
            <p>{tradRich('aboutText.one')}</p>
            <p>{tradRich('aboutText.two')}</p>
            <p>{tradRich('aboutText.three')}</p>
            <p>{tradRich('aboutText.four')}</p>
          </div>

          <a
            href="https://greyfourt.github.io/CV_English_Nazli.pdf"
            download="CV_English_Nazli"
            target="_blank"
            rel="nofollow"
          >
            {trad('downloadCV')}
          </a>
        </div>
      </div>

      <Projects />

      <div className="contact">
        <div>
          <h3>{trad('contact.help')}</h3>
          <h2>{tradRich('contact.letsTalk')}</h2>
        </div>
        <div className="contactRow">
          <h4>{trad('contact.inPerson')}</h4>
          <div className="locationRow">
            <div className="location">
              <Icon type="location" />
              <h4>{trad('contact.locations.lyon')}</h4>
            </div>
            <h4>{trad('contact.locations.or')}</h4>
            <div className="location">
              <Icon type="location" />
              <h4>{trad('contact.locations.turin')}</h4>
            </div>
          </div>
        </div>

        <div className="contactRow">
          <h4>{trad('contact.remote.title')}</h4>
          <div className="location">
            <Icon type="world" />
            <h4>{trad('contact.remote.option')}</h4>
          </div>
        </div>

        <button className="button Primary">
          <a href="mailto:nazliozcubukcuoglu@gmail.com">{trad('letsDiscuss')}</a>
        </button>
      </div>
    </div>
  );
}
