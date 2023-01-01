import upload from "../../../assets/images/other_images/upload.png";
import ImagePop from "./ImagePop";
import { useState, useRef } from "react";
const UploadImage = (props) => {
  const imageRef = useRef(null);
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");
  const [isShown, setIsShown] = useState(true);

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
    props.getFile(e.target.files[0]);
  };
  return (
    <div className=" flex flex-col justify-center gap-2 px-24">
      <h1 className="text-2xl font-semibold ">Step 1</h1>
      <h2 className="text-font_primary">Upload Image</h2>
      <input
        style={{ display: "none" }}
        type="file"
        accept="image/*"
        onChange={onChange}
        ref={imageRef}
      ></input>
      <img
        src={upload}
        className="h-10 w-10 self-center cursor-pointer"
        onClick={() => {
          imageRef.current.click();
        }}
      />
      <p className="text-font_secondary">
        Drag and Drop files <br /> OR <br /> Browse
      </p>
      {fileName && <ImagePop fileName={fileName} file={file} />}
    </div>
  );
};

export default UploadImage;
