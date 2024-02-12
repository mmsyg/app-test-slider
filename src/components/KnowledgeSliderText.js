import React, {useRef} from "react";
import data from "../assets/datta.json";
import { useScrollWithShadow } from "../helpers/useScrollWithShadow";
import {useAppContext} from "../context/app-data/useAppContext";
import parse from "html-react-parser";


const KnowledgeSliderText = (props) => {
  const appData = useAppContext();
  const { knowledge } = appData.screens;
  
  const { showTopShadow, showBottomShadow, onScrollHandler } = useScrollWithShadow();
  const scrollRef = useRef(null);
  return (
    <div className="knowledge_slider_text">
      <p className="konwledge_title">{knowledge.knowledgeSlides[props.num].title}</p>
{showTopShadow && <div className="top-shadow-div"></div>}{showBottomShadow && <div className="bottom-shadow-div"></div>}
      <div className="scrollArea" ref={scrollRef} onScroll={onScrollHandler}>
      
      
        <p className="knowledge_text"
        dir="ltr"
         dangerouslySetInnerHTML={{ __html: knowledge.knowledgeSlides[props.num].text }}
        >          
        </p>
       
    </div> 
    </div>
  );
};

export default KnowledgeSliderText;
