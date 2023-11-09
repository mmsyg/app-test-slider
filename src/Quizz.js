import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Home } from './assets/home_button.svg';
import SetRight from "./SetRight";
import SetLeft from "./SetLeft";
import QuestionBar from "./QuestionBar";
import data from './assets/datta.json'; 
import QuizzAnswers from "./QuizzAnswers";
import QuizzDescription from "./QuizzDescription";
import QuestionNumber from './QuestionNumber';



const Quizz = () => {
 let id = '2';
    
return (<div className="quizz">
    <button>kolejne pytanie</button>
    
     <SetRight />
    <SetLeft backNotVisible = {0} back="quizz"/>
   
    <QuestionBar id={id} /> 
    <div className="question_number">
    <QuestionNumber id ={id} max="4"/></div>
    <div className="quiz_answer">
       <QuizzAnswers id={id} answer='c'/>
   



    </div>
  
</div>
    );
}
export default Quizz;