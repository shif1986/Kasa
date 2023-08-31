
import data from "../data.json";
import Card from "../Components/Card";
import CardFicheLogement from "../Components/CardFicheLogement";
import { useParams } from "react-router-dom";
import { useState } from "react";

import React from 'react'


export default function () {
  
  return (
    <div>
     
    <CardFicheLogement title={data.title} />

    </div>
  )
}

  