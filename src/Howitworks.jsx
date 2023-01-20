import React from 'react'
import Works from './Api/works'
function Howitworks() {
    return (
        <section>
            <div className="container work-container mt-5 mb-5">
                <h1 className='main-heading'>How Does It Works ?</h1>
                <div className="row">
                    {
                        Works.map((ele) => {
                            return (
                        <div key={ele.id} className="col-12 col-lg-4 text-center work-container-subdiv">
                        <i className={ele.icon}></i>
                        <h2 className='sub-heading'>{ele.title}</h2>
                        <p className='main-hero-para'>{ele.desc}</p>
                    </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        </section>
    )
}

export default Howitworks