import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Home } from './assets/home_button.svg';
import SetRight from "./SetRight";
import SetLeft from "./SetLeft";
import QuestionBar from "./QuestionBar";
import data from './assets/datta.json'; 
import QuizzAnswers from "./QuizzAnswers";
import QuizzDescription from "./QuizzDescription";




const Quizz = () => {
  
    
return (<div className="quizz">
    
    
    
    <SetRight />
    <SetLeft backNotVisible = {0} back="quizz"/>
    <QuestionBar id="1" />
    <div className="quiz_answer">
       <QuizzAnswers id="1" answer='c'/>
   



    </div>
  
</div>
    );
}
export default Quizz;