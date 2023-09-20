import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Home } from './assets/home_button.svg';
import SetRight from "./SetRight";
import QuestionBar from "./QuestionBar";
import data from './assets/datta.json'; 
import QuizzAnswers from "./QuizzAnswers";
import  QuizzTile from "./QuizzTile";

const Quizz = () => {
return (<div className="quizz">
    <Link to="/"><Home className ="home_b"/></Link> 
    <SetRight />
    <QuestionBar id="1" />
    <div className="quiz_answer">
<QuizzAnswers />



    </div>
  
</div>
    );
}
export default Quizz;