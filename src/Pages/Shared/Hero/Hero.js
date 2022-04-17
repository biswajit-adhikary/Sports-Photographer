import React from 'react';
import hero from '../../../images/banner.jpg';
import './Hero.css';

const Hero = () => {
    return (
        <div className='hero-area'>
            <img src={hero} alt="" />
        </div>
    );
};

export default Hero;