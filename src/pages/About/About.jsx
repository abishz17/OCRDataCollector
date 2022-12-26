import React from "react";
import { Link } from "react-router-dom";
import Profiles from "/src/components/About/Profiles";

const About = () => {
  return (
    <div class="mb-32 text-gray-800 text-center w-auto">
      <div
        className="pt-12 md:mt-0 flex flex-col justify-center text-center md:text-left 
        md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 "
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
      <h2 class="text-3xl font-bold mb-32 mt-10">
        Meet the Team
        {/* <span class="text-gray-600">Team</span> */}
      </h2>

      <div class="gap-x-6 lg:gap-x-12 md:grid-cols-3">
        <Profiles />
      </div>
    </div>
  );
};

export default About;
