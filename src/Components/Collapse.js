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
      <div className="collapse-content" onClick={toggle}>
        {" "}
        <div className="headline">
          <p>{title}</p>
          {/* il faut que description affiche */}
          {isOpen ? (
            <i className="chevron-up" class="fa-solid fa-chevron-down"></i>
          ) : (
            <i className="chevron-down" class="fa-solid fa-chevron-up"></i>
          )}
        </div>
      </div>
      {isOpen && <div className="description"> {description} </div>}
    </div>
  );
}

export default Collapse;
