import React from 'react';
import { ReactComponent as QuestionNumberBG } from './assets/numberQuestion.svg';
const QuestionNumber = (props) => {

    let basicNumber = "04"
    return (<div className="question_number">

<QuestionNumberBG  className='question_nmber' />
<p className='number_id'>{"0"+props.id}</p>
<p className='number_all'>{basicNumber}</p>
<p className="/">{""}</p>
    </div>  );
}
 
export default QuestionNumber;