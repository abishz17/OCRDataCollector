import { React } from "react";
const ImageUrl = "http://localhost:8000";

const ImageField = (props) => {
  const handleClick = () => {
    window.open(ImageUrl + props.image, "_blank");
  };

  return (
    <>
      <div className="relative m-auto mt-10 w-[80%] overflow-y-auto text-center h-[25%] bg-blue-100 rounded-md border-solid border-black border-2">
        <div className="">
          <img
            src={props.image}
            alt={"Not available"}
            onClick={handleClick}
            className="lg:absolute flex justify-center items-center w-full h-full"
          />
        </div>
      </div>
    </>
  );
};

export default ImageField;
