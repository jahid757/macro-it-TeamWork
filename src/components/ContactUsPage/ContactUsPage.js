import React from 'react';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';
import ContactPageBody from './ContactPageBody/ContactPageBody';
import './ContactUsPage.css'

const ContactUsPage = () => {
    return (
        <div>
            <Header/>
            <div className="contact-us">
                <div>
                    <h1>Contact us</h1>
                </div>
                <p> <span>Home</span> &gt; Contact us</p>
            </div>

            <div>
                <ContactPageBody/>
            </div>

            <Footer/>
        </div>
    );
};

export default ContactUsPage;