import React from "react";
import { ReactComponent as LanguageButton } from "../assets/language_button.svg";
import { ReactComponent as SizeButton } from "../assets/size_button.svg";
import { ReactComponent as ContrastButton } from "../assets/contrast_button.svg";
import { ReactComponent as IconBackground } from "../assets/rightSetBackground.svg";
import { useState, useContext } from "react";
import { FontSizeContext } from './FontSizeContext'; // Import FontSizeContext
import '../index.css';
let start =true;

const SetRight = (props) => {
  
  const { fontSize, setFontSize } = useContext(FontSizeContext);
  const [increase, setIncrease] = useState(start); // Początkowo ustawione na powiększanie

  const toggleFontSize = () => {
    if (increase) {
      setFontSize(fontSize *1.15); // Powiększ tekst
    } else {
      setFontSize(fontSize /1.15); // Pomniejsz tekst
    }
    setIncrease(!increase);
    start=!start; // Zmień stan na przeciwny
  };
  
  if(props.id==null)

  
    return (
    <div className="set_right">
      <IconBackground className="set_right_bg" />
      <div className="set_right_buttons">
        <LanguageButton className="language_button" />
    
        <SizeButton className="size_button" onClick={toggleFontSize}/>
        <ContrastButton className="contrast_button" />
      </div>
    </div>
  );
  else
  return (
    <div className="set_right">
      <div className="set_right_buttons">
        <LanguageButton className="language_button" />
        <SizeButton className="size_button" onClick={toggleFontSize}/>
        <ContrastButton className="contrast_button" />
      </div>
    </div>);
};
export default SetRight;
