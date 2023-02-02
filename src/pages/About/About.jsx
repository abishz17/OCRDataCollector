import React from "react";

import Profiles from "/src/components/About/Profiles";

const About = () => {
  return (
    <div class="w-full bg-gray-800 pb-20 text-white pt-12 md:mt-0  flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4">
      <section class=" m-auto">
        <header class="p-6">
          <h1 class="text-3xl font-medium text-center">About Us - NepaliOCR</h1>
        </header>
        <main class="p-6">
          <p class="text-lg py-2">
            Welcome to OCR Project, an innovative new optical character
            recognition technology developed by a team of dedicated students.
            Our goal is to create a user-friendly OCR tool that can accurately
            scan and extract data from a wide range of document types.
          </p>
          <p class="text-lg py-2  ">
            We are a group of computer engineering students who are passionate
            about technology and its potential to make people's lives easier. We
            have been working on this project for several months, and we are
            excited to finally share it with the world.
          </p>
          <p class="text-lg py-2">
            Our OCR technology is designed to be easy to use, even for those
            with limited technical knowledge. It can handle a wide range of
            document types, including invoices, receipts, and business cards.
          </p>
          <p class="text-lg py-2">
            We are still in the early stages of our project, but we are
            committed to constantly improving and updating our technology to
            stay ahead of the curve.
          </p>
          <p class="text-lg">
            If you have any questions about our OCR project or would like to
            learn more about how it can benefit you, please don't hesitate to{" "}
            <a
              href="mailto:hello@manjeetpandey.com.np"
              target="_blank"
              class="text-blue-500 hover:underline"
            >
              contact us
            </a>
            . We would be happy to provide more information and set up a
            demonstration of our software.
          </p>
          <p class="text-lg">
            Thank you for considering OCR Project for your optical character
            recognition needs.
          </p>
        </main>

        <div class="text-center p-12">
          <h2 class="text-base font-bold text-indigo-600">
            We got awesome people.
          </h2>
          <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">
            Check our awesome team members
          </h1>
        </div>
        <div>
          <Profiles />
        </div>
      </section>
    </div>
  );
};

export default About;
