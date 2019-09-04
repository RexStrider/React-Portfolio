import './About.css';

import React from 'react';
import portfolio_pic from '../Assets/Images/portfolio_pic.jpg';

function About() {
    return (
        <div className="about">
            <img src={portfolio_pic} alt="porfolio_pic" />

            <section>
                <h2>About Myself</h2>
                <p>I am a motivated web-developer with well rounded experience in the MERN stack.</p>
                <p>I have been developing with JavaScript, working with Node and Express to develop the back-end, and React to develop the front-end.</p>
                <p>I've used both SQL and MongoDB to set a database on the back-end.</p>
                <p>I've developed various web applications from the ground up, and worked with a team to efficiently build on a variety of projects.</p>
                <p>If you'd like to collaborate on a project, then send me a message and I'll get back to you as soon as possible.</p>
            </section>
        </div>
    );
}

export default About;