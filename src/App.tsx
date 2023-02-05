import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Project } from './projects/project.interface';
import Projects from './projects/projects-list';
import { ProjectsList } from './projects/projects-list-data';
import { SocialList } from './socials/social-list-data';
import { Social } from './socials/social.interface';
import { Socials } from './socials/socials-list';

function App(): React.ReactElement {
    const projects: Project[] = ProjectsList;
    const socials: Social[] = SocialList;
    return (
        <div className="App">
            <Socials socials={socials} />
            <Projects projects={projects} />
        </div>
    );
}

export default App;
