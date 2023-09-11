'use client'

import Icon from '@/components/Icons'
import Projects from '@/components/Projects';


const ProjectsPage = () => {

    let isProject = true
     
    return (
        <>
            <div className="title">
                <h1>Projects</h1>
            </div>
            <div className="tiles" >

                <Projects 
                isProject/>
            </div>
        </>
    )
}

export default ProjectsPage


