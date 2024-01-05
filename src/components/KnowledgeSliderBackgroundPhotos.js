import React from "react";
import data from "../assets/datta.json";

const KnowledgeSliderBackgroundPhotos = (props) => {
  const que = data.knowledgeSlider.filter(
    (questionx) => questionx.id === props.id
  );
  return (
    <div className={props.isActive ? "bg1" : "bg"}>
      <img
        className={props.isActive ? "gallery_bg1" : "gallery_bg"}
        src={que[0].img[0].source}
        alt="gal1"
      />
    </div>
  );
};

export default KnowledgeSliderBackgroundPhotos;
