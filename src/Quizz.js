import React, { useState } from 'react';
import SetRight from './SetRight';
import SetLeft from './SetLeft';
import QuestionBar from './QuestionBar';
import QuestionNumber from './QuestionNumber';
import QuizzAnswers from './QuizzAnswers';

function if (i){
if (i<=4)
{
    let j=i
    i++
    return j

}


}

const Quizz = () => {
    let
  const [id, setId] = useState('1');

  const handleButtonClick = () => {
    addOne('1')
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
      <div className="quiz_answer">
        <QuizzAnswers id={id} answer="c" />
      </div>
      <button onClick={handleButtonClick}>Change ID to 2</button>
    </div>
  );
};

export default Quizz;