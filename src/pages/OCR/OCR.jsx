import Output from "../../components/OCR/output/Output";
import Preprocess from "../../components/OCR/preprocess/Preprocess";
import { useState } from "react";

const OCR = () => {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState();
  const [src, setSrc] = useState();
  const [result, setResult] = useState();
  const [isSuccess, setSuccess] = useState(false);

  const fileSetter = (f) => {
    console.log(f);
    setFile(f);
    setFileName(f.name);
    setSrc(URL.createObjectURL(f));
  };
  const unfileSetter = () => {
    setSuccess(false);
    setFile(null);
    setFileName(null);
    setSrc(null);
  };
  const handleOndragOver = (e) => {
    e.preventDefault();
  };
  const handleOndrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let imageFile = e.dataTransfer.files[0];
    fileSetter(imageFile);
  };

  return (
    <div className="py-5 md:py-10  overflow-scroll">
      <div className="lg:px-48 md:px-12 px-4 flex flex-col text-center gap-10">
        <div
          className="border-2 bg-white mt-10 rounded-xl items-center "
          onDragOver={handleOndragOver}
          onDrop={handleOndrop}
        >
          <Preprocess
            fileSetter={fileSetter}
            setFileName={setFileName}
            fileName={fileName}
            setResult={setResult}
            setSuccess={setSuccess}
          />
        </div>
        {/* {isSuccess && ( */}
        <div className="bg-white mb-20 rounded-xl items-center flex-1 ">
          <Output
            fileName={fileName}
            src={src}
            result={result}
            unfileSetter={unfileSetter}
          />
        </div>
      </div>
    </div>
  );
};

export default OCR;
