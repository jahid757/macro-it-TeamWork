import React from 'react';
import ServiceDetail from './ServiceDetail';
const serviceData = [
    {
        id: 1,
        name:'UI/UX Design',
        description:'All types of consulting service It is a long established fact that a reader will be distracted.',
        icon:'fas fa-hand-holding-heart icon'
    },
    {
        id: 2,
        name:'SEO & Content',
        description:'All types of consulting service It is a long established fact that a reader will be distracted.',
        icon:'fas fa-pencil-ruler icon'
    },
    {
        id: 3,
        name:'App Development',
        description:'All types of consulting service It is a long established fact that a reader will be distracted.',
        icon:'fas fa-code icon'
    }
]
const Services = () => {
    return (
        <div className="p-6" style={{backgroundColor:'#183372'}}>
            <div className="container py-5">
                <div className="w-50 text-center mb-5">
                    <p className="h5 text-white">WHAT DO WE <span className="text-warning">PROVIDE?</span></p>
                    <h1 className=" text-white main_heading">Our IT Solutions & Services For Your Business</h1>
                </div>
                <div className="row">
                    {
                        serviceData.map(service => <ServiceDetail key={service.id} service={service}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;