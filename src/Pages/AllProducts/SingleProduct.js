import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleProduct = ({product}) => { 
    
    
    return (
        <Col 
        data-aos="fade-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        >
      <Card className='p-3 my-2'>
        <Card.Img className="img-fluid m-auto"  style={{width:'250px', height:'250px'}} src={`data:image/*;base64,${product.image}`}alt="" variant="top" />
        <Card.Body>
          <Card.Title> {product.brand} </Card.Title>
           <p> {product.model} </p>
           <p> {product.price} BDT </p>
          
        </Card.Body>
      </Card>
    </Col>
    );
};

export default SingleProduct;