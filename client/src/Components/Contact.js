import './Contact.css';
import API from '../Utils/API';

import React, { Component } from 'react';
import M, { options } from 'materialize-css';


class Contact extends Component {
    state = {
        name: '',
        email: '',
        message: '',
        modalMsg: '',
        errorMsg: ''
    };

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', () => {
            const elems = document.querySelectorAll('.modal');
            this.setState({ modal: M.Modal.init(elems, options) });
        });
    }
    
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
                // const errorMsg = response.message;
                const modalMsg = response.message;

                const elem = document.getElementById('modal1');
                const instance = M.Modal.getInstance(elem);
                instance.open();

                this.setState({ name: '', email: '', message: '', modalMsg, errorMsg: '' });
            });
        }
        else {
            this.setState({ errorMsg: ' - Please check your email address.' });

            // this.renderModal();
            // M.Modal.open();
            // this.state.modal.open();
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
                {/*  Modal Trigger  */}
                {/* <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a> */}

                {/*  Modal Structure  */}
                <div id="modal1" className="modal">
                    <div className="modal-content">
                        <h4>{this.state.modalMsg}</h4>
                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
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
                    <button onClick={this.clickHandler}>Submit</button>
                </section>
            </section>
        )
    }
}

export default Contact;