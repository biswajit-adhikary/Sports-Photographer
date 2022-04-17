import React from 'react';
import { Col } from 'react-bootstrap';
import './Service.css';


const Service = ({ service }) => {
    const { name, img, description } = service;
    return (
        <Col lg={4}>
            <div className="single-service">
                <img src={img} alt="" />
                <div className="service-text">
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <button className='btn btn-theme'>Book Now</button>
                </div>
            </div>
        </Col>
    );
};

export default Service;