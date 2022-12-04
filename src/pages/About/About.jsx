import React from "react";
import { Link } from "react-router-dom";
import Profiles from "/src/components/About/Profiles";

const About = () => {
    return (
      <>
        <div class="py-6 dark:bg-gray-800 dark:text-gray-100">
          <div class="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <p class="p-2 text-sm font-medium tracking-wider text-center uppercase">
          Development team
        </p>
        <div className="flex gap-6 justify-center items-center">
          <Profiles />
        </div>
      </div>
      </>
    );
}

export default About;