
import Projects from "@/components/Projects";
import { routing } from "@/i18n/routing";
import { Locale } from "@/types";
import type { Metadata } from 'next';

const baseUrl = 'https://greyfourt.github.io';

const seoData: Record<string, { title: string; description: string }> = {
  en: {
    title: "Projects",
    description: "Explore my portfolio of design and development projects — logos, websites, mobile apps, and more. 15+ projects across Europe.",
  },
  fr: {
    title: "Projets",
    description: "Découvrez mon portfolio de projets de design et développement — logos, sites web, applications mobiles et plus. 15+ projets à travers l'Europe.",
  },
};

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const langPrefix = locale === 'en' ? '' : `/${locale}`;
  const { title, description } = seoData[locale] || seoData.en;

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}${langPrefix}/projects`,
      languages: {
        'en': `${baseUrl}/projects`,
        'fr': `${baseUrl}/fr/projects`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}${langPrefix}/projects`,
      siteName: "Nazlı's Portfolio",
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      type: 'website',
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

const ProjectsPage = ({params: {locale}}: { params: {
  locale: Locale
}}) => {
  let isProject = true;

  return (
    <div className="bodyContainer">
      <Projects 
      isProject
      locale={locale} />
    </div>
  );
};

export default ProjectsPage;
