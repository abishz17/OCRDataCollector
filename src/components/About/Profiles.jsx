import React from "react"

import EachCard from "/src/components/About/EachProfile";
import { members } from "/src/pages/About/Members";

const Profiles = () => {
    return (
      <div className="flex justify-center items-center">
        {members.map((item, idx) => {
          return <EachCard key={idx} item={item} />;
        })}
      </div>
    );
}

export default Profiles;