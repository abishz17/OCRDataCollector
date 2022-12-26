import React from "react";
import upload from "../../../assets/images/other_images/upload.png";
import ImagePop from "./ImagePop";
const UploadImage = () => {
  return (
    <div className=" flex flex-col justify-center gap-2 px-24">
      <h1 className="text-2xl font-semibold ">Step 1</h1>
      <h2 className="text-font_primary">Upload Image</h2>
      <img src={upload} className="h-10 w-10 self-center" />
      <p className="text-font_secondary">
        Drag and Drop files <br /> OR <br /> Browse
      </p>
      <ImagePop />
    </div>
  );
};

export default UploadImage;
