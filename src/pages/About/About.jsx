import React from "react";
import { Link } from "react-router-dom";
import Profiles from "/src/components/About/Profiles";

const About = () => {
    return (
      <>
        <div className="flex pb-10 justify-center items-center">
          This project is a major project.
        </div>
        <div className="flex gap-6 justify-center items-center">
          <Profiles />
        </div>
      </>
    );
}

export default About;