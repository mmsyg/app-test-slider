import { Link } from 'react-router-dom';
import { ReactComponent as YellowButton } from './assets/yellowButton.svg';
import { ReactComponent as UnionGreen } from './assets/unionGreen.svg';
import { ReactComponent as LeftShape } from './assets/leftShape.svg';
import data from './assets/datta.json'; 
import rightShape from './assets/rightShape.png'


const StartScreen = () => {
  return (
   
      <div className="start-screen">
        <LeftShape className="left_shape" />
        <div className="right_shape">
          <img src={rightShape} alt="right_shape" />
        </div>
        <UnionGreen className="unionGreen" />
        <div className="button">
         <Link to="/slider"> 
        <YellowButton className="start_button" />
        
        <div className="button_txt">{data.buttonText}</div>
         </Link></div>
        <div className="title">{data.welcomeMessage}</div>
        
        
      </div>
   
  );
};

export default StartScreen;
