import { TextareaAutosize } from "@mui/material";
import React from "react";

const OutputText = (props) => {
  return (
    <div className="flex flex-col  gap-5 h-full border-2 rounded-2xl w-full md:w-1/3">
      <div
        className="bg-teal-200 rounded-xl flex-none h-10 py-2 mt-4 w-1/3 overflow-clip self-center mx-10  "
        title={props.fileName}
      >
        <p className="mx-2">{props.fileName}</p>
      </div>
      <div className="rounded-xl flex justify-center self-center h-full mb-10">
        <p className=" w-3/5 md:w-4/5 text-left  border-black border-2 bg-white py-4 px-4">
          {props.result}
        </p>
      </div>
    </div>
  );
};

export default OutputText;
