import React from 'react';
import './ContactPageBody.css';
import map from '../images/Map.png';

const ContactPageBody = () => {
    return (
        <div className="body-container">
            <div className="map-view">
                <img src={map} alt="Map" />
            </div>
            <div className='contact-form'>
                <div className="text-center text-white">
                    <h1>Get in Touch</h1>
                </div>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label text-white" >Name</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label text-white">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label text-white">Message</label>
                        
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label text-white" for="exampleCheck1">All the above information are correct</label>
                    </div>

                    <button type="submit" class="btn btn-warning form-control">Submit</button>
                </form>


            </div>
        </div>
    );
};

export default ContactPageBody;