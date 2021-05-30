import React from 'react';
import ServiceDetail from './ServiceDetail';
const serviceData = [
    {
        id: 1,
        name:'UI/UX Design',
        photoUrl: 'https://webitfactory.io/wp-content/uploads/2019/11/ui-ux.png',
        price: 100,
        features:'We put user needs at the center of our efforts focusing on designing usable, delightful, efficient, and fun experiences. From user onboarding to feedback and review, our products consist of an integrated set of experiences working together seamlessly.',
        description:'All types of consulting service It is a long established fact that a reader will be distracted.',
        conductor: 'Md. Jahid Hasan',
        icon:'fas fa-hand-holding-heart icon'
    },
    {
        id: 2,
        name:'SEO & Content',
        photoUrl: 'https://searchengineland.com/figz/wp-content/seloads/2017/06/content-seo-ss-1920.jpg',
        price: 200,
        features:'As a professional SEO content marketing agency, we write high-quality, SEO-friendly content tailored to meet the unique needs of your business. Our content will not only help you rank high in search engines and drive more traffic, it will match the tone of your unique organization. Our content helps you build your brand and establish a deeper connection with your audience all while using relevant keywords that customers are using to find businesses just like yours.',
        description:'All types of consulting service It is a long established fact that a reader will be distracted.',
        conductor: 'Sakib Hasan',
        icon:'fas fa-pencil-ruler icon'
    },
    {
        id: 3,
        name:'App Development',
        photoUrl: 'https://d540vms5r2s2d.cloudfront.net/mad/uploads/mad_blog_5df2190b8638a1576147211.jpg',
        price: 500,
        features:'We offer a full cycle of application design, integration and management services. Whether it is a consumer oriented app or a transformative enterprise-class solution, the company leads the entire mobile app development process from ideation and concept to delivery, and to ongoing ongoing support.',
        description:'All types of consulting service It is a long established fact that a reader will be distracted.',
        conductor: 'Ashraful Hasan',
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