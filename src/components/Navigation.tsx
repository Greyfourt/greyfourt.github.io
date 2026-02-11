'use client'

import { WebsiteCarbonBadge } from "react-websitecarbon-badge";
import Icon from "./Icons"
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";


const Footer = () => {
  const t = useTranslations();

  return (
    <footer>
      <div className="contactIcons">
        <a
          href="https://greyfourt.github.io/CV_English_Nazli.pdf"
          download="CV_English_Nazli"
          target="_blank"
          rel="nofollow"
          aria-label="Download CV"
        >
          <Icon type="doc" />
        </a>
        <a href="tel:+330769201157">
          <Icon type="phone" />
        </a>
        <a href="mailto:nazliozcubukcuoglu@gmail.com" aria-label="Send email">
          <Icon type="mail" />
        </a>
        <a href="https://linkedin.com/in/nazli-oz/" aria-label="LinkedIn profile">
          <Icon type="linkedin" />
        </a>
      </div>
      {/* <WebsiteCarbonBadge url="greyfourt.github.io" dark={true} /> */}
      <p>{t.rich('footer.copyright')}</p>
    </footer>
  );
}

export const Menu = ({ locale }: { locale: string }) => {

  const currentRoute = usePathname()

  return (
    <nav>
      <a
        href={`/${locale}`}
        className={"navItem " + (currentRoute === "/" ? "active" : "")}
      >
        Home
      </a>
      <a
        href={`/${locale}/projects`}
        className={
          "navItem " + (currentRoute === "/projects" ? "active" : "")
        }
      >
        Projects
      </a>
      <a
        className="navItem "
        href="https://greyfourt.github.io/CV_English_Nazli.pdf"
        target="_blank"
        rel="nofollow"
      >
        <Icon type="doc" />
      </a>
      <a className="navItem" href="mailto:nazliozcubukcuoglu@gmail.com" aria-label="Send email">
        <Icon type="mail" />
      </a>

      <a
        href={ currentRoute.replace(`/${locale}`,locale === 'en' ? '/fr' : '/en')}
        className="lang"
      >
        {locale === 'en' ? 'FR' : 'EN'}
      </a>

    </nav>
  );
}

export default Footer
