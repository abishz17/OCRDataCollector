import React from "react";
import { useState } from "react";
import LineText from "./LineText";
import Ninput from "./Ninput";
import UploadForm from "./UploadForm";
import { Button } from "@mui/material";
import Model from "./Modal";
import { makeASentence } from "../../utilities/makeSentence";

import { useEffect } from "react";
const TextGenerator = (props) => {
  const [isShown, setIsShown] = useState(false);
  const [number, setNumber] = useState(5);
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const [isNumberValid, setIsNumberValid] = useState(true);

  const getNumber = (selectedNumber) => {
    setNumber(selectedNumber);
  };
  const onSubmit = () => {
    if (number === "0" || number === "") {
      setIsNumberValid(false);
      console.log("Invalid");
      return;
    }
    setIsNumberValid(true);
    console.log(number);
    setIsShown(true);
    setText(makeASentence(props.data, number));
  };

  return (
    <div className="grid">
      {!isShown && (
        <>
          <Ninput getNumber={getNumber} onSubmit={onSubmit} />
          {!isNumberValid && (
            <p className="text-red-800 text-center mt-10">
              This field cant be 0 or empty.
            </p>
          )}
        </>
      )}
      {isShown && (
        <LineText
          text={text}
          open={open}
          setOpen={setOpen}
          setIsShown={setIsShown}
          setText={setText}
        />
      )}
      {isShown && (
        <div className="bg-gray-300 ml-auto mr-12 w-[30vw] h-full flex-none items-center overflow-clip">
          <UploadForm text={text} />
        </div>
      )}
    </div>
  );
};

export default TextGenerator;
