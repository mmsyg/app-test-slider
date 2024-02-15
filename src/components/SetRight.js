import React from "react";
import { ReactComponent as SizeButton } from "../assets/size_button.svg";
import { ReactComponent as ContrastButton } from "../assets/contrast_button.svg";
import { ReactComponent as IconBackground } from "../assets/rightSetBackground.svg";
import { useState, useContext } from "react";
import { FontSizeContext } from "./FontSizeContext";
import { ContrastContext } from "./ContrastContext";
import { useAppContext } from "../context/app-data/useAppContext";
import "../index.css";
import LanguageButton from "./LanguageButton";

let start = true;

const SetRight = (props) => {
  const { toggleContrast } = useContext(ContrastContext);
  const appData = useAppContext();

  const { fontSize, setFontSize } = useContext(FontSizeContext);
  const [increase, setIncrease] = useState(start); // Początkowo ustawione na powiększanie
  const [language, setLanguage] = useState("pl");
const [languageLetter, setlanguageLetter] = useState("EN")
  const changeLanguage = () => {
    if (language === "pl") {
      
       appData.changeLanguage("en")
       setLanguage("en")
       setlanguageLetter("UA")
    } else if(language === "en"){
    appData.changeLanguage("ua");
    setLanguage("ua");
    setlanguageLetter("PL")}
    else if(language === "ua"){
      appData.changeLanguage("pl");
      setLanguage("pl");
      setlanguageLetter("EN")}
  };

  const toggleFontSize = () => {
    if (increase) {
      setFontSize(fontSize * 1.15); // Powiększ tekst
    } else {
      setFontSize(fontSize / 1.15); // Pomniejsz tekst
    }
    setIncrease(!increase);
    start = !start; // Zmień stan na przeciwny
  };

  if (props.id == null)
    return (
      <div className="set_right">
        <IconBackground className="set_right_bg" />
        <div className="set_right_buttons">
         <div>
          <LanguageButton
            className="language_button"
            onClick={changeLanguage}
            language={languageLetter}
          />
</div>
          <SizeButton className="size_button" onClick={toggleFontSize} />
          <ContrastButton
            onClick={toggleContrast}
            className="contrast_button"
          />
        </div>
      </div>
    );
  else
    return (
      <div className="set_right">
        <div className="set_right_buttons">
          <LanguageButton
            className="language_button"
            onClick={changeLanguage}
            language={languageLetter}
          />
          <SizeButton className="size_button" onClick={toggleFontSize} />
          <ContrastButton
            onClick={toggleContrast}
            className="contrast_button"
          />
        </div>
      </div>
    );
};
export default SetRight;
