import { TextareaAutosize } from "@mui/material";
import React from "react";

const OutputText = () => {
  return (
    <div className="flex flex-col justify-center gap-2 px-24 ">
      <div className="bg-gray-500 rounded-xl">image.png</div>
      <div className="rounded-xl">
        <TextareaAutosize readOnly />
      </div>
    </div>
  );
};

export default OutputText;
