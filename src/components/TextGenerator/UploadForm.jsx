import React from "react";
import { useState, useRef } from "react";
import axios from "axios";
import { ImageSearch } from "@mui/icons-material";
import Button from "/src/assets/buttons/Button";
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
    formData.append("lines", props.number);

    axios
      .post("/api/", formData, {
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
    <>
      <div className="flex justify-center items-center m-auto mt-5 overflow-y-auto text-center md:w-4/5 h-[25%] bg-blue-100 rounded-md border-solid border-black border-2">
        <input
          style={{ display: "none" }}
          type="file"
          accept="image/*"
          onChange={selectFile}
          ref={fileRef}
          capture="camera"
          className="hidden"
        ></input>

        {!isImageValid && (
          <div
            className="text-cyan-900 cursor-pointer 
                       border-black "
            onClick={() => {
              fileRef.current.click();
            }}
          >
            <ImageSearch />
            <span>Upload a file</span>
          </div>
        )}

        {!icon && (
          <div className="max-h-full">
            {!isImageValid ? (
              <p className="text-red-800">Enter a valid image</p>
            ) : (
              <ImageModal src={src} alt={alt} />
            )}
            {}
          </div>
        )}
      </div>
      <p className="text-md md:text-lg my-3 py-3 text-red-900 text-center">
        ! Write on A4 paper, maintain a healthy line spacing and capture the
        image in a bright lightened environment.
      </p>
      {!icon && isImageValid && (
        <div className=" flex flex-row mt-5 justify-center ">
          <Button
            name="Re-upload"
            onClick={() => {
              setIcon(true);
              setIsImageValid(false);
            }}
          />
          <Button name="Submit" onClick={uploadHandler} />
        </div>
      )}
    </>
  );
};

export default UploadForm;
