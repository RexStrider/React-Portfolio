import './Header.css';
import M from 'materialize-css';
// import 'https://fonts.googleapis.com/icon?family=Material+Icons'

// import React from 'react';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            const elems = document.querySelectorAll('.sidenav');
            M.Sidenav.init(elems);
        });
    }

    handleClick = () => {
        // forces header to re-render and set an active class to one of the links below
        this.setState({  });

        // close sidenav after clicking on menu
        const elems = document.querySelectorAll('.sidenav');
        const sidenav = M.Sidenav.getInstance(elems[0]);
        if (sidenav.isOpen) {
            sidenav.close();
        }
        
    }

    render () {
        return(
            <section>
                <nav>
                    <section className='nav-wrapper'>
                        <section className='brand-logo'>Aaron Waterman Rose</section>

                        <Link to='' data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>

                        <ul id='nav-mobile' className='right hide-on-med-and-down'>
                            <li className={window.location.pathname === '/' ? 'active' : ''}>
                                <Link to='/' onClick={this.handleClick}>
                                    About
                                </Link>
                            </li>
                            <li className={window.location.pathname === '/projects' ? 'active' : ''}>
                                <Link to='/projects' onClick={this.handleClick}>
                                    Projects
                                </Link>
                            </li>
                            <li className={window.location.pathname === '/contact' ? 'active' : ''}>
                                <Link to='/contact' onClick={this.handleClick}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </section>
                </nav>

                <ul className="sidenav" id="mobile-demo">
                    <li className={window.location.pathname === '/' ? 'active' : ''}>
                        <Link to='/' onClick={this.handleClick}>
                            About
                        </Link>
                    </li>
                    <li className={window.location.pathname === '/projects' ? 'active' : ''}>
                        <Link to='/projects' onClick={this.handleClick}>
                            Projects
                        </Link>
                    </li>
                    <li className={window.location.pathname === '/contact' ? 'active' : ''}>
                        <Link to='/contact' onClick={this.handleClick}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </section>
        )
    }
}

export default Header;