"use client";

import Icon from "./Icons";
import React, { useEffect, useState } from "react";
import ProjectsList from "./ProjectsList";
import Filters from "./Filters";
import Tag from "./Tag";

const Projects = ({ isProject }: { isProject?: boolean }) => {
  let Projects = ProjectsList;

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
            <h2>Highlights</h2>
          {/* <button className="button Transparent"> */}
            <a href="/projects">See all</a>
          {/* </button> */}
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
                    {Project.link ? "Visit" : "Case Study"}
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
