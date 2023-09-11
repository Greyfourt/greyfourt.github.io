'use client'

import { type } from "os";
import Icon from "./Icons";
import React, { useEffect, useState } from "react";

const Projects = ({ isProject }: { isProject?: boolean}) => {

    const Project = [
        {
            title: "La Commanderie des Templiers",
            date: "2023",
            tag: "Website",
            image: "/articles/WebsiteLCDT.png",
        },
        {
            title: "Plants App",
            date: "2023",
            tag: "Mobile App",
            image: "/articles/AppPlants.png",
        },
        {
            title: "Crochet by Nazli & Louis",
            date: "2023",
            tag: "Mobile App",
            image: "/articles/AppCrochet.png",
        },
        {
            title: "La Mare à Toto",
            date: "2022",
            tag: "Website",
            image: "/articles/WebsiteLMAT.png",
        },
        {
            title: "Bookipe",
            date: "2022",
            tag: "Mobile App",
            image: "/articles/AppBookipe.png",
        },
        {
            title: "Valensi Patrimoine",
            date: "2021",
            tag: "Website",
            image: "/articles/WebsiteValensi.png",
        },
        {
            title: "Valensi Patrimoine",
            date: "2021",
            tag: "Graphics",
            image: "/articles/GraphicValensi.png",
        },
        {
            title: "Valensi Patrimoine",
            date: "2021",
            tag: "Logo",
            image: "/articles/LogoValensi.png",
        },
        {
            title: "Contacts App",
            date: "2021",
            tag: "Web App",
            image: "/articles/AppContacts.png",
        },
        {
            title: "ODB Rénovation",
            date: "2020",
            tag: "Graphics",
            image: "/articles/GraphicODB.png",
        }
    ]

    const [PageName, SetPageName] = useState("")

    const filteredProjects = Project.filter((Project, index) => index < 3)

    return (
        <div className="tiles">
            {
                (isProject === true) ?
                    (
                        <>
                            {Project.map((Project, index) => {

                                return (
                                    <article className={"projectItem " + Project.tag.replaceAll(' ', '')} key={index}>
                                        <div className="tags">
                                            <div className='icon'><Icon
                                                type="round"
                                            /></div>
                                            <p>{Project.tag}</p>
                                        </div>

                                        <a className="image">
                                            <img src={Project.image} alt="" />
                                        </a>
                                        <div className="titleDate">
                                            <p>{Project.title}</p>
                                            <p>{Project.date}</p>
                                        </div>
                                    </article>
                                )

                            })}
                        </>
                    )
                    :
                    (
                        <>
                            {
                                filteredProjects.map((filteredProjects, index) => {
                                    
                                    return (
                                        <article className={"projectItem " + filteredProjects.tag.replaceAll(' ', '')} key={index}>
                                            <div className="tags">
                                                <div className='icon'><Icon
                                                    type="round"
                                                /></div>
                                                <p>{filteredProjects.tag}</p>
                                            </div>
    
                                            <a className="image">
                                                <img src={filteredProjects.image} alt="" />
                                            </a>
                                            <div className="titleDate">
                                                <p>{filteredProjects.title}</p>
                                                <p>{filteredProjects.date}</p>
                                            </div>
                                        </article>
                                    )
                            })
                            }
                        </>

                    )
            }
        </div>
    );
}

export default Projects;
