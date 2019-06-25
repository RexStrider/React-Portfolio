import './About.css';

import React from 'react';
import portfolio_pic from '../Assets/Images/portfolio_pic.jpg';

function About() {
    return (
        <div className="about">
            <img src={portfolio_pic} alt="porfolio_pic" />

            <section>
                <h2>About Myself</h2>
                <p>Motivated web developer with well rounded experience in MERN stack, object-oriented and user-centered design.</p>
                <p>Developed websites from scratch.</p>
                <p>Experienced in working with a team using the AGILE methodology.</p>
            </section>
        </div>
    );
}

export default About;