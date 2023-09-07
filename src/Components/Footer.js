import React from 'react'
import "../style/components/_card.scss";
import { NavLink } from 'react-router-dom';
import LogoFooter from "./reusable-ui/LogoFooter";
import "../style/components/_footer.scss";



export default function Footer() {
  return (
   <footer>
    <div className='f-logo'>
    <LogoFooter/> 
    </div>
    <p>© 2020 Kasa. All rights reserved</p>


   </footer>
  )
}
