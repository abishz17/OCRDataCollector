import "./App.css";
// import Body from "./components/Body";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Datas from "./pages/Datas";
import { Fragment } from "react";
import HomeP from "./pages/HomeP";
import OCR from "./pages/OCR";

function App() {
  const array = [
    "आबद्ध",
    "अबेला",
    "अबेर",
    "अबेर भयो",
    "आभास",
    "अभाव",
    "अभय",
    "अभिभावक",
    "अभिलेख",
    "अभिनय",
    "अभिप्रेरित",
    "अभिप्रेत",
    "अभिराम",
    "अभिरुचि",
    "अभिवृद्धि",
    "अभियान",
    "अभियो",
    "अभियुक्त",
    "अभ्यास",
    "अचम्म",
  ];
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/collect" element={<Datas data={array} />}></Route>
        <Route path="/" element={<HomeP />}></Route>
        <Route path="/ocr" element={<OCR />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
