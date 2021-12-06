import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import UserResponse from './UserResponse';


const UserFeedBack = () => {

    const [feedbacks, setFeedBacks] = useState([]);

    useEffect(()=>{
        fetch('https://safe-fjord-60058.herokuapp.com/feedbacks')
        .then(res => res.json())
        .then( data => setFeedBacks(data))
    },[]) 

   
    return (
        <div className="m-5">
            <h2 className="mb-3"> Users Feedbacks </h2> 

            <Row xs={1} md={4} className="mx-auto">
               {
                   feedbacks.map(feedback => <UserResponse
                    
                    feedback={feedback}>


                    </UserResponse> )
               }
            </Row>
        </div>
    );
};

export default UserFeedBack;