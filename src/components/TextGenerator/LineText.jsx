import Model from "./Modal";
import { Clear, Expand, OpenInFull } from "@mui/icons-material";
import { useEffect } from "react";
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
    <div className="flex flex-row ml-4 gap-5 mt-9 border-black border-3 ">
      <div>
        <div className="h-full flex-none text-black border-b-2 border-gray-900  overflow-auto">
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
        <div className="flex flex-row text-black ">
          <OpenInFull
            onClick={(e) => {
              props.setOpen(true);
            }}
          />
          <Clear
            className="text-black ml-auto"
            onClick={(e) => {
              props.setIsShown(false);
            }}
          />
        </div>
      </div>
      <div />
    </div>
  );
};
export default LineText;
