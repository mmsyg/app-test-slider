import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Home } from './assets/home_button.svg';
import SetRight from "./SetRight";
import QuestionBar from "./QuestionBar";
import data from './assets/datta.json'; 

const Quizz = () => {
return (<div className="quizz">
    <Link to="/"><Home className ="home_b"/></Link> 
    <SetRight />
    <QuestionBar id="1" />

</div>
    );
}
export default Quizz;