import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Hero from '../Shared/Hero/Hero';
import './Blog.css';

const Blog = () => {
    return (
        <>
            <Hero></Hero>
            <div className="blog-area">
                <Container>
                    <div className="section-heading">
                        <h3>Questions Answer</h3>
                    </div>
                    <Row>
                        <Col lg={4}>
                            <div className="single-blog">
                                <h3>Difference between authorization and authentication</h3>
                                <p>Authentication is a process to verify any person but Authorization is a process to the person access level. Authentication is verifying any person. Authorization is set the person's activity. Authentication active through Email, SMS, One time pin etc. Authorization can set using settings. User can set the Authentication settings but user can't set the Authorization settings, it can set by the organization or admin.</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="single-blog">
                                <h3>Why I'm using firebase? What other options I have to implement authentication?</h3>
                                <p>I'm using Firebase because is's safe and fast. The trust level is very high because of Google's service. Also we can start Firebase free. Also the documentation is well described. Using Firebase we can do Authentication, Realtime Database, Hosting and many more in one place easily. We can use Email, Password authentication, Google, Facebook, Apple, Github authentication and many more.</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="single-blog">
                                <h3>What other services does firebase provide other than authentication.</h3>
                                <p>Other than authentication, firebase have some other services. Firebase provide Realtime Database, Hosting, Cloud Storage, Google Analytics, Cloud Firestore, Cloud Messaging, Cloud Functions etc. They have free and paid both services. Their services are used for different platform like, Web, IOS+, Android, Unity etc. They have Machine Learning package too.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Blog;