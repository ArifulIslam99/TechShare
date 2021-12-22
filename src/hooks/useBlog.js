import { useEffect, useState } from "react";


const useBlog = () =>{

    const [blogs, setBlogs] = useState([]);
    const [blogLoading, setBlogLoading] = useState(true)
    useEffect(()=>{
        setBlogLoading(true)
        fetch('https://safe-fjord-60058.herokuapp.com/blogs')
        .then(res => res.json())
        .then(data => {
            setBlogs(data)
            setBlogLoading(false)
        })
    } , [])
   

    return {
        
        blogs,
        blogLoading
    };

}

export default useBlog