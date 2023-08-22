import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./reusable-ui/Logo";
import "../style/components/_header.scss";


export default function Header() {
  return (
    <header>
      <nav className="navbar">
        {/* logo a ete reutilisé ici */}
        <div>
          <Logo />
        </div>
                    {/* navlink = href */}
        <ul>
          <NavLink className="navbar__link" to="/">Accueil</NavLink>
          <NavLink className="navbar__link" to="a-propos">A propos</NavLink>
        </ul>
      </nav>
    </header>
  );
}
