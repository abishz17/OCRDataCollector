import React from "react";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";

const Ninput = (props) => {
  const dropdownChangeHandler = (event) => {
    props.getNumber(event.target.value);
  };
  return (
    <div>
      <Typography>Select the no. of lines</Typography>

      <TextField
        type="number"
        className="ninput"
        defaultValue="5"
        InputProps={{
          inputProps: {
            max: 15,
            min: 1,
          },
        }}
        onChange={dropdownChangeHandler}
      />
    </div>
  );
};

export default Ninput;
