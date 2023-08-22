import React from 'react'
import Banner from "../Components/Banner";
import Header from "../Components/Header";
import data from "../data.json";
import Footer from "../Components/Footer";
import Collapse from '../Components/Collapse';
import BannerCollapse from '../Components/BannerCollapse';

const About = () => {
  return (
    <div className="container">
      <Header />
     <BannerCollapse/>
      <Collapse/>
      <Footer />
    </div>
  );
};



export default About;
