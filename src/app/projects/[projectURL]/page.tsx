import ProjectsList from "@/components/ProjectsList";
import Tag from "@/components/Tag";
import CaseStudy from "@/components/CaseStudy";

export async function generateStaticParams() {
  // let out = [{ projectURL: "floof" }, { projectURL: "knotbook" }];

  let out = ProjectsList
    .filter((project) => project.hasCaseStudy === true)
    .map((project) => {
      return {
        projectURL: project.projectURL || "",
      };
    });

  return out;
}

const ProjectPage = async ({ params }: { params: { projectURL: string } }) => {
  const projectURL: string = params.projectURL;

  let Project = ProjectsList.find((Project) => {
    return Project.projectURL === projectURL;
  });

  const hasCaseStudies = Project ? Project.hasCaseStudy : false;

  if (hasCaseStudies === true && Project && Project.projectCaseStudy) {
    return (
      <div className="bodyContainer">
        <div className="casestudyHeaderContainer">
          <div className="caseStudyMeta">
            <p className="foot">{Project?.projectCaseStudy.caseStudyDate} </p>

          </div>
          <h1>{Project?.title} • {Project?.date}</h1>
          <p className="foot">Case study <mark>{Project?.projectCaseStudy.caseStudyState} </mark> </p>
          <p className="foot">Published on {Project?.projectCaseStudy.caseStudyDate}</p>

        </div>
        <div className="casestudyContentWrapper">
          <CaseStudy
            projectName={projectURL}
            caseStudy={Project.projectCaseStudy}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="bodyContainer">
        <div>
          <h2>Cannot find case study.</h2>
        </div>
      </div>
    );
  }
};

export default ProjectPage;
