import React, { useState } from "react";
import UploadImage from "./UploadImage";
import ChooseOutput from "./ChooseOutput";

const Preprocess = (props) => {
  const [file, setFile] = useState(null);
  const getFile = (f) => {
    props.fileSetter(f);
    console.log(f);
    setFile(f);
  };

  return (
    <div className="flex flex-row justify-center gap-10 px-10 py-10">
      <UploadImage getFile={getFile} />
      <ChooseOutput file={file} />
    </div>
  );
};

export default Preprocess;
