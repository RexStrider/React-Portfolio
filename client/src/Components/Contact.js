import './Contact.css';

import React from 'react';

function Contact() {
    return(
        <section className="contact">
            <h2>Contact</h2>
            
            <section>
                <label>Name</label>
                <input id='name' />
            </section>

            <section>
                <label>Email</label>
                <input id='email' />
            </section>

            <section>
                <label>Message</label>
                <textarea id='message'></textarea>
            </section>

            <section>
                <button>Submit</button>
            </section>
        </section>
    )
}

export default Contact;