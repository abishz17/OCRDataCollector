import { React } from "react";
const ImageUrl = "http://localhost:8000";
const ImageField = (props) => {
  const handleClick = () => {
    window.open(ImageUrl + props.image, "_blank");
  };

  return (
    <>
      <div className="self-center text-slate-900">
        <img
          src={ImageUrl + props.image}
          alt={props.image}
          onClick={handleClick}
        />
      </div>
    </>
  );
};

export default ImageField;
