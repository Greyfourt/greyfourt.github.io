'use client'

import Icon from "./Icons";
import React, { useEffect, useState } from "react";
import ProjectsList from "../app/projects/projectsList";

const Projects = ({ isProject }: { isProject?: boolean }) => {


    const Projects = ProjectsList;
    
    const latestProjects = Projects.filter((Project, index) => index < 3)

    const [currentTag, setCurrentTag] = useState("")

    const [isSelected, setIsSelected] = useState("false")


    return (

        <div className="projectsWrapper">
            {
                (isProject === true) ?
                    (
                        <>
                            <div className="filtersContainer">
                                <p className="filterTitle">Filter</p>
                                <div className="filters">

                                    <button
                                        className="tag"
                                        onClick={() => { setCurrentTag(""), setIsSelected('false') }}
                                    >
                                        <div className='icon'>
                                            <Icon type="round" />
                                        </div>
                                        <p>All</p>
                                    </button>

                                    {
                                        [...Array.from(new Set(Projects.map((Project) => {
                                            return Project.tag
                                        })))].map((Tag, index) => {

                                            return (
                                                <button
                                                    className={Tag.replaceAll(' ', '') + ' tag'}
                                                    onClick={() => { setCurrentTag(Tag), setIsSelected('true') }}
                                                    key={index}
                                                >
                                                    <div className='icon'>
                                                        <Icon type="round" />
                                                    </div>
                                                    <p>{Tag}</p>
                                                </button>
                                            )
                                        }
                                        )}


                                </div>

                            </div>

                            <div className="tiles">

                                {
                                    Projects.filter((Project) => {
                                        if (currentTag === "") return true;

                                        return (Project.tag) === (currentTag)
                                    }
                                    ).map((Project, index) => {

                                        return (
                                            <article className={"projectItem " + Project.tag.replaceAll(' ', '')} key={index}>
                                                <div className="tag">
                                                    <div className='icon'><Icon
                                                        type="round"
                                                    /></div>
                                                    <p>{Project.tag}</p>
                                                </div>

                                                <a className="image" href={Project.link} target="_blank" >
                                                    <img src={Project.image} alt="" />
                                                </a>
                                                <div className="titleDate">
                                                    <p>{Project.title}</p>
                                                    <p>{Project.date}</p>
                                                </div>
                                            </article>
                                        )

                                    })}

                            </div>
                        </>
                    ) :
                    (
                        <>

                            <h2>My Latest Projects</h2>

                            <div className="tiles">

                                {
                                    latestProjects.map((latestProject, index) => {

                                        return (
                                            <article className={"projectItem " + latestProject.tag.replaceAll(' ', '')} key={index}>
                                                <div className="tag">
                                                    <div className='icon'><Icon
                                                        type="round"
                                                    /></div>
                                                    <p>{latestProject.tag}</p>
                                                </div>

                                                <a className="image">
                                                    <img src={latestProject.image} alt="" />
                                                </a>
                                                <div className="titleDate">
                                                    <p>{latestProject.title}</p>
                                                    <p>{latestProject.date}</p>
                                                </div>
                                            </article>
                                        )
                                    })
                                }

                            </div>
                        </>
                    )
            }
        </div>
    )


};





export default Projects;
