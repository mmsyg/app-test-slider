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

let rN = randomNumbers(4);
console.log(rN)
const Test = () => {
  const delay = 2000;
  const x =rN[0]
  const [id, setId] = useState(x);
  const [nr, setNr] = useState(1);
  const [counter, setCounter] = useState(1);

  const handleButtonClick = () => {
    setNr((prevNr) => (prevNr + 1) % rN.length); 
    setId(rN[nr]);
    setCounter(counter + 1)
    console.log(counter)
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
       
       <QuizzAnswer score={-1} id={'1'}/>
  <GrayShape className="gray_shape_qzz_strt"/>
   
     <div className="stork">
            <img src={stork} alt="stork" />
          </div>
          <div className="quiz_title">{data.quizTitle}</div> 
          <Intersect className="intersect_qzz_strt"/>
     <StartButtonQuizz onClick={()=>{handleLiClick('component1'); rN = randomNumbers(4);setCounter(1)}}  className="start_button_quizz"/>
 
   
  
            
          </div>;


  const Component1 = () => (
    <div className="quizz">
      <QuestionBar id={id} />
      <div className="question_number">
        <QuestionNumber  id={counter} max="4" />
      </div>
      
      <div className="quiz_answer">
        <div onClick={() => handleLiClickDelay('component2')}>
          <QuizzAnswers id={id} delayy={delay} />
        </div>
      </div>
    </div>
  );

  const Component2 = () => (
    <div>
      <QuizzDescription id={id} />
      <NextButtonQuizz onClick={() => { if(counter===4){handleLiClick('component3');}else {handleLiClick('component1');} handleButtonClick(); }} className="start_button_quizz" ><button onClick={handleButtonClick}></button></NextButtonQuizz>
    </div>
  );

  const Component3 = () => (<div><QuizzSummary id={id}/> <QuizzAnswer score={1} id={'1'}/>{console.log('summary')}  <StartButtonQuizz onClick={()=>handleLiClickDelay('component0')} className="start_button_quizz"/></div>);

  return (
    <div>
      <SetRight />
      <SetLeft backNotVisible={0} back="slider" />
      
      
   
      {activeComponent === 'component0' && <Component0 />}
      {activeComponent === 'component1' && <Component1 />}
      {activeComponent === 'component2' && <Component2 />}
      {activeComponent === 'component3' && <Component3 />}
    </div>
  );
};

export default Test;
