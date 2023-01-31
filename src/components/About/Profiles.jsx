import React from "react";

import EachCard from "/src/components/About/EachProfile";
import { members } from "/src/pages/About/Members";

const Profiles = () => {
  return (
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {members.map((item, idx) => {
        return <EachCard key={idx} item={item} />;
      })}
    </div>
  );
};

export default Profiles;
