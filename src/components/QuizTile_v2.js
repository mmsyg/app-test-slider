import { useEffect, useState } from "react";

const QuizTile_v2 = (props) => {
  
  const [isCorrect, setIsCorrect] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const [isAcitveInside, setIsActiveInside] = useState(false);
  
  
  const clicked = () => { 
    setIsClicked(true);
   props.setIsActive(true);
 props.setDisabled(props.disabled+1)
 setIsActiveInside(true);
  
    
  };
  useEffect(() => {
    if(props.disabled==1){
    if( props.isActive){
      console.log("toja")
  if (props.correct) 
  {setIsCorrect(true);
  if(isClicked){
    props.setScore1(props.score1+1)
  }}
  else{  if(isClicked)setIsWrong(true)}

  if (isCorrect && isClicked) {console.log("scóóór"+props.score1)
    props.setScore1(props.score1+1)
   }

  }}}, [isClicked, props.isActive, props.disabled]);


  return (
    <div>
      <div
        onClick={clicked}
        className={`${
          isCorrect
            ? "custom_tile_correct"
            : isWrong
            ? "custom_tile_wrong"
            : "custom_tile"
        }`}
      >
        <img
          src={`${props.image}`}
          alt="tile_left_pht"
          className="img_quiz_tile"
        />
        <div className="txt_quizz">
          <p className="tile_title_quiz" dangerouslySetInnerHTML={{ __html: props.text }}>
            
          </p>
        </div>
        <div
          className={`${
            isCorrect
              ? "circle_custom_tile_correct"
              : isWrong
              ? "circle_custom_tile_wrong"
              : "circle_custom_tile"
          }`}
        >
          <p className="question_letter">{props.abc}</p>
        </div>
      </div>
    </div>
  );
};

export default QuizTile_v2;
