import { Link } from "react-router-dom";
import { ReactComponent as Tile } from './assets/tile.svg';
import { ReactComponent as Home } from './assets/home_button.svg';
import SetRight from "./SetRight";

// import image1 from './assets/tile_img1.png';

import React from "react";
const Slider = () => {


    
 
    return ( <div className="slider">
        <SetRight/>
    <Link to="/"><Home className ="home_b"/></Link>
    <Link><Tile className = "tile_left" /></Link>
    <Link to="/quizz"><Tile className = "tile_right" />  </Link>
    
  

          
        </div> );
}
 
export default Slider;