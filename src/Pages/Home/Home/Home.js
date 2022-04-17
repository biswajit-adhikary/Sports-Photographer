import React from 'react';
import Banner from '../Banner/Banner';
import Galleries from '../Galleries/Galleries';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <Galleries></Galleries>
        </>
    );
};

export default Home;