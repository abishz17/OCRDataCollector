import React from "react";
import TextField from "@mui/material/TextField";

const Ninput = (props) => {
  const dropdownChangeHandler = (event) => {
    props.getNumber(event.target.value);
  };
  return (
    <div className="ninput">
      <TextField
        type="number"
        InputProps={{
          inputProps: {
            max: 15,
            min: 1,
          },
        }}
        label="No.of Lines"
        onChange={dropdownChangeHandler}
      />
    </div>
  );
};

export default Ninput;
