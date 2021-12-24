import React from 'react';
import BlogHome from '../BlogHome/BlogHome';
import ContactUs from '../ContactUs/ContactUs';
import Laptops from '../Laptops/Laptops';
import SmartPhone from '../SmartPhone/SmartPhone';
import SmartWatch from '../SmartWatch/SmartWatch';
import TopBanner from '../TopBanner/TopBanner';


const Main = () => {
    return (
        <div>
         
           <TopBanner></TopBanner>
           
           <BlogHome></BlogHome>
           {/* <Banner></Banner> */}
           <SmartPhone></SmartPhone>
           <Laptops></Laptops>
           <SmartWatch></SmartWatch>
           <ContactUs></ContactUs>
        </div>
    );
};

export default Main;