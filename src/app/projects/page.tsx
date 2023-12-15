"use client";

import Projects from "@/components/Projects";

const ProjectsPage = () => {
  let isProject = true;

  return (
    <div className="bodyContainer">
      <Projects isProject />
    </div>
  );
};

export default ProjectsPage;
