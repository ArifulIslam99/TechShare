import React from 'react';
import './FindMyDevice.css'
import { useState } from 'react';
import img1 from '../../images/laptop.jpg'
import img2 from '../../images/smartphone.jpeg'
import img3 from '../../images/smartwatch.webp'
import img4 from '../../images/photography.webp'
import img5 from '../../images/performance.jpg'
import img6 from '../../images/balanced.webp'
import PerfectDevices from './PerfectDevices';



const FindMyDevice = () => {

    const [type, setType] = useState(null);
    const [speciality, setSpeciality] = useState(null);
    const [budget, setBudget] = useState(null)
    const requirment = {
        'type' : type,
         'speciality': speciality,
         'budget': budget
    }

   
    return (
       <div className='mb-5'>
            <div
            
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"

            className='my-3'>
            <h2 className='mb-4 fw-bold' style={{color:'orangered', fontSize:'36px'}}>
            What Kind of Gadget You Are Looking For ?
            </h2>

            <div  className='row w-75 mx-auto'>
                <div  onClick={()=>setType('laptops')} className='col-lg-4 catagory'>
                    <img  style={{height:'300px', width:'400px'}} className=' img-fluid' src={img1} alt="" />
                    <h4>Laptop</h4>
                </div>
                <div onClick={()=>setType('smartphones')} className='col-lg-4 catagory'>
                    <img style={{height:'300px', width:'400px'}} className=' img-fluid' src={img2} alt="" />
                    <h4>SmartPhone</h4>
                </div>
                <div onClick={()=>setType('smartwatches')} className='col-lg-4 catagory'>
                    <img style={{height:'300px', width:'400px'}} className=' img-fluid' src={img3} alt="" />
                    <h4>SmartWatch</h4>
                </div>
            </div>
         
             {
                 (type!==null) &&
                 <>
                 
             

                <div
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className='row w-75 mx-auto'>
                    <h2  className='mb-4 fw-bold' style={{color:'orangered', fontSize:'36px'}}>
                      Your Objective of Using Device ?
                </h2>
                <div id='speciality' onClick={()=>setSpeciality('Camera')} className='col-lg-4 catagory'>
                    <img  style={{height:'300px', width:'400px'}} className=' img-fluid' src={img4} alt="" /> 
                    <h4>Camera</h4>
                </div>
                <div onClick={()=>setSpeciality('Performance')} className='col-lg-4 catagory'>
                    <img style={{height:'300px', width:'400px'}} className=' img-fluid' src={img5} alt="" />
                    <h4>Performance</h4>
                </div>
                <div onClick={()=>setSpeciality('Balanced')} className='col-lg-4 catagory'>
                    <img style={{height:'300px', width:'400px'}} className=' img-fluid' src={img6} alt="" />
                    <h4>Balanced</h4>
                </div>
                
                
            </div>
             </>
                 
             } 

             {
                 (speciality!==null) && 

                 <>
                

                <div  
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                
                    className='row w-75 mx-auto my-3'>
                     <h2  className='mb-4 fw-bold' style={{color:'orangered', fontSize:'36px'}}>
                 Tell Us Your Approximate Budget
                </h2>
                     <div onClick={()=>setBudget(20000)} className='col-lg-2 budget catagory'>
                         <p> 20,000</p>
                     </div>
                     <div onClick={()=>setBudget(30000)} className='col-lg-2 budget catagory'>
                         <p> 30,000</p>
                     </div>
                     <div onClick={()=>setBudget(40000)} className='col-lg-2 budget catagory'>
                         <p> 40,000</p>
                     </div>
                     <div onClick={()=>setBudget(60000)} className='col-lg-2 budget catagory'>
                         <p> 60,000</p>
                     </div>
                     <div onClick={()=>setBudget(1000000)} className='col-lg-2 budget catagory'>
                         <p>60,000 +</p>
                     </div>
                 </div>
                   
                 </>
             }

             {
            (budget!==null) && 

              <PerfectDevices requirment={requirment}></PerfectDevices>
             } 

        </div> 

        
       </div>
       
    );
    
};



export default FindMyDevice;