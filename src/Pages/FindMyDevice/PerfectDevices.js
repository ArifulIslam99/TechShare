import React, { useEffect, useState } from 'react';
import { Button, Row, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import SingleProductMain from '../AllProducts/SingleProductMain';

const PerfectDevices = ({requirment}) => {
    const [products, setProducts] = useState([])
    const history = useHistory()
    const refresh = () =>{
        history.go(0)
    }


    useEffect(()=>{
        
        fetch(`https://safe-fjord-60058.herokuapp.com/products/${requirment.type}`)
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        })
           
    },[requirment.type])
     
        const filterProducts = products.filter(product => (product.priority === requirment.speciality && parseInt(requirment.budget) <  parseInt(product.price)) )

    return (

        
        <div>
           <h2 className="my-5" style={{fontWeight:'600', color:'orangered', fontSize:'42px'}}> Best Choices For You </h2> 


             {
                 (filterProducts.length < 1) && 

                 <Spinner animation="border" variant="success"></Spinner> 

                 
             }

                 <Row xs={1} md={3} className="mx-auto">
                   { 
                    filterProducts.map(product =>
                            
                       
                            <SingleProductMain
                            key={product._id}
                            product={product}></SingleProductMain>
                                            
                        )
                 }
                 </Row> 

             
             <Button variant='success' onClick={refresh}>Check Again</Button>
        </div>
    );
};

export default PerfectDevices;