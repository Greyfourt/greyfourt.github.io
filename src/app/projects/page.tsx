'use client'

import Icon from '@/components/Icons'
import Projects from '@/components/Projects';


const ProjectsPage = () => {

    let isProject = true
     
    return (
        <>
            <div className="headerContainer">
                <h1>Projects</h1>
            </div>
            <div className="projectsWrapper" >

                <Projects 
                isProject/>
            </div>
        </>
    )
}

export default ProjectsPage


