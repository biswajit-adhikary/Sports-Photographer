import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();

    if (user) {
        navigate('/');
    }

    const handleRegister = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='form-area'>
            <Container>
                <div className="section-heading">
                    <h3>Register Now</h3>
                    <p>Please register to continue using our website.</p>
                </div>
                <Row>
                    <Col lg={{ span: 6, offset: 3 }}>
                        <Form onSubmit={handleRegister}>
                            <Form.Control name="name" type="text" placeholder="Full Name" />
                            <Form.Control name="email" type="email" placeholder="Email Address" />
                            <Form.Control name="password" type="password" placeholder="Password" />
                            <Button className='btn btn-theme' type="submit">
                                Register
                            </Button>
                            <p className='mt-3'>Already have an account? <Link to="/login">Login Here.</Link></p>
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

export default Register;