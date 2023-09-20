import React from 'react';
import { ReactComponent as AnswerCorrect } from './assets/answerCorrect.svg';
import { ReactComponent as AnswerWrong } from './assets/answerWrong.svg';
import { ReactComponent as AnswerDafault } from './assets/answerDefault.svg';
import data from './assets/datta.json'; 

function QuizTile(props) {
   
   let answerABC, imgABC;
   const que = data.questionPack.filter(questionx => questionx.id === props.id);
   
   switch(props.abc){
        case 'A':
            answerABC = que[0].answerA;
            imgABC = que[0].imgA;
            break;
        case 'B':
            answerABC = que[0].answerB;
            imgABC = que[0].imgB;
            break;  
        case 'C':
            answerABC = que[0].answerC;
            imgABC = que[0].imgC;
            break;   
        default:
            break;
   }
    
   switch (props.answer) {
        case 'correct':
            return (
                <div className="answer_tile">
                    <AnswerCorrect />
                    <p className='answer_txt'>{answerABC}</p>
                    <img src={`${imgABC}`} alt="answer_pht" className="answer_photo" />
                    <p className="question_letter">{props.abc}</p>
                </div>
            );
         
        case 'wrong':
            return ( 
                <div className="answer_tile">
                    <AnswerWrong />
                    <p className='answer_txt'>{answerABC}</p>
                    <img src={`${imgABC}`} alt="answer_pht" className="answer_photo" />
                    <p className="question_letter">{props.abc}</p>
                </div>
            );
        
        default:
            return (
                <div className="answer_tile">
                    <AnswerDafault />
                    <p className='answer_txt'>{answerABC}</p>
                    <img src={`${imgABC}`} alt="answer_pht" className="answer_photo" />
                    <p className="question_letter">{props.abc}</p>
                </div>
            );
   }
}
 
export default QuizTile;
