import React from 'react';
import {  Carousel } from 'react-bootstrap';
import banner1 from '../../../images/bannerBg-1.jpg'
import banner2 from '../../../images/bannerBg-2.jpg'
import banner3 from '../../../images/bannerBg3.jpg'

const Banner = () => {
    return (
        <div style={{width:'90%', height:'60%'}} className="mb-5 mx-auto">
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className="fw-bold">Welcome To TechShare Bangladesh</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner1}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3  className="fw-bold">Find Your Perfect Gadget</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h3 style={{color:'red'}}  className="fw-bold">Explore About Gadget</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;