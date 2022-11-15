import React from "react";
import { useState, useRef } from "react";
import axios from "axios";

import { BsImage } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";

const UploadForm = (props) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [icon, setIcon] = useState(true);

  const fileRef = useRef(null);
  const [{ alt, src }, setImg] = useState({
    src: null,
    alt: "Upload an Image",
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
    <div className="box">
      <input
        style={{ display: "none" }}
        type="file"
        onChange={selectFile}
        ref={fileRef}
      ></input>
      {icon && (
        <div
          className="image"
          onClick={() => {
            fileRef.current.click();
          }}
        >
          <BsImage size="3em" />
        </div>
      )}
      <div>
        {!icon && <img className="preview" src={src} alt="" />}

        {!icon && (
          <AiFillDelete
            className="delete-btn"
            onClick={() => {
              setIcon(true);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default UploadForm;
