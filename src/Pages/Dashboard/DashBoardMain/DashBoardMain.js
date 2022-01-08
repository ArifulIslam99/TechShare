
import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, Offcanvas, Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import MyProfile from '../MyProfile/MyProfile';
import Recommendation from '../Recommendation/Recommendation';
import ManageRoles from '../ManageRoles/ManageRoles';
import WriteBlogs from '../WriteBlogs/WriteBlogs';
import ManageAllBlogs from '../../Blogs/ManageAllBlogs/ManageAllBlogs';
import ManageMyBlogs from '../../Blogs/ManageMyBlogs/ManageMyBlogs';
import UserFeedBack from '../UserFeedback/UserFeedBack';
import AddProduct from '../AddProduct/AddProduct';
import ManageAllProducts from '../ManageAllProducts/ManageAllProducts';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';





const DashBoardMain = () => {
  
  const { logOut,user} = useAuth()

  let { path, url } = useRouteMatch();
  
  const [roles, setRoles] = useState(null);
  useEffect(()=>{
    fetch(`https://safe-fjord-60058.herokuapp.com/users/${user.email}`)
    .then(res => res.json())
    .then(data => setRoles(data.role))
  },[user.email])


    return (
       
            <div>
            <Navbar bg="light" expand={false}>
          <Container fluid>
            <Navbar.Brand className="fw-bold">Welcome to Dashboard</Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
            style={{width:'250px'}}
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">DashBoard</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                {
                     (roles==='user') && 
  
                     <div>
                      <Nav.Link as={Link} to={`${url}/myprofile`}>My Profile</Nav.Link>
                
                  <Nav.Link as={Link} to={`${url}/recommendations`}>Saved Recommendation</Nav.Link>
                  <Nav.Link as={Link} to={`${url}/writeblogs`}>Write New Blog</Nav.Link>
                  <Nav.Link as={Link} to={`${url}/managemyblogs`}>Manage My Blogs</Nav.Link>
                    
                    </div>
                   }
                  
                  {
                    (roles==='admin') && 
  
                    <div>
                      <Nav.Link as={Link} to={`${url}/updateroles`}>Update Administration</Nav.Link>
                  <Nav.Link as={Link} to={`${url}/manageallblogs`}>Manage All Blogs</Nav.Link>
                  <Nav.Link as={Link} to={`${url}/addproduct`}>Add New Products</Nav.Link>
                  <Nav.Link as={Link} to={`${url}/manageallproducts`}>Manage All Products</Nav.Link>
                  <Nav.Link as={Link} to={`${url}/userfeedbacks`}>Users Message</Nav.Link>
                    </div> 
                    
                  }
  
                  {
                    (roles==='editor') &&
  
                    <div>
                      <Nav.Link as={Link} to={`${url}/manageallblogs`}>Manage All Blogs</Nav.Link>
                  <Nav.Link as={Link} to={`${url}/addproduct`}>Add New Products</Nav.Link>
                  <Nav.Link as={Link} to={`${url}/userfeedbacks`}>Users Message</Nav.Link>
                    </div> 
                  }
  
  
                  
                  <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                  
                  </Nav> 
                  <Nav style={{marginTop:'20%'}}>
                  
                  <Button onClick={logOut} className="w-50"><i className="fas fa-sign-out-alt"></i>logOut</Button>
                  </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container> 
  
  
          
        </Navbar>
  
        <Switch>
         
         <Route path={`${path}/myprofile`}>
            <MyProfile></MyProfile>
         </Route>
         <Route path={`${path}/recommendations`}>
             <Recommendation></Recommendation>
         </Route>
         <Route path={`${path}/writeblogs`}>
           <WriteBlogs></WriteBlogs>
         </Route>
         <AdminRoute path={`${path}/updateroles`}>
            <ManageRoles></ManageRoles>
         </AdminRoute>
         <Route path={`${path}/managemyblogs`}>
            <ManageMyBlogs></ManageMyBlogs>
         </Route>
         <AdminRoute path={`${path}/addproduct`}>
            <AddProduct></AddProduct>
         </AdminRoute>
         <AdminRoute path={`${path}/userfeedbacks`}>
            <UserFeedBack></UserFeedBack>
         </AdminRoute>
         <AdminRoute path={`${path}/manageallproducts`}>
            <ManageAllProducts></ManageAllProducts>
         </AdminRoute>
         <AdminRoute path={`${path}/manageallblogs`}>
            <ManageAllBlogs></ManageAllBlogs>
         </AdminRoute>
       </Switch>
          
       </div>
    );
};

export default DashBoardMain;