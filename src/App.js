import React, { useState, useEffect } from 'react';
import './App.css';
import './node_modules/dayjs';

var dayjs = require('dayjs')
//import dayjs from 'dayjs' // ES 2015
dayjs().format()


const App = () => {
    // Initialize state
    const [ projects, setProjects ] = useState([]);

    // Get projects
    useEffect(() => {
      fetch('/api/projects')
            .then(res => res.json())
            .then(projects => setProjects(projects));
    },[]);

    return (
        <div className="App">

            <h1>Hi, my name is [YOUR NAME]</h1>
            <h3>I'm a developer</h3>

            <h4>Here are a few of my projects</h4>

            {
                projects.length ? (
                    projects.map((project) => (
                        <div style={{padding: 10}} key={project.name}>
                            <p><b><a href={project.html_url}>{project.name}</a></b></p>
                            <p>{project.description}</p>
                        </div>
                    ))
                ) : (
                    <div>
                        Loading projects..
                    </div>
                )
            }
        </div>
    );
}

export default App;
