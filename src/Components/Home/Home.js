import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Feature from '../Feature/Feature';
import ServiceList from '../ServiceList/ServiceList'


const Home = () => {
    return (
         <>
        <Banner></Banner>
        <Feature></Feature>
        <About></About>
        <ServiceList></ServiceList>
         </>
    );
};

export default Home;