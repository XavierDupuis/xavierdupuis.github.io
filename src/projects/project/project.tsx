import React from 'react';
import { Project } from '../project.interface';
import './project.css';

interface Props {
    project: Project;
}

const ProjectInstance: React.FC<Props> = ({ project }: Props) => {
    const openProject = () => {
        if (!project.html_url) {
            return;
        }
        window.open(project.html_url);
    };

    return (
        <div className="project">
            <h2 onClick={() => openProject()}> {project.name} </h2>
            {/* <FontAwesomeIcon icon={'react'} /> */}
            <h4> {project.language} </h4>
            <p> {project.description} </p>
            <sub> {project.updated_at?.slice(0, 7)} </sub>
        </div>
    );
};

export default ProjectInstance;
