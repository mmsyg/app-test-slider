import React from "react";
import { ReactComponent as LanguageButton } from "../assets/language_button.svg";
import { ReactComponent as SizeButton } from "../assets/size_button.svg";
import { ReactComponent as ContrastButton } from "../assets/contrast_button.svg";
import { ReactComponent as IconBackground } from "../assets/rightSetBackground.svg";

const SetRight = (props) => {
  return (
    <div className="set_right">
      <IconBackground className="set_right_bg" />
      <div className="set_right_buttons">
        <LanguageButton className="language_button" />
        <SizeButton className="size_button" />
        <ContrastButton className="contrast_button" />
      </div>
    </div>
  );
};
export default SetRight;
