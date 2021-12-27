import React, {useState, useEffect} from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth'
import RecommendationProduct from './RecommendationProduct';
const Recommendation = () => {


    const [products, setProducts] = useState([]);
    const {user} = useAuth();
    useEffect(()=>{
        fetch(`https://safe-fjord-60058.herokuapp.com/recommendations/${user.email}`)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]) 

     
    
    return (
        <div style={{width:'80%'}} className='mx-auto'>
            <h2 style={{color:' #f34612 '}} className="mb-3 fw-bold fs-1" >Saved Recommendations</h2>
              
              <Row xs={1} md={2} className="mx-auto">
                {
                    products.map(product => <RecommendationProduct
                     
                        key={product._id}
                        id={product.productId}
                        recomendationId={product._id}
                    
                    ></RecommendationProduct>)
                }
             </Row>

        </div>
    );
};

export default Recommendation;