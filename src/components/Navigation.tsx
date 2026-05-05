'use client'

import { useState, useEffect } from "react";
import Icon from "./Icons"
import ThemeToggle from "./ThemeToggle"
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";


const Footer = () => {
  const t = useTranslations();

  return (
    <footer>
      <div className="contactIcons">
        <Link
          href="/cv"
          aria-label={t('nav.cv')}
        >
          <Icon name="doc" />
        </Link>
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
    </footer>
  );
}

export const Menu = ({ locale }: { locale: string }) => {
  const t = useTranslations();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const otherLocale = locale === 'en' ? 'fr' : 'en';

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
        <div className="navActions">
          <ThemeToggle />
          <Link href={pathname} locale={otherLocale} className="navMenuLang" onClick={closeMenu}>
            {locale === 'en' ? 'fr' : 'en'}
          </Link>
          <button
            className={"navHamburger" + (isOpen ? " open" : "")}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span />
          </button>
        </div>
      </nav>

      <div className={"navMenu" + (isOpen ? " open" : "")}>
        <div className="navMenuLinks">
          <Link href="/" onClick={closeMenu}>
            {t('nav.home')}
          </Link>
          <Link href="/projects" onClick={closeMenu}>
            {t('nav.projects')}
          </Link>
          <Link href="/cv" onClick={closeMenu}>
            {t('nav.cv')}
          </Link>
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
        </div>
      </div>
    </>
  );
}

export default Footer
