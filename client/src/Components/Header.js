import './Header.css';
import M, { options } from 'materialize-css';
// import 'https://fonts.googleapis.com/icon?family=Material+Icons'

// import React from 'react';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            const elems = document.querySelectorAll('.sidenav');
            M.Sidenav.init(elems, options);
        });
    }

    render () {
        return(
            <section>
                <nav>
                    <section className='nav-wrapper'>
                        <a href='#' className='brand-logo'>Aaron Waterman Rose</a>

                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>

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

                <ul className="sidenav" id="mobile-demo">
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
        )
    }
}

export default Header;