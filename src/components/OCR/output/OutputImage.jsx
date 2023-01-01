import React from "react";
import OutputHeader from "./OutputHeader";
import UploadImage from "../../../assets/images/other_images/gray_1.png";
const OutputImage = (props) => {
  return (
    <div className="px-24 bg-teal-800 rounded-2xl">
      <OutputHeader />

      <div>
        <img src={props.src} alt="" />
      </div>
    </div>
  );
};

export default OutputImage;
