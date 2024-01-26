import React from "react";
import arrow from "../assets/yellow_arrow.png";
import data from "../assets/datta.json";
const TileChooseMenu = (props) => {
  return (
    <div>
      <div className="tile_bg">
        <img src={arrow} alt="y_arrow" className="yellow_Arrow" />
      </div>
      <img src={`${props.photo}`} alt="tile_left_pht" className="img_tile" />

      <p
        className="tile1_title"
        dangerouslySetInnerHTML={{ __html: props.text }}
      ></p>
      <p
        className="tile1_choose_txt"
        dangerouslySetInnerHTML={{ __html: props.tileChoose }}
      ></p>
    </div>
  );
};

export default TileChooseMenu;
