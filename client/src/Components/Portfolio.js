import './Portfolio.css';

import React from 'react';
import logo from '../Assets/Images/parent_maps.png';

function Portfolio() {
    return(
        <section className="portfolio">
            <a href="https://gtresquire.github.io/berkeleyfamilyfriendly/"><img src={logo} alt="Logo" /></a>

            <section>
                <h2>Parent Maps</h2>
                <p>A community based database where parents can post review of other locations.</p>
                <section>
                    <a href="https://github.com/RexStrider/berkeleyfamilyfriendly">Parent Maps Github Repository</a>
                    <a href="https://gtresquire.github.io/berkeleyfamilyfriendly/">Parent Maps Application Demo</a>
                </section>
            </section>
        </section>
    )
}

export default Portfolio;