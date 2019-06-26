import './About.css';

import React from 'react';
import { Link } from 'react-router-dom';
import portfolio_pic from '../Assets/Images/portfolio_pic.jpg';

function About() {
    return (
        <div className="about">
            <img src={portfolio_pic} alt="porfolio_pic" />

            <section>
                <h2>About Myself</h2>
                <p>I am a motivated web-developer with well rounded experience in the MERN stack.</p>
                <p>I've developed various web applications from the ground up, and worked with a team to efficiently build on a variety of projects.</p>
                
            </section>
        </div>
    );
}

export default About;