import { TextareaAutosize } from "@mui/material";
import React from "react";

const OutputText = (props) => {
  return (
    <div className="flex flex-col gap-5 items-center bg-teal-500 rounded-2xl w-1/3">
      <div
        className="bg-gray-500 rounded-xl mt-4 w-1/3 overflow-clip mx-10 "
        title={props.fileName}
      >
        <p className="mx-2">{props.fileName}</p>
      </div>
      <div className="rounded-xl  h-full mx-7 mb-10">
        <textarea className="overflow-scroll h-full rounded-2xl" />
      </div>
    </div>
  );
};

export default OutputText;
