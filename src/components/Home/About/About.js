import React from 'react';
import aboutImg from '../../../images/about.jpg'
const About = () => {
    return (
        <div className="container my-5">
            <div className="row d-flex align-items-center">
                <div className="col-md-6 mb-4">
                    <img className="rounded" src={aboutImg} alt="About img" />
                </div>
                <div className="col-md-6">
                    <p className="fw-bold">ABOUT OUR <span className="text-warning">COMPANY</span></p>
                    <h1 className="fw-bold">Macro IT Solutions Award Winning Digital Solutions</h1>

                    <h2><span className="display-1 fw-bold text-warning">25</span> Years of Experience</h2>
                    <p className="h5 text-secondary mb-4">We develop innovative and contemporary web and mobile apps which makes the world a smaller place through faster services.</p>
                    <p className="h5 mb-3"><i className="fas fa-check-square"></i> UI/UX Design Journey</p>
                    <p className="h5 mb-4"><i className="fas fa-check-square"></i> Software Consulting</p>
                    <a href="/service" className="btn btn-warning fw-bold text-white px-3 py-2">View Details</a>
                </div>
            </div>
        </div>
    );
};

export default About;