import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Home } from "../../assets/homeButton.svg";
import data from "../../assets/datta.json";
import SetRight from "../../components/SetRight";
import { ReactComponent as NextButtonQuizz } from "../../assets/buttonNext.svg";
import QuestionNumber from "../../components/QuestionNumber";
import {useAppContext} from "../../context/app-data/useAppContext";
import parse from "html-react-parser";

const QuizzDescription = (props) => {


  const appData = useAppContext();
  const { quiz } = appData.screens;
  console.log(quiz);
  const id = Number(props.id); 
  
  const answers = quiz.questions[id].answers.filter(
    (questionx) => questionx.correct === true
  );
  return (
    <div className="quizz_description">
      <div className="quizz_description_txt">
        <p className="quiz_description_question"
        dangerouslySetInnerHTML={{ __html: quiz.questions[id].text }}>
          
        </p> <p className="quiz_description_title"
        dangerouslySetInnerHTML={{ __html: answers[0].text }}>
        </p>
        <div className="quiz_description_long_pos">
        <p className="quiz_description_long"
         dangerouslySetInnerHTML={{ __html: answers[0].details }}
        >          
        </p></div>
       
      </div>
      <img
        src={`${answers[0].image}`}
        alt="answer_pht"
        className="answer_photo_description"
      />
    </div>
  );
};

export default QuizzDescription;
