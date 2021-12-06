import { TextField, Button } from '@mui/material';
import React, { useState } from 'react';

const ContactUs = () => { 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('')

    const handleSubmit = event => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('name', name )
        formData.append('email', email )
        formData.append('message', message )
        

        fetch('https://safe-fjord-60058.herokuapp.com/feedbacks', {
            method: 'POST',
            body: formData
            })
            .then(response => response.json())
            .then(data => {
             console.log('Success:', data);
             alert('Thanks For Your Response!');
             document.getElementById('feedbackform').reset()
             
            })
            .catch(error => {
            console.error('Error:', error);
            });

        
    } 
   
    return (
        <div 
        
        
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1500"
        style={{width:'90%', 
         
         border:'3px solid gray', 
         borderRadius: '15px',
         margin:'5px',
         padding:'25px'
        }} className='mx-auto mb-5' >  
            <h2 style={{color:' #f34612 '}} className="mb-3 fw-bold fs-1" >Ping Us!</h2> 
             

             <form id='feedbackform' onSubmit={handleSubmit}>
             <div className='row'>
            <div className='col-lg-6'>
            <TextField
             id="standard-basic"
             label="Your Name"
             name='name'
             onChange={e => setName(e.target.value)}
             className='blog'
             variant="standard" /> <br /> <br /> <br />
             <TextField
             id="standard-basic"
             label="Email"
             name='email'
             onChange={e => setEmail(e.target.value)}
             className='blog'
             variant="standard" />
            </div>
            <div className='col-lg-6'>
            <TextField
                
                className="blog"
                onChange={e => setMessage(e.target.value)}
                id="description"
                label="Write Message"
                multiline
                rows={6}
                
          variant="standard"
        />     <br /> <br />

                <Button variant="contained" type='submit'>
                    Send
                </Button>
            </div>
             
            </div>
             </form>
            
        </div>
    );
};

export default ContactUs;