import { useEffect, useState } from "react";


const useBlog = () =>{

    const [blogs, setBlogs] = useState([]);
    let activeBlogs = [];

    const [isSubscribed, setIsSubscribed] = useState(true)

    
    useEffect(()=>{

            fetch('https://safe-fjord-60058.herokuapp.com/blogs')
        .then(res => res.json())
        .then(data => {
            if(isSubscribed)
            {
                setBlogs(data)
            }
        })

        return () => {
            setIsSubscribed(false)
        }
        
           
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