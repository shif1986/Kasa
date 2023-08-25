import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./reusable-ui/Logo";
import Footer from "./reusable-ui/LogoFooter";
import "../style/components/_collapse.scss";

function Collapse({ title, description }) {
  // fonction usState
  const [isOpen, setIsOpen] = useState(false);
  // let buttonLabel
  const toggle = () => {
    // if (isOpen) {
    //   buttonLabel= "Close"
 
    // } else {
 
    //   buttonLabel="Open"
    // }
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={toggle}>
        {" "}
        <p>{title}</p>
        {/* il faut que description affiche */}
        {isOpen ? <button> Close </button> : <button className="arrow-up"> <i class="fa-brands fa-facebook"></i> </button>}
        {isOpen && <div> {description} </div>}
      </div>
    </div>
  );
}

export default Collapse;
