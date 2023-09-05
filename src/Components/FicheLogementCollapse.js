import React from 'react'
import { useState } from "react";
import "../style/components/_flogement_collapse.scss";

function FLogementCollapse({title, description}) {
  const [openTab, setOpenTab]=useState(false)
  const toggle =()=>{
    setOpenTab(!openTab);
  };
  return (
    <div>
    <div className="collapse-content" onClick={toggle}>
      {" "}
      <div className="headline">
        
       {title= ('Description') } 

        {openTab ? (
          <i className="chevron-up fa-solid fa-chevron-down"></i>
        ):
         (
          <i className="chevron-down fa-solid fa-chevron-up"></i>
        )}
      </div>
    </div>
    {openTab && {description} }
  </div>
  
);
}

export default FLogementCollapse;
