import React from 'react'
import { Link } from 'react-router-dom'
import LogoFooter from "../../assets/logo-footer.png"


export default function Logo() {
    return (
        <div>
            <Link to="/">
                <img src={LogoFooter} alt='Logo Footer' />

            </Link>



        </div>
    )
}
