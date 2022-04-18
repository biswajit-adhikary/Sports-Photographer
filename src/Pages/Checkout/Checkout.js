import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Hero from '../Shared/Hero/Hero';
import './Checkout.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    const { serviceId } = useParams();
    const bookService = event => {
        event.preventDefault();
        const service = event.target.event.value;
        const details = event.target.details.value;
        if (service && details) {
            toast('Thank you for booking!');
        }
        else {
            toast('Please put details information!');
        }
    }
    return (
        <>
            <Hero></Hero>
            <div className='checkout-area text-center'>
                <ToastContainer />
                <Container>
                    <div className="section-heading">
                        <h3>Book my service: {serviceId}</h3>
                        <p>Please fill the form with details information.</p>
                    </div>
                    <Row>
                        <Col lg={{ span: 6, offset: 3 }}>
                            <Form onSubmit={bookService}>
                                <Form.Control name="event" type="text" placeholder="Event Name" />
                                <Form.Control name="details" as="textarea" placeholder="Details Message" />
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