import { Locale, AboutMe, AboutWork } from "@/types";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";

interface AboutProps {
  locale: Locale;
  t: any;
  type: 'aboutMe' | 'aboutWork';
  keyName?: string;
}

const AboutCard = ({ keyName, t, locale, type }: AboutProps) => {
  return (
    <div key={keyName} className="aboutCard">
      <div
        className="icon"
        role="img"
        aria-label={t(`${type}.sections.${keyName}.title`)}
        style={{
          maskImage: `url(/icons/${keyName}.svg)`,
          WebkitMaskImage: `url(/icons/${keyName}.svg)`,
        }}
      />
      <p className="foot title">{t(`${type}.sections.${keyName}.title`)}</p>
      <div className="descriptions">
        <p className="main">{t(`${type}.sections.${keyName}.main`)}</p>
        {t.has(`${type}.sections.${keyName}.secondary`) && (
          <p className="secondary">
            {t(`${type}.sections.${keyName}.secondary`)}
          </p>
        )}
      </div>
      {keyName === 'experiences' && (
        <a
          href={locale === 'fr' ? '/CV_2026_Nazli_FR.pdf' : '/CV_2026_Nazli_EN.pdf'}
          target="_blank"
          rel="nofollow"
          className="cta"
        >
          {t(`${type}.sections.${keyName}.cta`)}
        </a>
      )}
    </div>
  );
};

const AboutSection = ({ locale, t, type }: AboutProps) => {
  const sectionKeys = Object.keys(t.raw(`${type}.sections`));
  const isWorkSection = type === 'aboutWork';

  return (
    <div className="about">
      <h2>{t(`${type}.title`)}</h2>
      {isWorkSection && (
        <div className="aboutText">
          <p>{t('aboutWork.biography.one')}</p>
          <p>{t('aboutWork.biography.two')}</p>
          <Link
            href="/projects/floof"
            className="button Secondary"
          >
            {t('header.cta.checkLatestCase')}
          </Link>
        </div>
      )}
      <div className="aboutGrid">
        {sectionKeys.map((key) => (
          <AboutCard 
            key={key} 
            keyName={key} 
            t={t} 
            locale={locale}
            type={type}
          />
        ))}
      </div>
    </div>
  );
};

const About = ({ locale }: { locale: Locale }) => {
  setRequestLocale(locale);
  
  const t = useTranslations('home');
  const tRich = (key: string) => t.rich(key, {
    dewwweSite: (chunks) => <a href="https://dewwwe.com">{chunks}</a>,
    mark: (chunks) => <mark>{chunks}</mark>,
  });

  return (
    <>
      <AboutSection locale={locale} t={t} type="aboutMe" />
      <AboutSection locale={locale} t={t} type="aboutWork" />
    </>
  );
};

export default About;
