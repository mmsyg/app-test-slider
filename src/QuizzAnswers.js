import React from 'react';

import QuizzTile from "./QuizzTile";

const QuizzAnswer = (props) => {
    let correct =props.correct
    
    return ( 
    <div className="quiz_answer">

<div className='jp'><QuizzTile className="jp" answer='default' id="1" abc='A'/></div>
<div className='op'><QuizzTile className='ee' answer='default' id="1" abc='B'/></div>
<div className='wo'><QuizzTile className='aa'answer='default' id="1" abc='C'/></div>


    </div>  );
}
 
export default QuizzAnswer;