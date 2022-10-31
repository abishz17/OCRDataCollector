import React from "react";
import { useState } from "react";
import Card from "../Card";
import Ninput from "../Ninput";

const TextGenerator = (props) => {
  const [isShown, setIsShown] = useState(false);
  const [number, setNumber] = useState(10);

  const onSubmit = (e) => {
    e.preventDefault();
    setIsShown((current) => !current);
  };
  const getNumber = (selectedNumber) => {
    setNumber(selectedNumber);
  };
  function get_random(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  const makeASentence = (arr,n) => {
    let str = "";
    for (let i = 0; i < n; i++) {
      str = str + " " + get_random(arr);
    }
    console.log(str);
    return str;
  };

  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <Ninput getNumber={getNumber} />
          <button type="submit">Click here to generate random texts</button>
        </form>

        {isShown && <Card data={makeASentence(props.data,number)} />}
      </div>
    </>
  );
};

export default TextGenerator;
