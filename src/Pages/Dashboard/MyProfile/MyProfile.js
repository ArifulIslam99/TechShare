import React, {useState, useEffect} from 'react';
import useAuth from '../../../hooks/useAuth'
import { Button } from 'react-bootstrap';
import './MyProfile.css'
const MyProfile = () => { 
    const [image, setImage] = useState(null) 
    const [userInfo, setUserInfo] = useState([]);
    const [dob, setDob] = useState(null) 

    console.log(image)
    useEffect(()=>{
        fetch(`https://safe-fjord-60058.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data => setUserInfo(data))
      },[])

      const handleProfileUpdate = e =>{ 

      
        e.preventDefault()
       
      }
      
    const { user } = useAuth();
    return ( 
        <>
        <div className='mt-3 w-75 mx-auto'>
            <h1>My Profile</h1>
              <div className='row'>
                  <div className='col-lg-5 mx-auto ' style={{width:'300px', height:'300px', border:'2px solid salmon'}}>
                       
                       <img  className='img-fluid mt-3' style={{width:'250px', height:'250px'}} src={userInfo.photoURL} alt="" /> <br /> <br />

                  </div>
                  <div style={{marginLeft:'10%'}} className='col-lg-7 text-start my-auto '>
                      <div className='row userInfo'>
                          <div className='col-lg-6 mx-auto'>
                          <p>Name: {userInfo.displayName} </p>
                          <p>Email : {userInfo.email} </p>
                          </div>
                          <div className='col-lg-6 mx-auto'>
                            <p>Date of Birth : { (userInfo.dob) ? 

                            userInfo.dob :
                            
                            <input onChange={e => setDob(e.target.value)} type="date" name="dob" id="" />  } </p> 
                              
                            <p>Role: {userInfo.role} </p>
                          </div>
                      </div>
                  </div>
              </div>
        </div>  
         <br /> <br />
        
                  <div>
                  <input 
                  style={{marginRight:'3px'}}
                 accept='image/*'
                 type="file"
                 name="file" 
                 onChange={e => setImage(e.target.files[0])}
                 />

                <Button onClick={handleProfileUpdate}>Update Profile</Button> 
                  </div>
        </>
    );
}; 


export default MyProfile;