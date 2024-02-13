import { ReactComponent as LanguageB } from "../assets/language_button_custom.svg"

const LanguageButton = (props) => {
    return ( <div className="language_b" onClick={props.onClick}>
        <LanguageB />
            <p className="language_letter">{props.language}</p></div> );
}
 
export default LanguageButton;