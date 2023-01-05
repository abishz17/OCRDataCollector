import { TextareaAutosize } from "@mui/material";
import React from "react";

const OutputText = (props) => {
  return (
    <div className="flex flex-col  gap-5 h-full bg-gray-200 rounded-2xl w-full md:w-1/3">
      <div
        className="bg-gray-500 rounded-xl flex-none h-10 py-2 mt-4 w-1/3 overflow-clip self-center mx-10  "
        title={props.fileName}
      >
        <p className="mx-2">{props.fileName}</p>
      </div>
      <div className="rounded-xl self-center h-full mb-10">
        <p className=" w-60 md:w-80 text-left  border-black border-2 bg-white py-4 px-4">
          Ex consequat ad deserunt fugiat eu minim voluptate excepteur irure
          aliqua est. Velit irure eu ad eu nisi Lorem fugiat in reprehenderit
          eu. Aliqua excepteur nulla eiusmod excepteur commodo voluptate veniam
          ipsum aliqua irure proident. Amet enim cupidatat cupidatat velit
          mollit duis anim est."
        </p>
      </div>
    </div>
  );
};

export default OutputText;
