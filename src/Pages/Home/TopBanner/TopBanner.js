import React from 'react';
import image from '../../../images/bannerBg-2.jpg'
import Typewriter from 'typewriter-effect';
import './TopBanner.css'
const TopBanner = () => {
    return (
        <div style={{height:'600px'}} className='row mx-auto'>
             <div 
             
                 data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1500"
             
             className='col-lg-6 my-auto p-5'>
             <p className='typeEffect' style={{color:'red', fontWeight:'900', fontFamily:'monospace' 
            
            }}>
             <Typewriter
                options={{
                    strings: ['Welcome To TechShare', 'A Place For Tech Enthusiast', 'Find Your Desired Device' ],
                    autoStart: true,
                    loop: true,
                }}
                />
             </p> 

              <p className="text-start"> TechShare is web application built in 2021. Techshare came with a purpose to create tech concern to people. TechShare always try to provide recommendation according to the clients satisfaction. TechShare provides opportunities to the youngstars to improving their skills by write blogs </p>
             </div>
             <div  
             
             data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1500"
             className='col-lg-6 my-auto'>
                 <img style={{width:'500px', borderRadius:'15px'}} className='img-fluid' src={image} alt="" />
             </div>
        </div>
    );
};

export default TopBanner;