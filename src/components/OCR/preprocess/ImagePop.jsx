import React from "react";
import tick from "../../../assets/images/other_images/tick.png";
import cross from "../../../assets/images/other_images/cross.png";
import axios from "axios";
import { useState } from "react";
const ImagePop = (props) => {
  const [visible, setVisible] = useState(true);

  const onSubmit = async () => {
    console.log(props.fileName);
    const formData = new FormData();
    formData.append("image", props.file);

    try {
      console.log(formData);
      const res = await axios.post("http://localhost:8000/ocr/ocr/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      props.setResult("hello");
    } catch (err) {
      if (err) {
        console.log(err, "There was a problem with the server");
      }
    }
  };

  return (
    <div className="relative flex flex-row flex-none  bg-gray-500 rounded-2xl px-3 py-1 w-[150px]  text-left self-center">
      <div className="w-2/3 overflow-clip ">
        <p>{props.fileName}</p>
      </div>
      <div className="flex flex-row gap-2 w-1/3">
        <img src={tick} className=" h-5 w-5" onClick={onSubmit} />
        <img src={cross} className=" h-5 w-5" />
      </div>
    </div>
  );
};

export default ImagePop;
