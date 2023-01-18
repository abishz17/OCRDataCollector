import React from "react";

import Profiles from "/src/components/About/Profiles";

const About = () => {
  return (
    <div class="text-gray-800 bg-white text-center w-auto">
      <div
        className="pt-12 md:mt-0 flex flex-col justify-center text-center md:text-left 
        md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 text-xl font-inter"
      >
        <div>
          <p className="text-center font-bold text-3xl">
            Welcome to our team page!
          </p>
          <br /> We are a group of four students who are passionate about
          learning and problem-solving. Together, we have a diverse range of
          skills and interests, and we are excited to work on projects that
          challenge us and help us grow as individuals. We believe that
          collaboration and teamwork are key to success, and we are always
          looking for opportunities to learn from each other and contribute to
          the success of our team.
          <p className="my-8">
            Thank you for visiting our page and helping us through our journey.
          </p>
        </div>
      </div>
      <h2 class="text-3xl font-bold my-10">
        Meet the Team
        {/* <span class="text-gray-600">Team</span> */}
      </h2>

      <div class="gap-x-6 lg:gap-x-12 md:grid-cols-3 -z-1 pb-20">
        <Profiles />
      </div>
    </div>
  );
};

export default About;
