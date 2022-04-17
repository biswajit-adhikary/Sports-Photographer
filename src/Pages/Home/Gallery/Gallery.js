import React from 'react';
import { Col } from 'react-bootstrap';
import './Gallery.css';

const Gallery = ({ gallery }) => {
    const { name, img } = gallery;
    return (
        <Col lg={3}>
            <div className="single-gallery">
                <img src={img} alt={name} />
            </div>
        </Col>
    );
};

export default Gallery;