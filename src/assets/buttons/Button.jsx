import React from "react";

const Button = (props) => {
  return (
    <button className="bg-gradient-to-r from-color_left via-color_middle to-color_right px-6 py-4 rounded-lg border-2 border-black border-solid text-white mr-2 mb-2">
      {props.name}
    </button>
  );
};

export default Button;
