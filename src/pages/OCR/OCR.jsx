import Output from "../../components/OCR/output/Output";
import Preprocess from "../../components/OCR/preprocess/Preprocess";
import { useState } from "react";
const Desktop1 = () => {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState();
  const [src, setSrc] = useState();
  const fileSetter = (f) => {
    setFile(f);
    setFileName(f.name);
    setSrc(URL.createObjectURL(f));
  };

  return (
    <div>
      <div className="lg:px-48 md:px-12 px-4 bg-gray-200 flex flex-col text-center gap-10">
        <div className="bg-white mt-20 rounded-xl items-center flex-1">
          <Preprocess fileSetter={fileSetter} />
        </div>

        <div className="bg-white mb-20 rounded-xl items-center flex-1 ">
          <Output fileName={fileName} src={src} />
        </div>
      </div>
    </div>
  );
};

export default Desktop1;
