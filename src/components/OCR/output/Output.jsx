import React from "react";

import OutputImage from "./OutputImage";
import OutputText from "./OutputText";
const Output = (props) => {
  return (
    <div className="flex flex-row justify-center gap-10 px-10 py-10 h-[50vh]">
      <OutputText fileName={props.fileName} />
      <OutputImage src={props.src} />
    </div>
  );
};

export default Output;
