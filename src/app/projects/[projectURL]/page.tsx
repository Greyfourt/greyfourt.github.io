import ProjectsList from "@/components/ProjectsList";
import Tag from "@/components/Tag";
import CaseStudy from "@/components/CaseStudy";

const ProjectPage = async ({ params }: { params: { projectURL: string } }) => {
  const projectURL: string = params.projectURL;

  let Project = ProjectsList.find((Project) => {
    return Project.projectURL === projectURL;
  });

  const hasCaseStudies = Project ? Project.hasCaseStudy : false;

  if (hasCaseStudies === true && Project && Project.projectCaseStudy) {
    return (
      <>
        <div className="casestudyHeaderContainer">
          <h1>{Project?.title}</h1>
          <h3>{Project?.date} - Case Study</h3>
          {/* <Tag tag={Project?.tag} /> */}
        </div>
        <div className="casestudyContentWrapper">
          <CaseStudy
            projectName={projectURL}
            caseStudy={Project.projectCaseStudy}
          />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>
          <h2>Cannot find case study.</h2>
        </div>
      </>
    );
  }
};

export default ProjectPage;
