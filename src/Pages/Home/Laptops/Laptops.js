import React from 'react';
import { Row, Spinner } from 'react-bootstrap';
import useProducts from '../../../hooks/useProducts' 

import { connect } from 'react-redux';
import Laptop from './Laptop';

const Laptops = () => {
    
    const {laptops, productLoading} = useProducts()
    if(productLoading){return <Spinner animation="border" variant="success"></Spinner> }
    return (
        <div  className='w-75 mx-auto py-5 my-5'>         
            <h2 style={{color:' #f34612 '}} className="mb-3 fw-bold fs-1" >Trending Laptops</h2>
            <Row xs={1} md={3} className="mx-auto">
                {
                    laptops.slice(0,6).map(product => <Laptop product={product}></Laptop> )
                }
            </Row>
        </div>
    );
};

const mapToState = state => {
    
    console.log(state)

    return{

    }
}

export default connect(mapToState)(Laptops);