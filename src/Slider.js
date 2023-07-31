import { Link } from "react-router-dom";
import { ReactComponent as Tile } from './assets/tile.svg';
import { ReactComponent as Home } from './assets/home_button.svg';
import data from './assets/datta.json';
// import image1 from './assets/tile_img1.png';

const Slider = () => {
    
  
    return ( <div className="slider">
    <Link to="/"><Home className ="home_b"/></Link>
    <Link><Tile className = "tile_left" /></Link>
    <Tile className = "tile_right" />
    
    <div className="test">
          {data.images[0].path}
          {data.images[0].name}
        </div>
    
    <img
          src={data.images[0].path}
          alt={data.images[0].name}
        />
    
      
    
    
    </div> );
}
 
export default Slider;