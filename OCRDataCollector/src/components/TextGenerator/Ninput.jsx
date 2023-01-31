import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const Ninput = (props) => {
  const max = 15;
  const min = 1;
  const dropdownChangeHandler = (e) => {
    var value = parseInt(e.target.value, 10);

    if (value > max) value = max;
    if (value < min) value = min;

    props.getNumber(value);
  };

  return (
    <div className="justify-self-center flex flex-col gap-4 mt-10 ">
      <TextField
        type="number"
        className="mb-4 w-[30%] self-center"
        defaultValue={5}
        variant="filled"
        label="No.of Lines"
        onChange={dropdownChangeHandler}
      />
      <Button
        variant="outlined"
        className="w-auto self-center my-3"
        onClick={props.onSubmit}
      >
        Generate
      </Button>
    </div>
  );
};

export default Ninput;
