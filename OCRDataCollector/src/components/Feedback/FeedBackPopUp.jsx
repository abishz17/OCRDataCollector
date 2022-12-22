import React, { useState } from "react";

const FeedBackPopUp = () => {
  const [open, setIsOpen] = useState(false);
  return <div>{open && <p>Hello</p>}</div>;
};

export default FeedBackPopUp;
