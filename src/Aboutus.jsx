import React from 'react'
import appusage from './Api/appusage';
const Aboutus = () => {
    return (
        <section className='comman-section our-services'>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-5 col-lg-5 text-center img-fluid our-services-left-side-img">
                        <img src="./images/credit.jpg" alt="images" />
                    </div>
                    <div className="col-12 col-lg-7 our-services-list">
                        <code className='mini-title'>--AVABLE @ GOOGLE PLAY STORE AND IOS APP STORE ONLY</code>
                        <h2 className='main-heading'>How to use app ?</h2>
                        {
                            appusage.map((ele) => {
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
                </div>
            </div>
        </section>
    );
}

export default Aboutus