import React, { useState } from "react";

const Annotation = ({ start, end }) => {
  const [label, setLabel] = useState("");

  const styles = {
    position: "absolute",
    left: Math.min(start.x, end.x),
    top: Math.min(start.y, end.y),
    width: Math.abs(end.x - start.x),
    height: Math.abs(end.y - start.y),
  };

  return (
    <div style={styles}>
      <textarea
        value={label}
        onChange={(event) => setLabel(event.target.value)}
      />
    </div>
  );
};

export default Annotation;
