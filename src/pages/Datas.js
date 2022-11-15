import React from "react";
import TextGenerator from "../components/TextGenerator";
import MyTabs from "../components/MyTabs";

const Datas = (props) => {
  return (
    <div>
      <MyTabs tab1={<TextGenerator data={props.data} />} />
    </div>
  );
};

export default Datas;
