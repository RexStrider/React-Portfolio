import './Contact.css';

import React, { Component } from 'react';


class Contact extends Component {
    state = {
        name: '',
        email: '',
        message: ''
    };
    
    clickHandler = () => {
        // console.log( this.state );

        this.postData('/api/mail', this.state)
        .then(response => {
            console.log(response.message);

            this.setState({
                name: '',
                email: '',
                message: ''
            })
        });


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
        this.setState({
          [id]: value
        });
    };

    render() {
        return(
            <section className="contact">
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