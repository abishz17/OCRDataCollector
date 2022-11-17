import {React} from "react"
import { TextField } from "@mui/material";
const Textfield = (props) => {
   const handleChange = (event) => {
        props.setText(event.target.value)
   }

    return(
        <>
        <div className="textfield">
        <TextField  inputProps={{ style: { color: "white" } }}
         fullWidth value={props.text} multiline rows={6} onChange={handleChange} />
        </div>
        
        </>
    )
}
export default Textfield;