import './Portfolio.css';

import React from 'react';

import logo_study_live from '../Assets/Images/study_live.png';
import logo_flip_search from '../Assets/Images/flip_search.png';
import logo_parent_maps from '../Assets/Images/parent_maps.png';

class Project {
    constructor(title, description, logo, github_url, demo_url) {
        this.title = title;
        this.description = description;
        this.logo = logo;
        this.github_url = github_url;
        this.demo_url = demo_url;
    }
}

const projects = [
    new Project(
        "Parent Maps",
        "A community based database where parents can post reviews on various places.",
        logo_parent_maps,
        "https://github.com/RexStrider/berkeleyfamilyfriendly",
        "https://gtresquire.github.io/berkeleyfamilyfriendly/"
    ),
    new Project(
        "Study Live",
        "A study room where students can gather, chat, and listen to music.",
        logo_study_live,
        "https://github.com/RexStrider/study-live",
        "https://study-live.herokuapp.com/"
    ),
    new Project(
        "Flip Search",
        "A click to search product demo for re-selling houses in the Bay Area.",
        logo_flip_search,
        "https://github.com/RexStrider/flipsearch",
        "https://flipsearch.herokuapp.com/main"
    )
]

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