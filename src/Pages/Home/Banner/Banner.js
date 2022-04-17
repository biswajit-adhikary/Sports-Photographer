import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../../images/slider/slider-one.jpg';
import slider2 from '../../../images/slider/slider-two.jpg';
import slider3 from '../../../images/slider/slider-three.jpg';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <Carousel fade className='slider'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Spotographer</h3>
                    <h2>Sports Photographer</h2>
                    <p>I Capture Sports Moments and Actions.</p>
                    <Link to="/about">More About Me</Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Spotographer</h3>
                    <h2>Sports Photographer</h2>
                    <p>I Capture Sports Moments and Actions.</p>
                    <Link to="/about">More About Me</Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Spotographer</h3>
                    <h2>Sports Photographer</h2>
                    <p>I Capture Sports Moments and Actions.</p>
                    <Link to="/about">More About Me</Link>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;