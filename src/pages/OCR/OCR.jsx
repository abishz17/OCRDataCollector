import Output from "../../components/OCR/output/Output";
import Preprocess from "../../components/OCR/preprocess/Preprocess";
import { useState } from "react";
const Desktop1 = () => {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState();
  const [src, setSrc] = useState();
  const [result, setResult] = useState();
  const fileSetter = (f) => {
    setFile(f);
    setFileName(f.name);
    setSrc(URL.createObjectURL(f));
    console.log(result);
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
    <div>
      <div className="lg:px-48 md:px-12 px-4 bg-gray-200 flex flex-col text-center gap-10">
        <div
          className="bg-white mt-20 rounded-xl items-center flex-1"
          onDragOver={handleOndragOver}
          onDrop={handleOndrop}
        >
          <Preprocess
            fileSetter={fileSetter}
            setFileName={setFileName}
            fileName={fileName}
            setResult={setResult}
          />
        </div>

        <div className="bg-white mb-20 rounded-xl items-center flex-1 ">
          <Output fileName={fileName} src={src} result={result} />
        </div>
      </div>
    </div>
  );
};

export default Desktop1;
