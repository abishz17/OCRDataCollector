import { TextareaAutosize } from "@mui/material";
import React from "react";

const OutputText = (props) => {
  return (
    <div className="flex flex-col gap-5 px-24 bg-teal-500 rounded-2xl ">
      <div className="bg-gray-500 rounded-xl mt-4">{props.fileName}</div>
      <div className="rounded-xl">
        <TextareaAutosize value={props.result} readOnly />
      </div>
    </div>
  );
};

export default OutputText;
