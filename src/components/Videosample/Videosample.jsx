import React from "react";
// import Video from "../../assets/abc.mp4";

const Videosample = () => {
  return (
    <div className="flex ml-[30%] pl-[5%]">
      <video className=" border-emerald-500  border-solid border-4" controls>
        {/* <source src={Video} type="video/mp4" /> */}
        Sorry, your browser doesn't support videos.
      </video>
    </div>
  );
};

export default Videosample;
