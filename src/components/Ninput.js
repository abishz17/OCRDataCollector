import React from "react";
import TextField from "@mui/material/TextField";

const Ninput = (props) => {
  const dropdownChangeHandler = (event) => {
    props.getNumber(event.target.value);
  };
  return (
    <div>
      <TextField
        type="number"
        InputProps={{
          inputProps: {
            max: 100,
            min: 10,
          },
        }}
        label="No.of words"
        onChange={dropdownChangeHandler}
      />
    </div>
  );
};

export default Ninput;
