import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/logo_kasa.jpg"

export default function Logo() {
  return (
    <div>
    <Link to="/">
       <img src={logo} alt='Logo Kasa'/>

    </Link>



    </div>
  ) 
}
