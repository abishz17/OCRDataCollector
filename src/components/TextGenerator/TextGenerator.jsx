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
    if (
      number === 0 ||
      number.length == 0 ||
      parseInt(number) < 0 ||
      number > 15 ||
      number === "0"
    ) {
      setIsNumberValid(false);
      return;
    }
    setIsNumberValid(true);

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
              Please enter positive number in range(1,16).
            </p>
          )}
        </>
      )}
      {isShown && (
        <div className="block m-auto relative h-screen md:h-[85vh] mx-4 md:mx-10 border-1 border-cyan-200">
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
                }}
              />

              <Button
                name="Clear"
                className="text-black ml-auto hover:cursor-pointer"
                onClick={(e) => {
                  setNumber(0);
                  setIsShown(false);
                }}
              />
            </div>
          </div>
          <UploadForm text={text} number={number} />
        </div>
      )}
    </div>
  );
};

export default TextGenerator;
