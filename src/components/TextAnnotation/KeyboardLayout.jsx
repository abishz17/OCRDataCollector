import React from "react";
import Keyboard from "react-simple-keyboard";
import nepalify from "nepalify";


const KeyboardLayout = () => {
  const handleChange = () => {
    console.log("Input Changed");
  };
  const handleKeyPress = () => {
    console.log("key PRessed");
  };

  return (
    <div className="block m-auto mt-10 md:w-4/5 overflow-y-auto text-center rounded-md border-white">
      <Keyboard onChange={handleChange} onKeyPress={handleKeyPress} />
    </div>
  );
};

export default KeyboardLayout;
