import React from 'react';
import { Link } from 'react-router-dom';

const MidBanner = () => {
    return (
        <div 
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1500"
        
        style={{width: '90%', height: '300px', border:'2px solid gray', backgroundColor:'whitesmoke', borderRadius:"20px"}} 
        
        className='mx-auto row my-5'>
             <div 
             
             
             
             
             className='col-lg-6 m-auto'>
                    <h2 style={{fontWeight:'700', color:'darkcyan'}}>Interested to Explore what's <br /> New in Tech World?</h2>
             </div>

             <div className='col-lg-6 m-auto'>
                  <Link style={{textDecoration:'none'}} to='/blogs'>
                  <section 
                     style={{border:'3px solid orangered', borderRadius:'10px', width:'50%', backgroundColor:'orangered'}}
                     className='m-auto py-1'
                    >
                        <h4  className='text-white fw-bold'>Explore Our Blogs <i className="fas fa-arrow-circle-right"></i></h4>
                    </section>
                  </Link>
             </div>
        </div>
    );
};

export default MidBanner;