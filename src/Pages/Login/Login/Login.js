import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';

const Login = () => {
    return (
        <div className='form-area'>
            <Container>
                <div className="section-heading">
                    <h3>Log In Now</h3>
                    <p>Please login to continue using our website.</p>
                </div>
                <Row>
                    <Col lg={{ span: 6, offset: 3 }}>
                        <Form>
                            <Form.Control type="email" placeholder="Email Address" />
                            <Form.Control type="password" placeholder="Password" />
                            <p><Link to="/forgotpassword">Forgot Password?</Link></p>
                            <Button className='btn btn-theme' type="submit">
                                Login
                            </Button>
                            <p className='mt-3'>New to Spotographer? <Link to="/register">Please Create New Account.</Link></p>
                        </Form>
                        <div className="extra">
                            <div></div>
                            <span>Or</span>
                            <div></div>
                        </div>
                        <SocialLogin></SocialLogin>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;