import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const Ninput = (props) => {
  const dropdownChangeHandler = (event) => {
    props.getNumber(event.target.value);
  };
  return (
      <TextField
        type="number"
        className="ninput"
        InputProps={{
          inputProps: {
            max: 15,
            min: 1,
          },
        }}
        label="No.of Lines"
        onChange={dropdownChangeHandler}
      />
  );
};

export default Ninput;
