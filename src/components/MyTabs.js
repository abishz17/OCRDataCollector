import { useState } from "react";
import Annotation from "../pages/Annotation";

function Tabs(props) {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          DataCollection
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Data Annotation
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          {props.tab1}
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <Annotation />
        </div>
      </div>
    </div>
  );
}

export default Tabs;
