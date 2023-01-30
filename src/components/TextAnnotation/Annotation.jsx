import { React, useState, useEffect, useRef, ChangeEvent } from "react";
import Button from "/src/assets/buttons/Button";
import ImageField from "./ImageField";
import Textfield from "./Textfield";
import toHex from "../../utilities/tohex";
import nepali from "./Nepali";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ErrorRounded } from "@mui/icons-material";
import Keyboard from "react-simple-keyboard";

const Annotation = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState(null);
  const [image, setImage] = useState("");
  const [imageid, setImageid] = useState("");
  const [isTextValid, setIsTextValid] = useState(true);
  const [isNepaliText, setIsNepaliText] = useState(false);
  const navigate = useNavigate();

  const [layout, setLayout] = useState("default");
  const keyboard = useRef(null);

  const unicodeHandler = () => {
    const hexNumber = text.charCodeAt(0).toString(16);
    return parseInt(hexNumber, 16) >= 2304 && parseInt(hexNumber, 16) <= 2431; //devanagari script range
  };

  const uploadHandler = () => {
    console.log("Clickk");
    if (text.trim() === "") {
      setIsTextValid(false);
      setError("Enter valid text");
      return;
    }
    if (!unicodeHandler) {
      console.log("Devanagari script only allowed");
      setIsNepaliText(false);
      return;
    }
    if (!error) {
      setIsTextValid(true);
      setIsNepaliText(true);
      const formData = new FormData();
      formData.append("image", imageid);
      formData.append("ocr_text", text);

      axios
        .post("/annotate/image/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log("Successfully annotated");
          alert("Thanks for the submission.");
          navigate(-1);
        })
        .catch((e) => {
          alert("Server error.Try again");
          console.log(e);
        });
    }
  };

  const getImage = () => {
    axios.get("/annotate/image").then((response) => {
      setImage(response.data["image"]);
      setImageid(response.data["id"]);
    });
  };

  useEffect(() => {
    getImage();
  }, []);
  const changeHandler = (text) => {
    setText(text);
  };
  const handleShift = () => {
    const newLayoutName = layout === "default" ? "shift" : "default";

    setLayout(newLayoutName);
  };
  const onKeyPress = (button) => {
    if (button == "{shift}") {
      handleShift();
    }
  };
  const onKeyDown = (e) => {
    if (e.key === "Shift") {
      handleShift();
    }
  };
  const onKeyUp = (e) => {
    if (e.key === "Shift") {
      handleShift();
    }
  };
  const onChangeInput = (e) => {
    setText(e.target.value);
    keyboard.current.setInput(e.target.value);
  };

  return (
    <>
      <div className="block m-auto relative mx-4 md:mx-10 h-[85vh] border-1 border-cyan-200">
        <>
          <ImageField image={image} />
          <div className=" block m-auto mt-10 md:w-4/5 overflow-y-auto text-center pt-2   rounded-md border-white">
            <input
              value={text}
              placeholder="Enter text here.."
              onChange={onChangeInput}
              onKeyDown={onKeyDown}
              onKeyUp={onKeyUp}
              className="w-full h-20 px-10 p-3 my-5 md:my-0 rounded-xl border-none box-border"
            />
            <div className="hidden md:block">
              <Keyboard
                keyboardRef={(r) => (keyboard.current = r)}
                layoutName={layout}
                layout={nepali}
                onChange={changeHandler}
                onKeyPress={onKeyPress}
                syncInstanceInputs={true}
                physicalKeyboardHighlight={true}
                mergeDisplay={true}
                debug={true}
              />
            </div>
          </div>

          {error && <p>{error}</p>}
          <center>
            <Button name="Submit " onClick={uploadHandler} />
          </center>
        </>
      </div>
    </>
  );
};

export default Annotation;
