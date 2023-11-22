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
        <div className="casestudyHeaderContainer">
          <h1>{Project?.title}</h1>
          <h3>{Project?.date} - Case Study</h3>
          {/* <Tag tag={Project?.tag} /> */}
        </div>
        <div className="casestudyContentContainer">
          <h2>Problem & Idea</h2>
        </div>
        <div className="casestudyContentContainer">
          <h2>Steps</h2>
          <div className="casestudyStepsContent">
            <h3>Research</h3>
            <h3>Brand Identity</h3>
            <h3>User Journeys</h3>
            <h3>Designs</h3>
          </div>
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
