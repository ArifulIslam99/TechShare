import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';



const Navigation = () => {
    
  const {user, logOut} = useAuth()
    
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand as={Link} to='/'>TechShare</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home" >Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            
          </Nav>
        

            {
              (!user.uid) ?

              <Nav>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          
          </Nav> :

            <div> <img style={{width:'35px', height:'35px'}} src={user.photoURL} alt="" /> <span style={{color:'white'}}> Howdy! {user.displayName} </span> <Button style={{padding:'0 5px', marginLeft:'2px'}} onClick={logOut}>LogOut</Button></div>
            }

        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navigation;