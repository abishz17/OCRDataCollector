import React from "react";

const OCR_ready = () => {
  return (
    <body class="bg-gray-200 h-fit items-center flex  justify-center">
      <div class="text-center">
        <h1 class="text-3xl font-bold">Get ready to be amazed!</h1>
        <p class="text-base font-medium text-gray-700">
          Hamro OCR is a game-changing project aimed at revolutionizing the way
          we interact with the Nepali language, by developing state-of-the-art
          optical character recognition technology.
        </p>
        <p class="text-base font-medium text-gray-700">
          Stay tuned for the launch of an exciting new way to experience the
          power and versatility of Nepali writing!
        </p>
        <form class="mt-10">
          <input
            class="p-4 border border-gray-400 rounded-lg w-64"
            type="email"
            placeholder="Enter your email"
          />
          <button class="p-4 mt-5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer">
            Be the first to know
          </button>
        </form>
      </div>
    </body>
  );
};

export default OCR_ready;
