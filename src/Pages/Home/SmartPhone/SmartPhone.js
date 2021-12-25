import React from 'react';
import { Row, Spinner } from 'react-bootstrap';
import useProducts from '../../../hooks/useProducts'
import Phone from './Phone'; 

import { connect } from 'react-redux';

const SmartPhone = () => {
    
    const {smartphone, productLoading} = useProducts()
    if(productLoading){return <Spinner animation="border" variant="success"></Spinner> }
    return (
        <div  className='w-75 mx-auto py-5 my-5' > 
            <h2 style={{color:' #f34612 '}} className="mb-3 fw-bold fs-1" >Trending SmartPhones</h2>
            <Row xs={1} md={3} className="mx-auto">
                {
                    smartphone.slice(0,6).map(product => <Phone product={product}></Phone>).reverse()
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

export default connect(mapToState)(SmartPhone);