
import React from 'react';
import { Container, Nav, Navbar, Offcanvas, Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";



const DashBoardMain = () => {
  let { path, url } = useRouteMatch();
    const {user, logOut} = useAuth()
    return (
        <div>
          <Navbar bg="light" expand={false}>
        <Container fluid>
          <Navbar.Brand className="fw-bold">Welcome to Dashboard  {user.displayName} </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">DashBoard</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                
                <Nav.Link as={Link} to={`${url}/myprofile`}>My Profile</Nav.Link>
                <Nav.Link as={Link} to={`${url}/recommendations`}>Saved Recommendation</Nav.Link>
                <Nav.Link as={Link} to={`${url}/writeblogs`}>Write New Blog</Nav.Link>
                <Nav.Link as={Link} to={`${url}/manageblogs`}>Manage My Blogs</Nav.Link>
                <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                
                </Nav> 
                <Nav style={{marginTop:'20%'}}>
                
                <Button onClick={logOut} className="w-25"><i class="fas fa-sign-out-alt"></i>logOut</Button>
                </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container> 


        
      </Navbar>

      <Switch>
       
       <Route path={`${path}/myprofile`}>
          <h2>My Profile Page</h2>
       </Route>
       <Route path={`${path}/recommendations`}>
          <h2>Recommendation Page</h2>
       </Route>
       <Route path={`${path}/writeblogs`}>
          <h2>Write Blog Page</h2>
       </Route>
       <Route path={`${path}/manageblogs`}>
          <h2>Manage Blog Page</h2>
       </Route>
     </Switch>
        </div>
    );
};

export default DashBoardMain;