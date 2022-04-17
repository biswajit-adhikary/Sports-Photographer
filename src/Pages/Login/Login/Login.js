import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import google from '../../../images/google.png';
import github from '../../../images/git.png';
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

export default Login;