import React from "react";
import data from "../assets/datta.json";
import {useAppContext} from "../context/app-data/useAppContext";
import { Player } from 'video-react';
import "../../node_modules/video-react/dist/video-react.css"; // import css
import VideoPlayer from "./VideoPlayer";
import { ReactComponent as PlayButton } from "../assets/playButton.svg";
const KnowledgeSliderBackgroundPhotos = (props) => {

  
  const appData = useAppContext();
  const { knowledge } = appData.screens;
 if(!knowledge.knowledgeSlides[props.num].slideImages[0].image.endsWith(".mp4")){
  return (
    <div className={props.isActive ? "bg1" : "bg"}>
       <img
        className={props.isActive ? "gallery_bg1" : "gallery_bg"}
        src={knowledge.knowledgeSlides[props.num].slideImages[0].image}
        alt="gal1"
      /> 
    </div>
  );}
  else{
    return (

      <div><PlayButton className={props.isActive ? "play1" : "play"}/><div className={props.isActive ? "bg1" : "bg"}>
  
  <VideoPlayer
        className={props.isActive ? "gallery_bg1" : "gallery_bg"}
        
        
        src={knowledge.knowledgeSlides[props.num].slideImages[0].image}
       
      ></VideoPlayer>
      </div>
        <div className={props.isActive ? "bg123" : "bg23"}>
          
        <img
        className={props.isActive ? "gallery_bg1" : "gallery_bg"}
        src="./img/ptok.png"
        alt="gal1"
      /> 
      </div> 
      </div>
    );

  }
};

export default KnowledgeSliderBackgroundPhotos;
