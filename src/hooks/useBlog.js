import { useEffect, useState } from "react";


const useBlog = () =>{

    const [blogs, setBlogs] = useState([]);
    let activeBlogs = [];
    useEffect(()=>{
        fetch('https://safe-fjord-60058.herokuapp.com/blogs')
        .then(res => res.json())
        .then(data => {
            setBlogs(data)
        })
           
    },[])
   
    for(const blog of blogs)
    {
        if(blog.status === 'active')
        {
            activeBlogs.push(blog)
        }
    }

   

    return {
       blogs,
       activeBlogs
    };

}

export default useBlog