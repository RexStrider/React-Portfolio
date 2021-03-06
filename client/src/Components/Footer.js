import './Footer.css';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGooglePlus, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'


function Footer() {
    return (
        <footer className="page-footer">
            <section className='container'>
                <section className='row'>

                    <section className="col m3 s3">
                        <a href="https://drive.google.com/file/d/1KNATWq7A3JM2Dkik4omUl6tupUX0gOQU/preview">
                            <h5 className="white-text"><FontAwesomeIcon icon={faFilePdf} /> Resume</h5>
                        </a>
                    </section>

                    <section className='col m3 s3'>
                        <a href='mailto:arwaterman@gmail.com'>
                            <h5 className="white-text"><FontAwesomeIcon icon={faGooglePlus} /> Gmail</h5>
                        </a>
                    </section>

                    <section className='col m3 s3'>
                        <a href='https://www.linkedin.com/in/arwaterman'>
                            <h5 className='white-text'><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</h5>
                        </a>
                    </section>

                    <section className='col m3 s3'>
                        <a href='https://github.com/RexStrider'>
                            <h5 className='white-text'><FontAwesomeIcon icon={faGithub} /> GitHub</h5>
                        </a>
                    </section>

                </section>
            </section>
        </footer>
    )
}

export default Footer;