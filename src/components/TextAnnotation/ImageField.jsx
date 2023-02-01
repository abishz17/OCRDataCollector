import { React } from "react";

const ImageField = (props) => {
  return (
    <>
      <div className=" flex justify-center items-center lg:h-32 m-auto mt-10 md:w-[80%] overflow-y-auto text-center h-[25%] md:h-1/6 bg-blue-100 rounded-md border-solid border-black border-2">
        <div className="">
          <img
            src={props.image}
            alt={"Not available"}
            className="block my-auto mx-auto h-20"
          />
        </div>
      </div>
    </>
  );
};

export default ImageField;
