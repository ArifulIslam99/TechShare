import { TextField , Button, CircularProgress} from '@mui/material';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import loginbg from '../../../images/login-bg.jpg';


const Register = () => { 


    const [loginData, setLoginData] = useState({});
    
    const {userRegistration, isLoading, googleSignIn, error} = useAuth()

    const history = useHistory();

    const loginBackground = {
        background : `url(${loginbg})`,
        backgroundSize: 'cover'
       
    } 
    
    const handleOnBlur = event =>{
         const field = event.target.name;
         const value = event.target.value;
    
         const newLoginData = {...loginData};
         newLoginData[field] = value;
         setLoginData(newLoginData)
    } 


    
    const handleGoogleSignIn = ()=>{
        googleSignIn(history)
        
}
    
    const handleRegisterSubmit = event =>{
        if(loginData.password !== loginData.password2)
        {
            alert('Password Did Not Match')
        } 
        else{
            userRegistration(loginData.email, loginData.password, loginData.name,history)
        }

        event.preventDefault(); 
       
    }
    

    return (
        <>
     
        <div style={loginBackground} className="login-bg">
           
           </div>

           <div className="login-field">

               <h2>Sign-Up Now</h2>
               
              { (!isLoading) && <form onSubmit={handleRegisterSubmit } 
               style={{color:'white'}}
               >
               <TextField 
               onBlur={handleOnBlur}
               sx={{ mb: 1}}
               id="outlined-basic"
               name="name"
               label="Name"
               type="text"
               required 
               variant="standard"
               color="warning"  />
                  <br />
               <TextField 
               onBlur={handleOnBlur}
               sx={{ mb:1}}
               id="outlined-basic"
               name="email"
               label="Email"
               type="email"
               required 
               variant="standard"
               color="warning"  />
                  <br />
               <TextField 
               sx={{ mb:1}}
               onBlur={handleOnBlur}
               id="outlined-basic"
               label="Password"
               type="password"
               name="password"
               required 
               variant="standard"
               color= "warning"
               />
                <br />
               <TextField 
               sx={{ mb:1}}
               onBlur={handleOnBlur}
               id="outlined-basic"
               label="ReType Your Password"
               type="password"
               name="password2"
               required 
               variant="standard"
               color= "warning"
               />

                  <br />

                <Button 
                sx={{bgcolor: 'success.main'}}
                type="submit" 
                variant="contained">Register</Button>
               </form> } 

               {
                   (isLoading) && 
                   <CircularProgress color="inherit" />
               }
              
               <br />
               <h6 style={{color:"red"}}>{error} </h6>
               <p className="alternate-msg">Already Registered ? <Link style={{textDecoration:'none', color:'orange'}} to="/login">Please Login</Link> </p> 
               <p>----- OR -----</p>
               <Button onClick={handleGoogleSignIn} variant="contained" sx={{ bgcolor: 'error.main', textTransform:'lowercase'}}><i className="fab fa-google"></i>oogle Sign In</Button>

           </div>
       </>
    );
};

export default Register;