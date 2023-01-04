import React from "react";

import OutputImage from "./OutputImage";
import OutputText from "./OutputText";
const Output = (props) => {
  return (
    <div className="flex flex-row justify-center gap-1 px-10 py-10 ">
      <OutputText fileName={props.fileName} result={props.result} />
      <OutputImage src={props.src} />
    </div>
  );
};

export default Output;
