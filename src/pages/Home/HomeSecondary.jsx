import React from "react";

const HomeSecondary = () => {
  return (
    <div className=" bg-secondary w-full p-5">
      <div className="text-base flex flex-col md:flex-row lg:flex-row lg:px-48 md:px-12 px-4 py-10 gap-10">
        <div className="text-left flex-1 ">
          <p className="text-[#52aed1] text-left  inline-block text-3xl">
            NepaliOCR is an initiative <br /> to help computers learn <br />
            how people write in <br />
            Nepali and understand it.
          </p>
        </div>
        <div className="flex-1">
          <p className="text-gray-300">
            NepaliOCR is a project aimed at developing optical character
            recognition (OCR) technology for the Nepali language. The goal of
            the initiative is to enable computers to accurately read and
            understand written Nepali text, just as they would with other
            widely-used languages like English. By doing so, NepaliOCR will
            facilitate digitization and automation of tasks that require Nepali
            text processing, making them faster, more efficient, and accessible
            to a wider audience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeSecondary;
