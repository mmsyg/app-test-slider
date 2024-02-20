import React, { useState, useEffect } from "react";
import SetRight from "../components/SetRight";
import SetLeft from "../components/SetLeft";
import QuestionBar from "../components/QuestionBar";
import QuestionNumber from "../components/QuestionNumber";
import QuizzAnswers_v2 from "../components/QuizzAnswers_v2";
import QuizzDescription from "./quiz_pages/QuizzDescription";
import { randomNumbers } from "../helpers/randomNumbers";
import { ReactComponent as NextButtonQuizz } from "../assets/buttonNextQuiz.svg";
import QuizzSummary from "./quiz_pages/QuizzSumary";
import { ReactComponent as StartButtonQuizz } from "../assets/buttonStart_quizz.svg";
import { ReactComponent as SummaryTryAgain } from "../assets/summaryTryAgain.svg";
import { ReactComponent as Intersect } from "../assets/Intersect.svg";
import { ReactComponent as GrayShape } from "../assets/grayShape.svg";
import { ReactComponent as UnionBlueQuiz } from "../assets/unionBlueQuiz.svg";
import { ReactComponent as ArrowLeft } from "../assets/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "../assets/arrowRight.svg";
import stork from "../assets/Bocian.png";
import data from "../assets/datta.json";
import parse from "html-react-parser";
import { ReactComponent as BackButton } from "../assets/backButton.svg";
import { ReactComponent as HomeButton } from "../assets/homeButton.svg";
import { Link } from "react-router-dom";
import {useAppContext} from "../context/app-data/useAppContext";

let rN = randomNumbers(5);
let rNum = parseInt(randomNumbers(5))
console.log(rN);
const Quiz = () => {





  const [click, setClick] = useState(0);
  const delay = 2500;
  const x = rNum[0];
  const [id, setId] = useState(x);
  const [nr, setNr] = useState(1);
  const [counter, setCounter] = useState(1);
  const [endQuiz, setEndQuiz] =useState(false)
  const handleButtonClick = () => {
    setNr((prevNr) => (prevNr + 1) % rNum.length);
    setCounter(counter + 1);
    setId(rNum[counter]);
    if(counter===3){
      setEndQuiz(true);
    }
    console.log(counter);
  };



  const [activeComponent, setActiveComponent] = useState("component0");

  const handleLiClick = (component) => {
    setActiveComponent(component);
  };

  const handleLiClickDelay = (component) => {

      setTimeout(() => {

        setActiveComponent(component);

      }, delay);



  };

  function StartQuiz(props) {

    const appData = useAppContext();
    const { quiz } = appData.screens;
    console.log(quiz);
    return (
      <div className="quiz_start">
        <SetLeft backNotVisible={0} back="slider" />
        <QuizzAnswers_v2 score={-1} id={id+1} scr={0}/>

        <div className="stork">
          <img src={stork} alt="stork" />
        </div>
        <div className="quiz_title">
         <div className="quiz_titlee_position">
          <p className="quiz_titlee">{parse(quiz.startTitlee)}</p></div>
          <div className="quiz_under_title_position">
          <p className="quiz_under_title">{parse(quiz.startTitle)}</p>
        </div></div>

        <div
          className="start_quiz_btn_strt"
          onClick={() => {
            props.handleLiClick("component1");
            rNum = randomNumbers(5);
            props.setCounter(1);
            props.setId(rNum[0]);
            setEndQuiz(false)
          }}
        >
          <StartButtonQuizz className="start_button_quizz" />
          <p className="strt">{quiz.startTextButton}</p>
        </div>
      </div>
    );
  }

  const Component0 = () => (
    <div>
    <StartQuiz
      setId={setId}
      setCounter={setCounter}
      handleLiClick={handleLiClick}
    ></StartQuiz>

    </div>
  );

  const Component1 = () => (
    <div className="quizz">
      <SetLeft backNotVisible={1} back="slider" />
      <div className="quiz_bar">
        <QuestionBar id={id} counter={counter} />
        <div className="question_number">
          <QuestionNumber id={counter} top={1} height={1} max="4" />
        </div>
      </div>

      <div className="quiz_answer">
        <div  onClick={() => handleLiClickDelay("component2")}>
          {console.log("pacz na to id:"+id)}
          <QuizzAnswers_v2 id={id} delayy={delay} />
        </div>
      </div>
    </div>
  );

  const Component2 = () => (

    <div>
      <SetLeft backNotVisible={1} back="slider" />
      <div className="quiz_desc_number">
        <QuestionNumber id={counter} height={1} max="4" />
      </div>
      <QuizzDescription id={id} />
      <div
        className="start_quiz_btn"
        onClick={() => {
          if (counter === 4) {
            handleLiClick("component3");
          } else {
            handleButtonClick();
            handleLiClick("component1");

          }
        }}
      >
        <NextButtonQuizz className="start_button_quizz" />

        <p  className={endQuiz ? "nxt1" : "nxt"}>{parse(quiz.nextQuestionButton)}</p>
        <p  className={endQuiz ? "nxt" : "nxt1"}>{parse(quiz.endQuizButton)}</p>
      </div>
    </div>
  );

  const Component3 = () => (
    <div>
      <SetLeft backNotVisible={1} />
      <QuizzSummary id={id}  summaryText={quiz.summaryText}/>
      <QuizzAnswers_v2 score={1} id={"1"} />
      {console.log("summary")}

      <div
        className="start_quiz_btn_up"
        onClick={() => {
          handleLiClick("component4");
          setId(rNum[0]);
          setCounter(1);
        }}
      >
        <NextButtonQuizz className="start_button_quizz"/>
        <p className="nxt">{parse(quiz.triviaButton)}</p>
      </div>
      <div
        className="start_quiz_btn"
        onClick={() => handleLiClick("component0")}
      >
        <SummaryTryAgain className="start_button_quizz" />
        <p className="nxt">{parse(quiz.tryAgainButton)}</p>
      </div>
    </div>
  );

  const Component4 = () => (
    <div ><div className="set_left">
        <Link to="/">
          <HomeButton className="home_button"/>
        </Link>
        <BackButton className="back_button"onClick={() => handleLiClick("component3")} />
      </div>
      <div className="com4">

      <QuizzDescription id={id} />
      <div className="quiz_desc_number">
        <QuestionNumber id={counter} max="4" height={1} />
      </div></div>
      <ArrowLeft
  onClick={() => {
    if (counter > 1) {
      setCounter(counter - 1);
      setId(rNum[counter - 2]);
    } else {
      setCounter(4);
      setId(rNum[3]);
    }
  }}
  className="left_arrow_quiz"
/>
      <ArrowRight
        onClick={() => {
          if (counter < 4) {
            setId(rNum[counter]);
            setCounter(counter + 1);


          } else {setCounter(1);
          setId(rNum[0]);}
        }}
        className="right_arrow_quiz"
      />

      <div
        className="next_quiz_btn"
        onClick={() => handleLiClick("component0")}
      >

      </div>
    </div>
  );
  const appData = useAppContext();
    const { quiz } = appData.screens;

  return (
    
    <div className="test2">
      <SetRight />

      <UnionBlueQuiz className="union_quiz" />
      <GrayShape className="gray_shape_qzz_strt" />
      <Intersect className="intersect_qzz_strt" />

      {activeComponent === "component0" && <Component0 />}
      {activeComponent === "component1" && <Component1 />}
      {activeComponent === "component2" && <Component2 />}
      {activeComponent === "component3" && <Component3 />}
      {activeComponent === "component4" && <Component4 />}
    </div>
  );
};

export default Quiz;