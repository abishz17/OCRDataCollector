import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const Ninput = (props) => {
  const dropdownChangeHandler = (e) => {
    props.getNumber(e.target.value);
  };

  return (
    <div className="justify-self-center flex flex-col gap-4 mt-10 relative -z-1 ">
      <TextField
        type="number"
        className="mb-4 w-[30%] self-center"
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
