'use client'

import ProjectsList from "@/components/ProjectsList";
import Tag from "@/components/Tag";

const ProjectPage = async ({ params }: { params: { projectURL: string } }) => {
  const projectURL: string = params.projectURL;

  let Project = ProjectsList.find((Project) => {
    return Project.projectURL === projectURL;
  });

  const hasCaseStudies = Project ? Project.hasCaseStudy : false;

  if (hasCaseStudies === true) {
    return (
      <>
        <div className="headerContainer">
          <h2>{Project?.title}</h2>
          <h3>{Project?.date} - Case Study</h3>
          {/* <Tag tag={Project?.tag}/>  */}
        </div>
      </>
    );
  } else {
    throw new Error("Cannot find case study.");
  }
};
export default ProjectPage;
