import React from "react";

const WordsFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="words-filter">
      <div className="words-filter__control">
        <label>Filter by no.of words</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>
      </div>
    </div>
  );
};

export default WordsFilter;
