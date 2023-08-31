import React from "react";
import "../style/components/_card-fiche-logement.scss";
import data from "../data.json";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function CardFicheLogement() {
  // useparam chercher les element dans url
  const { id } = useParams();

  // variable logement recupere data ici
  const logement = data.find((item) => item.id === id);
  // useState function
  const [indexSlide, setIndexSlide] = useState(0);
  console.log(indexSlide);

  const previous = () => {
    if (indexSlide == 0) {
      setIndexSlide(logement.pictures.length - 1);
    } else {
      setIndexSlide(indexSlide - 1);
    }
  };
  const next = () => {
    if (indexSlide == logement.pictures.length - 1) {
      setIndexSlide(0);
    } else {
      setIndexSlide(indexSlide + 1);
    }
  };

  // function fichelogement collapse

  // function CollapseFicheLogement({ description }) {
  //   const [openTab, setOpenTab] = useState(false);
  //   const toggle = () => {
  //     setOpenTab(!openTab);
  //   };
  //   return (
  //     <div>
  //       <h3> {Description} </h3>
      
      
  //     </div>
  //     );
  // }

  // counter 1/5
  return (
    <div className="container-gallery">
      <p className="arrow-left" onClick={previous}>
        <i class="fa-solid fa-chevron-left"></i>
      </p>
      <img src={logement.pictures[indexSlide]} />
      <p>1/5</p>
      <p className="arrow-right" onClick={next}>
        <i class="fa-solid fa-chevron-right"></i>
      </p>

      {/* Contenu de fiche logement- title, nom de Host etc */}
      <div className="contenu">
        <article className="infos">
          <div className="title">
            <h2> {logement.title} </h2>
            <p> {logement.location} </p>

            <div className="tag">
              <p> {logement.tags} </p>
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
              <p> {logement.rating} </p>
            </div>

            {/* {logement.description} */}

            <div>
             {/* <h3 className="description"> {logement.description} </h3> */}
      
      
          </div>
          </div>
        </article>
      </div>
    </div>
  );
}
