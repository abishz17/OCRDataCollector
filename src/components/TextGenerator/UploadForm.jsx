import React from "react";
import { useState, useRef } from "react";
import axios from "axios";
import { ImageSearch } from "@mui/icons-material";

import { Button } from "@mui/material";
import ImageModal from "./ImageModal";
import { Delete } from "@mui/icons-material";
const UploadForm = (props) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [icon, setIcon] = useState(true);

  const fileRef = useRef(null);
  const [{ alt, src }, setImg] = useState({
    src: null,
    alt: "",
  });

  const selectFile = (event) => {
    setSelectedFile(event.target.files[0]);
    setIcon(false);
    if (event.target.files[0]) {
      setImg({
        src: URL.createObjectURL(event.target.files[0]),
        alt: event.target.files[0].name,
      });
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
      });
  };
  return (
    <>
      <div className="w-[30vw] h-full ml-12 flex-none ">
        <div
          className="h-full w-full "
          onClick={() => {
            fileRef.current.click();
          }}
        >
          <input
            style={{ display: "none" }}
            type="file"
            onChange={selectFile}
            ref={fileRef}
          ></input>
          {icon && <ImageSearch className="center" />}
        </div>
        <div>
          {!icon && (
            <div className="self-center">
              <ImageModal src={src} alt={alt} />
            </div>
          )}

          {!icon && (
            <>
              <Delete
                className="delete-btn"
                onClick={() => {
                  setIcon(true);
                }}
              />
            </>
          )}
        </div>
      </div>
      {!icon && (
        <Button
          variant="outlined"
          onClick={uploadHandler}
          className="btn-submit"
        >
          Submit
        </Button>
      )}
    </>
  );
};

export default UploadForm;
