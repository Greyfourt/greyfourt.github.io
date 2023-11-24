'use client'

import Projects from '@/components/Projects';


const ProjectsPage = () => {

    let isProject = true

    return (
        <>
            <div className="headerContainer">
                <h1>Projects</h1>
            </div>
            <Projects
                isProject />

        </>
    )
}

export default ProjectsPage


