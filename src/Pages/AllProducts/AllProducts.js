import React from 'react';
import { Row, Spinner } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';
import SingleProduct from './SingleProduct';

const AllProducts = () => {

    const {products, productLoading} = useProducts()

    if(productLoading){return <Spinner animation="border" variant="success"></Spinner> }
    return (

        
        <div>
             <h2 style={{color:' #f34612 '}} className="mb-3 fw-bold fs-1" >Explore Gadgets</h2>
              
             <Row xs={1} md={3} className="mx-auto">
                {
                    products.map(product => <SingleProduct product={product}></SingleProduct> )
                }
            </Row>
            
        </div>
    );
};

export default AllProducts;