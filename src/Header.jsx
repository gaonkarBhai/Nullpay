import React from 'react'

const Header = () => {
    return (
        <header>
            <section className='container main-hero-container'>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="header-left-side  d-flex justify-content-center flex-column align-items-start">
                        <h1 className='display-2'>Securely Transfer Your <br />Money</h1>
                        <p className='main-hero-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, vel. Odio saepe natus incidunt placeat maiores animi libero quaerat quod amet earum. Quo, provident earum voluptatem numquam officia vel dolores!</p>
                        <h3>Get Early Access For You</h3>
                        <div className="priem-input mt-3">
                            <input type="text" className='' placeholder='Enter your email' />
                            <button className="">Get it now</button>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 w-50  header-right-side d-flex justify-content-center align-items-center">
                        <img src="./images/hero.jpg" className='img-fluid' alt="hero img" />
                    </div>
                </div>
            </section>
        </header>
    );
}

export default Header
