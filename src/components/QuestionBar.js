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


  const textRef = useRef(null);
  const [numberOfLines, setNumberOfLines] = useState(1);
  useEffect(() => {
    const lines = countLinesOfText(textRef);
    console.log("Liczba linii tekstu:", lines);
    setNumberOfLines(lines); // Ustawiamy stan na podstawie liczby linii tekstu
  }, []);
  const dynamicHeight = {
    height: `${104 + (numberOfLines - 1) * 24}px`, // Ustawiamy wysokość w zależności od liczby linii tekstu
  };
  const dynamicBarTop = {
    top: `${40 - (numberOfLines - 1) * 12}px`,
  };

  return (
    <div style={dynamicBarTop}>
      <div className="question_rectagle" style={dynamicHeight}>
        <p ref={textRef} className="question">
          {parse(quiz.questions[props.id].text)}
        </p>
      </div>
    </div>
  );
};

export default QuestionBar;
