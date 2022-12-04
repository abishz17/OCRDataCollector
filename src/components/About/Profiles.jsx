import React from "react"

import ProfileCard from "/src/components/About/ProfileCard";
import { members } from "/src/pages/About/Members";

const Profiles = () => {
    return (
        <div className="inline-flex col-span-10 gap-x-10">
            {members.map((item, idx) => {
            return(<ProfileCard key={idx} item={item} />)
            })}
        </div>
    );
}

export default Profiles;