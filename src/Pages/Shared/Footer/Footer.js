import React from 'react';
import logo from '../../../images/logo.png';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className='footer bg-dark py-5 text-center'>
            <Container>
                <img src={logo} alt="" />
                <p className='text-white text-center mt-3 mb-0'>
                    &copy; 2022 Spotographer, All Rights Reserved.
                </p>
            </Container>
        </footer>
    );
};

export default Footer;