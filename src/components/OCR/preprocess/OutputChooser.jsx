import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function OutputChooser(props) {
  const [output, setOutput] = React.useState("");

  const handleChange = (event) => {
    setOutput(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel>Output</InputLabel>
      <Select value={output} label="Output" onChange={handleChange}>
        <MenuItem value={1}>Plain text (.txt)</MenuItem>
        <MenuItem value={2}>Word document (.docx)</MenuItem>
        <MenuItem value={3}>Pdf</MenuItem>
      </Select>
    </FormControl>
  );
}
