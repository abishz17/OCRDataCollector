import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <p>{props.data}</p>
      <div>
        <form>{/* <input type="file">Upload image</input> */}</form>
      </div>
    </div>
  );
};

export default Card;
