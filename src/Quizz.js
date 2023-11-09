import React, { useState, useEffect } from 'react';
import SetRight from './SetRight';
import SetLeft from './SetLeft';
import QuestionBar from './QuestionBar';
import QuestionNumber from './QuestionNumber';
import QuizzAnswers from './QuizzAnswers';




const Quizz = () => {
   
  const [id, setId] = useState('1');

  const handleButtonClick = () => {
    setId('2');
  };

  return (
    <div className="quizz">
      <SetRight />
      <SetLeft backNotVisible={0} back="quizz" />
      <QuestionBar id={id} />
      <div className="question_number">
        <QuestionNumber id={id} max="4" />
      </div>
     
      <button onClick={handleButtonClick}>Change ID to 2</button>
     
          <div className="quiz_answer">
        <QuizzAnswers id={id} click={0}/>
      </div>
       
    </div>
  );
};

export default Quizz;