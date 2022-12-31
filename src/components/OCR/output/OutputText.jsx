import { TextareaAutosize } from "@mui/material";
import React from "react";

const OutputText = () => {
  return (
    <div className="flex flex-col gap-5 px-24 bg-teal-500 rounded-2xl ">
      <div className="bg-gray-500 rounded-xl mt-4">image.png</div>
      <div className="rounded-xl">
        <TextareaAutosize />
      </div>
    </div>
  );
};

export default OutputText;
