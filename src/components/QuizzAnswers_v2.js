import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import data from "../assets/datta.json";
import mapLetterToNumber from "../helpers/WhichCorrect";
import { ReactComponent as RightAnswers } from "../assets/rightAnswers.svg";
import { ReactComponent as WrongAnswers } from "../assets/wrongAnswers.svg";
import QuizTile_v2 from "./QuizTile_v2";

import { useAppContext } from "../context/app-data/useAppContext";
import { isDisabled } from "@testing-library/user-event/dist/utils";
let q = 0;
  let scr = 0;
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Zamiana elementów
  }
  return array;
}
const shuffledOrders = shuffleArray([0, 1, 2]);
    


const QuizzAnswers_v2 = (props) => {

  let [score1, setScore1] = useState(scr);

  const appData = useAppContext();
  const { quiz } = appData.screens;


  let showResult = props.score;
  let [isCorrect, setIsCorrect] = useState("default");
  let [isCorrect1, setIsCorrect1] = useState("default");
  let [isCorrect2, setIsCorrect2] = useState("default");
  let arrayIsCorrect = [isCorrect, isCorrect1, isCorrect2];
  let arraySetIsCorrect = [setIsCorrect, setIsCorrect1, setIsCorrect2];
  const [isActive, setIsActive] = useState(false);
  const [disabled, setDisabled] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false)
  const [pointerEvents, setPointerEvents] = useState('auto')
  const [isClicked, setIsClicked] = useState(false);

  const [orderStyles, setOrderStyles] = useState({ jp: 0, op: 0, wo: 0 });
  const [orders, setOrders] = useState([0, 1, 2]);


  const active = () => {
    setIsActive(true);


    setTimeout(() => {
     
    }, props.delayy);
  };


  useEffect(() => {
    if(scr===0)
    setScore1(0)
  }, [q]);

 


  useEffect(() => {
   scr=score1
  }, [score1]);


  if (showResult === 1) {
    
    console.log("score w tym ifie: " + scr);
    const result = Number(score1);
   
    
    
    
    showResult++;
  
    return (
      <div className="score">
        <div className="correct">
          <RightAnswers className="right_answer_tile" />
          <p className="score_number">{"0" + result}</p>
          <p className="score_text">Poprawne odpowiedzi</p>
        </div>
        <div className="wrong">
          <WrongAnswers className="wrong_answer_tile" />
          <p className="score_number">{"0" + (4 - result)}</p>
          <p className="score_text">Błędne odpoweidzi</p>
        </div>
      </div>
    );
  }
  if (showResult === -1) {
     scr = 0;
     q++;
      
   
    
     
    return <div></div>;
  } else {
    
    return (
      <div className="quiz_answer">
        <div className="jp"  onClick={active}>
          <QuizTile_v2
          
            abc="A"
            text={quiz.questions[props.id].answers[shuffledOrders[0]].text}
            image={quiz.questions[props.id].answers[shuffledOrders[0]].image}
            correct={quiz.questions[props.id].answers[shuffledOrders[0]].correct}
            isActive={isActive}
            setIsActive={setIsActive}
            score1={score1}
            setScore1={setScore1}
            delay = {props.delayy}
            disabled = {disabled}
            setDisabled ={setDisabled}
          />
        </div>
        <div className="op"   onClick={active}  >
          <QuizTile_v2
         
            abc="B"
            text={quiz.questions[props.id].answers[shuffledOrders[1]].text}
            image={quiz.questions[props.id].answers[shuffledOrders[1]].image}
            correct={quiz.questions[props.id].answers[shuffledOrders[1]].correct}
            isActive={isActive}
            setIsActive={setIsActive}
            score1={score1}
            setScore1={setScore1}
            delay = {props.delayy}
            disabled = {disabled}
            setDisabled ={setDisabled}
          />
        </div>
        <div className="wo"onClick={active} >
          <QuizTile_v2
         
            
            abc="C"
            text={quiz.questions[props.id].answers[shuffledOrders[2]].text}
            image={quiz.questions[props.id].answers[shuffledOrders[2]].image}
            correct={quiz.questions[props.id].answers[shuffledOrders[2 ]].correct}
            isActive={isActive}
            setIsActive={setIsActive}
            score1={score1}
            setScore1={setScore1}
            delay = {props.delayy}
            disabled = {disabled}
            setDisabled ={setDisabled}
          />
        </div>

      </div>
    );
  }
};

export default QuizzAnswers_v2;
