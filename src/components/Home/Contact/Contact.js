import React from 'react';
import { useForm } from 'react-hook-form';
const Contact = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="py-5"  style={{ backgroundColor:'rgb(231, 231, 231)'}}>
            <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input placeholder="Enter Your Name" className="form-control mb-2" {...register("name", { required: true })} />
                        {errors.name && <small>This field is required</small>}

                        <input placeholder="Enter Your Phone" className="form-control mb-2" {...register("phone", { required: true })} />
                        {errors.phone && <small>This field is required</small>}

                        <input placeholder="Enter Your E-Mail" className="form-control mb-2" {...register("email", { required: true })} />
                        {errors.email && <small>This field is required</small>}

                        <textarea placeholder="Enter Your Message" style={{height:'150px'}} className="form-control mb-2" {...register("message", { required: true })} />
                        {errors.message && <small>This field is required</small>}


                        <input className="btn btn-success" type="submit" />
                    </form>
                </div>
                <div className="col-md-6">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.38703802988!2d90.27923923029098!3d23.780573257422212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1622357134104!5m2!1sen!2sbd" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Contact;