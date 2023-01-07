import React, { useState } from "react";
import UploadImage from "./UploadImage";
import ChooseOutput from "./ChooseOutput";
import Button from "../../../assets/buttons/Button";
const Preprocess = (props) => {
  const [file, setFile] = useState(null);
  const getFile = (f) => {
    props.fileSetter(f);
    setFile(f);
  };

  return (
    <div className="px-10 py-10">
      <UploadImage
        getFile={getFile}
        fileName={props.fileName}
        setFileName={props.setFileName}
        setResult={props.setResult}
        setSuccess={props.setSuccess}
      />
    </div>
  );
};

export default Preprocess;
