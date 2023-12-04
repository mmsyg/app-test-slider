import React from "react";
import { ReactComponent as StartButtonQuizz } from "../../assets/buttonStart_quizz.svg";
import { Link } from "react-router-dom";
import stork from "../../assets/Bocian.png";
import SetRight from "../../components/SetRight";
import data from "../../assets/datta.json";
import SetLeft from "../../components/SetLeft";
import { ReactComponent as Intersect } from "../../assets/Intersect.svg";
import { ReactComponent as GrayShape } from "../../assets/grayShape.svg";
const QuizzStart = () => {
  return (
    <div className="quiz_start">
      <GrayShape className="gray_shape_qzz_strt" />

      <div className="stork">
        <img src={stork} alt="stork" />
      </div>
      <div className="quiz_title">{data.quizTitle}</div>
      <Intersect className="intersect_qzz_strt" />
      <Link to="/quizz1">
        {" "}
        <StartButtonQuizz className="start_button_quizz" />
      </Link>
      <SetRight />
      <SetLeft backNotVisible={0} />
    </div>
  );
};

export default QuizzStart;
