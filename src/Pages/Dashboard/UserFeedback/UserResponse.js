import React from 'react';
import { Card, Col } from 'react-bootstrap';

const UserResponse = ({feedback}) => {

    console.log(feedback)
    return (
        <div > 
            <Col >
      <Card className='m-3' style={{width: '300px', height: '350px'}}>
        
        <Card.Body>
          <Card.Title style={{color: 'red'}}> User Name : {feedback.name} </Card.Title>
          <p style={{color: 'blue'}}>User Email: {feedback.email} </p>
          <Card.Text>
             Message : {feedback.message}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default UserResponse;