import Output from "../../components/OCR/output/Output";
import Preprocess from "../../components/OCR/preprocess/Preprocess";
const Desktop1 = () => {
  return (
    <div>
      <div className="lg:px-48 md:px-12 px-4 bg-gray-200 flex flex-col text-center gap-10">
        <div className="bg-white mt-20 rounded-xl items-center flex-1">
          <Preprocess />
        </div>

        <div className="bg-white mb-20 rounded-xl items-center flex-1">
          <Output />
        </div>
      </div>
    </div>
  );
};

export default Desktop1;
