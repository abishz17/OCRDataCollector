import React from "react";

const FeedbackForm = () => {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold my-10 text-center ">
        Share Your Experience with us
      </h2>
      <div className="md:text-left lg:px-48 md:px-12 px-4">
        <section className="mb-32 text-gray-800">
          <div className="flex flex-col md:flex-row lg:flex-row justify-between gap-x-10 ">
            <div className=" mb-6 md:mb-0  md:w-6/12 pl-3 lg:pl-6">
              <p className="text-gray-500 mb-6">
                We appreciate your visit to our website and value your feedback.
                Please take a few minutes to complete this form and let us know
                how we can improve your experience. Thank you for helping us to
                serve you better.
              </p>
              <p className="text-gray-500 mb-2 text-center">Pulchowk Campus</p>
              <p className="text-gray-500 mb-2 text-center">
                manjeet.pandey1@gmail.com
              </p>
            </div>
            <div className="mb-12 md:mb-0 w-full md:w-6/12 pl-6 lg:pl-10">
              <form>
                <div className="form-group mb-6">
                  <input
                    type="text"
                    className="form-control block
                  w-full
                  pl-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInput7"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group mb-6">
                  <input
                    type="email"
                    className="form-control block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInput8"
                    placeholder="Email address"
                  />
                </div>
                <div className="form-group mb-6">
                  <textarea
                    className="
                  form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
                    id="exampleFormControlTextarea13"
                    rows="3"
                    placeholder="Message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="
                w-full
                px-6
                py-2.5
                bg-blue-600
                text-white
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded
                shadow-md
                hover:bg-blue-700 hover:shadow-lg
                focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-blue-800 active:shadow-lg
                transition
                duration-150
                ease-in-out"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FeedbackForm;
