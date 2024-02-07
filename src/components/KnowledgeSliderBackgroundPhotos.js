import React from "react";
import data from "../assets/datta.json";
import {useAppContext} from "../context/app-data/useAppContext";
const KnowledgeSliderBackgroundPhotos = (props) => {

  
  const appData = useAppContext();
  const { knowledge } = appData.screens;
 
  return (
    <div className={props.isActive ? "bg1" : "bg"}>
      <img
        className={props.isActive ? "gallery_bg1" : "gallery_bg"}
        src={knowledge.knowledgeSlides[props.num].slideImages[0].image}
        alt="gal1"
      />
    </div>
  );
};

export default KnowledgeSliderBackgroundPhotos;
