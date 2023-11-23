import React from 'react';
import { useState } from 'react';

import { ReactComponent as QuestionNumberBG } from './assets/numberQuestion.svg';
const QuestionNumber = (props) => {

    const dynamicQuestionNumberBG = {
        height: `${104+ (props.height-1) * 24}px`,
      }
    

    return (<div className="question_number">



<div className="nr_BG_shadow/" />
<div  className='question_nmber' style={dynamicQuestionNumberBG} >
<p className='number_id'>{"0"+props.id}</p>
<div className="max_Nr_BG">
<p className="slash">{"/"}</p>
<p className='number_all'>{"0"+props.max}</p>
</div>

</div>
    </div>  );
}
 
export default QuestionNumber;