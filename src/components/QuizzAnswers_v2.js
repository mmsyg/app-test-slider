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
    


const QuizzAnswer = (props) => {
 
  let [score1, setScore1] = useState(scr);

  const appData = useAppContext();
  const { quiz } = appData.screens;


  let showResult = props.score;
 


  let ABC = ["A", "B", "C"];
  let wrongOrBad = ["wrong", "wrong", "wrong"];

  let [isCorrect, setIsCorrect] = useState("default");
  let [isCorrect1, setIsCorrect1] = useState("default");
  let [isCorrect2, setIsCorrect2] = useState("default");
  let arrayIsCorrect = [isCorrect, isCorrect1, isCorrect2];
  let arraySetIsCorrect = [setIsCorrect, setIsCorrect1, setIsCorrect2];
  const [isActive, setIsActive] = useState(false);
  const [disabled, setDisabled] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const [pointerEvents, setPointerEvents] = useState('auto')
  const [isClicked, setIsClicked] = useState(true);

  const [orderStyles, setOrderStyles] = useState({ jp: 0, op: 0, wo: 0 });
  const [orders, setOrders] = useState([0, 1, 2]);
  useEffect(() => {
    // Generowanie losowej permutacji od 0 do 2
    setOrders(shuffledOrders)
 
  }, []);
  const handleAnswerClick = () => {// Nie rób nic, jeśli odpowiedzi są już zablokowane.
   

  
    
  };

  const handleClick = () => {
    if (isDisabled) {
      // Jeśli przycisk jest zablokowany, nie rób nic
      return;
    }
    
    // Tutaj umieść logikę, która ma zostać wykonana po kliknięciu
    console.log('Przycisk kliknięty');
    
    // Zablokuj przycisk
    setIsDisabled(true);

    // Odblokuj przycisk po 2 sekundach
    setTimeout(() => {
      setIsDisabled(false);
    }, 2000);
  };


 
 


  useEffect(() => {
   scr=score1
  }, [score1]);


  if (showResult === 1) {
    
    console.log("score w tym ifie: " + scr);
    let result = Number(score1);

    showResult++;
    return (
      <div className="score">
        <div className="correct">
          <RightAnswers className="right_answer_tile" />
          <p className="score_number">{"0" + result}</p>
          <p className="score_text">lolo</p>
        </div>
        <div className="wrong">
          <WrongAnswers className="wrong_answer_tile" />
          <p className="score_number">{"0" + (4 - result)}</p>
          <p className="score_text">kokio</p>
        </div>
      </div>
    );
  }
  if (showResult === -1) {
     scr = 0;
    return <div></div>;
  } else {
    
    return (
      <div className="quiz_answer">
        <div className="jp" onClick={() => handleAnswerClick  } >
          <QuizTile_v2
          disabled={disabled}
            abc="A"
            text={quiz.questions[props.id].answers[0].text}
            image={quiz.questions[props.id].answers[0].image}
            correct={quiz.questions[props.id].answers[0].correct}
            isActive={isActive}
            setIsActive={setIsActive}
            score1={score1}
            setScore1={setScore1}
            delay = {props.delayy}
          />
        </div>
        <div className="op"   onClick={() => handleAnswerClick  } >
          <QuizTile_v2
         disabled={disabled}
            abc="B"
            text={quiz.questions[props.id].answers[1].text}
            image={quiz.questions[props.id].answers[1].image}
            correct={quiz.questions[props.id].answers[1].correct}
            isActive={isActive}
            setIsActive={setIsActive}
            score1={score1}
            setScore1={setScore1}
            delay = {props.delayy}
          />
        </div>
        <div className="wo"  onClick={() => handleAnswerClick } >
          <QuizTile_v2
           disabled={disabled}
            
            abc="C"
            text={quiz.questions[props.id].answers[2].text}
            image={quiz.questions[props.id].answers[2].image}
            correct={quiz.questions[props.id].answers[2].correct}
            isActive={isActive}
            setIsActive={setIsActive}
            score1={score1}
            setScore1={setScore1}
            delay = {props.delayy}
          />
        </div>

      </div>
    );
  }
};

export default QuizzAnswer;
