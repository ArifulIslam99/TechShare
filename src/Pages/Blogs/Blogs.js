import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Blog from './Blog';
import ManageAllBlogs from './ManageAllBlogs/ManageAllBlogs';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('https://safe-fjord-60058.herokuapp.com/blogs')
        .then(res => res.json())
        .then(data => setBlogs(data))
    } , [])

    return (
        <div> 
           
            <h2 className="my-5" style={{fontWeight:'600', color:'orangered', fontSize:'42px'}}> Latest Tech Update and News </h2>

             <Row xs={1} md={3} className="mx-auto"> 


            {
                blogs.map(blog => <Blog 
                
                
                   key = {blog._id}
                   blog={blog}
                    ></Blog>)
            }
  
        </Row> 
        
        </div>
    );
};

export default Blogs;