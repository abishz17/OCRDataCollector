import { React } from "react";

const ImageField = (props) => {
  return (
    <>
      <div className=" flex justify-center items-center m-auto mt-10 md:w-[80%] overflow-y-auto text-center h-[25%] bg-blue-100 rounded-md border-solid border-black border-2">
        <div className="">
          <img
            src={props.image}
            alt={"Not available"}
            className="block my-auto mx-auto "
          />
        </div>
      </div>
    </>
  );
};

export default ImageField;
