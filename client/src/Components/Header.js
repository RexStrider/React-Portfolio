import './Header.css';

import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <nav>
            <section className='nav-wrapper'>
                <Link to='/' className='brand-logo'>Aaron Waterman Rose</Link>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li /*className={window.location.pathname === '/' ? 'active' : ''}*/>
                        <Link to='/'>
                            About
                        </Link>
                    </li>
                    <li /*className={window.location.pathname === '/projects' ? 'active' : ''}*/>
                        <Link to='/projects'>
                            Projects
                        </Link>
                    </li>
                    <li /*className={window.location.pathname === '/contact' ? 'active' : ''}*/>
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