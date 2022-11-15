import React from "react";
import { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";

import Ninput from "./Ninput";
import UploadForm from "./UploadForm";

const TextGenerator = (props) => {
  const [isShown, setIsShown] = useState(false);
  const [number, setNumber] = useState(10);
  const [text, setText] = useState("");

  const getNumber = (selectedNumber) => {
    setNumber(selectedNumber);
  };
  function get_random(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  const makeASentence = (arr, n) => {
    let str = "";
    for (let i = 0; i < n; i++) {
      str = str + " " + get_random(arr);
    }

    console.log(str);
    return str;
  };

  const onSubmit = () => {
    setIsShown(true);
    setText(makeASentence(props.data, number));
  };

  return (
    <>
      <div className="main">
        <Ninput getNumber={getNumber} />
        <button onClick={onSubmit}>Click here to generate random texts</button>
        {isShown && (
            <div className="box">
              {<p>{text}</p>}
              {/* <button
                onClick={() => {
                  setText("");
                }}
              >
                Clear
              </button> */}
            </div>
        )}
        {isShown && (
          <>
            <UploadForm />
            <Button variant="outlined" className="btn-submit" >
              Submit
            </Button>
          </>
        )}
      </div>
    </>
  );
};

export default TextGenerator;
