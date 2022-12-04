import React from "react"

import EachCard from "/src/components/About/EachProfile";
import { members } from "/src/pages/About/Members";

const Profiles = () => {
    return (
      <div className="flex flex-row flex-wrap-reverse justify-center mt-8">
        {members.map((item, idx) => {
          return <EachCard key={idx} item={item} />;
        })}
      </div>
    );
}

export default Profiles;