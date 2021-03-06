import React from 'react';
import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css';


const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/checkout/${id}`);
    }
    return (
        <Col lg={4}>
            <div className="single-service">
                <img src={img} alt="" />
                <div className="service-text">
                    <h3>{name}</h3>
                    <h4>Price: ${price}</h4>
                    <p>{description}</p>
                    <button onClick={() => navigateToServiceDetail(id)} className='btn btn-theme'>Book Now</button>
                </div>
            </div>
        </Col>
    );
};

export default Service;