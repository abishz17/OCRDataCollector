import React from "react";
import { NavLink } from "react-router-dom";
import Image from "../../assets/image.png";

const Home = () => {
  return (
    <section className="pt-12 md:mt-0 flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 bg-secondary">
      <div className="md:flex-1 md:mr-10 ">
        <h1 className="font-pt-serif text-5xl font-bold mb-7">
          Help Transcribe Handwritten Documents
        </h1>
        <p className="font-pt-serif font-normal mb-7">
          Help us by contributing your handwritten documents with ground truth,
          So we can built a proper OCR for Nepali Language.
        </p>
        <div className="font-montserrat">
          <NavLink to="/data">
            <button className="bg-black px-6 py-4 rounded-lg border-2 border-black border-solid text-white mr-2 mb-2">
              Convert
            </button>
          </NavLink>
          <NavLink to="/sample">
            <button className="px-6 py-4 border-2 border-black border-solid rounded-lg">
              Watch Sample
            </button>
          </NavLink>
        </div>
      </div>
      <div className="flex justify-around md:block mt-4 md:mt-0 md:flex-1">
        <img src={Image} alt="handwriting" />
      </div>
    </section>
  );
};

export default Home;
