import React from "react";
import { TextField } from "@mui/material";

const FeedbackForm = () => {
  return (
    <div className="absolute  bg-gray-200 pr-[15%] w-[1243px] h-[550px] text-xs text-black">
      <form>
        <h3 className="text-base font-semibold block text-center">
          Share your experience with us
        </h3>
        <>
          <textarea
            id="standard-size-normal"
            defaultValue="Normal"
            variant="standard"
          />
        </>
      </form>
    </div>
  );
};

export default FeedbackForm;
