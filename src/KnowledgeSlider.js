import React from 'react';
import SetLeft from "./SetLeft";
import SetRight from './SetRight';
import data from './assets/datta.json'; 
import { ReactComponent as PolygonBlueSmall}from './assets/polygonBlueSmallKnowledge.svg';
import { ReactComponent as UnionGreenKn}from './assets/unionGreen_knowledge.svg';
import QuestionNumber from './QuestionNumber';
import KnowledgeSliderText from './KnowledgeSliderText';
import {ReactComponent as SwipeLeft} from './assets/swipeLeft.svg'
import KnowledgeSliderBackgroundPhotos from "./KnowledgeSliderBackgroundPhotos"


const KnowledgeSlider = (props) => {
  let id=String(props.id)
       return ( <div className="knowledge_slider">
         <KnowledgeSliderBackgroundPhotos id= {id}/>
       <img className='blur_knowledge' src='./img/Blur.png' alt='blur' />
        <div  className='question_nr_knowledge'><QuestionNumber id ={id} max="4"/></div>
      

<KnowledgeSliderText id={id}/>




    </div> );
}
 
export default KnowledgeSlider;