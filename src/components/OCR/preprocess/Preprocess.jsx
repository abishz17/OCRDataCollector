import React from "react";
import UploadImage from "./UploadImage";
import ChooseOutput from "./ChooseOutput";
const Preprocess = () => {
  return (
    <div className="flex flex-row justify-center gap-10 px-10 py-10">
      <UploadImage />
      <ChooseOutput />
    </div>
  );
};

export default Preprocess;
