import React, { useEffect } from "react";
import axios from 'axios'

const ImageField = (props) => {
    
  const handleClick = () => {
    window.open("http://localhost:8000"+props.image,"_blank")
  }

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/annotate/image/').then((response)=> {
      props.setImage(response.data["image"])
      props.setImageid(response.data["id"])
    });
  });
  return (
    <>
    <div className="box">
          <div className="imageSection">
            <img src={props.image} alt={"Not available"} onClick={handleClick}/>
          </div>
    </div>
         

    </>
  );
};

export default ImageField;
