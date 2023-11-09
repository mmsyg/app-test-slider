import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import data from './assets/datta.json'; 
import mapLetterToNumber from "./WhichCorrect"
import QuizzTile from "./QuizzTile";

 let q = 0;
 let score =0;

const QuizzAnswer = (props) => {
 
    const navigate = useNavigate()
    let timeout;
    const que = data.questionPack.filter(questionx => questionx.id === props.id);
    

    const correct = mapLetterToNumber(que[0].correct);

    let wrongOrBad = ["wrong", "wrong", "wrong"]
 
    
  let[isCorrect, setIsCorrect]= React.useState("default");
  let[isCorrect1, setIsCorrect1]= React.useState("default");
  let[isCorrect2, setIsCorrect2]= React.useState("default");
  let arrayIsCorrect = [isCorrect, isCorrect1, isCorrect2];
  let arraySetIsCorrect = [setIsCorrect, setIsCorrect1, setIsCorrect2];
 
 
  function ifCorrect(i) {
    if(i===correct){
      score++;
    }
    
   if(q===0){

    arraySetIsCorrect[i](arrayIsCorrect[i]=wrongOrBad[i] );
    arraySetIsCorrect[correct](arrayIsCorrect[correct]=wrongOrBad[correct] );
    q++;
    }
    setTimeout(function() {
      q=0;
    }, props.delayy); 
  }

wrongOrBad[correct]="correct";
    return ( 
    <div className="quiz_answer">

<div className='jp' onClick={() => ifCorrect(0)}><QuizzTile className="jp" answer={arrayIsCorrect[0]} id={props.id} abc='A' tileLetter='A'/></div>
<div className='op'onClick={() => ifCorrect(1)}><QuizzTile className='ee' answer={arrayIsCorrect[1]} id={props.id} abc='B' tileLetter='B'/></div>
<div className='wo'onClick={() => ifCorrect(2)}><QuizzTile className='aa'answer={arrayIsCorrect[2]} id={props.id} abc='C' tileLetter='C'/></div>
{console.log(score)}
    </div>  );


    
}
export default QuizzAnswer;