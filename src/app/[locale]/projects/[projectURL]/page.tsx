
import { notFound } from "next/navigation";
import CaseStudy from "@/components/CaseStudy";
import { NextIntlClientProvider, useMessages, useTranslations } from 'next-intl';

interface PageProps {
  params: {
    projectURL: string;
  };
}

type CaseStudy = {
  caseStudyState: string;
  caseStudyDate: string;
  problemImage: string;
  problemDescriptions: string[];
  researchDescription: string;
  brandDescription: string;
  brandCurrentLogo: string[];
  brandPropositions: string[];
  brandTypography: {
    fontName: string;
  };
  brandColors: {
    name: string;
    hex: string;
  }[];
  userJourneyDescription: string;
  userJourneyImage: string;
  outComeDescriptions: string[];
  outComeImages: string[];
}

type Project = {
  title: string;
  date: string;
  tag: string;
  image: string;
  link?: string;
  projectURL?: string;
  isSelected: boolean;
  hasCaseStudy: boolean;
  projectCaseStudy?: CaseStudy;
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
    <NextIntlClientProvider messages={messages}>
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
    </NextIntlClientProvider>
  );
}

export default ProjectPage;
