import React from 'react';
import { Row, Spinner } from 'react-bootstrap';
import useProducts from '../../../hooks/useProducts' 

import { connect } from 'react-redux';
import SingleProduct from '../../AllProducts/SingleProduct';

const Laptops = () => {
    
    const {laptops, productLoading} = useProducts()
    if(productLoading){return <Spinner animation="border" variant="success"></Spinner> }
    return (
        <div  className='w-75 mx-auto py-5 my-5'>         
            <h2 style={{color:' #f34612 '}} className="mb-3 fw-bold fs-1" >Trending Laptops</h2>
            <Row xs={1} md={3} className="mx-auto">
                {
                    laptops.slice(0,6).map(product => <SingleProduct
                        
                        key={product._id}
                        product={product}></SingleProduct> ).reverse()
                }
            </Row>
        </div>
    );
};

const mapToState = state => {

    return{

    }
}

export default connect(mapToState)(Laptops);