import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className='footer bg-dark py-3'>
            <Container>
                <p className='text-white text-center m-0'>
                    &copy; 2022 Biswajit Adhikary, All Rights Reserved.
                </p>
            </Container>
        </footer>
    );
};

export default Footer;