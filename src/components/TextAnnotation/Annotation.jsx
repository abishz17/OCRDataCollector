import { React, useState, useEffect, useRef, ChangeEvent } from "react";
import Button from "/src/assets/buttons/Button";
import ImageField from "./ImageField";
import "./index.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import display from "./Nepali";
import Keyboard from "react-simple-keyboard";
import nepalify from "nepalify";
import english from "./English";
import keylayout from "/src/assets/images/other_images/keyboard_layout.png";
const Annotation = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState(null);
  const [image, setImage] = useState("");
  const [imageid, setImageid] = useState("");
  const [isshiftheld, setshiftheld] = useState(false);
  const navigate = useNavigate();

  const [layout, setLayout] = useState("default");
  const keyboard = useRef(null);

  const uploadHandler = () => {
    if (text.trim() === "") {
      setError("Enter valid text");
      return;
    }

    if (!error) {
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
    axios.get("/annotate/image/").then((response) => {
      setImage(response.data["image"]);
      setImageid(response.data["id"]);
    });
  };

  useEffect(() => {
    getImage();
  }, []);
  const changeHandler = (text) => {
    const data = nepalify.format(text);
    setText(data);
  };
  const handleShift = () => {
    setshiftheld(!isshiftheld);
    const newLayoutName = layout === "default" ? "shift" : "default";
    setLayout(newLayoutName);
  };
  const onKeyPress = (button) => {
    if (button == "{shiftleft}" || button == "{shiftright}") {
      handleShift();
    }
  };
  const onKeyDown = (e) => {
    console.log(e.key);
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
    const text = nepalify.format(e.target.value);
    setText(text);
    keyboard.current.setInput(e.target.value);
  };
  const handleClick = () => {
    const newlayoutname = layout === "default";
    setLayout(newlayoutname);
  };

  return (
    <>
      <div className="block m-auto relative mx-4 md:mx-10 md:min-h-screen lg:min-h-fit lg:p-10 border-1 border-cyan-200">
        <>
          <ImageField image={image} />
          <div className=" block m-auto mt-10  md:w-4/5 overflow-y-auto text-center p-2  rounded-md border-white">
            <input
              value={text}
              placeholder="Enter text here.."
              onChange={onChangeInput}
              onKeyDown={onKeyDown}
              onKeyUp={onKeyUp}
              // onClick={handleClick}
              className="w-full h-20 md:h-20 lg:h-32 px-10 p-3 my-5 md:my-0 rounded-xl border-none box-border"
            />

            <div className="hidden md:block pt-10">
              <Keyboard
                keyboardRef={(r) => (keyboard.current = r)}
                layoutName={layout}
                layout={english}
                onChange={changeHandler}
                onKeyPress={onKeyPress}
                theme={"hg-theme-default hg-layout-default myTheme"}
                syncInstanceInputs={true}
                physicalKeyboardHighlight={true}
                mergeDisplay={true}
                display={display}
                buttonTheme={[
                  {
                    class: isshiftheld ? "hg-red" : "",
                    buttons: "{shiftleft} {shiftright}",
                  },
                ]}
              />
            </div>

            {error && <p>{error}</p>}
            <a href={keylayout} target="_blank">
              <p className="pb-5 text-purple-600 underline">
                Click here for more information on Keyboard Layout.
              </p>
            </a>
            <center className="mb-5 ">
              <Button name="Submit " onClick={uploadHandler} />
            </center>
          </div>
        </>
      </div>
    </>
  );
};

export default Annotation;
