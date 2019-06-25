import './Contact.css';
import API from '../Utils/API';

import React, { Component } from 'react';
import M from 'materialize-css';


class Contact extends Component {
    state = {
        name: '',
        email: '',
        message: '',
        modalMsg: '',
        errorMsg: ''
    };
    
    clickHandler = () => {
        const url = '/api/mail';
        const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

        const data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        };

        const elem = document.getElementById('modal1');
        const instance = M.Modal.init(elem);

        this.setState({ modalMsg: 'Please wait patiently while your message is being sent.', errorMsg: '' });

        instance.open();

        if (regexEmail.test(data.email)) {
            API.postData(url, data).then(response => {
                instance.close();
                const modalMsg = response.message;                
                this.setState({ name: '', email: '', message: '', modalMsg, errorMsg: '' });                
                instance.open();
            });
        }
        else {
            instance.close();
            this.setState({ errorMsg: ' - Invalid format, please check your email address.' });
        }
    }

    handleInputChange = event => {
        const { id, value } = event.target;
        this.setState({ [id]: value });
    };

    render() {
        return(
            <section className="contact">
                <div id="modal1" className="modal">
                    <div className="modal-content">
                        <h4>{this.state.modalMsg}</h4>
                    </div>
                    <div className="modal-footer">
                        <section className="modal-close waves-effect waves-green btn-flat">Close</section>
                    </div>
                </div>

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
                    <label>Email<span>{this.state.errorMsg}</span></label>
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
                    <button
                        onClick={this.clickHandler}
                        className="btn waves-effect waves-light"
                        type="submit"
                        name="action">
                        Submit
                        <i className="material-icons right">send</i>
                    </button>
                </section>
            </section>
        )
    }
}

export default Contact;