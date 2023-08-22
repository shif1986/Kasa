import React from "react";
import "../style/components/_banner-about.scss";
import { NavLink } from "react-router-dom";
import AboutBanner from "../assets/about_banner.jpg";


const BannerCollapse = () => {
  return <img className="about-banner" src={AboutBanner} alt="Banner image" />;
};

export default BannerCollapse;
