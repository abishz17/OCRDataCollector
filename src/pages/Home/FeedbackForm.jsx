import React from "react";
import { useState } from "react";
import axios from "axios";

const FeedbackForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(" ");
  const [data, setData] = useState({
    name: "",
    description: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  const handleEmailChange = (e) => {
    if (!isValidEmail(e.target.value)) {
      setError("Invalid Email");
    } else {
      setError(null);
    }
    setEmail(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (!data.description) {
      setError("Message Cannot be Empty");
    } else if (!email) {
      setError("Please Enter Email");
    } else if (!error) {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", email);
      formData.append("description", data.description);
      console.log(formData);

      axios
        .post("/feedback/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          alert("Thank You For Submitting");
          setEmail("");
          setData((prevProps) => ({
            ...prevProps,
            ["description"]: "",
            ["name"]: "",
          }));
        })
        .catch((err) => {
          alert("Submission failed.Server error");
        });
    }
  };
  return (
    <div className="w-full bg-feedback pb-5">
      <h2 className="text-3xl font-bold py-10 pl-2 text-center ">
        Share Your Experience with us
      </h2>
      <div className="text-left lg:px-48 md:px-12 px-4">
        <section className="mb-32 text-gray-800">
          <div className="flex flex-col md:flex-row lg:flex-row justify-between gap-x-10 ">
            <div className=" mb-6 md:mb-0 md:w-6/12 md:pl-6 lg:pl-6">
              <p className="text-gray-500 mb-6">
                We appreciate your visit to our website and value your feedback.
                Please take a few minutes to complete this form and let us know
                how we can improve your experience. Thank you for helping us to
                serve you better.
              </p>
              <p className="text-gray-500 mb-2 text-center">Pulchowk Campus</p>
              <p className="text-gray-500 mb-2 text-center">
                <a href="mailto:hello@manjeetpandey.com.np">
                  hello@manjeetpandey.com.np
                </a>
              </p>
            </div>
            <div className="mb-12 md:mb-0 w-full md:w-6/12 md:pl-6 lg:pl-10">
              <form>
                <div className="form-group mb-6">
                  <input
                    type="text"
                    name="name"
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
                    placeholder="Name "
                    value={data.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group mb-6">
                  <input
                    type="email"
                    name="email"
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
                    placeholder="Email address *"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                <div className="form-group mb-3">
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
                    name="description"
                    placeholder="Message *"
                    value={data.description}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                {error && <p className="text-primary mb-2">{error}</p>}
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
                  onClick={onSubmit}
                >
                  Submit
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
