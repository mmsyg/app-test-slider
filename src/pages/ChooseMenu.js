import { Link } from "react-router-dom";
import SetRight from "../components/SetRight";
import SetLeft from "../components/SetLeft";
import data from "../assets/datta.json";
import arrow from "../assets/yellow_arrow.png";
import TileChooseMenu from "../components/TileChooseMenu";
// import image1 from './assets/tile_img1.png';

import React from "react";
import {useAppContext} from "../context/app-data/useAppContext";
const Slider = () => {

    const appData = useAppContext();
    const { selectedPage } = appData.screens;
    console.log(selectedPage);

  return (
    <div className="slider">
      <SetRight />
      <SetLeft backNotVisible={1} />

      <Link to="/carousel">
        <div className="tile_left">
          <TileChooseMenu
            photo={selectedPage.selectKnowledgeImage}
            text={selectedPage.selectKnowledgeTitle}
            tileChoose={selectedPage.selectKnowledgeButtonText}
            className="tile_left"
          />
        </div>
      </Link>
      <Link to="/quiz">
        <div className="tile_right">
          <TileChooseMenu
            photo={selectedPage.quizImage}
            text={selectedPage.quizTitle}
            tileChoose={selectedPage.selectKnowledgeButtonText}
            className="tile_right"
          />
        </div>
      </Link>
    </div>
  );
};

export default Slider;
