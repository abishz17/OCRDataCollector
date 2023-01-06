import React from "react";
import { useState } from "react";
import LineText from "./LineText";
import Ninput from "./Ninput";
import UploadForm from "./UploadForm";
import Button from "/src/assets/buttons/Button";
import { makeASentence } from "../../utilities/makeSentence";

const TextGenerator = (props) => {
  const [isShown, setIsShown] = useState(false);
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const [isNumberValid, setIsNumberValid] = useState(true);

  const getNumber = (selectedNumber) => {
    setNumber(selectedNumber);
  };
  const onSubmit = () => {
    if (number === "0" || number === "" || parseInt(number) < 0) {
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
    <div className="lg:ml-7 z-1">
      {!isShown && (
        <>
          <Ninput getNumber={getNumber} onSubmit={onSubmit} />
          {!isNumberValid && (
            <p className="text-red-800 text-center mt-10">
              This field cant be 0 or empty or negative.
            </p>
          )}
        </>
      )}
      {isShown && (
        <div className="block m-auto relative h-[85vh] mx-4 md:mx-10 border-1 border-cyan-200">
          <LineText
            text={text}
            open={open}
            setOpen={setOpen}
            setIsShown={setIsShown}
            setText={setText}
          />
          <div className=" flex justify-center m-auto md:w-4/5 text-center">
            <div className="mt-5">
              <Button
                name="Expand"
                title="Expand"
                onClick={() => {
                  setOpen(true);
                  console.log("hello ", open);
                }}
              />

              <Button
                name="Clear"
                className="text-black ml-auto hover:cursor-pointer"
                onClick={(e) => {
                  setIsShown(false);
                }}
              />
            </div>
          </div>
          <UploadForm text={text} />
        </div>
      )}
    </div>
  );
};

export default TextGenerator;
