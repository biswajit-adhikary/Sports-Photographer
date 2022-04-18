import React from 'react';
import { Container } from 'react-bootstrap';
import Hero from '../Hero/Hero';
import './NotFound.css';

const NotFound = () => {
    return (
        <>
            <Hero></Hero>
            <div className="not-found">
                <Container>
                    <h2>404</h2>
                    <h3>Page Not Found!</h3>
                </Container>
            </div>
        </>
    );
};

export default NotFound;