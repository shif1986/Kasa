import React from 'react'
import "../style/components/_card.scss";
import { NavLink } from 'react-router-dom';


export default function Card({ gallery }) {

 
  
  // // state COmportement
  // function shifnas(params) {
    
  // }

 return (
    <div className="card-container">
      {/* Container and gallery */}

      {gallery.map((card) => (
   
        <article  key={card.id} >
          <NavLink className="card__link"  to={`/fiche-logement/${card.id} `}  >
            <p className='card__link'> {card.title} </p>
            <img className='card__link' src={card.cover} />
          </NavLink>
        </article>

        // <article key={card.id}>
        //   <p >{card.title} </p>
        //   <img src={card.cover} />
        // </article>

      ))}

    </div>



  )
}

