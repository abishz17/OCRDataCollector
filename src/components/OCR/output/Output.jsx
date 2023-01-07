import React from "react";
import OutputImage from "./OutputImage";
import OutputText from "./OutputText";
const Output = (props) => {
  return (
    <div className="flex flex-col  md:flex-row justify-center gap-3 px-10 py-10 ">
      <OutputText fileName={props.fileName} result={props.result} />
      <OutputImage src={props.src} unfileSetter={props.unfileSetter} />
    </div>
  );
};

export default Output;
