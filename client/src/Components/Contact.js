import './Contact.css';

import React from 'react';

function Contact() {
    return(
        <div className="contact">
            <h2>Send Me An Email</h2>
            
            <section>
                <label>Name</label>
                <input />
            </section>

            <section>
                <label>Organization</label>
                <input />
            </section>

            <section>
                <label>Message</label>
                <textarea></textarea>
            </section>

            <section>
                <button>Submit</button>
            </section>
        </div>
    )
}

export default Contact;