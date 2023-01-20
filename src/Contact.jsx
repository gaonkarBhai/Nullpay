import React, { useState } from 'react'

const Contact = () => {
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        message:""
    })
    let name, value;
    const postUserData = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUserData({ ...userData, [name]: value });
    }
    const submitData = async (e) => {
        e.preventDefault();
        const { firstName, lastName, phone, email, address, message } = userData;
        if (firstName && lastName && phone && email && address && message) {
            const res = fetch("https://nullpay-5d1b3-default-rtdb.firebaseio.com/userDataRecord.json",
                {
                    method: "POST",
                    headers: {
                        'Content-Type': "application/json"
                    },
                    body: JSON.stringify({
                        firstName, lastName, phone, email, address, message
                    })
                }
            );
        
            if (res) {
                setUserData({
                    firstName: "",
                    lastName: "",
                    phone: "",
                    email: "",
                    address: "",
                    message: ""
                })
                alert("Sent")
            }
            else {
                alert("Try again")
            }
        }
        else {
            alert("Fill the currect data")
        }
    };
    return (
        <section className='contactus-section'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-10 max-auto">
                        <div className="d-flex gap-3" id="contect-flex">
                            <div className="contactus-left-side col-12 col-lg-5 col-md-4">
                                <h2 className='main-heading fw-bold'>Stay connected with us <br /> Sales team</h2>
                                <p className='main-hero-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero consequatur harum illo corrupti, voluptatum dolorum quo enim quos rem. Numquam, suscipit sapiente. Amet laudantium, iste debitis quod repellat itaque quo?</p>
                                <figure className='picture-contact'>
                                    <img src="./images/contect.jpg" alt="loading" className='img-fluid' />
                                </figure>
                            </div>
                            <div className="contect-right-side col-12 col-lg-5  col-md-4" id='special-form'>
                                <form method='post'>
                                    <div className="row">
                                        <div className="col-lg-6 col-12 contact-input-field">
                                            <input type="text" name="firstName" className='form-control' value={userData.firstName} onChange={postUserData} placeholder='First name' />
                                        </div>
                                        <div className="col-lg-6 col-12 contact-input-field">
                                            <input type="text" name="lastName" className='form-control' value={userData.lastName} onChange={postUserData} placeholder='Last name' />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 col-12 contact-input-field">
                                            <input type="text" className='form-control' name="phone" value={userData.phone} onChange={postUserData} placeholder='phone number' />
                                        </div>
                                        <div className="col-lg-6 col-12 contact-input-field">
                                            <input type="text" className='form-control' name='email' value={userData.email} onChange={postUserData} placeholder='email' />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 contact-input-field">
                                            <input type="text" className='form-control' name="address" value={userData.address} onChange={postUserData} placeholder='Adress' />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 ">
                                            <input type="text" className='form-control' name='message' value={userData.message} onChange={postUserData} placeholder='your message' />
                                        </div>
                                    </div>
                                    <div className="form-check d-flex gap-4">
                                        <input className="form-check-input mt-5" type="checkbox" id="flexCheckDefault" />
                                        <label className="form-check-label main-hero-para">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae est nisi
                                        </label>
                                    </div>
                                    <button type='submit' className='btn btn-style w-100' onClick={submitData}>submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact