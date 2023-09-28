import React from 'react';
import SetLeft from "./SetLeft";
import SetRight from './SetRight';
import data from './assets/datta.json'; 
import { ReactComponent as PolygonBlueSmall}from './assets/polygonBlueSmallKnowledge.svg';
import { ReactComponent as UnionGreenKn}from './assets/unionGreen_knowledge.svg';
import QuestionNumber from './QuestionNumber';
import { ReactComponent as PolygonYellowSmall}from './assets/polygonYellowSmallKnowledge.svg'

const KnowledgeSlider = () => {
    return ( <div className="knowledge_slider">
        <QuestionNumber className='question_nr_knowledge' id ="1" max="4"/>
        <SetRight />
<SetLeft backNotVisible = {0}  />
<PolygonBlueSmall className='polygon_blue_small_knowledge' />
<UnionGreenKn className='union_green_knowledge'/>
<div className="text">
    <p className="knowledge_title"></p>

</div>
    


    </div> );
}
 
export default KnowledgeSlider;