import React from "react";
import tick from "../../../assets/images/other_images/tick.png";
import cross from "../../../assets/images/other_images/cross.png";
import axios from "axios";

const ImagePop = (props) => {
  const onSubmit = async () => {
    const formData = new FormData();
    formData.append("image", props.file);
    try {
      const res = await axios.post("http://localhost:8000/ocr/ocr/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      props.setSuccess(true);

      props.setResult("hello");
    } catch (err) {
      if (err) {
        console.log(err, "There was a problem with the server");
      }
    }
  };

  return (
    <div className="flex flex-row bg-gray-500 rounded-2xl h-10 px-2 py-1 w-4/5 md:w-1/5 self-center z-1">
      <div className="w-2/3 overflow-clip ">
        <p>{props.fileName}</p>
      </div>
      <div className="flex flex-row gap-2 justify-end  w-1/3">
        <img src={tick} className=" h-8 w-8" onClick={onSubmit} />
      </div>
    </div>
  );
};

export default ImagePop;
