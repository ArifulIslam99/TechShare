
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'


import SwiperCore, {
  EffectCoverflow,Pagination
} from 'swiper';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useBlog from '../../../hooks/useBlog';
import { CircularProgress } from '@mui/material';

SwiperCore.use([EffectCoverflow,Pagination]);

const BlogHome = () => {

    // const [blogs, setBlogs] = useState([]);

    // useEffect(()=>{
    //     fetch('https://safe-fjord-60058.herokuapp.com/blogs')
    //     .then(res => res.json())
    //     .then(data => setBlogs(data))
    // } , [])

    const {blogs, blogLoading} = useBlog();

    if(blogLoading){return <CircularProgress></CircularProgress>}

    return (

            <div  className=" my-5">
     <h2 style={{color:' #f34612 '}} className="mb-3 fw-bold fs-1" >Blogs</h2>
    <div className="slider-portfolio">
    <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
  "rotate": 50,
  "stretch": 0,
  "depth": 100,
  "modifier": 1,
  "slideShadows": true
}} pagination={true} className="mySwiper">
     
     {
         blogs.slice(0,8).map(blog => 
            
            <SwiperSlide>
            <div 
            data-aos="zoom-in-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            style={{
                    width:'400px',
                    height:'600px',
                    border: '3px solid gray'
                }} className=" mx-auto text-center p-3">
                <div 
                 
                >
                    <img className="img-fluid"  style={{width:'250px', height:'250px', borderRadius:'50%'}} src={`data:image/*;base64,${blog.image}`}alt="" />
                </div>
                <div >
                    <h4> {blog.title.slice(0,50)} </h4>
                    <h5 style={{color:'green'}}> {blog.author} </h5>
                    <p>{blog.description.slice(0,250)}</p>
                    <Link to={`/blog/${blog._id}`}>
                    <Button className='w-50 mx-auto' variant='success'> Read More </Button>
                    </Link>
                </div>
            </div>
        </SwiperSlide>
            )
     }
   
  

  


  </Swiper>
    </div>
    </div>

    );
};

export default BlogHome;