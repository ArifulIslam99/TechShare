import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner1 from '../../../images/banner1.jpg'
import banner2 from '../../../images/banner2.jpg'
import banner3 from '../../../images/banner3jpg.jpg'
const FindDeviceBanner = () => {
    return (
        <div style={{width:'90%'}} className=' my-5 mx-auto'>



            <div className=' w-100 p-2'>
            <Carousel>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h5 className='fw-bold text-warning'> SmarthPhone Photography ?</h5>
      <Link to='/findmydevice'><Button variant='success'>Find My Device</Button></Link>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5 className='fw-bold text-warning'> Laptop for Office ?  </h5>
      <Link to='/findmydevice'><Button variant='success'>Find My Device</Button></Link>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5 className='fw-bold text-warning'> Manage all from watch?</h5>
      <Link to='/findmydevice'><Button variant='success'>Find My Device</Button></Link>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </div>
        </div>
    );
};

export default FindDeviceBanner;