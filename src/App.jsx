import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Data from "./pages/Data/Data";
import Privacy from "./pages/Privacy/Privacy";
import About from "./pages/About/About";
import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Annotation from "./components/TextAnnotation/Annotation";
import TextGenerator from "./components/TextGenerator/TextGenerator";
import { Routes, Route } from "react-router-dom";
import dic from "./assets/dictionary";
import FeedBackForm from "./components/Feedback/FeedBackForm";
import Videosample from "./components/Videosample/Videosample";
import Error404 from "./pages/Error/Error404";
import ComingSoon from "./pages/Error/ComingSoon";
import OCR from "./pages/OCR/OCR_ready";
import OCR_ready from "./pages/OCR/OCR_ready";

const App = () => {
  return (
    <div className="text-black relative flex flex-col min-h-screen bg-gray-200">
      <div className="pb-16 md:pb-0">
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/data" element={<Data />} />
          <Route exact path="/data/annotate" element={<Annotation />} />
          <Route
            exact
            path="/data/text"
            element={<TextGenerator data={dic} />}
          />
          <Route exact path="/sample" element={<Videosample />} />
          <Route exact path="/ocr" element={<ComingSoon />} />
          <Route exact path="/about" element={<About />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
      <FeedBackForm />

      <Footer />
    </div>
  );
};

export default App;
