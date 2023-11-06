import ProjectsList from "@/components/ProjectsList";


const ProjectPage = () => {

    const Projects = ProjectsList;

    const caseStudies = Projects.filter((Project) => Project.hasCaseStudy === true)

    return (
        <>
            <div className="headerContainer">
            </div>

        </>
    )
}

export default ProjectPage;


