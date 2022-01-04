import React from 'react';
import { Row, Spinner } from 'react-bootstrap';
import useProducts from '../../../hooks/useProducts';
import SingleProduct from '../../AllProducts/SingleProduct';
// import Watch from './Watch'

const SmartWatch = () => {
    
    const {smartWatches} = useProducts()
    // const smartwatch = products.filter(pr => pr.catagory==='SmartWatch')

    return (
        <div  
        
        data-aos="fade-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        
        
        className='w-75 mx-auto py-5 my-5'> 
            

            <h2 style={{color:' #f34612 '}} className="mb-3 fw-bold fs-1" >Trending SmartWatches</h2>

            
        {
                 
                 (smartWatches.length < 1) && <Spinner animation="border" variant="success"></Spinner> 
             
         }
            <Row xs={1} md={3} className="mx-auto">
                {
                    smartWatches.slice(0,6).map(product =>
                  
                             <SingleProduct
                        key={product._id}
                        product={product}></SingleProduct> 
                 
                        
                        )
                }
            </Row>
        </div>
    );
};


export default SmartWatch