import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Modal } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Laptop = ({product}) => { 
    
    
  const {user} = useAuth()
  const [show, setShow] = useState(false);
  const [existingRec, setExistingRec] = useState([]);
  const history = useHistory()
  useEffect(()=>{
    let isSubscribe = true;
    fetch(`https://safe-fjord-60058.herokuapp.com/recommendations/${user.email}`)
    .then(res => res.json())
    .then(data => {
      if(isSubscribe)
      {
        setExistingRec(data)
      }
    })

    return () => {
      isSubscribe = false;
    }
  },[user.email]) 
  
    
    const handlesavedRecommendation = (id) =>{

      const info = {productId:id, email: user.email}
      const matchProduct = existingRec.find(pr => pr.productId === id);

      if(matchProduct)
      {
          alert( 'Product Already Added!')
      }

      else{
        fetch(`https://safe-fjord-60058.herokuapp.com/recommendations`,{
        method: 'POST',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(info)
      }).then(res=> {
        alert('Added Successfully')
      
        setShow(false)

        history.go(0)
      })
      }
      
      
    }



    return (
        <Col 
        
        >
      <Card className='p-3 my-2'>
        <Card.Img className="img-fluid m-auto"  style={{width:'250px', height:'250px'}} src={`data:image/jpeg;charset=utf-8;base64,${product.image}`}alt="" variant="top" />
        <Card.Body>
          <Card.Title> {product.brand} </Card.Title>
           <p> {product.model} </p>
           <p> {product.price} BDT </p>
           <Button variant="primary" onClick={() => setShow(true)}>
            Watch Details
            </Button>


            {/* 
            
              Modal
            */}

<Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
              {product.catagory} Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <div className='row'>
             <div className='col-lg-6'>
             <Card.Img className="img-fluid m-auto"  style={{width:'200px', height:'200px'}} src={`data:image/*;base64,${product.image}`}alt="" variant="top" />
             <p className='text-center '> <span className='fw-bold'>Price: </span> {product.price} BDT </p>

             </div>
             <div className='col-lg-6'>
                  <p> <span className='fw-bold'>Brand: </span> {product.brand} </p>
                  <p><span className='fw-bold'>Model: </span> {product.model}</p>
                  <p> <span className='fw-bold'>Specification: </span> {product.specification} </p> 
                  {
                    (user.email) &&

                    <Button onClick={()=>handlesavedRecommendation(product._id)} variant="warning">Save to Recommendation</Button>
                  }
             </div>
           </div>
        </Modal.Body>
      </Modal>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default Laptop;