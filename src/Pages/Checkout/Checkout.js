import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Hero from '../Shared/Hero/Hero';
import './Checkout.css';

const Checkout = () => {
    const { serviceId } = useParams();
    return (
        <>
            <Hero></Hero>
            <div className='checkout-area'>
                <Container>
                    <div className="section-heading">
                        <h3>Book My Service: {serviceId}</h3>
                    </div>
                    <Row>
                        <Col lg={{ span: 8, offset: 2 }}>
                            <Form>
                                <Form.Control type="text" placeholder="Full Name" />
                                <Form.Control type="email" placeholder="Email Address" />
                                <Form.Control type="tel" placeholder="Phone Number" />
                                <Form.Control as="textarea" placeholder="Message" />
                                <Button className='btn btn-theme' type="submit">
                                    Book Now
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Checkout;