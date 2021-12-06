import React from 'react';
import Banner from '../Banner/Banner';
import BlogHome from '../BlogHome/BlogHome';
import ContactUs from '../ContactUs/ContactUs';
import TopBanner from '../TopBanner/TopBanner';


const Main = () => {
    return (
        <div>
         
           <TopBanner></TopBanner>
           
           <BlogHome></BlogHome>
           {/* <Banner></Banner> */}
           <ContactUs></ContactUs>
        </div>
    );
};

export default Main;