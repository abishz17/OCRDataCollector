import { React, useState, useEffect } from "react";
import { Button } from "@mui/material";
import ImageField from "./ImageField";
import Textfield from "./Textfield";
import toHex from "../../utilities/tohex";

import axios from "axios";
import { useNavigate } from "react-router-dom";
const Annotation = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [imageid, setImageid] = useState("");
  const [isTextValid, setIsTextValid] = useState(true);
  const [isNepaliText, setIsNepaliText] = useState(false);
  const navigate = useNavigate();

  const unicodeHandler = () => {
    const hexNumber = text.charCodeAt(0).toString(16);
    return parseInt(hexNumber, 16) >= 2304 && parseInt(hexNumber, 16) <= 2431; //devanagari script range
  };
  const uploadHandler = () => {
    if (text.trim() === "") {
      setIsTextValid(false);
      console.log("enter valid text");
      return;
    }
    if (!unicodeHandler) {
      console.log("Devanagari script only allowed");
      setIsNepaliText(false);
      return;
    }
    console.log(parseInt(text.charCodeAt(0)), 16);

    setIsTextValid(true);
    setIsNepaliText(true);
    const formData = new FormData();
    formData.append("image", imageid);
    formData.append("ocr_text", text);

    axios
      .post("/annotate/image/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("Successfully annotated");
        alert("Thanks for the submission.");
        navigate(-1);
      })
      .catch((e) => {
        alert("Server error.Try again");
        console.log(e);
      });
  };

  const getImage = () => {
    axios.get("/annotate/image/").then((response) => {
      setImage(response.data["image"]);
      setImageid(response.data["id"]);
    });
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <>
      <div className="block m-auto relative w-[80%] h-[85vh] border-1 border-cyan-200">
        <>
          <ImageField image={image} />
          <div className=" block m-auto mt-10 w-[80%] overflow-y-auto text-center h-[30%] rounded-md border-white">
            <Textfield setText={setText} text={text} />
          </div>
          <center>
            <Button variant="contained" onClick={uploadHandler}>
              Submit
            </Button>
          </center>
        </>
      </div>
    </>
  );
};

export default Annotation;
