import React from "react";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
const OutputHeader = () => {
  return (
    <div className="flex flex-row">
      <ZoomOutIcon />
      <div className="">
        <input
          type="range"
          className="form-range appearance-none w-full h-6 p-0 border-r-[50%] bg-transparent focus:outline-none rounded-xl focus:ring-0 focus:shadow-none
    "
          id="zoomRange"
        />
      </div>
      <ZoomInIcon />
    </div>
  );
};

export default OutputHeader;
