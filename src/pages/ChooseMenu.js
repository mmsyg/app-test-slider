import { Link } from "react-router-dom";
import SetRight from "../components/SetRight";
import SetLeft from "../components/SetLeft";
import data from "../assets/datta.json";
import arrow from "../assets/yellow_arrow.png";
import TileChooseMenu from "../components/TileChooseMenu";
// import image1 from './assets/tile_img1.png';

import React from "react";
const Slider = () => {
  return (
    <div className="slider">
      <SetRight />
      <SetLeft backNotVisible={1} />

      <Link to="/carousel">
        <div className="tile_left">
          <TileChooseMenu
            photo={data.images[0].path}
            text={data.images[0].name}
            className="tile_left"
          />
        </div>
      </Link>
      <Link to="/quiz">
        <div className="tile_right">
          <TileChooseMenu
            photo={data.images[1].path}
            text={data.images[1].name}
            className="tile_right"
          />
        </div>
      </Link>
    </div>
  );
};

export default Slider;
