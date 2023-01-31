import { React, useState } from "react";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "none",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "none",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "none",
    },
    "&:hover fieldset": {
      borderColor: "gray",
    },
    "&.Mui-focused fieldset": {
      borderColor: "none",
    },
  },
});

const Textfield = (props) => {
  const handleChange = (event) => {
    props.setText(event.target.value);
  };

  return (
    <>
      <div className="bg-gray-100 ">
        <TextField
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
