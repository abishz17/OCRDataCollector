import React from "react";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import CloseIcon from "@mui/icons-material/Close";
const OutputHeader = (props) => {
  return (
    <div className="flex flex-row mt-4 bg-teal-200 rounded-3xl px-2 py-1 items-center mb-8  float-right mr-2 ">
      <ZoomOutIcon />
      <div className="">
        <input
          type="range"
          className="appearance-none w-20 h-6 p-0  bg-transparent focus:outline-none rounded-xl focus:ring-0 focus:shadow-none"
          id="zoomRange"
        />
      </div>
      <ZoomInIcon />
      <ZoomOutMapIcon />
      <div onClick={props.unfileSetter}>
        <CloseIcon />
      </div>
    </div>
  );
};

export default OutputHeader;
