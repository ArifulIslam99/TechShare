import './App.css';
import {lazy, Suspense} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {Spinner} from 'react-bootstrap'
import FindMyDevice from './Pages/FindMyDevice/FindMyDevice';
// import Main from './Pages/Home/Main/Main';
// import Login from './Pages/Login/Login/Login';
// import Register from './Pages/Login/Register/Register';
// import AuthProvider from './Contexts/AuthProvider';
// import DashBoardMain from './Pages/Dashboard/DashBoardMain/DashBoardMain';
// import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
// import Navigation from './Pages/Shared/Navigation/Navigation';
// import AboutUS from '../src/Pages/AboutUs/AboutUS'
// import Blogs from './Pages/Blogs/Blogs';
// import BlogsDetails from './Pages/Blogs/BlogsDetails';
// import AllProducts from './Pages/AllProducts/AllProducts';

const Main = lazy(() => import('./Pages/Home/Main/Main'))
const Login = lazy(() => import('./Pages/Login/Login/Login'))
const Register = lazy(() => import('./Pages/Login/Register/Register'))
const AuthProvider = lazy(() => import('./Contexts/AuthProvider'))
const DashBoardMain = lazy(() => import('./Pages/Dashboard/DashBoardMain/DashBoardMain'))
const PrivateRoute = lazy(() => import('./Pages/Login/PrivateRoute/PrivateRoute'))
const Navigation = lazy(() => import('./Pages/Shared/Navigation/Navigation'))
const AboutUS = lazy(() => import('../src/Pages/AboutUs/AboutUS'))
const Blogs = lazy(() => import('./Pages/Blogs/Blogs'))
const BlogsDetails = lazy(() => import('./Pages/Blogs/BlogsDetails'))
const AllProducts = lazy(() => import('./Pages/AllProducts/AllProducts'))
const PerfectDevices = lazy(() => import('./Pages/FindMyDevice/PerfectDevices'))

function App() {
  return (
    <div className="App">
         
   
    <Suspense fallback={<Spinner animation="grow" />}>
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
          <PrivateRoute  path = '/findmydevice'>
             <FindMyDevice></FindMyDevice>
          </PrivateRoute>
          
          <Route path = '/blogs'>
             <Blogs></Blogs>
          </Route>
          <Route path = '/gadgets'>
             <AllProducts></AllProducts>
          </Route>
          <Route path = '/blog/:id'>
             <BlogsDetails></BlogsDetails>
          </Route>
          <PrivateRoute  path = '/dashboard'>
             <DashBoardMain></DashBoardMain>
          </PrivateRoute>
       </Switch>         
  </BrowserRouter>
 </AuthProvider>
    </Suspense>
         
    </div>
  );
}

export default App;
