import './About.css';

import React from 'react';
import portfolio_pic from '../Assets/Images/portfolio_pic.jpg';

function About() {
    return (
        <div className="about">
            <img src={portfolio_pic} alt="porfolio_pic" />

            <section>
                <h2>Background</h2>
                <p>I am a motivated web-developer with well rounded experience in the MERN stack.</p>
                <p>I've developed various web applications from the ground up, and worked with a team to efficiently build on a variety of projects.</p>
                <p>If you'd like to check out some of my projects, please click on the projects link in the header.</p>
                <p>And if you'd like to contact me, you can use the contact form I built or click the link in the footer.</p>
            </section>
        </div>
    );
}

export default About;