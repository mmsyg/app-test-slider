import React from 'react';
import data from './assets/datta.json'
import useScrollPosition from "./UseScrollPosition";

const KnowledgeSliderText = (props) => {

    const que = data.knowledgeSlider.filter(questionx => questionx.id === props.id);

    const scrollPosition = useScrollPosition();

console.log(scrollPosition); 


    return ( <div className="knowledge_slider_text">
        <p className="konwledge_title">{que[0].title}</p>
        <p className="konwledge_subtitle">{que[0].subtitle}</p>
        <p className="konwledge_text">{que[0].text}</p>
   


    </div> );
}
 
export default KnowledgeSliderText;