import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import data from "../assets/datta.json";
import mapLetterToNumber from "../helpers/WhichCorrect";
import QuizzTile from "./QuizzTile";
import { ReactComponent as RightAnswers } from "../assets/rightAnswers.svg";
import { ReactComponent as WrongAnswers } from "../assets/wrongAnswers.svg";

let q = 0;
let score = 0;

const QuizzAnswer = (props) => {
  let showResult = props.score;
  const que = data.questionPack.filter(
    (questionx) => questionx.id === props.id
  );

  const correct = mapLetterToNumber(que[0].correct);

  let wrongOrBad = ["wrong", "wrong", "wrong"];

  let [isCorrect, setIsCorrect] = useState("default");
  let [isCorrect1, setIsCorrect1] = useState("default");
  let [isCorrect2, setIsCorrect2] = useState("default");
  let arrayIsCorrect = [isCorrect, isCorrect1, isCorrect2];
  let arraySetIsCorrect = [setIsCorrect, setIsCorrect1, setIsCorrect2];

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
        <div className="jp" onClick={() => ifCorrect(0)}>
          <QuizzTile
            className="jp"
            answer={arrayIsCorrect[0]}
            id={props.id}
            abc="A"
            tileLetter="A"
          />
        </div>
        <div className="op" onClick={() => ifCorrect(1)}>
          <QuizzTile
            className="ee"
            answer={arrayIsCorrect[1]}
            id={props.id}
            abc="B"
            tileLetter="B"
          />
        </div>
        <div className="wo" onClick={() => ifCorrect(2)}>
          <QuizzTile
            className="aa"
            answer={arrayIsCorrect[2]}
            id={props.id}
            abc="C"
            tileLetter="C"
          />
        </div>
        {console.log(score)}
      </div>
    );
  }
};

export default QuizzAnswer;
