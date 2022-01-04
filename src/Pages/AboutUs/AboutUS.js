import React from 'react';
import techshare from '../../images/techsharelogo.png'
import Footer from '../Shared/Footer/Footer';


const AboutUS = () => {
    return (
        <>
          <div className="my-2">
            <div>
                <img style={{width:"30%", borderRadius:'5%'}} src={techshare} alt="" />
            </div>
            <div className="my-3">
                <h2 className="fw-bold fs-2">TechShare Bangladesh Limited.</h2>
                 <p className='fs-3'>An Online Organization to help and build tech concern among people </p>
                <h4>Founded - 2021</h4>
            </div>

            
        </div>
        <Footer></Footer>
        </>
    );
};

export default AboutUS;