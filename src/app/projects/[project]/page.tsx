import ProjectsList from '../projectsList';

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


