import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import google from '../../../images/google.png';
import github from '../../../images/git.png';

const Register = () => {
    return (
        <div className='form-area'>
            <Container>
                <div className="section-heading">
                    <h3>Register Now</h3>
                    <p>Please register to continue using our website.</p>
                </div>
                <Row>
                    <Col lg={{ span: 6, offset: 3 }}>
                        <Form>
                            <Form.Control type="text" placeholder="Full Name" />
                            <Form.Control type="email" placeholder="Email Address" />
                            <Form.Control type="password" placeholder="Password" />
                            <Button className='btn btn-theme' type="submit">
                                Login
                            </Button>
                        </Form>
                        <div className="extra">
                            <div></div>
                            <span>Or</span>
                            <div></div>
                        </div>
                        <div className="login-buttons">
                            <Button className='btn btn-theme' type="submit">
                                <img src={google} alt="" /> Continue With Google
                            </Button>
                            <Button className='btn btn-theme' type="submit">
                                <img src={github} alt="" /> Continue With Github
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;