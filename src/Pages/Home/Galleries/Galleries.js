import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Gallery from '../Gallery/Gallery';
import './Galleries.css';

const Galleries = () => {
    const [galleries, setGalleries] = useState([]);
    useEffect(() => {
        fetch('galleries.json')
            .then(res => res.json())
            .then(data => setGalleries(data));
    }, [])
    return (
        <div className='gallery-area'>
            <Container>
                <div className="section-heading">
                    <h3>Some Moments</h3>
                </div>
                <Row>
                    {
                        galleries.map(gallery => <Gallery
                            key={gallery.id}
                            gallery={gallery}
                        ></Gallery>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Galleries;