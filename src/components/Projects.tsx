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
          <Link href="/projects">{t("projects.section.seeAll")}</Link>
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
            key={`${project.title}-${project.tag}`}
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
              {project.hasCaseStudy ? (
                <Link
                  className="navLink button Secondary"
                  href={`/projects/${project.projectURL}`}
                >
                  {t("global.caseStudy")}
                  <Icon type="arrowRight" />
                </Link>
              ) : project.link ? (
                <a
                  className="navLink button Secondary"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("global.visit")}
                  <Icon type="arrowRight" />
                </a>
              ) : null}
            </div>
            <img className="image" src={project.image ? project.image : "articles/Placeholder.png"} alt={project.title} />
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
