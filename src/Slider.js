import { Link } from "react-router-dom";
import { ReactComponent as Tile } from './assets/tile.svg';
import { ReactComponent as Home } from './assets/home_button.svg';
import SetRight from "./SetRight";
import SetLeft from "./SetLeft";
import data from './assets/datta.json'; 

// import image1 from './assets/tile_img1.png';

import React from "react";
const Slider = () => {


    
 
    return ( <div className="slider">
        <SetRight/>
        <SetLeft backNotVisible = {1} back="quizz"/>
   <Link to="/test"> <Tile className = "tile_left" /><img src={`${data.images[0].path}` } alt="tile_left_pht" className="tile_left_photo" /> <p className="tile1_title">{data.images[0].name}</p>
    </Link>
    <Link to="/quizzstart"><Tile className = "tile_right" /><img src={`${data.images[1].path}` } alt="tile_right_pht" className="tile_right_photo" /> <p className="tile2_title">{data.images[1].name}</p>  </Link>
    
  

          
        </div> );
}
 
export default Slider;