import React from "react";
import { useState, useRef } from "react";
import axios from "axios";

const UploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileRef = useRef(null);
  const selectFile = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const uploadHandler = () => {
    const formData = new FormData();
    formData.append("image", selectedFile, selectedFile.name);
    console.log(formData);

    axios.post("http://127.0.0.1:8000/api", formData).then((res) => {
      console.log(res);
    });
  };
  return (
    <div>
      <input
        style={{ display: "none" }}
        type="file"
        onChange={selectFile}
        ref={fileRef}
      ></input>
      <button
        onClick={() => {
          fileRef.current.click();
        }}
      >
        Browse
      </button>
      <button onClick={uploadHandler}>Upload</button>
    </div>
  );
};

export default UploadForm;
