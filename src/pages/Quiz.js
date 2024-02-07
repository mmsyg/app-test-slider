import React, { useState, useEffect } from "react";
import SetRight from "../components/SetRight";
import SetLeft from "../components/SetLeft";
import QuestionBar from "../components/QuestionBar";
import QuestionNumber from "../components/QuestionNumber";
import QuizzAnswers from "../components/QuizzAnswers";
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
import QuizzAnswer from "../components/QuizzAnswers";
import parse from "html-react-parser";
import { ReactComponent as BackButton } from "../assets/backButton.svg";
import { ReactComponent as HomeButton } from "../assets/homeButton.svg";
import { Link } from "react-router-dom";
import {useAppContext} from "../context/app-data/useAppContext";

let rN = randomNumbers(4);
console.log(rN);
const Quiz = () => {

  const appData = useAppContext();
  const { quiz } = appData.screens;
  console.log(quiz);


  const [click, setClick] = useState(0);
  const delay = 2000;
  const x = rN[0];
  const [id, setId] = useState(x);
  const [nr, setNr] = useState(1);
  const [counter, setCounter] = useState(1);

  const handleButtonClick = () => {
    setNr((prevNr) => (prevNr + 1) % rN.length);
    setId(rN[nr]);
    setCounter(counter + 1);
    console.log(counter);
  };

  const [activeComponent, setActiveComponent] = useState("component0");

  const handleLiClick = (component) => {
    setActiveComponent(component);
  };

  const handleLiClickDelay = (component) => {
    if (click === 0) {
      setTimeout(() => {
        setClick(1);
        setActiveComponent(component);
      }, delay);
      setTimeout(() => {
        setClick(0);
      }, delay + 100);
    }
  };

  function StartQuiz(props) {

    const appData = useAppContext();
    const { quiz } = appData.screens;
    console.log(quiz);
    return (
      <div className="quiz_start">
        <SetLeft backNotVisible={0} back="slider" />
        <QuizzAnswers_v2 score={-1} id={"1"} />

        <div className="stork">
          <img src={stork} alt="stork" />
        </div>
        <div className="quiz_title">
          <p className="quiz_titlee">{parse(quiz.startTitlee)}</p>
          <p className="quiz_under_title">{parse(quiz.startTitle)}</p>
        </div>

        <div
          className="start_quiz_btn"
          onClick={() => {
            props.handleLiClick("component1");
            rN = randomNumbers(4);
            props.setCounter(1);
            props.setId(rN[0]);
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
        <div onClick={() => handleLiClickDelay("component2")}>
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
        className="next_quiz_btn"
        onClick={() => {
          if (counter === 4) {
            handleLiClick("component3");
          } else {
            handleLiClick("component1");
            handleButtonClick();
          }
        }}
      >
        <NextButtonQuizz className="start_button_quizz" />
        <p className="nxt">{parse(data.quizNextButton)}</p>
      </div>
    </div>
  );

  const Component3 = () => (
    <div>
      <SetLeft backNotVisible={1} />
      <QuizzSummary id={id} />
      <QuizzAnswers_v2 score={1} id={"1"} />
      {console.log("summary")}

      <div
        className="try_again_btn"
        onClick={() => {
          handleLiClick("component4");
          setId(1);
          setCounter(1);
        }}
      >
        <NextButtonQuizz />
        <p className="nxt">{parse(data.quizTriviaButton)}</p>
      </div>
      <div
        className="next_quiz_btn"
        onClick={() => handleLiClick("component0")}
      >
        <SummaryTryAgain className="start_button_quizz" />
        <p className="nxt">{parse(data.quizTryAgain)}</p>
      </div>
    </div>
  );

  const Component4 = () => (
    <div >
      <div className="com4">
      <div className="set_left">
        <Link to="/">
          <HomeButton className="home_button"/>
        </Link>
        <BackButton className="back_button"onClick={() => handleLiClick("component3")} />
      </div>
      <QuizzDescription id={id} />
      <div className="quiz_desc_number">
        <QuestionNumber id={counter} max="4" height={1} />
      </div></div>
      <ArrowLeft 
        onClick={() => {
          if (id > 1) {
            setId(id - 1);
          } else setId(4);
          if (counter > 1) {
            setCounter(counter - 1);
          } else setCounter(4);
        }}
        className="left_arrow_quiz"
      />
      <ArrowRight
        onClick={() => {
          if (id < 4) {
            setId(id + 1);
          } else setId(1);
          if (counter < 4) {
            setCounter(counter + 1);
          } else setCounter(1);
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
