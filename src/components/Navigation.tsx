'use client'

import { useState, useEffect } from "react";
import Icon from "./Icons"
import ThemeToggle from "./ThemeToggle"
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";


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
          <Icon name="doc" />
        </a>
        <a href="tel:+33785632386" aria-label="Call phone">
          <Icon name="phone" />
        </a>
        <a href="mailto:nazliozcubukcuoglu@gmail.com" aria-label="Send email">
          <Icon name="mail" />
        </a>
        <a href="https://linkedin.com/in/nazli-oz/" aria-label="LinkedIn profile">
          <Icon name="linkedin" />
        </a>
        <a href="https://github.com/greyfourt/greyfourt.github.io" target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
          <Icon name="github" />
        </a>
      </div>
      <div className="footerLinks">
        <Link href="/legal">{t('footer.legal')}</Link>
        <span>•</span>
        <Link href="/privacy">{t('footer.privacy')}</Link>
      </div>
      <p>{t.rich('footer.copyright')}</p>
      <div className="carbonbadge">
        <a href="https://www.websitecarbon.com/website/greyfourt-github-io/" target="_blank" rel="noopener noreferrer">
          0.08g of CO<sub>2</sub>/view
        </a>
        <a href="https://websitecarbon.com" target="_blank" rel="noopener noreferrer">
          Website Carbon
        </a>
      </div>
    </footer>
  );
}

export const Menu = ({ locale }: { locale: string }) => {
  const t = useTranslations();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const otherLocale = locale === 'en' ? 'fr' : 'en';
  const cvHref = locale === 'fr' ? '/CV_2026_Nazli_FR.pdf' : '/CV_2026_Nazli_EN.pdf';

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <nav>
        <Link href="/" className="navBrand" onClick={closeMenu}>
          greyfourt
        </Link>
        <button
          className={"navHamburger" + (isOpen ? " open" : "")}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span />
        </button>
      </nav>

      <div className={"navMenu" + (isOpen ? " open" : "")}>
        <div className="navMenuLinks">
          <Link href="/" onClick={closeMenu}>
            {t('nav.home')}
          </Link>
          <Link href="/projects" onClick={closeMenu}>
            {t('nav.projects')}
          </Link>
          <a href={cvHref} target="_blank" rel="nofollow" onClick={closeMenu}>
            CV
          </a>
          <a href="mailto:nazliozcubukcuoglu@gmail.com" onClick={closeMenu}>
            Contact
          </a>
        </div>

        <div className="navMenuFooter">
          <div className="navMenuSocials">
            <a href="mailto:nazliozcubukcuoglu@gmail.com" aria-label="Email">
              <Icon name="mail" />
            </a>
            <a href="https://linkedin.com/in/nazli-oz/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <Icon name="linkedin" />
            </a>
            <a href="https://github.com/greyfourt/greyfourt.github.io" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <Icon name="github" />
            </a>
          </div>
          <div className="navMenuUtils">
            <ThemeToggle />
            <Link href={pathname} locale={otherLocale} className="navMenuLang" onClick={closeMenu}>
              {locale === 'en' ? 'fr' : 'en'}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer
