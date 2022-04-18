import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Carousel from '../Carousel/Carousel';
import Feature from '../Feature/Feature';
import ServiceList from '../ServiceList/ServiceList'


const Home = () => {
    return (
         <>
        <Carousel></Carousel>
        <Banner></Banner>
        <Feature></Feature>
        <ServiceList></ServiceList>
         </>
    );
};

export default Home;