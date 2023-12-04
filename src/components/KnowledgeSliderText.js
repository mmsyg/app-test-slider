import React from "react";
import data from "../assets/datta.json";
import { useScrollWithShadow } from "../helpers/useScrollWithShadow";

const KnowledgeSliderText = (props) => {
  const que = data.knowledgeSlider.filter(
    (questionx) => questionx.id === props.id
  );
  const { boxShadow, onScrollHandler } = useScrollWithShadow();

  return (
    <div className="knowledge_slider_text">
      <p className="konwledge_title">{que[0].title}</p>
      <p className="konwledge_subtitle">{que[0].subtitle}</p>

      <div
        className="scrollArea"
        onScroll={onScrollHandler}
        style={{ boxShadow: boxShadow }}
      >
        {que[0].text}
      </div>
    </div>
  );
};

export default KnowledgeSliderText;
