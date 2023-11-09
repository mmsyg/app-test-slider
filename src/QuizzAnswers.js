import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

import mapLetterToNumber from "./WhichCorrect"
import QuizzTile from "./QuizzTile";
import randomLetters from "./randomLetter"


const QuizzAnswer = (props) => {
    const navigate = useNavigate()
    let timeout;
    
    const history = useNavigate();

    function delayandgo(e, path) {
      e.preventdefault();

      setTimeout(() => history.push(path), 3000);
    }
  

    function wait(time) {

      return new Promise(resolve => {
        console.log("settimeout")
        timeout = setTimeout(resolve, time);
      });
    }
    
    // this is the routing function
    async function goToPage() {
      clearTimeout(timeout) 
      await wait(3000);
        navigate("/quizzdescription");
      }

    const correct = mapLetterToNumber(props.answer);

    let wrongOrBad = ["wrong", "wrong", "wrong"]
 
    
  let[isCorrect, setIsCorrect]= React.useState("default");
  let[isCorrect1, setIsCorrect1]= React.useState("default");
  let[isCorrect2, setIsCorrect2]= React.useState("default");
  let arrayIsCorrect = [isCorrect, isCorrect1, isCorrect2];
  let arraySetIsCorrect = [setIsCorrect, setIsCorrect1, setIsCorrect2];
 
 
  function ifCorrect(i) {
    arraySetIsCorrect[i](arrayIsCorrect[i]=wrongOrBad[i] );
    arraySetIsCorrect[correct](arrayIsCorrect[correct]=wrongOrBad[correct] );
   clearTimeout(timeout);
    goToPage();
  }

wrongOrBad[correct]="correct";
    return ( 
    <div className="quiz_answer">

<div className='jp' onClick={() => ifCorrect(0)}><QuizzTile className="jp" answer={arrayIsCorrect[0]} id={props.id} abc='A' letterABC='A'/></div>
<div className='op'onClick={() => ifCorrect(1)}><QuizzTile className='ee' answer={arrayIsCorrect[1]} id={props.id} abc='B' letterABC='B'/></div>
<div className='wo'onClick={() => ifCorrect(2)}><QuizzTile className='aa'answer={arrayIsCorrect[2]} id={props.id} abc='C' letterABC='C'/></div>


    </div>  );


    
}
export default QuizzAnswer;