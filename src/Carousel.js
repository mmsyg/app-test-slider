import React, { useState, useEffect } from 'react';
import SetRight from './SetRight';
import SetLeft from './SetLeft';
import QuestionBar from './QuestionBar';
import QuestionNumber from './QuestionNumber';
import QuizzAnswers from './QuizzAnswers';
import QuizzDescription from './QuizzDescription';
import { randomNumbers } from './randomNumbers';
import { ReactComponent as NextButtonQuizz } from './assets/buttonNext.svg';
import QuizzSummary from './QuizzSumary';
import { ReactComponent as StartButtonQuizz } from './assets/buttonStart_quizz.svg';
import { ReactComponent as Intersect } from "./assets/Intersect.svg";
import { ReactComponent as GrayShape } from "./assets/grayShape.svg";
import stork from './assets/Bocian.png';
import data from './assets/datta.json'; 
import QuizzAnswer from './QuizzAnswers';


import KnowledgeSlider from './KnowledgeSlider';

const Carousel = () => {
  let max = data.knowledgeSlider.length;
  const [activeComponent, setActiveComponent] = useState('component0');
  const [counter, setCounter] = useState(1);
  const handleLiClick = (component) => {
    const updatedCounter = counter < max ? counter + 1 : 1;
    setCounter(updatedCounter);
    setActiveComponent(component);
  };
  const Component0 = () =><div className="kn_slider"><KnowledgeSlider id={counter}/></div>
  return (
    <div>
      <SetRight />
      <SetLeft backNotVisible={0} back="slider" />
      <button onClick={()=>handleLiClick('component0')}>next</button>
      
   
      {activeComponent === 'component0' && <Component0 />}
      
    </div>
  );
};

export default Carousel;
