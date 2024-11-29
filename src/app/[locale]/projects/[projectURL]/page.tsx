export const dynamic = 'force-static'

import { notFound } from "next/navigation";
import CaseStudy from "@/components/CaseStudy";
import { NextIntlClientProvider, useMessages, useTranslations } from 'next-intl';
import { Project } from "@/types";
import { routing } from "@/i18n/routing";
// import { routing } from "@/i18n/routing";

interface PageProps {
  params: {
    projectURL: string;
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



const ProjectPage = ({ params }: PageProps) => {
  const messages = useMessages();
  const t = useTranslations();
  const projectsList = messages.projectslist as unknown as Project[];

  const project = projectsList.find(p => p.projectURL === params.projectURL);

  if (!project) notFound();
  if (!project.hasCaseStudy || !project.projectCaseStudy) {
    return <div className="bodyContainer">
      <h2>{t('projects.errors.noCaseStudy')}</h2>
    </div>;
  }

  return (
      <div className="bodyContainer">
        <div className="casestudyHeaderContainer">
          <h1>{project.title} • {project.date}</h1>
          <p className="foot">{t('global.caseStudy')} <mark>{project.projectCaseStudy.caseStudyState}</mark></p>
          <p className="foot">{t('global.published')} {project.projectCaseStudy.caseStudyDate}</p>
        </div>
        <div className="casestudyContentWrapper">
          <CaseStudy projectName={params.projectURL} caseStudy={project.projectCaseStudy} />
        </div>
      </div>
  );
}

export default ProjectPage;
