import './Header.css';

import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <nav>
            <section className='nav-wrapper'>
                <a href='#' className='brand-logo'>Aaron Waterman Rose</a>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <Link to='/'>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to='/projects'>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to='/contact'>
                            Contact
                        </Link>
                    </li>
                </ul>
            </section>
        </nav>
    )
}

export default Header;