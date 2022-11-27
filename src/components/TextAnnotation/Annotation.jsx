import { React, useState, useEffect } from "react";
import { Button } from "@mui/material";
import ImageField from "./ImageField";
import Textfield from "./Textfield";
import axios from "axios";
const Annotation = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [imageid, setImageid] = useState("");
  const uploadHandler = () => {
    const formData = new FormData();
    formData.append("image", imageid);
    formData.append("ocr_text", text);

    axios
      .post("http://127.0.0.1:8000/annotate/image/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {});
  };

  const getImage = () => {
    axios.get("http://127.0.0.1:8000/annotate/image/").then((response) => {
      setImage(response.data["image"]);
      setImageid(response.data["id"]);
    });
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <div className="flex flex-col gap-5 justify-center items-center h-[90vh]">
      <div className="border-2 h-[23rem] border-slate-900">
        <ImageField image={image} className="center" />
      </div>
      <div className="border-2 border-slate-900">
        <Textfield setText={setText} text={text} />
      </div>
      <Button
        variant="outlined"
        onClick={uploadHandler}
        className="relative w-8 self-center"
      >
        Submit
      </Button>
    </div>
  );
};

export default Annotation;
