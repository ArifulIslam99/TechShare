import React from 'react';
import useAuth from '../../../hooks/useAuth';
import {  Route , Redirect} from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const AdminRoute = ({ children, ...rest }) => {
    const {user, isLoading, roles} = useAuth();
   
    if(isLoading){return <Spinner animation="border" variant="success"></Spinner> }
    return (
        <Route
        {...rest}
        render={({ location }) =>
          user.email && (roles === 'admin')? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/notfound",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default AdminRoute;