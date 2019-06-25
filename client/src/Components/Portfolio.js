import './Portfolio.css';

import React from 'react';

import projects from '../Utils/Projects';

function renderProject(project) {
    return (
        <section key={project.title}>
            <a href={project.demo_url}>
                <img src={project.logo} alt="logo" />
            </a>

            <section className='project'>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <section>
                    <a href={project.github_url}>
                        {project.title} Github Repository
                    </a>
                    <a href={project.demo_url}>
                        {project.title} Application Demo
                    </a>
                </section>
            </section>
        </section>
    )
}

function renderContent(projects) {
    const result = [];

    projects.forEach(project =>
        result.push(renderProject(project))
    );

    return result;
}

function Portfolio() {
    return(
        <section className="portfolio">

            { renderContent(projects) }

        </section>
    )
}

export default Portfolio;