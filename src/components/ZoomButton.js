import React from "react";
import { ReactComponent as ZoomBackground } from "../assets/vector_right_bottom_corner.svg";
import { ReactComponent as ZoomButton } from "../assets/zoom.svg";
const Zoom = () => {
  return (
    <div className="zoom_tile">
      <ZoomBackground className="zoom_background" />
      <ZoomButton className="zoom_button" />
    </div>
  );
};

export default Zoom;
