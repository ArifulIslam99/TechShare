import { Row, Spinner } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import useBlog from '../../hooks/useBlog';
import Blog from './Blog';


const Blogs = () => {
    
        const { activeBlogs } = useBlog();

    return (
        <div> 
           
            <h2 className="my-5" style={{fontWeight:'600', color:'orangered', fontSize:'42px'}}> Latest Tech Updates and News </h2>

            {
                 
                    (activeBlogs.length < 1) && <Spinner animation="border" variant="success"></Spinner> 
                
            }
             <Row xs={1} md={3} className="mx-auto"> 


            {
                activeBlogs.map(blog => <Blog 
                
                
                   key = {blog._id}
                   blog={blog}
                    ></Blog>).reverse()
            }
  
        </Row> 
         <Footer></Footer>
        </div>
    );
};

export default Blogs;