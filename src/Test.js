import React, { useState, useEffect } from 'react';
import SetRight from './SetRight';
import SetLeft from './SetLeft';
import QuestionBar from './QuestionBar';
import QuestionNumber from './QuestionNumber';
import QuizzAnswers from './QuizzAnswers';
import QuizzDescription from './QuizzDescription';
import { randomNumbers } from './randomNumbers';
import { ReactComponent as NextButtonQuizz } from './assets/buttonNext.svg';

const rN = randomNumbers(4);
console.log(rN)
const Test = () => {
  const delay = 2000;
  const x =rN[0]
  const [id, setId] = useState(x);
  const [nr, setNr] = useState(1);

  const handleButtonClick = () => {
    setNr((prevNr) => (prevNr + 1) % rN.length); 
    setId(rN[nr]);
  };

  const [activeComponent, setActiveComponent] = useState(null);

  const handleLiClick = (component) => {
    setActiveComponent(component);
  };

  const handleLiClickDelay = (component) => {
    setTimeout(() => {
      setActiveComponent(component);
    }, delay);
  };

  const Component1 = () => (
    <div className="quizz">
      <QuestionBar id={id} />
      <div className="question_number">
        <QuestionNumber id={id} max="4" />
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
      <QuizzDescription />
      <NextButtonQuizz onClick={() => { handleLiClick('component1'); handleButtonClick(); }} className="start_button_quizz" ><button onClick={handleButtonClick}></button></NextButtonQuizz>
    </div>
  );

  const Component3 = () => <div>Component 3</div>;

  return (
    <div>
      <SetRight />
      <SetLeft backNotVisible={0} back="quizz" />
      <nav>
        <ul>
          <li onClick={() => handleLiClick('component1')}>Toggle Component 1</li>
          <li onClick={() => handleLiClickDelay('component2')}>Toggle Component 2</li>
          <li onClick={() => handleLiClick('component3')}>Toggle Component 3</li>
        </ul>
      </nav>

      {activeComponent === 'component1' && <Component1 />}
      {activeComponent === 'component2' && <Component2 />}
      {activeComponent === 'component3' && <Component3 />}
    </div>
  );
};

export default Test;
