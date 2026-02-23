'use client'

import { WebsiteCarbonBadge } from "react-websitecarbon-badge";
import Icon from "./Icons"
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";


const Footer = () => {
  const t = useTranslations();
  const pathname = usePathname();
  const locale = pathname.startsWith('/fr') ? 'fr' : 'en';

  return (
    <footer>
      <div className="contactIcons">
        <a
          href={locale === 'fr' ? '/CV_2026_Nazli_FR.pdf' : '/CV_2026_Nazli_EN.pdf'}
          target="_blank"
          rel="nofollow"
          aria-label="Download CV"
        >
          <Icon type="doc" />
        </a>
        <a href="tel:+33785632386" aria-label="Call phone">
          <Icon type="phone" />
        </a>
        <a href="mailto:nazliozcubukcuoglu@gmail.com" aria-label="Send email">
          <Icon type="mail" />
        </a>
        <a href="https://linkedin.com/in/nazli-oz/" aria-label="LinkedIn profile">
          <Icon type="linkedin" />
        </a>
        <a href="https://github.com/greyfourt/greyfourt.github.io" target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
          <Icon type="github" />
        </a>
      </div>
      <div className="footerLinks">
        <a href={`/${locale}/legal`}>{t('footer.legal')}</a>
        <span>•</span>
        <a href={`/${locale}/privacy`}>{t('footer.privacy')}</a>
      </div>
      <p>{t.rich('footer.copyright')}</p>
      <WebsiteCarbonBadge url="greyfourt.github.io" co2="0.08" percentage="93" dark={true} />
    </footer>
  );
}

export const Menu = ({ locale }: { locale: string }) => {
  const t = useTranslations();
  const currentRoute = usePathname()

  const isHome = currentRoute === `/${locale}` || (locale === 'en' && currentRoute === '/');
  const isProjects = currentRoute.startsWith(`/${locale}/projects`) || (locale === 'en' && currentRoute.startsWith('/projects'));

  return (
    <nav>
      <a
        href={`/${locale}`}
        className={"navItem " + (isHome ? "active" : "")}
      >
        {t('nav.home')}
      </a>
      <a
        href={`/${locale}/projects`}
        className={
          "navItem " + (isProjects ? "active" : "")
        }
      >
        {t('nav.projects')}
      </a>
      <a
        className="navItem "
        href={locale === 'fr' ? '/CV_2026_Nazli_FR.pdf' : '/CV_2026_Nazli_EN.pdf'}
        target="_blank"
        rel="nofollow"
        aria-label="Download CV"
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
