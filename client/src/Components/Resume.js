import "./Resume.css";

import React, { Component } from 'react';

class Resume extends Component {
    state = {  }
    render() {
        return (
            <section>
                <iframe
                    className="resume"
                    title="ARW_Resume"
                    src="https://drive.google.com/file/d/1KNATWq7A3JM2Dkik4omUl6tupUX0gOQU/preview" >
                </iframe>
            </section>
        );
    }
}
 
export default Resume;