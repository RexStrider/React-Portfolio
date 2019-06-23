import './Contact.css';
import API from '../Utils/API';

import React, { Component } from 'react';


class Contact extends Component {
    state = {
        name: '',
        email: '',
        message: '',
        formMessage: 'Click submit to send a message.'
    };
    
    clickHandler = () => {
        const url = '/api/mail';
        const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

        const data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        };

        if (regexEmail.test(data.email)) {
            API.postData(url, data).then(response => {
                const formMessage = response.message;

                this.setState({ name: '', email: '', message: '', formMessage });
            });
        }
        else {
            this.setState({ formMessage: 'Please check your email address.' });
        }
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { id, value } = event.target;
    
        // Updating the input's state
        this.setState({ [id]: value });
    };

    render() {
        return(
            <section className="contact">
                <p  id='formMessage'
                    onChange={this.handleInputChange}>
                    {this.state.formMessage}
                </p>

                <h2>Contact</h2>
                
                <section>
                    <label>Name</label>
                    <input
                        id='name'
                        value={this.state.name}
                        onChange={this.handleInputChange}
                    />
                </section>

                <section>
                    <label>Email</label>
                    <input
                        id='email'
                        value={this.state.email}
                        onChange={this.handleInputChange}
                    />
                </section>

                <section>
                    <label>Message</label>
                    <textarea
                        id='message'
                        value={this.state.message}
                        onChange={this.handleInputChange}
                    />
                </section>

                <section>
                    <button onClick={this.clickHandler}>Submit</button>
                </section>
            </section>
        )
    }
}

export default Contact;