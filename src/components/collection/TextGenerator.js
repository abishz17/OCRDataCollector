import React from "react";
import { useState } from "react";
import WordsFilter from "./WordFilterer";
// import Card from "../Card";

const TextGenerator = (props) => {
  const [isShown, setIsShown] = useState(false);
  const [filteredNumber, setFilteredNumber] = useState("5");

  const filterChangeHandler = (selectedNumber) => {
    setFilteredNumber(selectedNumber);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIsShown((current) => !current);
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

  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <WordsFilter
            onChangeFilter={filterChangeHandler}
            selected={filteredNumber}
          />
          <button type="submit">Click here to generate random texts</button>
        </form>

        {isShown && <h2>{makeASentence(props.data, filteredNumber)}</h2>}
      </div>
    </>
  );
};

export default TextGenerator;
