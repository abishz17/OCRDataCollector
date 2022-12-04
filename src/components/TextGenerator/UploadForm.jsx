import React from "react";
import { useState, useRef } from "react";
import axios from "axios";
import { ImageSearch } from "@mui/icons-material";

import { Button } from "@mui/material";
import ImageModal from "./ImageModal";
import { Delete } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const UploadForm = (props) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [icon, setIcon] = useState(true);
  const [isImageValid, setIsImageValid] = useState(false);
  const navigate = useNavigate();
  const fileRef = useRef(null);
  const [{ alt, src }, setImg] = useState({
    src: null,
    alt: "",
  });

  const selectFile = (event) => {
    const image = event.target.files[0];
    setSelectedFile(event.target.files[0]);
    setIcon(false);
    if (event.target.files[0]) {
      setImg({
        src: URL.createObjectURL(event.target.files[0]),
        alt: event.target.files[0].name,
      });
      console.log(image.name);
    }
    if (image && image.name.match(/\.(jpg|jpeg|png|gif)$/)) {
      setIsImageValid(true);
      setImg({
        src: URL.createObjectURL(event.target.files[0]),
        alt: event.target.files[0].name,
      });
    } else {
      setIsImageValid(false);
    }
  };
  const uploadHandler = () => {
    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("label", props.text);
    console.log(formData.get("label"));

    axios
      .post("http://127.0.0.1:8000/api/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        alert("Thanks for submitting!");
        navigate(-1);
      })
      .catch((err) => {
        alert("Submission failed.Server error");
      });
  };
  return (
    <div className="lg:ml-4 gap-5 lg:mt-9 border-black border-3 text-slate-900">
      <input
        style={{ display: "none" }}
        type="file"
        accept="image/*"
        onChange={selectFile}
        ref={fileRef}
      ></input>
      {!isImageValid && (
        // <div className="lg:mt-[25%] mt-3 text-cyan-900 cursor-pointer border-dashed border-2 border-black">
        <div
          className="lg:absolute flex justify-center items-center 
                      w-11/12 h-5/6 text-cyan-900 cursor-pointer 
                      border-dashed border-2 border-black"
          onClick={() => {
            fileRef.current.click();
          }}
        >
          <ImageSearch />
          <span>Upload a file</span>
        </div>
      )}

      {!icon && (
        <div className="">
          {!isImageValid ? (
            <p className="text-red-800">Enter a valid image</p>
          ) : (
            <ImageModal src={src} alt={alt} />
          )}
          {}
        </div>
      )}

      {!icon && isImageValid && (
        <div className="flex-row lg:absolute inline-flex">
          <Delete
            fontSize="large"
            className="float-left mr-6 hover:cursor-pointer"
            onClick={() => {
              setIcon(true);
              setIsImageValid(false);
            }}
          />
          <Button
            variant="contained"
            onClick={uploadHandler}
            className="cursor-pointer"
          >
            Submit
          </Button>
        </div>
      )}
    </div>
  );
};

export default UploadForm;
