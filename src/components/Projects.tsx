'use client'

import { type } from "os";
import Icon from "./Icons";
import React, { useEffect, useState } from "react";

const Projects = ({ isProject }: { isProject?: boolean }) => {

    const Projects = [
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
            image: "/articles/AppFloof.png",
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

    const latestProjects = Projects.filter((Project, index) => index < 3)

    const [currentTag, setCurrentTag] = useState("")

    const [isSelected, setIsSelected] = useState("false")


    return (
        <div className="projectsWrapper">
            <div className="filtersContainer">
                <p className="filterTitle">Filter</p>
                <div className="filters">
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
                        })
                    }
                </div>
            </div>

            <div className="tiles">
                {
                    (isProject === true) ?
                        (
                            <>
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
                            </>

                        )
                }
            </div>
        </div>
    );
}

export default Projects;
