import React,  {useState} from 'react';
import { Button, FormControl, InputGroup, Row, Spinner } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';
import Footer from '../Shared/Footer/Footer';
// import SingleProduct from './SingleProduct';
import SingleProductMain from './SingleProductMain';

const AllProducts = () => {

 
    const {products} = useProducts()

    const [searchedProduct, setSearchProduct] = useState([])

    const [search, setSearch] = useState('');
    
    
    const handleSearch = e => {
            
          const searchOperation = products.filter(pr => pr.brand.toLowerCase().includes(search.toLowerCase()) || pr.model.toLowerCase().includes(search.toLowerCase()) );
           setSearchProduct(searchOperation)       
          
    }

    return (
    
      <div>
           <div style={{width:'80%', margin:'auto'}}>

        <h2 style={{color:' #f34612 '}} className="mb-3 fw-bold fs-1" >Explore Gadgets</h2> 



        <InputGroup style={{width:'60%'}} className="my-3 mx-auto">
            <FormControl
            placeholder="Search Products"
            aria-label=""
            aria-describedby="basic-addon2"
            onChange={e => setSearch(e.target.value)}
            />
            <Button onClick={handleSearch} variant="outline-secondary" id="button-addon2">
            <i className="fas fa-search"></i>
            </Button>

        </InputGroup>


             {
                 (products.length < 1) && <Spinner animation="border" variant="success"></Spinner> 
             }

            <div>           
            {   

            (searchedProduct.length < 1) ?
                   
            <Row xs={1} md={3} className="mx-auto">
                { 
                    products.map(product =>
                            
                       
                            <SingleProductMain
                            key={product._id}
                            product={product}></SingleProductMain>
                                            
                        )
                }
            </Row> 
               :
            <Row xs={1} md={3} className="mx-auto">
                { 
                    searchedProduct.map(product =>
                        
             
                            <SingleProductMain 
                            
                             key={product._id}
                             product={product}></SingleProductMain>                      
                        )
                }
            </Row>
            
            }
            
        </div> 
        
       </div>
       <Footer></Footer>
      </div>
    );
};

export default AllProducts;