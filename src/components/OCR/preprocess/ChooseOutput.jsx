import React from "react";
import OutputChooser from "./OutputChooser";
const ChooseOutput = (props) => {
  return (
    <div className=" flex flex-col justify-center gap-2  px-24">
      <h1 className="text-2xl font-semibold ">Step 2</h1>
      <h2 className="text-font_primary text-xl">Choose Output Format</h2>

      <p className="text-font_secondary">
        We currently support .txt,.pdf <br /> and .docx formats. More Options
        <br /> will be available soon.
      </p>
      <OutputChooser file={props.file} />
    </div>
  );
};

export default ChooseOutput;
