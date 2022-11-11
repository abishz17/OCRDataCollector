import React from "react";
import UploadForm from "./UploadForm";

const Card = (props) => {
  return (
    <div className="card">
      <p>{props.data}</p>
      <div>
        <UploadForm />
      </div>
    </div>
  );
};

export default Card;
