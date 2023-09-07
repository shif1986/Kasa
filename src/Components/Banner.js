import "../style/components/_banner.scss";
import { NavLink } from "react-router-dom";
import HomeBanner from "../assets/Home-Banner.jpg";


const Banner = () => {
  return <img className="home-banner" src={HomeBanner} alt="Banner image" />;
};
export default Banner;
