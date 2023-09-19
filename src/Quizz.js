import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Home } from './assets/home_button.svg';
import SetRight from "./SetRight";
import QuestionBar from "./QuestionBar";
import data from './assets/datta.json'; 
import QuizzTile from "./QuizzTile";
import MyButton from "./MyButton";

const Quizz = () => {
return (<div className="quizz">
    <Link to="/"><Home className ="home_b"/></Link> 
    <SetRight />
    <QuestionBar id="1" />
    <QuizzTile answer='correct' id="1" abc='A'/>
   {/* // <MyButton /> */}
</div>
    );
}
export default Quizz;