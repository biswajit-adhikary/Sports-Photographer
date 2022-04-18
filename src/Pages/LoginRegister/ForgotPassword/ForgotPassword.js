import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const resetPassword = async event => {
        event.preventDefault();
        const email = event.target.email.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Email Send!');
        }
        else {
            toast('Please enter email address!');
        }
    }

    return (
        <div className='form-area'>
            <Container>
                <ToastContainer />
                <div className="section-heading">
                    <h3>Forgot Password</h3>
                    <p>Please put email address and click submit.</p>
                </div>
                <Row>
                    <Col lg={{ span: 6, offset: 3 }}>
                        <Form onSubmit={resetPassword}>
                            <Form.Control name="email" type="email" placeholder="Email Address" />
                            <Button className='btn btn-theme' type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ForgotPassword;