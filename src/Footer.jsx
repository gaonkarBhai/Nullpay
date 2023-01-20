import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-10 mx-auto">
                        <div className="row">
                            <div className="col-6 col-lg-3">
                                <h2>Company</h2>
                                <ul>
                                    <li><a href="#about">About Us</a></li>
                                    <li><a href="#about">Partnernship</a></li>
                                    <li><a href="#about">Careers</a></li>
                                    <li><a href="#about">Press</a></li>
                                </ul>
                            </div>
                            <div className="col-6 col-lg-3">
                                <h2>Support</h2>
                                <ul>
                                    <li><a href="#about">FAQ</a></li>
                                    <li><a href="#about">News Room</a></li>
                                    <li><a href="#about">Capabalities</a></li>
                                    <li><a href="#about">Insurance</a></li>
                                </ul>
                            </div>
                            <div className="col-6 col-lg-3">
                                <h2>Services</h2>
                                <ul>
                                    <li><a href="#about">Money Tranfer</a></li>
                                    <li><a href="#about">Car Loan</a></li>
                                    <li><a href="#about">Insurance</a></li>
                                    <li><a href="#about">Home Lone</a></li>
                                </ul>
                            </div>
                            <div className="col-6 col-lg-3">
                                <h2>Follow Us</h2>
                                <div className="row">
                                    <div className="col-3 mx-auto">
                                        <a href="#"><i className="s-link fa-brands fa-facebook"></i></a>
                                    </div>
                                    <div className="col-3 mx-auto">
                                        <a href="#"><i className="s-link fa-brands fa-square-instagram"></i></a>
                                    </div>
                                    <div className="col-3 mx-auto">
                                        <a href="#"><i className="s-link  fa-brands fa-telegram"></i></a>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <hr />
                        <div className="mt-5">
                            <p className='text-center main-hero-para'>@Copyright 2023 Nullpay.All rigths recived.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
