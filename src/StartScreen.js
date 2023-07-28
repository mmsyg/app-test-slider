import { Link } from 'react-router-dom';
import { ReactComponent as BlueButton } from './assets/blue_button.svg';
import { ReactComponent as Union } from './assets/Union.svg';
import data from './assets/datta.json'; // Zmień ścieżkę, jeśli plik jest gdzie indziej


const StartScreen = () => {
  return (
   
      <div className="start-screen">
        <div className="button">
         <Link to="/slider"> 
        <BlueButton className="logo" />
        
        <div className="button_txt">{data.buttonText}</div>
         </Link></div>
        <div className="title">{data.welcomeMessage}</div>
        <Union className="union" />
      </div>
   
  );
};

export default StartScreen;
