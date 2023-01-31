import { React, useState } from "react";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import nepalify from "nepalify";

const Textfield = (props) => {
  const handleChange = (event) => {
    // props.setText(event.target.value);
    props.setText(nepalify.format(event.target.value));
  };

  return (
    <>
      <div className="bg-gray-100">
        <TextField
          // id="nepali"
          variant="standard"
          label="Enter Text"
          helperText="Please enter text in Nepali"
          InputProps={{
            disableUnderline: true, // <== added this
          }}
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
