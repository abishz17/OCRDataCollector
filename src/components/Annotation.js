import {React, useState} from "react";
import { Button } from "@mui/material";
import ImageField from "./ImageField";
import Textfield from "./Textfield";
import axios from "axios";
const Annotation = () => {
    const [text,setText]= useState("");
    const [image,setImage]=useState([]);
    const [imageid,setImageid]=useState([]);
    
    const uploadHandler = () => {
        const formData = new FormData();
        formData.append("image",imageid);
        formData.append("ocr_text",text);
        
        axios
      .post("http://127.0.0.1:8000/annotate/image/", formData, {
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
      <div className="main">
          <>
          <ImageField image={image} setImage={setImage} setImageid={setImageid}/>
            <div className="box">
              <Textfield setText={setText} text={text}/>
            </div>
            <Button
            variant="outlined"
            onClick={uploadHandler}
            className="btn-submit"
          >
            Submit
          </Button>
          </>
       
         
           
          
      </div>
    </>
  );
};

export default Annotation;
