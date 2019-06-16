import React from 'react';
import logo from '../Assets/Images/parent_maps.png';

function Portfolio() {
    return(
        <div className="portfolio">
            <h2>Parent Maps</h2>
            <p>A community based database where parents can post review of other locations.</p>
            <a href="https://gtresquire.github.io/berkeleyfamilyfriendly/"><img src={logo} alt="Logo" /></a>
            <br />
            <a href="https://github.com/RexStrider/berkeleyfamilyfriendly">Parent Maps Github Repository</a>
            <br />
            <a href="https://gtresquire.github.io/berkeleyfamilyfriendly/">Parent Maps Application Demo</a>
        </div>
    )
}

export default Portfolio;