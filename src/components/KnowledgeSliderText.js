import React, {useRef} from "react";
import data from "../assets/datta.json";
import { useScrollWithShadow } from "../helpers/useScrollWithShadow";
import {useAppContext} from "../context/app-data/useAppContext";
import parse from "html-react-parser";


const KnowledgeSliderText = (props) => {
  const appData = useAppContext();
  const { knowledge } = appData.screens;
  const myHTML = `<p >Ptaki wywodzą się ewolucyjnie z gadów – a konkretnie od <strong>dinozaurów</strong>. Nawet same pióra wyewoluowały z… łusek!<br>
  Podobieństwo do pradawnych jaszczurów dostrzegalne jest szczególnie w przypadku wymarłych gatunków ptaków, takich jak <em><strong>Archaeopteryx</strong></em>, żyjący 145 mln lat temu. Posiadał zęby, a na skrzydłach – szpony!</p>`;
  function wrapWithLTRDirection(htmlString) {
    return `<p dir="ltr">${htmlString}</p>`;
  }

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
