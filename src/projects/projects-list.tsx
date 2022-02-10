import React from 'react';
import { Project } from './project.interface';
import ProjectInstance from './project/project';
import './projects-list.css';

interface Props {
    projects: Project[];
}

const Projects: React.FC<Props> = ({ projects }) => {
    const renderProject = (project: Project) => {
        return <ProjectInstance project={project} />;
    };

    const getRandomInt = (max: number, min = 0): number => {
        return Math.floor(Math.random() * (max - min) + min);
    };

    const renderProjects = () => {
        const projectsIndexes = [];
        for (let index = 0; index < projects.length; index++) {
            projectsIndexes.push(index);
        }

        const projectsList: JSX.Element[] = [];
        while (projectsIndexes.length) {
            const randomIndex = getRandomInt(projectsIndexes.length);
            const projectIndex = projectsIndexes[randomIndex];
            projectsIndexes.splice(randomIndex, 1);
            projectsList.push(renderProject(projects[projectIndex]));
        }
        return projectsList;
    };

    return (
        <div>
            <h1>Projects</h1>
            <div className="projects">{renderProjects()}</div>
        </div>
    );
};

export default Projects;
