import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const BlogsDetails = () => {
    const id = useParams();
    const [blog, setBlog] = useState({}); 

    useEffect(()=>{
        fetch(`https://safe-fjord-60058.herokuapp.com/blog/${id.id}`)
        .then(res => res.json())
        .then(data => setBlog(data))
    },[])

  
      
    return (
        <div>
            {
                (blog) ?

                <div className="w-75 mx-auto my-5">
            <div>
                
                <img style={{width:'50%', height:'50%'}}  className='img-fluid my-4'  src={`data:image/jpeg;base64,${blog.image}`} alt="" />

            </div> 

            <div className="text-start">
            <h2 className="fw-bold">{blog.title} </h2>
                <h6 style={{color:'blue'}}> Blog By {blog.author} </h6>

                <p> {blog.description} </p>
            </div>
        </div> :
        <CircularProgress></CircularProgress>
            }
        </div>
    );
};

export default BlogsDetails;