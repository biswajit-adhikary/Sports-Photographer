import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let errorMessage;
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (user) {
        navigate(from, { replace: true });
    }

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        errorMessage = <p className='text-danger'>Error: {error?.message}</p>
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
                            <Form.Control name="email" type="email" placeholder="Email Address" required />
                            <Form.Control name="password" type="password" placeholder="Password" required />
                            <p><Link to="/forgotpassword">Forgot Password?</Link></p>
                            <Button className='btn btn-theme' type="submit">
                                Login
                            </Button>
                            <p className='mt-3'>New to Spotographer? <Link to="/register">Please Create New Account.</Link></p>
                        </Form>
                        {errorMessage}
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