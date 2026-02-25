"use client"

import Icon from "./Icons";
import React, { useState, useRef, useEffect } from "react";
import Filters from "./Filters";
import Tag from "./Tag";
import { useMessages, useTranslations } from "next-intl";
import { TagType, Project, Locale } from "@/types";
import { Link } from "@/i18n/routing";

interface ProjectsProps {
  isProject?: boolean;
  locale: Locale;
}

const ProjectCard = ({
  project,
  selected,
  setSelected,
  t,
  index,
}: {
  project: Project;
  selected: TagType | null;
  setSelected: (tag: TagType | null) => void;
  t: (key: string) => string;
  index: number;
}) => {
  const delay = { '--delay': `${index * 0.08}s` } as React.CSSProperties;
  const cardContent = (
    <>
      <div className="imageWrapper">
        <img
          src={project.image ? project.image : "articles/Placeholder.webp"}
          alt={project.title}
          loading="lazy"
        />
      </div>
      <div className="projectInfo">
        <div className="projectMeta">
          <p className="projectTitle">{project.title}</p>
          <p className="projectDate">{project.date}</p>
        </div>
        <div className="projectActions">
          <div onClick={(e) => e.preventDefault()}>
            <Tag
              tag={project.tag}
              selected={selected}
              onSelect={setSelected}
            />
          </div>
        </div>
      </div>
      {(project.hasCaseStudy || project.link) && (
        <span className="projectAction">
          <Icon name={project.hasCaseStudy ? "caseStudyLink" : "externalLink"} />
        </span>
      )}
    </>
  );

  if (project.hasCaseStudy) {
    return (
      <Link
        key={`${project.title}-${project.tag}`}
        className={`projectItem ${project.tag.replace(/\s+/g, '')}`}
        href={`/projects/${project.projectURL}`}
        aria-label={`${t("global.caseStudy")} - ${project.title}`}
        style={delay}
      >
        {cardContent}
      </Link>
    );
  }

  if (project.link) {
    return (
      <a
        key={`${project.title}-${project.tag}`}
        className={`projectItem ${project.tag.replace(/\s+/g, '')}`}
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${t("global.visit")} ${project.title}`}
        style={delay}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <div
      key={`${project.title}-${project.tag}`}
      className={`projectItem ${project.tag.replace(/\s+/g, '')}`}
      style={delay}
    >
      {cardContent}
    </div>
  );
};

const Projects = ({ isProject, locale }: ProjectsProps) => {
  const t = useTranslations();
  const messages = useMessages();
  const tilesRef = useRef<HTMLDivElement>(null);

  const [selected, setSelected] = useState<TagType | null>(null);

  const projects = messages.projectslist as unknown as Project[];

  const filteredProjects = projects.filter((project) =>
    isProject ? true : project.isSelected
  );

  const filterByTag = (projects: Project[]) =>
    projects.filter((project) =>
      selected === null || project.tag === selected
    );

  useEffect(() => {
    const container = tilesRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = container.querySelectorAll('.projectItem');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [selected, filteredProjects.length]);

  return (
    <section className="projectsWrapper">
      <div className="projectsTitle">
        <h2>{t("projects.section.highlights")}</h2>
        {!isProject ? (
          <Link href="/projects">{t("projects.section.seeAll")}</Link>
        ) : null}
      </div>

      {isProject ? (
        <Filters selected={selected} onSelect={setSelected} />
      ) : null}

      <div className="tiles" ref={tilesRef}>
        {filterByTag(filteredProjects).map((project, index) => (
          <ProjectCard
            key={`${project.title}-${project.tag}`}
            project={project}
            selected={selected}
            setSelected={setSelected}
            t={t}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
