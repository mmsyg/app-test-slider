import React from 'react';
import { useState } from 'react';
import { ReactComponent as QuestionNumberBG } from './assets/numberQuestion.svg';
import { numberFormat } from './NumberFormat';

const QuestionNumber = (props) => {

    const dynamicQuestionNumberBG = {
        height: `${104+ (props.height-1) * 24}px`,
      }
    

    return (<div className="question_number">



<div className="nr_BG_shadow/" />
<div  className='question_nmber' style={dynamicQuestionNumberBG} >
<p className='number_id'>{numberFormat(props.id)}</p>
<div className="max_Nr_BG">
<p className="slash">{"/"}</p>
<p className='number_all'>{numberFormat(props.max)}</p>
</div>

</div>
    </div>  );
}
 
export default QuestionNumber;