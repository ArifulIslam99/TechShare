import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner1 from '../../../images/banner1.jpg'
import banner2 from '../../../images/banner2.jpg'
import banner3 from '../../../images/banner3jpg.jpg'
const FindDeviceBanner = () => {
    return (
        <div style={{width:'90%'}} className='row my-5 mx-auto'>
            <div className='col-lg-8 p-4'>
            <Carousel>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>Photography in SmarthPhone ?</h5>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5> Laptop for Office ?  </h5>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5> Manage all from watch?</h5>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </div>

            <div className='col-lg-4 my-auto text-start ps-5'>
                   <h2 className='fw-bold' style={{color:'goldenrod'}}>Switch to a new Device ?</h2> 
                <p className='fw-bold' style={{color:'grey'}}>Can't find your perfect one ?</p>
                <Link to='/findmydevice'><Button variant='success'>Find My Device</Button></Link>
            </div>
        </div>
    );
};

export default FindDeviceBanner;