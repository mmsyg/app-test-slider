import React from 'react';
import { Link } from "react-router-dom";
import { ReactComponent as Home } from './assets/home_button.svg';
import data from './assets/datta.json'; 
import SetRight from "./SetRight";
import { ReactComponent as NextButtonQuizz } from './assets/buttonNext.svg';
import QuestionNumber from './QuestionNumber';
const QuizzDescription = (props) => {
    
   const id=Number(props.id)-1
    return ( <div className="quizz_description">
    <div className="quiz_descriotion_txt">
    <p className='quiz_description_question'>{data.questionPack[id].question}</p>
    <p className='quiz_description_long'>{data.questionPack[id].answerDescription}</p>
    <p className='quiz_description_title'>{data.questionPack[id].answerC}</p>
    
    </div>
    <img src={`${data.questionPack[id].imgC}`} alt="answer_pht" className="answer_photo_description" />
    
    
    
    </div> 
    );
}
 
export default QuizzDescription;