import { React, useState } from "react";
import { TextField } from "@mui/material";

const Textfield = (props) => {
  const handleChange = (event) => {
    props.setText(event.target.value);
  };

  return (
    <>
      <div className="">
        <TextField
          variant="outlined"
          sx={{ border: "none", "& fieldset": { border: "none" } }}
          fullWidth
          value={props.text}
          multiline
          rows={6}
          onChange={handleChange}
        />
      </div>
    </>
  );
};
export default Textfield;
