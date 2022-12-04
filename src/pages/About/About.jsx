import React from "react";
import { Link } from "react-router-dom";
import ProfileCard from "/src/components/About/ProfileCard"
const About = () => {
    return (
      <>
        <div className="flex flex-col gap-6 content-center justify-center items-center">
            <ProfileCard />
        </div>
      </>
    );
}

export default About;