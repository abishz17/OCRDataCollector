import React from "react";

import EachCard from "/src/components/About/EachProfile";
import { members } from "/src/pages/About/Members";

const Profiles = () => {
  return (
    <div
      className="pt-12 md:mt-0  flex flex-col justify-center text-center md:text-left 
        md:flex-row md:justify-between md:items-center lg:px-48 md:px-4 px-4 z-1"
    >
      {members.map((item, idx) => {
        return <EachCard key={idx} item={item} />;
      })}
    </div>
  );
};

export default Profiles;
