import React from 'react';
import { Link } from "react-router-dom";
import { ReactComponent as Home } from './assets/home_button.svg';
import data from './assets/datta.json'; 
import SetRight from "./SetRight";
import { ReactComponent as NextButtonQuizz } from './assets/buttonNext.svg';
import QuestionNumber from './QuestionNumber';
const QuizzDescription = () => {
    
    
    return ( <div className="quizz_description">
    <Link to="/"><Home className ="home_b"/></Link> 
    <div className="quiz_descriotion_txt">
    <p className='quiz_description_question'>{data.questionPack[0].question}</p>
    <p className='quiz_description_long'>{data.questionPack[0].answerDescription}</p>
    <p className='quiz_description_title'>{data.questionPack[0].answerC}</p>
    
    </div>
    <img src={`${data.questionPack[0].imgC}`} alt="answer_pht" className="answer_photo_description" />
    <SetRight />

    <QuestionNumber  id={1} max={4} />
    <Link to="/quizz1"> <NextButtonQuizz className="start_button_quizz"/></Link>
    
    </div> 
    );
}
 
export default QuizzDescription;