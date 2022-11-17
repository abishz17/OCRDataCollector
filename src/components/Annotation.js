import React from "react";
import { Button } from "@mui/material";
import ImageField from "./ImageField";
import Textfield from "./Textfield";

const Annotation = () => {
  return (
    <>
      <div className="main">
          <>
          <ImageField />
            <div className="box">
              <Textfield />
            </div>
            <Button
              variant="outlined"
              className="btn-submit"
             
            >
              Clear
            </Button>
          </>
       
         
           
          
      </div>
    </>
  );
};

export default Annotation;
