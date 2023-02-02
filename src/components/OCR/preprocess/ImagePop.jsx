import React, { useState } from "react";
import tick from "../../../assets/images/other_images/tick.png";
import cross from "../../../assets/images/other_images/cross.png";
import axios from "axios";

const ImagePop = (props) => {
  const [process, setProcess] = useState(false);
  const onSubmit = async () => {
    setProcess(true);
    const formData = new FormData();
    formData.append("image", props.file);
    try {
      const res = await axios.post("/ocr/ocr/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      props.setSuccess(true);
      setProcess(false);
      console.log(res.data);
      props.setResult(res.data);
    } catch (err) {
      if (err) {
        console.log(err, "There was a problem with the server");
      }
    }
  };

  return (
    <div className="flex flex-col justify-center gap-3  w-4/5 md:w-1/5 self-center z-1">
      <div className="h-10 bg-gray-500  rounded-2xl px-2 py-1 overflow-clip ">
        <p>{props.fileName}</p>
      </div>
      <div className="flex flex-row gap-2 justify-center">
        <div
          onClick={onSubmit}
          className="flex cursor-pointer justify-center rounded-2xl flex-row gap-3 bg-blue-400 text-white px-2 py-2"
        >
          {!process ? (
            <img src={tick} className=" h-6 w-6" />
          ) : (
            <div
              class="w-6 h-6 rounded-full animate-spin
          border-2 border-solid border-black border-t-transparent"
            ></div>
          )}
          <span>Submit</span>
        </div>
      </div>
    </div>
  );
};

export default ImagePop;
