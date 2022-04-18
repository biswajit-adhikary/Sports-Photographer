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
        const name = event.target.name.value;
        const email = event.target.email.value;
        const address = event.target.address.value;
        const phone = event.target.phone.value;
        if (name && email && address && phone) {
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
                                <Form.Control name="name" type="text" placeholder="Name" required />
                                <Form.Control name="email" type="text" placeholder="Email Address" required />
                                <Form.Control name="address" as="textarea" placeholder="Address" required />
                                <Form.Control name="phone" type="tel" placeholder="Phone Number" required />
                                <Button className='btn btn-theme' type="submit">
                                    Conform Booking
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