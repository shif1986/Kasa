import React from "react";
import "../style/components/_card.scss";
import { NavLink } from "react-router-dom";
import CardFicheLogement from "./CardFicheLogement";

export default function Card({ gallery }) {
  // // state COmportement
  // function shifnas(params) {

  // }

  return (
    <div className="card-container">
      {/* Container and gallery */}

      {gallery.map((card) => (
        <article className="card" key={card.id}>
          <NavLink className="card__link" to={`/fiche-logement/${card.id} `}>
            <img src={card.cover} />
            <p className="card__label" > {card.title} </p>
          </NavLink>
        </article>

        // <article key={card.id}>
        //   <p >{card.title} </p>
        //   <img src={card.cover} />
        // </article>
      ))}
      
    </div>
  );
}
