import {React, useState} from "react"
import { TextField } from "@mui/material";

const Textfield = () => {
    const [text,setText]= useState("");
    const handleChange = (event) => {
        setText(event.target.value);
    }

    return(
        <div className="textfield">
        <TextField  inputProps={{ style: { color: "white" },disableUnderline:true }}
         fullWidth value={text} multiline rows={4} onChange={handleChange} />
        </div>
    )
}
export default Textfield;