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
import { ReactComponent as SummaryTryAgain } from './assets/summaryTryAgain.svg';
import { ReactComponent as Intersect } from "./assets/Intersect.svg";
import { ReactComponent as GrayShape } from "./assets/grayShape.svg";
import { ReactComponent as ArrowLeft } from "./assets/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "./assets/arrowRight.svg";
import stork from './assets/Bocian.png';
import data from './assets/datta.json'; 
import QuizzAnswer from './QuizzAnswers';

let rN = randomNumbers(4);
console.log(rN)
const Test = () => {
  const delay = 2000;
  const x =rN[0]
  const [id, setId] = useState(x);
  const [nr, setNr] = useState(1);
  const [counter, setCounter] = useState(1);

  const handleButtonClick = () => {
    
  };

  const [activeComponent, setActiveComponent] = useState('component0');

  const handleLiClick = (component) => {
    setActiveComponent(component);
  };

  const handleLiClickDelay = (component) => {
    setTimeout(() => {
      setActiveComponent(component);
    }, delay);
  };

  const Component0 = () => <div className="quiz_start">
       
   
  
            
          </div>;


  const Component1 = () => (
   <div></div>
  );

  const Component2 = () => (
    <div></div>
  );

  const Component3 = () => (<div>
                                </div>);

  const Component4 = () => (
    <div>
     
    </div>
  );


  return (
    <div>
      <SetRight />
      <SetLeft backNotVisible={0} back="slider" />
      
      
   
      {activeComponent === 'component0' && <Component0 />}
      {activeComponent === 'component1' && <Component1 />}
      {activeComponent === 'component2' && <Component2 />}
      {activeComponent === 'component3' && <Component3 />}
      {activeComponent === 'component4' && <Component4 />}
    </div>
  );
};

export default Test;
