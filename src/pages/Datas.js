import React from "react";
import TextGenerator from "../components/collection/TextGenerator";

const Datas = (props) => {
  return (
    <div>
      <TextGenerator data={props.data} />
    </div>
  );
};

export default Datas;
