import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Data from "./pages/Data/Data";
import Privacy from "./pages/Privacy/Privacy";
import About from "./pages/About/About";

import Footer from "./components/Footer/Footer";
import Annotation from "./components/TextAnnotation/Annotation";
import TextGenerator from "./components/TextGenerator/TextGenerator";
import { Routes, Route } from "react-router-dom";
import dic from "./assets/dictionary";
import FeedBackForm from "./components/Feedback/FeedBackForm";
import Videosample from "./components/Videosample/Videosample";
import Error404 from "./pages/Error/Error404";

const App = () => {
  return (
    <div className="text-black">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/data" element={<Data />} />
        <Route exact path="/data/annotate" element={<Annotation />} />
        <Route exact path="/data/text" element={<TextGenerator data={dic} />} />
        <Route exact path="/sample" element={<Videosample />} />
        <Route exact path="/privacy" element={<Privacy />} />
        <Route exact path="/about" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <FeedBackForm />
      <Footer />
    </div>
  );
};

export default App;
