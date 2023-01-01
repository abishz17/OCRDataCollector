import React from "react";
import tick from "../../../assets/images/other_images/tick.png";
import cross from "../../../assets/images/other_images/cross.png";
import { useState } from "react";
const ImagePop = (props) => {
  const [visible, setVisible] = useState(true);

  const onSubmit = async () => {
    const formData = new FormData();
    formData.append("image", props.file);

    try {
      console.log(formData);
      const res = await axios.post("/ocr-upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (err) {
      if (err) {
        console.log("There was a problem with the server");
      }
    }
  };

  return (
    <div className="relative flex gap-2 bg-gray-500 rounded-2xl px-3 py-1 text-left">
      <div className="">
        <p>{props.fileName}</p>
      </div>
      <div className="float-right flex gap-3 pl-5">
        <img src={tick} className=" h-5 w-5" onClick={onSubmit} />
        <img src={cross} className=" h-5 w-5" />
      </div>
    </div>
  );
};

export default ImagePop;
