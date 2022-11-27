import React from "react";
import TextGenerator from "../../components/TextGenerator/TextGenerator"


const Data = (props) => {
  return (
    <div>
     <TextGenerator data={props.data}  /> 
    </div>
  );
};

export default Data;
