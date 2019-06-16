import React from 'react';
import portfolio_pic from '../Assets/Images/portfolio_pic.jpg';

function About() {
    return (
        <div className="about">
            <img src={portfolio_pic} alt="porfolio_pic" />
            <h2>About Myself</h2>
            <p>Motivated web developer with well rounded experience in MERN development, object-oriented and user-centered design. Developed websites from scratch. Experienced in working with a team using the AGILE methodology.</p>
        </div>
    );
}

export default About;