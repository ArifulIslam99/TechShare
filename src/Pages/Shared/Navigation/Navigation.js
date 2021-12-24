import React, { useEffect, useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/techsharelogo.png'



const Navigation = () => {
  const [userInfo, setUserInfo] = useState([]);
  useEffect(()=>{
      fetch(`https://safe-fjord-60058.herokuapp.com/users/${user.email}`)
      .then(res => res.json())
      .then(data => setUserInfo(data))
    },[])
  const {user, logOut} = useAuth()
    
    return (
        <Navbar  collapseOnSelect expand="lg"  variant="light">
        <Container>
        <Navbar.Brand as={Link} to='/' > <img style={{width:'180px', height:'100px'}} src={logo} alt="" /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav style={{color:'black'}} className="me-auto">
            <Nav.Link as={Link} to="/home" >Home</Nav.Link>
            <Nav.Link as={Link} to="/gadgets" >Gadgets</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
            {
              (user.uid) &&

              <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
            }
            
          </Nav>
        

            {
              (!user.displayName) &&
            <Nav>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            </Nav> 
            }

            {
              (user.displayName) &&

              <div> {(userInfo?.photoURL) && <img style={{width:'35px', height:'35px'}} src={userInfo?.photoURL} alt="" />} <span style={{color:'black'}}> Welcome, {user.displayName} </span> <Button style={{padding:'5px', marginLeft:'2px', backgroundColor:'black'}} onClick={logOut}>LogOut</Button></div>
            }

        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navigation;