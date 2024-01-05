import React, {useState} from "react";
import { ReactComponent as ZoomBackground } from "../assets/vector_right_bottom_corner.svg";
import { ReactComponent as ZoomButton } from "../assets/zoom.svg";
const Zoom = ({ isActive, setIsActive }) => {
  const toggleState = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="zoom_tile">
      <ZoomBackground className="zoom_background" />
      <ZoomButton onClick={toggleState} className="zoom_button" />
    </div>
  );
};

export default Zoom;
