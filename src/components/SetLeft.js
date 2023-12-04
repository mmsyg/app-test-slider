import React from "react";
import { ReactComponent as BackButton } from "../assets/backButton.svg";
import { ReactComponent as HomeButton } from "../assets/homeButton.svg";
import { Link } from "react-router-dom";

const SetLeft = (props) => {
  let back;

  switch (props.back) {
    case "quizz":
      back = "/quizzstart";
      break;
    default:
      back = "/slider";
  }

  if (props.backNotVisible === 1) {
    return (
      <div className="set_left_home">
        <Link to="/">
          <HomeButton />
        </Link>
      </div>
    );
  } else
    return (
      <div className="set_left">
        <Link to="/">
          <HomeButton />
        </Link>
        <Link to={back}>
          <BackButton />
        </Link>
      </div>
    );
};

export default SetLeft;
<div className="set_left"></div>;
