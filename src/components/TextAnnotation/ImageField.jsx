import { React } from "react";
import ip_addr from "../../utilities/constant.js";
// const ImageUrl = "https://4.240.80.61:8000";

const ImageField = (props) => {
  const handleClick = () => {
    window.open(ip_addr + props.image, "_blank");
  };

  return (
    <>
      <div className="relative m-auto mt-10 w-[80%] overflow-y-auto text-center h-[25%] bg-blue-100 rounded-md border-solid border-black border-2">
        <div className="">
          <img
            src={ip_addr + props.image}
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
