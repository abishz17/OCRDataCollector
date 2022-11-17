import React, { useEffect, useState } from "react";
import axios from 'axios'
const ImageField = () => {
  const [image,setImage]=useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/annotate/image/3').then((response)=> {
      setImage(response.data)
    });
  },[]);
  return (
    <div className="imageform">
        <img className="photo" src={image} alt="this is img" height={"20px"}/>
    </div>
  );
};

export default ImageField;
