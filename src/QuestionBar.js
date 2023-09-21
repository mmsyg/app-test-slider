import React from 'react';
import data from './assets/datta.json'; 
import { ReactComponent as QuestionRectangle } from './assets/rectangleQuestion.svg';
// import { ReactComponent as QuestionNumber } from './assets/numberQuestion.svg';
import QuestionNumber from './QuestionNumber';



const QuestionBar = (props) => {
    
    const que = data.questionPack.filter(questionx => questionx.id === props.id);
    return ( <div className="quiz_bar">

    
<QuestionRectangle className='question_rectagle' />
<QuestionNumber className='question_number' id ={props.id}/>
<p className='question'>{que[0].question}</p>
<p className='question_number_txt'></p>
</div>
     );
}
 
export default QuestionBar;