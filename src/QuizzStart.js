import React from "react";
import { ReactComponent as StartButtonQuizz } from './assets/buttonStart_quizz.svg';
import { Link } from "react-router-dom";
import { ReactComponent as Home } from './assets/home_button.svg';
import stork from './assets/Bocian.png'
import SetRight from "./SetRight";
import data from './assets/datta.json'; 

const QuizzStart = () => {


    
    return ( <div className="quiz_start">
       
 
   <Link to="/"><Home className ="home_b"/></Link> 

   <div className="stork">
          <img src={stork} alt="stork" />
        </div>
        <div className="quiz_title">{data.quizTitle}</div>
   <Link to="/quizz1"> <StartButtonQuizz className="start_button_quizz"/></Link>
 <SetRight />
          
        </div> );

}
 
export default QuizzStart;