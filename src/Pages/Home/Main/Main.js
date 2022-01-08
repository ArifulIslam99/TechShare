import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import BlogHome from '../BlogHome/BlogHome';
import ContactUs from '../ContactUs/ContactUs';
import Laptops from '../Laptops/Laptops';
import MidBanner from '../MidBanner/MidBanner';
import SmartPhone from '../SmartPhone/SmartPhone';
import SmartWatch from '../SmartWatch/SmartWatch';
import TopBanner from '../TopBanner/TopBanner';
import FindMyDeviceBanner from '../FindDeviceBanner/FindDeviceBanner'


const Main = () => {
    return (
        <div>
         
          <TopBanner></TopBanner>
           <BlogHome></BlogHome>
           <SmartPhone></SmartPhone>
           <Laptops></Laptops>
           <SmartWatch></SmartWatch>
           <FindMyDeviceBanner></FindMyDeviceBanner>
           <MidBanner></MidBanner>
        <ContactUs></ContactUs>
        <Footer></Footer>
        </div>
    );
};

export default Main;