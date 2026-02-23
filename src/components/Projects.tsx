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
        {filterByTag(filteredProjects).map((project) => (
          <div
            key={`${project.title}-${project.tag}`}
            className={`projectItem ${project.tag.replace(/\s+/g, '')}`}
          >
            <div className="imageWrapper">
              <img
                src={project.image ? project.image : "articles/Placeholder.png"}
                alt={project.title}
              />
            </div>
            <div className="projectInfo">
              <div className="projectMeta">
                <p className="projectTitle">{project.title}</p>
                <p className="projectDate">{project.date}</p>
              </div>
              <div className="projectActions">
                <Tag
                  tag={project.tag}
                  selected={selected}
                  onSelect={setSelected}
                />
                {project.hasCaseStudy ? (
                  <Link
                    className="projectLink"
                    href={`/projects/${project.projectURL}`}
                    aria-label={`${t("global.caseStudy")} - ${project.title}`}
                  >
                    <Icon type="caseStudyLink" />
                  </Link>
                ) : project.link ? (
                  <a
                    className="projectLink"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t("global.visit")} ${project.title}`}
                  >
                    <Icon type="externalLink" />
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
