import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (user) {
        navigate('/');
    }

    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
    }
    return (
        <div className='form-area'>
            <Container>
                <div className="section-heading">
                    <h3>Log In Now</h3>
                    <p>Please login to continue using our website.</p>
                </div>
                <Row>
                    <Col lg={{ span: 6, offset: 3 }}>
                        <Form onSubmit={handleLogin}>
                            <Form.Control name="email" type="email" placeholder="Email Address" />
                            <Form.Control name="password" type="password" placeholder="Password" />
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