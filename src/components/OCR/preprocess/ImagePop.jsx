import React from "react";
import tick from "../../../assets/images/other_images/tick.png";
import cross from "../../../assets/images/other_images/cross.png";
const ImagePop = () => {
  return (
    <div className="relative flex gap-2 bg-gray-500 rounded-2xl px-3 py-1 text-left">
      <div className="">
        <p>Image.png</p>
      </div>
      <div className="float-right flex gap-3 pl-5">
        <img src={tick} className=" h-5 w-5" />
        <img src={cross} className=" h-5 w-5" />
      </div>
    </div>
  );
};

export default ImagePop;
