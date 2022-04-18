import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    let errorMessage;
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updatingError] = useUpdateProfile(auth);

    const navigate = useNavigate();
    if (user) {
        navigate('/home');
    }

    if (loading || updating) {
        return <Loading></Loading>;
    }

    if (error || updatingError) {
        errorMessage = <p className='text-danger'>Error: {error?.message}</p>;
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
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
                            <Form.Control name="email" type="email" placeholder="Email Address" required />
                            <Form.Control name="password" type="password" placeholder="Password" required />
                            <Button className='btn btn-theme' type="submit">
                                Register
                            </Button>
                            <p className='mt-3'>Already have an account? <Link to="/login">Login Here.</Link></p>
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

export default Register;