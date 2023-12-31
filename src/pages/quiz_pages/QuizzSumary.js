import React from "react";
import data from "../../assets/datta.json";
import { ReactComponent as StartButtonQuizz } from "../../assets/buttonStart_quizz.svg";
import stork from "../../assets/Bocian.png";
import { ReactComponent as Intersect } from "../../assets/Intersect.svg";
import { ReactComponent as GrayShape } from "../../assets/grayShape.svg";
import QuizzAnswer from "../../components/QuizzAnswers";
import { useState } from "react";
const QuizzSummary = (props) => {
  return (
    <div className="quiz_summary">
      <Intersect className="intersect_qzz_strt" />
      <GrayShape className="gray_shape_qzz_strt" />{" "}
      <p className="text_sumary">{data.quizSummary}</p>
      <div className="stork">
        <img src={stork} alt="stork" />
      </div>
    </div>
  );
};
export default QuizzSummary;
