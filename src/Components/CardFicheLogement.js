import React from "react";
import "../style/components/_card-fiche-logement.scss";
import data from "../data.json";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Collapse from "./Collapse";
import Stars from "../assets/icons/Stars";
import NotFound from "../pages/NotFound";

export default function CardFicheLogement() {
  // useparam chercher les element dans url
  const { id } = useParams();

  // variable logement recupere data ici
  const logement = data.find((item) => item.id === id);
  // useState function
  const [indexSlide, setIndexSlide] = useState(0);
  // On vérifie si le logement existe ou pas si ce n'est pas le cas il renvoie le 404
  if (!logement) {
    return <NotFound />
    
  }



  const previous = () => {
    if (indexSlide == 0) {
      setIndexSlide(logement.pictures.length - 1);
    } else {
      setIndexSlide(indexSlide - 1);
    }

    // // counter
    // counters.forEach((dot) =>{
    //  counter.map()
    // }
    // )

    // });
  };
  const next = () => {
    
    if (indexSlide == logement.pictures.length - 1) {
      setIndexSlide(0);
    } else {
      setIndexSlide(indexSlide + 1);
    }
  };

  const displayStars = (rating) => {
    const arrayStars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        arrayStars.push(<Stars fill={"#FF6060"} />);
      } else {
        arrayStars.push(<Stars fill={"#E3E3E3"} />);
      }
    }
    return arrayStars;
  };

  return (
    <div className="container-gallery">
      <div className="cards">
        {logement.pictures.length > 1 && (
          <p className="arrow-left" onClick={previous}>
            <i class="fa-solid fa-chevron-left"></i>
          </p>
         
        )}
        <img src={logement.pictures[indexSlide]} />
        {logement.pictures.length > 1 && (
          <>
            <span className="carousel-counter">
              {indexSlide + 1}/{logement.pictures.length}
            </span>
            <p className="arrow-right" onClick={next}>
              <i class="fa-solid fa-chevron-right"></i>
            </p>
          </>
        )}
      </div>

      {/* Contenu de fiche logement- title, nom de Host etc */}
      <div className="contenu">
        <article className="infos">
          <div className="title">
            <h2> {logement.title} </h2>
            <p> {logement.location} </p>

            <div className="tag">
              <ul>
                {logement.tags.map((tag) => (
                  <li>{tag}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="host">
            <div className="name-pic">
              <div className="name">
                <p> {logement.host.name} </p>
              </div>
              <img src={logement.host.picture} />
            </div>

            <div className="rating">
              {displayStars(logement.rating).map((item) => item)}
            </div>
          </div>
         
        </article>
        <div className="collapse-container">
            <span className="fl-collapse-title">
            <Collapse 
              title={"Description"}description={logement.description}/>
            </span>
            <span className="fl-collapse-description">
            <Collapse title={"Equipements"} description={logement.equipments} />
            </span>
          
          </div>
      </div>
    </div>
  );
}
