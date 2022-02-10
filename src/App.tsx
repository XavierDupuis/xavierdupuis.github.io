import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Project } from './projects/project.interface';
import Projects from './projects/projects-list';
import { ProjectsList } from './projects/projects-list-data';

function App(): React.ReactElement {
    const projects: Project[] = ProjectsList;
    return (
        <div className="App">
            <Projects projects={projects} />
            {/* <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header> */}
        </div>
    );
}

export default App;
