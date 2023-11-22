"use client";

import Icon from "./Icons";
import React, { useEffect, useState } from "react";
import ProjectsList from "./ProjectsList";
import Tags from "./Filters";
import Filters from "./Filters";
import Tag from "./Tag";

interface TagsProps {
  tag: string;
}

const Projects = ({ isProject }: { isProject?: boolean }) => {
  let Projects = ProjectsList;

  const [currentTag, setCurrentTag] = useState("");

  if (isProject != true) {
    Projects = Projects.filter((Project, index) => index < 3);
  }

  return (
    <div className="projectsWrapper">
      <div className="projectsHeader">
        {isProject === true ? (
          <Filters />
        ) : (
          <div>
            <h2>My Projects</h2>
            <p>Here are some of my projects.</p>
          </div>
        )}
      </div>

      <div className="tiles">
        {Projects.filter((Project) => {
          if (currentTag === "") return true;
          console.log(Project.tag);
          console.log(currentTag);

          return Project.tag === currentTag;
        }).map((Project, index) => {
          return (
            <article
              className={"projectItem " + Project.tag.replaceAll(" ", "")}
              key={index}
            >
              <Tag tag={Project.tag} />

              <a
                className="image"
                href={
                  Project.hasCaseStudy === true
                    ? `/projects/casestudy/${Project.projectURL}`
                    : Project.link
                }
                target={
                  Project.hasCaseStudy === true
                    ? ""
                    : "_blank"
                }
              >
                <img src={Project.image} alt="" />
              </a>
              <div className="titleDate">
                <p>{Project.title}</p>
                <p>{Project.date}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
