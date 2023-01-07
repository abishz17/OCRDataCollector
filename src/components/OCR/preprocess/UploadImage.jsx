import upload from "../../../assets/images/other_images/upload.png";
import ImagePop from "./ImagePop";
import { useState, useRef, useContext } from "react";
const UploadImage = (props) => {
  const imageRef = useRef(null);
  const [file, setFile] = useState("");

  const onChange = (e) => {
    props.setSuccess(false);
    setFile(e.target.files[0]);
    props.setFileName(e.target.files[0].name);
    props.getFile(e.target.files[0]);
  };
  return (
    <div className=" flex flex-col justify-center gap-2 px-20">
      <h1 className="text-black font-bold text-2xl md:text-3xl py-2 md:mb-3">
        Upload Image
      </h1>
      <input
        style={{ display: "none" }}
        type="file"
        accept="image/*"
        onChange={onChange}
        ref={imageRef}
      ></input>
      <img
        src={upload}
        className="h-10 w-10 md:h-20 md:w-20 self-center cursor-pointer"
        onClick={() => {
          imageRef.current.click();
        }}
      />
      <p className="text-font_primary">
        Drag and Drop files <br /> OR <br /> Browse
      </p>
      {props.fileName && (
        <ImagePop
          fileName={props.fileName}
          file={file}
          setResult={props.setResult}
          setSuccess={props.setSuccess}
        />
      )}
    </div>
  );
};

export default UploadImage;
