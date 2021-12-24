import { TextField , Button, CircularProgress} from '@mui/material';
import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import loginbg from '../../../images/login-bg.jpg';
import './Login.css'

const Login = () => {  

    const {userLogin, isLoading, googleSignIn, error} = useAuth();

    const history = useHistory();
    const location = useLocation();

const [loginData, setLoginData] = useState({});

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



const handleLoginSubmit = event =>{
    userLogin(loginData.email, loginData.password, history, location)
    event.preventDefault();
}
       

const handleGoogleSignIn = ()=>{
        googleSignIn(history,location)
        
}
    if(isLoading){return <CircularProgress></CircularProgress>}
    return (
  
        <>
          
         <div style={loginBackground} className="login-bg">
            
            </div>

            <div className="login-field">

                <h2>Please Login</h2>
                
                 <form onSubmit={handleLoginSubmit } 
                style={{color:'white'}}
                >
                <TextField 
                onBlur={handleOnBlur}
                sx={{ mb:2}}
                id="outlined-basic"
                name="email"
                label="Email"
                type="email"
                required 
                variant="standard"
                color="warning"  />
                   <br />
                <TextField 
                sx={{ mb:2}}
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

                 <Button 
                 sx={{bgcolor: 'success.main'}}
                 type="submit" 
                 variant="contained">Login</Button>
                </form>  

                <br />

                <h6 style={{color:"red"}}>{error} </h6>
                <p className="alternate-msg">New User ? <Link style={{textDecoration:'none', color:'orange'}} to="/register">Please Signup first</Link> </p> 
                <p>----- OR -----</p>
                <Button onClick={handleGoogleSignIn} variant="contained" sx={{ bgcolor: 'error.main', textTransform:'lowercase', marginRight:'5px'}}><i class="fab fa-google"></i>oogle Sign In</Button>

                

            </div>
        </>
        
    );
};

export default Login;