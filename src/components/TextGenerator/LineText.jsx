import Model from "./Modal";
import { Clear, Expand, OpenInFull } from "@mui/icons-material";
import { useEffect } from "react";
import { Tooltip } from "@mui/material";
import Button from "/src/assets/buttons/Button";
const LineText = (props) => {
  const lines = props.text;

  return (
    <div className=" flex justify-center items-center m-auto mt-10 md:w-[80%] overflow-y-auto text-center h-[25%] bg-blue-100 rounded-md border-solid border-black border-2">
      <div className="whitespace-pre-wrap max-h-full">
        <p className="">{lines}</p>
      </div>
      {
        <Model
          className="expand"
          text={props.text}
          open={props.open}
          setOpen={props.setOpen}
        />
      }
    </div>
  );
};
export default LineText;
