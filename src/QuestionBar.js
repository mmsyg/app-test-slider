import React, { useRef, useEffect, useState } from 'react';
import data from './assets/datta.json';
import QuestionNumber from './QuestionNumber';
import parse from 'html-react-parser';
import { countLinesOfText } from './countLinesOfText';

const QuestionBar = (props) => {
  const textRef = useRef(null);
  const [numberOfLines, setNumberOfLines] = useState(1); // Użyjemy stanu do przechowywania liczby wierszy tekstu

  useEffect(() => {
    const lines = countLinesOfText(textRef);
    console.log('Liczba linii tekstu:', lines);
    setNumberOfLines(lines); // Ustawiamy stan na podstawie liczby linii tekstu
  }, []);

  const que = data.questionPack.filter((questionx) => questionx.id === props.id);

  const dynamicHeight = {
    height: `${80+numberOfLines * 25}px`, // Ustawiamy wysokość w zależności od liczby linii tekstu
  };

  return (
    <div className="quiz_bar">
      <div className="question_rectagle" style={dynamicHeight}>
       
        <p ref={textRef} className="question">
          {parse(que[0].question)}
        </p>
      </div>
    </div>
  );
};

export default QuestionBar;
