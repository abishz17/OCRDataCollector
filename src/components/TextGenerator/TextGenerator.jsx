import React from "react";
import { useState } from "react";
import LineText from "./LineText";
import Ninput from "./Ninput";
import UploadForm from "./UploadForm";
import { Button } from "@mui/material";
import Model from "./Modal";
import { makeASentence } from "../../utilities/makeSentence";
import { Clear, Expand, OpenInFull } from "@mui/icons-material";
const TextGenerator = (props) => {
  const [isShown, setIsShown] = useState(false);
  const [number, setNumber] = useState(10);
  const [text, setText] = useState("");
  const [open, setOpen] = React.useState(false);

  const getNumber = (selectedNumber) => {
    setNumber(selectedNumber);
  };
  const onSubmit = () => {
    setIsShown(true);
    setText(makeASentence(props.data, number));
  };

  return (
    <div className="grid">
      {!isShown && (
        <div className="justify-self-center flex flex-col gap-4 mt-10 mr-12">
          <Ninput getNumber={getNumber} />
          <Button
            variant="outlined"
            className="w-auto self-center my-3"
            onClick={onSubmit}
          >
            Generate
          </Button>
        </div>
      )}{" "}
      {isShown && (
        <div className="flex flex-row ml-4 gap-5 mt-9 border-black border-3 ">
          <div>
            <div className="h-full flex-none text-black border-b-2 border-gray-900  overflow-auto">
              <LineText text={text} />
            </div>
            {
              <Model
                className="expand"
                text={text}
                open={open}
                setOpen={setOpen}
              />
            }
            <div className="flex flex-row text-black ">
              <OpenInFull
                onClick={(e) => {
                  setOpen(true);
                }}
              />
              <Clear
                className="text-black ml-auto"
                onClick={(e) => {
                  setIsShown(false);
                }}
              />
            </div>
          </div>
          <div />
          <div className="bg-gray-300 ml-auto mr-12 w-[30vw] flex-none items-center overflow-clip">
            <UploadForm text={text} />
          </div>
        </div>
      )}
    </div>
  );
};

export default TextGenerator;
