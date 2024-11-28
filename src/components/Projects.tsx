import Icon from "./Icons";
import React, { Dispatch, SetStateAction, useState } from "react";
import Filters from "./Filters";
import Tag from "./Tag";
import { useMessages, useTranslations } from "next-intl";
import { TagType, Project } from "@/constants";

const Projects = ({ isProject }: { isProject?: boolean }) => {
  const t = useTranslations();
  const messages = useMessages();
  const [selected, setSelected] = useState<TagType | null>(null);

  const projects = messages.projectslist as unknown as Project[];

  const filteredProjects = isProject
    ? projects
    : projects.filter((project) => project.isSelected);

  const filterProjects = (projects: Project[]) =>
    projects.filter(
      (project) => selected === null || project.tag === selected
    );

  return (
    <section className="projectsWrapper">
      <div className="projectsHeader">
        {(isProject) ? (
          <Filters selected={selected} onSelect={setSelected} />
        ) : (
          <>
            <h2>{t("projects.section.highlights")}</h2>
            <a href="/projects">{t("projects.section.seeAll")}</a>
          </>
        )}
      </div>

      <div className="tiles">
        {filterProjects(filteredProjects).map((project, index) => (
          <div
            key={index}
            className={`projectItem ${project.tag.replaceAll(" ", "")}`}
          >
            <div className="projectHeader">
              <div className="tagWrapper">
                <Tag tag={project.tag} selected={selected} onSelect={setSelected} />
              </div>
              {(project.link || project.hasCaseStudy) && (
                <a
                  className="navLink button Transparent"
                  href={
                    project.hasCaseStudy
                      ? `/projects/${project.projectURL}`
                      : project.link
                  }
                  target={project.hasCaseStudy ? "" : "_blank"}
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
