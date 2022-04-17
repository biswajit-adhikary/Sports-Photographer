import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const ForgotPassword = () => {
    return (
        <div className='form-area'>
            <Container>
                <div className="section-heading">
                    <h3>Forgot Password</h3>
                    <p>Please put email address and click submit.</p>
                </div>
                <Row>
                    <Col lg={{ span: 6, offset: 3 }}>
                        <Form>
                            <Form.Control type="email" placeholder="Email Address" />
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