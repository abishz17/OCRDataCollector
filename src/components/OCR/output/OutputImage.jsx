import React from "react";
import OutputHeader from "./OutputHeader";
import UploadImage from "../../../assets/images/other_images/gray_1.png";
const OutputImage = (props) => {
  return (
    <div className="items-center w-full md:w-2/3 border-2 rounded-2xl ">
      <div className="">
        <OutputHeader unfileSetter={props.unfileSetter} />
      </div>

      <div className="m-20">
        <img src={props.src} alt="" />
      </div>
    </div>
  );
};

export default OutputImage;
