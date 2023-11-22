import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as YellowButton } from './assets/yellowButton.svg';
import { ReactComponent as UnionGreen } from './assets/unionGreen.svg';
import { ReactComponent as LeftShape } from './assets/leftShape.svg';
import { ReactComponent as PolygonBlueSmall } from './assets/polygonBlueSmall.svg';
import { ReactComponent as PolygonYellowSmall } from './assets/polygonYellowSmall.svg';
import data from './assets/datta.json'; 
import rightShape from './assets/rightShape.png'
import parse from 'html-react-parser';
import DelayLink from './DelayLink';

const StartScreen = () => {

  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = () => {
    setIsAnimating(true);
  };

  
  return (
   
      <div className="start-screen">
        <LeftShape className={`left_shape ${isAnimating ? 'animate' : ''}`} />
        <div className="right_shape">
          <img src={rightShape} alt="right_shape" />
        </div>
        <UnionGreen className={`unionGreen ${isAnimating ? 'animateUnionGreen' : ''}`}  />
        <PolygonBlueSmall className='polygonBlueSmalll'/>
        <PolygonYellowSmall className='polygonYellowSmalll'/>
        <div className="button">
           <DelayLink  to="/slider" delay={10000}>   
        <YellowButton onClick={startAnimation}className="start_button" />
        <div className="button_txt">{parse(data.buttonText)}</div>
           </DelayLink>  </div>
        <div className="title">{parse(data.welcomeMessage)}</div>
        
        
      </div>
   
  );
};

export default StartScreen;