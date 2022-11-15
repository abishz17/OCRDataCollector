import React from "react";
import { useState } from "react";
import LineText from "./LineText";
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
    let str = []
    const par_length =  n*6;
    for (let i = 0; i < par_length; i++) {
      
      if(i%6===0){
        str=str + "\n"}
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
