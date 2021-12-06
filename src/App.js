import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './Pages/Home/Main/Main';

import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Contexts/AuthProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashBoardMain from './Pages/Dashboard/DashBoardMain/DashBoardMain';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Navigation from './Pages/Shared/Navigation/Navigation';
import AboutUS from '../src/Pages/AboutUs/AboutUS'

import Blogs from './Pages/Blogs/Blogs';
import BlogsDetails from './Pages/Blogs/BlogsDetails';




function App() {
  return (
    <div className="App">
         
      <AuthProvider>
      <BrowserRouter>
            <Navigation></Navigation>
            <Switch>
               <Route exact path = '/'>
                  <Main></Main>
               </Route>
               <Route path = '/home'>
                  <Main></Main>
               </Route>
               <Route  path = '/login'>
                  <Login></Login>
               </Route>
               <Route  path = '/register'>
                  <Register></Register>
               </Route>
               <Route  path = '/about'>
                  <AboutUS></AboutUS>
               </Route>
               <Route path = '/blogs'>
                  <Blogs></Blogs>
               </Route>
               <Route path = '/blog/:id'>
                  <BlogsDetails></BlogsDetails>
               </Route>
               <Route  path = '/dashboard'>
                  <DashBoardMain></DashBoardMain>
               </Route>
            </Switch>
            
       </BrowserRouter>
      </AuthProvider>
         
    </div>
  );
}

export default App;
