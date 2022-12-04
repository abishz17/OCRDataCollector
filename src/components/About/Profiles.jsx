import React from "react"

import ProfileCard from "/src/components/About/ProfileCard";
import { members } from "/src/pages/About/Members";

const Profiles = () => {
    return (
        <div>
            {/* {members.map(({image, alt, name, height}, idx) => {
            return(<ProfileCard  />);
            })} */}
            <ProfileCard />
        </div>
    );
}

export default Profiles;