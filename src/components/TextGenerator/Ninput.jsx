import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const Ninput = (props) => {
  const dropdownChangeHandler = (event) => {
    props.getNumber(event.target.value);
  };

  return (
    <div className="justify-self-center flex flex-col gap-4 mt-10 mr-12">
      <TextField
        type="number"
        className="mb-4"
        defaultValue={5}
        variant="filled"
        InputProps={{
          inputProps: {
            max: 15,
            min: 1,
          },
        }}
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
