import './Contact.css';

import React, { Component } from 'react';


class Contact extends Component {
    state = {
        name: '',
        email: '',
        message: '',
        formMessage: 'Click submit to send a message.'
        // formMessage: ''
    };
    
    clickHandler = () => {
        const url = '/api/mail';
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

        const data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        };

        // error checking on data
        if (regex.test(data.email)) {
            this.postData(url, data).then(response => {
                const formMessage = response.message;

                this.setState({ name: '', email: '', message: '', formMessage });
            });
        }
        else {
            this.setState({ formMessage: 'Please check your email address.' });
        }
    }

    postData = (url = '', data = {}) => {
        // Default options are marked with *
          return fetch(url, {
              method: 'POST', // *GET, POST, PUT, DELETE, etc.
              mode: 'cors', // no-cors, cors, *same-origin
              cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
              credentials: 'same-origin', // include, *same-origin, omit
              headers: {
                  'Content-Type': 'application/json',
                  // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              redirect: 'follow', // manual, *follow, error
              referrer: 'no-referrer', // no-referrer, *client
              body: JSON.stringify(data), // body data type must match "Content-Type" header
          })
          .then(response => response.json()); // parses JSON response into native Javascript objects 
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

                {/* <p
                    id='formMessage'
                    onChange={this.handleInputChange}
                >{this.state.formMessage}</p> */}
            </section>
        )
    }
}

export default Contact;