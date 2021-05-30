import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 col-sm-6 text-center">
            <div className="rounded p-2 text-white py-5" style={{backgroundColor:'#162E67'}}>
            <h2 className="mb-3">{service.name}</h2>
            <i className={service.icon}></i>
            <p className="h5 text-white mt-3">{service.description}</p>
            </div>
        </div>
    );
};

export default ServiceDetail;