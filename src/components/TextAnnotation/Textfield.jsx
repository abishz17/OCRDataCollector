import { React, useState } from "react";
import { TextField } from "@mui/material";

const Textfield = (props) => {
  const handleChange = (event) => {
    props.setText(event.target.value);
  };

  return (
    <>
      <TextField
        inputProps={{ style: { color: "black" } }}
        fullWidth
        value={props.text}
        multiline
        rows={6}
        onChange={handleChange}
        required
      />
    </>
  );
};
export default Textfield;
