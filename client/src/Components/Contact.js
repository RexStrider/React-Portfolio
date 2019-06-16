import React from 'react';

function Contact() {
    return(
        <div className="contact">
            <h2>Send Me An Email!</h2>
            
            <section>
                <label>Name</label>
                <input />
            </section>

            <section>
                <label>Organization</label>
                <input />
            </section>

            <section>
                <label>Comment</label>
                <textarea></textarea>
            </section>
        </div>
    )
}

export default Contact;