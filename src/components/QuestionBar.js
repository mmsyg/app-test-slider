import React, { useRef, useEffect, useState } from "react";
import data from "../assets/datta.json";
import QuestionNumber from "./QuestionNumber";
import parse from "html-react-parser";
import { countLinesOfText } from "../helpers/countLinesOfText";
import {useAppContext} from "../context/app-data/useAppContext";

const QuestionBar = (props) => {

  const appData = useAppContext();
  const { quiz } = appData.screens;
  console.log(quiz);






  return (
    <div >
      <div className="question_rectagle" >
        <p className="question">
          {parse(quiz.questions[props.id].text)}
        </p>
      </div>
    </div>
  );
};

export default QuestionBar;
