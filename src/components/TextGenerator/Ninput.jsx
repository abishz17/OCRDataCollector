import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState } from "react";

const Ninput = (props) => {
  const [value, setValue] = useState(0);
  const dropdownChangeHandler = (e) => {
    setValue(e.target.value);
    props.getNumber(e.target.value);
  };

  return (
    <div className="justify-self-center flex flex-col gap-4 mt-10 relative -z-1 ">
      <TextField
        inputProps={{
          step: 1,
          min: 1,
          max: 15,
          type: "number",
        }}
        className="mb-4 w-[30%] self-center"
        variant="filled"
        label="No. of Lines"
        value={value}
        required
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
