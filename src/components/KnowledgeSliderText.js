import React, {useRef} from "react";
import data from "../assets/datta.json";
import { useScrollWithShadow } from "../helpers/useScrollWithShadow";

const KnowledgeSliderText = (props) => {
  const que = data.knowledgeSlider.filter(
    (questionx) => questionx.id === props.id
  );
  const { showTopShadow, showBottomShadow, onScrollHandler } = useScrollWithShadow();
  const scrollRef = useRef(null);
  return (
    <div className="knowledge_slider_text">
      <p className="konwledge_title">{que[0].title}</p>
      <p className="konwledge_subtitle">{que[0].subtitle}</p>
{showTopShadow && <div className="top-shadow-div"></div>}{showBottomShadow && <div className="bottom-shadow-div"></div>}
      <div className="scrollArea" ref={scrollRef} onScroll={onScrollHandler}>
      <p className="knowledge_text">
        {que[0].text}</p>
       
    </div> 
    </div>
  );
};

export default KnowledgeSliderText;
