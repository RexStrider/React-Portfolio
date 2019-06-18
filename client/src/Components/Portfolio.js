import './Portfolio.css';

import React from 'react';

import logo_study_live from '../Assets/Images/study_live.png';
import logo_flip_search from '../Assets/Images/flip_search.PNG';
import logo_parent_maps from '../Assets/Images/parent_maps.png';

const projects = [
    {
        title: "Parent Maps",
        description: "A community based database where parents can post review of other locations.",
        logo: logo_parent_maps,
        github_url: "https://github.com/RexStrider/berkeleyfamilyfriendly",
        demo_url: "https://gtresquire.github.io/berkeleyfamilyfriendly/"
    },
    {
        title: "Study Live",
        description: "A study room where students can gather, chat, and listen to music.",
        logo: logo_study_live,
        github_url: "https://github.com/RexStrider/study-live",
        demo_url: "https://study-live.herokuapp.com/"
    }, 
    {
        title: "Flip Search",
        description: "Searches statistics in the Bay Area for re-selling houses.",
        logo: logo_flip_search,
        github_url: "https://github.com/RexStrider/flipsearch",
        demo_url: "https://flipsearch.herokuapp.com/main"
    }
];

function renderContent(project) {
    return (
        <section>
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

function Portfolio() {
    return(
        <section className="portfolio">

            {renderContent(projects[0])}
            {renderContent(projects[1])}
            {renderContent(projects[2])}

        </section>
    )
}

export default Portfolio;