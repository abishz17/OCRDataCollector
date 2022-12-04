import React from "react";
import { useState } from "react";
import LineText from "./LineText";
import Ninput from "./Ninput";
import UploadForm from "./UploadForm";
import { Button } from "@mui/material";
import Modal from "./Modal";

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
    const par_length = n * 6;
    for (let i = 0; i < par_length; i++) {
      if (i % 6 === 0) {
        str = str + "\n";
      }
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
        <div className="lines">
          <Ninput getNumber={getNumber} />
          <Button
            variant="outlined"
            className="btn-generate"
            onClick={onSubmit}
          >
            Generate
          </Button>
        </div>
        {isShown && (
          <>
            <div className="box">
              <LineText text={text} />
            </div>
            {<Modal className="expand" text={text} />}
            <Button
              variant="outlined"
              className="btn-clear"
              onClick={() => {
                setIsShown(false);
              }}
            >
              Clear
            </Button>
          </>
        )}
        {isShown && (
          <>
            <UploadForm />
          </>
        )}
      </div>
    </>
  );
};

export default TextGenerator;
