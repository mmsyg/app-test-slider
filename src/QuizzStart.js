import React from "react";
import { ReactComponent as StartButtonQuizz } from './assets/buttonStart_quizz.svg';
import { Link } from "react-router-dom";
import { ReactComponent as Home } from './assets/home_button.svg';
import stork from './assets/Bocian.png'
import SetRight from "./SetRight";

const QuizzStart = () => {


    
    return ( <div className="quiz_start">
       
   <StartButtonQuizz className="start_button_quizz"/>
   <Link to="/"><Home className ="home_b"/></Link> 

   <div className="stork">
          <img src={stork} alt="stork" />
        </div>
  
 <SetRight />
          
        </div> );

}
 
export default QuizzStart;