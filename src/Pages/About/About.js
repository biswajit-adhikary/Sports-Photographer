import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Hero from '../Shared/Hero/Hero';
import biswajit from '../../images/biswajit.png';
import './About.css';

const About = () => {
    return (
        <>
            <Hero></Hero>
            <div className="about-area">
                <Container>
                    <Row>
                        <Col lg={5}>
                            <div className="about-image">
                                <img src={biswajit} alt="" />
                            </div>
                        </Col>
                        <Col lg={7} className="d-flex align-items-center">
                            <div className="about-text">
                                <h3>Biswajit Adhikary</h3>
                                <h2>About my goal</h2>
                                <p>Hi, I'm Biswajit Adhikary. I have completed my MBS Degree. Now I'm learning Web Development in Programming Hero. My Goal is become an expert Web Developer. For achieve my goal I'm doing very hard work. Everyday I spend minimum 10 hours for learning new technologies and practising it. I believe that I can do the best in this area. Hard work is the key and I'm doing the hard work now.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default About;