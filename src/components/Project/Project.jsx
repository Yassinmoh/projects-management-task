import React, { useState } from 'react'
import './Project.css'
import data from '../../data.json'
import { BsThreeDots } from 'react-icons/bs'
import { MdSupervisorAccount } from 'react-icons/md'
import { BiBugAlt } from 'react-icons/bi'



const Project = () => {
    const [projects, setProjects] = useState(data)
    return (
        <div className="project-wrapper">
            {projects.map(project => (
                <div className="project-item" key={Math.random()}>
                    <div className="project-header">
                        <div className="dot">.</div>
                        <h5>{project.title}</h5>
                        <BsThreeDots />
                    </div>
                    <div className="project-body">
                        <p>{project.body}</p>
                    </div>
                    <div className="project-footer">
                        <span>
                            <MdSupervisorAccount />
                            {project.members} اعضاء
                        </span>
                        <span>
                            <BiBugAlt />
                            {project.modify === null ? 'لا يوجد' : project.modify + "تعديلات "}
                        </span>
                        <span>فعال</span>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Project