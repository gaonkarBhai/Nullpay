import React from 'react'
import serviceapi from './Api/serviceapi';

const Services = () => {
    return (
        <section className='services-main-container mt-5'>
            <div className="text-center container services-container">
                <h2 className='main-heading fw-bold'>How To Send Money ?</h2>
                <div className="row">
                    {
                        serviceapi.map((ele) => {
                            return (
                                <div key={ele.id} className="col-12 col-lg-4 work-container-subdiv">
                        <i className={ele.logo}></i>
                        <h2 className='sub-heading'>{ele.title}</h2>
                        <p className='main-hero-para'>{ele.desc}</p>
                    </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default Services