import React from 'react'
import supportapi from './Api/supportapi';
const Support = () => {
    return (
        <section className='comman-section our-services'>
            <div className="container mb-5">
                <div className="row">
                    
                    <div className="col-12 col-lg-7 our-services-list">
                        <code className='mini-title'>--AVABLE 24x7 ANY LANGUAGE</code>
                        <h2 className='main-heading'>How can I help you?</h2>
                        {
                            supportapi.map((ele) => {
                                return (
                                    <div key={ele.id} className="row our-services-info">
                                        <div className="col-1 our-services-no">{ele.id }</div>
                                    <div className="col-11 our-services-data">
                                            <h2>{ ele.heading}</h2>
                                    <p className='main-hero-para'>
                                {ele.desc}</p>
                            </div>
                        </div>
                                )
                            })
                        }
                        <br />
                        <button className='btn btn-style btn-style-login'>Learn More</button>
                    </div>
                    <div className="col-5 col-lg-5 text-center img-fluid our-services-left-side-img">
                        <img src="./images/support.jpg" alt="images" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Support