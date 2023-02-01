import React from "react";

const ComingSoon = () => {
  return (
    <div class="w-full h-[80vh] flex flex-col items-center justify-between">
      <div class="xl:w-1/2 flex-1 flex flex-col items-center justify-center text-center px-4 lg:px-0">
        <p class="text-4xl font-bold text-gray-700 capitalize tracking-wide mt-8">
          Page Under Construction!
        </p>
        <p class="text-xl text-gray-900 uppercase mt-4">
          Something's Cooking 👀
        </p>

        <div className="pt-4">
          <p class="text-base font-medium text-gray-700">
            Stay tuned for the launch of an exciting new way to experience the
            power and versatility of Nepali writing!
          </p>
          <p class="text-base font-medium text-gray-700">
            Want to be one of the first to experience NepaliOCR? Join our beta
            testing program by sending us an email at{" "}
            <a href="mailto:beta@manjeetpandey.com.np">
              beta@manjeetpandey.com.np
            </a>
            !
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
