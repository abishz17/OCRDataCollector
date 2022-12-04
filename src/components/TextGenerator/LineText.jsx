import Model from "./Modal";
import { Clear, Expand, OpenInFull } from "@mui/icons-material";
import { useEffect } from "react";
import { Tooltip } from "@mui/material";
const LineText = (props) => {
  const lines = props.text;

  // useEffect(() => {
  //   localStorage.setItem("texts", props.text);
  // }, [props.text]);

  // useEffect(() => {
  //   const textgetter = localStorage.getItem("texts");
  //   // console.log(textgetter);

  //   if (textgetter) {
  //     props.setText(textgetter);
  //     props.setIsShown(true);
  //   }
  // }, []);

  return (
    <div className="basis-1/2 flex justify-center items-center gap-5 mt-9 border-black border-3 ">
      <div className="h-full w-5/6 m-auto ">
        <div className="flex-none text-black border-b-2 border-gray-900  overflow-auto">
          <p className="py-2 my-2 whitespace-pre-wrap">{lines} </p>
        </div>
        {
          <Model
            className="expand"
            text={props.text}
            open={props.open}
            setOpen={props.setOpen}
          />
        }
        <div className="flex flex-row text-black hover:cursor-pointer ">
          <Tooltip title="Expand">
            <OpenInFull
              title="Expand"
              onClick={(e) => {
                props.setOpen(true);
              }}
            />
          </Tooltip>
          <Tooltip title="Clear text">
            <Clear
              className="text-black ml-auto hover:cursor-pointer"
              onClick={(e) => {
                props.setIsShown(false);
              }}
            />
          </Tooltip>
        </div>
      </div>
      <div />
    </div>
  );
};
export default LineText;
