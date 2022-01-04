import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Card, Col, Modal } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


const RecommendationProduct = ({id, recomendationId}) => {
    const [show, setShow] = useState(false);
    const history = useHistory();
    const [recomended, setRecomended] = useState([])
    useEffect(()=>{
        fetch(`https://safe-fjord-60058.herokuapp.com/product/${id}`)
        .then(res => res.json())
        .then(data => setRecomended(data))
    },[id])
    

    const deleteFromRecommendation = Eventid =>{
      
        fetch(`https://safe-fjord-60058.herokuapp.com/recommendation/${Eventid}`,
        {
            method: 'Delete'
        }).then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0) 
            {
               alert('Removed Successfully' )
               setShow(false)
               history.go(0)
            } 

          
        })

    }
    return (
        <div >
            <Col 
        data-aos="fade-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        >
      <Card className='p-3 my-2'>
        <Card.Img className="img-fluid m-auto"  style={{width:'250px', height:'250px'}} src={`data:image/*;base64,${recomended.image}`}alt="" variant="top" />
        <Card.Body>
          <Card.Title> {recomended.brand} </Card.Title>
           <p> {recomended.model} </p>
           <p> {recomended.price} BDT </p>
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
              {recomended.catagory} Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <div className='row'>
             <div className='col-lg-6'>
             <Card.Img className="img-fluid m-auto"  style={{width:'200px', height:'200px'}} src={`data:image/*;base64,${recomended.image}`}alt="" variant="top" />
             <p className='text-center fw-bold'> <span className='fw-bold'>Price: </span> {recomended.price} BDT</p>

             </div>
             <div className='col-lg-6'>
                  <p> <span className='fw-bold'>Brand: </span>:  {recomended.brand} </p>
                  <p><span className='fw-bold'>Model: </span>{recomended.model}</p>
                  <p> <span className='fw-bold'>Specification: </span> {recomended.specification} </p> 
                 
                  
             </div> 
             <Button onClick={()=>deleteFromRecommendation(recomendationId)} style={{width:'60%', margin:'auto'}} variant='danger'> Remove From Recommendation </Button>
           </div>
        </Modal.Body>
      </Modal>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default RecommendationProduct;