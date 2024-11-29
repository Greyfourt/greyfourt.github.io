"use client"

import Icon from "./Icons";
import React, { useState } from "react";
import Filters from "./Filters";
import Tag from "./Tag";
import { useMessages, useTranslations } from "next-intl";
import { TagType, Project, Locale } from "@/types";
import { Link } from "@/i18n/routing";

interface ProjectsProps {
  isProject?: boolean;
  locale: Locale;
}

const Projects = ({ isProject, locale }: ProjectsProps) => {
  const t = useTranslations();
  const messages = useMessages();
  console.log({ messages })
  const [selected, setSelected] = useState<TagType | null>(null);

  const projects = messages.projectslist as unknown as Project[];

  const filteredProjects = projects.filter((project) =>
    isProject ? true : project.isSelected
  );


  const filterByTag = (projects: Project[]) =>
    projects.filter((project) =>
      selected === null || project.tag === selected
    );

  return (
    <section className="projectsWrapper">
      <div className="projectsTitle">

        <h2 >{t("projects.section.highlights")}</h2>
        {!isProject ? (
          <a href={`/${locale}/projects`}>{t("projects.section.seeAll")}</a>
        ) : (
          "")}
      </div>

      {isProject ? (
        <Filters selected={selected} onSelect={setSelected} />
      ) : (
        "")}

      <div className="tiles">
        {filterByTag(filteredProjects).map((project, index) => (
          <div
            key={index}
            className={`projectItem ${project.tag.replace(/\s+/g, '')}`}
          >
            <div className="projectHeader">
              <div className="tagWrapper">
                <Tag
                  tag={project.tag}
                  selected={selected}
                  onSelect={setSelected}
                />
              </div>
              {(project.link || project.hasCaseStudy) && (
                <a
                  className="navLink button Transparent"
                  href={project.hasCaseStudy
                    ? `${locale}/projects/${project.projectURL}`
                    : project.link || ""}
                  target={project.hasCaseStudy ? undefined : "_blank"}
                  rel={!project.hasCaseStudy ? "noopener noreferrer" : undefined}
                >
                  {project.link ? t("global.visit") : t("global.caseStudy")}
                  <Icon type="arrowRight" />
                </a>
              )}
            </div>
            <img className="image" src={project.image} alt={project.title} />
            <div className="titleDate">
              <p>{project.title}</p>
              <p>{project.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
