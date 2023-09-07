import data from "../data.json";
import FicheLogementCollapse from "../Components/FicheLogementCollapse";
import Card from "../Components/Card";
import CardFicheLogement from "../Components/CardFicheLogement";
import { useParams } from "react-router-dom";
import { useState } from "react";

const FicheLogement = () => {

  return (
      <CardFicheLogement title={data.title} />
  );
};

export default FicheLogement;
