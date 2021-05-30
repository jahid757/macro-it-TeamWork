import React from 'react';
import About from '../About/About';
import Counter from '../Counter/Counter';
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
        </>
    );
};

export default Home;