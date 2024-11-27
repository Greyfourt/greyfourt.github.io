"use client";

import Icon from "./Icons";
import React, { useEffect, useState } from "react";
import ProjectsList from "./ProjectsList";
import Filters from "./Filters";
import Tag from "./Tag";
import { useMessages, useTranslations } from "next-intl";

type Project = {
  title: string,
  date: string,
  tag: string,
  image: string,
  link?: string,
  projectURL?: string,
  isSelected: boolean,
  hasCaseStudy: boolean,
  projectCaseStudy?: CaseStudy,
}

type CaseStudy = {
  caseStudyState: string,
  caseStudyDate: string,
  problemImage: string,
  problemDescriptions: string[],
  researchDescription: string,
  brandDescription: string,
  brandCurrentLogo: string[],
  brandPropositions: string[],
  brandTypography: {
    fontName: string,
  },
  brandColors: {
    name: string,
    hex: string,
  }[],
  userJourneyDescription: string,
  userJourneyImage: string,
  outComeDescriptions: string[],
  outComeImages: string[],
}

const Projects = ({ isProject }: { isProject?: boolean }) => {

  const t = useTranslations();

  const messages = useMessages();
  const keys = Object.keys(messages.ProjectsList);

  console.log({ messages })

  const tRich = (key: string) => t.rich(key, {
    dewwweSite: (chunks) => <a href="https://dewwwe.com">{chunks}</a>,
    mark: (chunks) => <mark>{chunks}</mark>,
  })


  // let Projects = ProjectsList;
  let Projects: Project[] | null = null
  if (messages.ProjectsList && typeof messages.ProjectsList !== "object") {
    Projects = messages.ProjectsList as unknown as Project[];
  }

  console.log({ Projects })
  console.log(typeof Projects)

  if (Projects === null || Projects.length == 0) {
    return null
  }

  const [currentTag, setCurrentTag] = useState("All");

  if (isProject != true) {
    Projects = Projects.filter(project => project.isSelected === true);
  }

  return (
    <div className="projectsWrapper">
      {isProject === true ? (
        <div className="projectsHeader">
          <Filters currentTag={currentTag} setCurrentTag={setCurrentTag} />
        </div>
      ) : (
        <div className="projectsHeader">
          <h2>{t('Projects.highlights')}</h2>
          <a href="/projects">{t('Projects.see-all')}</a>
        </div>
      )}

      <div className="tiles">
        {Projects.filter((Project) => {
          if (currentTag === "All") return true;
          return Project.tag === currentTag;
        }).map((Project, index) => {
          return (
            <div
              className={"projectItem " + Project.tag.replaceAll(" ", "")}
              key={index}
            >
              <div className="projectHeader">
                <div className="tagWrapper">
                  <Tag
                    tag={Project.tag}
                    currentTag={currentTag}
                    setCurrentTag={setCurrentTag}
                  />
                </div>

                {Project.link || Project.hasCaseStudy === true ? (
                  <a
                    className="navLink button Transparent"
                    href={
                      Project.hasCaseStudy === true
                        ? `/projects/${Project.projectURL}`
                        : Project.link
                    }
                    target={Project.hasCaseStudy === true ? "" : "_blank"}
                  >
                    {Project.link ? t('visit') : t('case-study')}
                    <Icon type="arrowRight" />
                  </a>
                ) : (
                  ""
                )}
              </div>

              <img className="image" src={Project.image} alt="" />
              <div className="titleDate">
                <p>{Project.title}</p>
                <p>{Project.date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
