import React from 'react'

import Navbar from './Navbar';
import Header from './Header';
import Howitworks from './Howitworks';
import Aboutus from './Aboutus';
import Support from './Support';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Header />
            <Howitworks />
            <Aboutus />
            <Support />
            <Services />
            <Contact />
            <Footer />
        </React.Fragment>
    )
}

export default Home
