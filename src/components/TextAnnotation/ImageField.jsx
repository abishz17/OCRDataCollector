import { React } from "react";
const ImageUrl = "http://localhost:8000";

const ImageField = (props) => {
  const handleClick = () => {
    window.open(ImageUrl + props.image, "_blank");
  };

  return (
    <>
      <div className="relative m-auto mt-10 w-[80%] overflow-y-auto text-center h-[25%] bg-cyan-700 rounded-md border-white">
        <div className="">
          <img
            src={props.image}
            alt={"Not available"}
            onClick={handleClick}
            className="mx-auto lg:absolute top-[40%] left-[40%]"
          />
        </div>
      </div>
    </>
  );
};

export default ImageField;
