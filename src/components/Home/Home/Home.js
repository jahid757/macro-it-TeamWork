import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Counter from '../Counter/Counter';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Slider from '../Slider/Slider'
import Team from '../Team/Team';

const Home = () => {
    return (
        <>
            <Header/>
            <Slider/>
            <About/>
            <Services/>
            <Counter/>
            <Team/>
            <Contact/>
            <Footer/>
        </>
    );
};

export default Home;