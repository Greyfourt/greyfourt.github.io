export const dynamic = 'force-static'

import { notFound } from "next/navigation";
import { useMessages, useTranslations } from 'next-intl';
import { Locale, Project } from "@/types";
import { routing } from "@/i18n/routing";
import CaseStudy from "@/components/CaseStudy";
import { getMessages, getTranslations } from "next-intl/server";

interface PageProps {
  params: {
    projectURL: string;
    locale: Locale;
  };
}

export function generateStaticParams() {
  const projectsWithCaseStudy = ['floof', 'knotbook']
  const locales = routing.locales

  return projectsWithCaseStudy.flatMap(project =>
    locales.map(locale => ({
      projectURL: project,
      locale
    }))
  )
}

const baseUrl = 'https://greyfourt.github.io';

export async function generateMetadata({ params: { locale, projectURL } }: PageProps) {
  const messages = await getMessages({ locale });
  const projectsList = messages.projectslist as unknown as Project[];
  const project = projectsList.find(p => p.projectURL === projectURL);

  if (!project) return {};

  const langPrefix = locale === 'en' ? '' : `/${locale}`;
  const canonicalUrl = `${baseUrl}${langPrefix}/projects/${projectURL}`;
  const description = project.projectCaseStudy?.problemDescriptions?.[0]?.substring(0, 155) + '...' || `Case study for ${project.title}`;

  return {
    title: `${project.title} - Case Study`,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en': `${baseUrl}/projects/${projectURL}`,
        'fr': `${baseUrl}/fr/projects/${projectURL}`,
      },
    },
    openGraph: {
      title: `${project.title} - Case Study`,
      description,
      url: canonicalUrl,
      siteName: "Nazlı's Portfolio",
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      type: 'article',
      images: [
        {
          url: `${baseUrl}${project.image}`,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} - Case Study`,
      description,
      images: [`${baseUrl}${project.image}`],
    },
  };
}

const ProjectPage = async ({ params }: PageProps) => {

  const t = await getTranslations({ locale: params.locale });
  const messages = await getMessages({ locale: params.locale });

  const projectsList = messages.projectslist as unknown as Project[];

  const project = projectsList.find(p => p.projectURL === params.projectURL);

  if (!project) notFound();
  if (!project.hasCaseStudy || !project.projectCaseStudy) {
    return (
      <div className="bodyContainer">
        <h2>{t('projects.errors.noCaseStudy')}</h2>
      </div>
    );
  }

  return (
    <div className="bodyContainer">
      <div className="casestudyHeaderContainer">
        <h1>{project.title} • {project.date}</h1>
        <p className="foot">
          {t('global.caseStudy')} <mark>{project.projectCaseStudy.caseStudyState}</mark>
        </p>
        <p className="foot">
          {t('global.published')} {project.projectCaseStudy.caseStudyDate}
        </p>
      </div>
      <div className="casestudyContentWrapper">
        <CaseStudy
          projectName={params.projectURL}
          caseStudy={project.projectCaseStudy}
          locale={params.locale}
        />

      </div>
    </div>
  );
}

export default ProjectPage;
