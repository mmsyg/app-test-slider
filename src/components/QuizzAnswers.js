import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import data from "../assets/datta.json";
import mapLetterToNumber from "../helpers/WhichCorrect";
import QuizzTile from "./QuizzTile";
import { ReactComponent as RightAnswers } from "../assets/rightAnswers.svg";
import { ReactComponent as WrongAnswers } from "../assets/wrongAnswers.svg";

let q = 0;
let score = 0;
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Zamiana elementów
  }
  return array;
}

function numbersToLetters(array) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return array.map(number => alphabet[number]);
}



const QuizzAnswer = (props) => {
  let showResult = props.score;
  const que = data.questionPack.filter(
    (questionx) => questionx.id === props.id
  );

  const correct = mapLetterToNumber(que[0].correct);
  let ABC =["A","B", "C"]
  let wrongOrBad = ["wrong", "wrong", "wrong"];

  let [isCorrect, setIsCorrect] = useState("default");
  let [isCorrect1, setIsCorrect1] = useState("default");
  let [isCorrect2, setIsCorrect2] = useState("default");
  let arrayIsCorrect = [isCorrect, isCorrect1, isCorrect2];
  let arraySetIsCorrect = [setIsCorrect, setIsCorrect1, setIsCorrect2];

  const [orderStyles, setOrderStyles] = useState({ jp: 0, op: 0, wo: 0 });
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    // Generowanie losowej permutacji od 0 do 2
    const shuffledOrders = shuffleArray([0, 1, 2]);
    setOrders(shuffledOrders);

    setOrderStyles({
      jp: shuffledOrders[0],
      op: shuffledOrders[1],
      wo: shuffledOrders[2]
    });
  }, []);

  // Przekształcanie liczb na litery po aktualizacji orders
  const letterArray = numbersToLetters(orders);
  function ifCorrect(i) {
    if (q === 0) {
      console.log("klik");
      arraySetIsCorrect[i]((arrayIsCorrect[i] = wrongOrBad[i]));
      arraySetIsCorrect[correct](
        (arrayIsCorrect[correct] = wrongOrBad[correct])
      );
      q++;
      if (i === correct) {
        score++;
      }

      setTimeout(function () {
        q = 0;
      }, props.delayy);
    }
  }

  wrongOrBad[correct] = "correct";
  if (showResult === 1) {
    console.log("score w tym ifie: " + score);
    let result = Number(score);

    showResult++;
    return (
      <div className="score">
        <div className="correct">
          <RightAnswers className="right_answer_tile" />
          <p className="score_number">{"0" + result}</p>
          <p className="score_text">{data.quizSummaryCorrect}</p>
        </div>
        <div className="wrong">
          <WrongAnswers className="wrong_answer_tile" />
          <p className="score_number">{"0" + (4 - result)}</p>
          <p className="score_text">{data.quizSummaryWrong}</p>
        </div>
      </div>
    );
  }
  if (showResult === -1) {
    score = 0;
    return <div></div>;
  } else {
    return (
      <div className="quiz_answer">
        <div className="jp" style={{ order: orderStyles.jp }}  onClick={() => ifCorrect(0)}>
          <QuizzTile
            className="jp"
            answer={arrayIsCorrect[0]}
            id={props.id}
            abc="A"
            tileLetter={letterArray[0]}
          />
        </div>
        <div className="op" style={{ order: orderStyles.op }}  onClick={() => ifCorrect(1)}>
          <QuizzTile
            className="ee"
            answer={arrayIsCorrect[1]}
            id={props.id}
            abc="B"
            tileLetter={letterArray[1]}
          />
        </div>
        <div className="wo" style={{ order: orderStyles.wo }}  onClick={() => ifCorrect(2)}>
          <QuizzTile
            className="aa"
            answer={arrayIsCorrect[2]}
            id={props.id}
            abc="C"
            tileLetter={letterArray[2]}
          />
        </div>
        {console.log(score)}
      </div>
    );
  }
};

export default QuizzAnswer;
