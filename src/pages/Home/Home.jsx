import React from "react";
import { NavLink } from "react-router-dom";
import Image from "../../assets/images/other_images/image.png";
import Button from "../../assets/buttons/Button";
import HomeSecondary from "./HomeSecondary";
const Home = () => {
  return (
    <div>
      <section className="pt-12 md:mt-0 flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 bg-primary text-white">
        <div className="md:flex-1 md:mr-10 ">
          <h1 className="font-pt-serif text-5xl font-bold mb-7">
            Help Transcribe Handwritten Documents
          </h1>
          <p className="font-pt-serif font-normal mb-7">
            Help us by contributing your handwritten documents with ground
            truth, So we can built a proper OCR for Nepali Language.
          </p>
          <div className="font-montserrat">
            <NavLink to="/data">
              <Button name="Convert" />
            </NavLink>
            <NavLink to="/sample">
              <Button name="Watch Sample" />
            </NavLink>
          </div>
        </div>
        <div className="flex justify-around md:block mt-4 md:mt-0 md:flex-1">
          <img src={Image} alt="handwriting" />
        </div>
      </section>
      <HomeSecondary />
    </div>
  );
};

export default Home;
