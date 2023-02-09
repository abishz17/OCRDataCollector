import React, { useState } from "react";
import Annotation from "react-image-annotation";
import img from "./hello.png";
const Simple = () => {
  const [annotations, setAnnotations] = useState([]);
  const [annotation, setAnnotation] = useState({});

  const onChange = (annotation) => {
    setAnnotation(annotation);
  };

  const onSubmit = (annotation) => {
    const { geometry, data } = annotation;
    console.log(annotations);
    setAnnotation({});
    setAnnotations(
      annotations.concat({
        geometry,
        data: {
          ...data,
          id: Math.random(),
        },
      })
    );
  };

  return (
    <div>
      <Annotation
        src={img}
        alt="Two pebbles anthropomorphized holding hands"
        annotations={annotations}
        value={annotation}
        onChange={onChange}
        onSubmit={onSubmit}
        onClick={(e) => console.log(e.clientX)}
      />
    </div>
  );
};

export default Simple;
