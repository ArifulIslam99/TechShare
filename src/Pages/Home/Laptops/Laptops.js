import React from 'react';
import { Row, Spinner } from 'react-bootstrap';
import useProducts from '../../../hooks/useProducts';
import Laptop from './Laptop'
// 

const Laptops = () => {

    const {laptops} = useProducts()
    
    // const laptops = products.filter(pr => pr.catagory==='Laptop')
    return (
        <div 
        
        data-aos="fade-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className='w-75 mx-auto py-5 my-5'>         
        <h2 style={{color:' #f34612 '}} className="mb-3 fw-bold fs-1" >Trending Laptops</h2>

        {
                 
                 (laptops.length < 1) && <Spinner animation="border" variant="success"></Spinner> 
             
         }
         <Row xs={1} md={3} className="mx-auto">
                {
                    laptops.slice(0,6).map(product => <Laptop
                        
                        key={product._id}
                        product={product}></Laptop> )
                }
            </Row>
        </div>
    );
};



export default Laptops