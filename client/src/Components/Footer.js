import './Footer.css';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGooglePlus, faGithub } from '@fortawesome/free-brands-svg-icons'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return (
        <footer className="page-footer">
            <section className='container'>
                <section className='row'>
                    <section className='col s6 offset-s1'>
                        <a href='mailto:arwaterman@gmail.com'>
                            <h5 className="white-text"><FontAwesomeIcon icon={faGooglePlus} /> Gmail</h5>
                        </a>
                    </section>

                    <section className='col s4 offset-s1'>
                        <a href='https://github.com/RexStrider?tab=repositories'><h5 className='white-text'><FontAwesomeIcon icon={faGithub} /> GitHub</h5></a>
                        
                    </section>
                </section>
            </section>
        </footer>
    )
}

export default Footer;