import React from 'react';
import ContactPageBody from './ContactPageBody/ContactPageBody';
import './ContactUsPage.css'

const ContactUsPage = () => {
    return (
        <div>
            <div className="contact-us">
                <div>
                    <h1>Contact us</h1>
                </div>
                <p> <span>Home</span> &gt; Contact us</p>
            </div>

            <div>
                <ContactPageBody/>
            </div>
        </div>
    );
};

export default ContactUsPage;