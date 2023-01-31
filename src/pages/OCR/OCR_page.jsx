const Desktop1 = () => {
  return (
    <div className="relative bg-gray-1700 w-full h-[1024px] overflow-hidden text-left text-3xl text-white font-inter">
      <div className="absolute h-[14.65%] w-full top-[0%] right-[0%] bottom-[85.35%] left-[0%]">
        <div className="absolute top-[calc(50%_-_45px)] left-[70px] flex flex-row items-center justify-center gap-[20px]">
          <img
            className="relative w-[90px] h-[90px] shrink-0 object-cover"
            alt=""
            src="../image-3@2x.png"
          />
          <div className="relative font-semibold inline-block">HamroOCR</div>
        </div>
        <div className="absolute top-[calc(50%_-_14px)] right-[70px] flex flex-row items-center justify-start gap-[69px] text-2xl text-turquoise">
          <div className="relative inline-block">Home</div>
          <div className="relative inline-block">Features</div>
          <div className="relative inline-block">FAQ</div>
          <div className="relative inline-block">About</div>
          <div className="relative inline-block">Contacts</div>
        </div>
      </div>
      <div className="absolute h-[78.13%] w-full top-[14.65%] right-[0%] bottom-[7.23%] left-[0%] bg-gray-400 text-sm text-black">
        <div className="absolute top-[calc(50%_-_298px)] left-[calc(50%_-_540px)] rounded-[20px] bg-white shadow-[0px_2px_6px_rgba(13,_10,_44,_0.08)] w-[1080px] h-[500px]" />
        <div className="absolute top-[177px] left-[180px] w-[1080px] flex flex-row p-[0px_60px] box-border items-center justify-center gap-[120px]">
          <div className="relative rounded-[20px] bg-gray-600 shadow-[0px_2px_6px_rgba(13,_10,_44,_0.08)] w-[420px] h-[350px] shrink-0" />
          <div className="relative rounded-[20px] bg-gray-600 shadow-[0px_2px_6px_rgba(13,_10,_44,_0.08)] w-[420px] h-[350px] shrink-0" />
        </div>
        <div className="absolute top-[137px] left-[290px] inline-block">
          OCR Page
        </div>
        <div className="absolute top-[391px] left-[234px] w-[25px] h-[25px]" />
        <div className="absolute top-[176px] left-[957px] w-[192px] h-[298px] text-base text-gray-1300 font-lexend">
          <div className="absolute top-[0px] left-[14px] text-sm font-inter text-black whitespace-pre-wrap inline-block">
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              Step 2 Choose output format
            </p>
            <p className="m-[0]">and convert</p>
          </div>
          <div className="absolute top-[74px] left-[6px] flex flex-col items-start justify-start gap-[6px]">
            <div className="rounded-[8px] bg-gray-100 [border:1px_solid_#56ccf2] box-border h-[42px] shrink-0 flex flex-row p-[16px] items-center justify-start">
              <div className="flex flex-row items-center justify-start gap-[8px]">
                <div className="relative font-medium inline-block">
                  Plain text (.txt)
                </div>
                <img
                  className="relative w-[24px] h-[24px] shrink-0"
                  alt=""
                  src="../trigger.svg"
                />
              </div>
            </div>
            <div className="rounded-[8px] bg-white [border:1px_solid_#e0e0e0] box-border hidden flex-col p-[4px_0px] items-start justify-center relative gap-[0px]">
              <div className="h-[40px] shrink-0 flex flex-col p-[8px_12px] box-border items-start justify-center z-[0]">
                <div className="relative font-medium inline-block">
                  Plain text (.txt)
                </div>
              </div>
              <div className="bg-gray-300 flex flex-col p-[8px_12px] box-border items-start justify-center z-[1]">
                <div className="relative font-medium inline-block">
                  Word document (.docx)
                </div>
              </div>
              <div className="flex flex-col p-[8px_12px] box-border items-start justify-center z-[2]">
                <div className="relative font-medium inline-block">Pdf</div>
              </div>
              <div className="self-stretch h-[40px] shrink-0 hidden flex-col p-[8px_12px] box-border items-start justify-center z-[3]">
                <div className="self-stretch relative font-medium inline-block">
                  Highest Price
                </div>
              </div>
              <div className="self-stretch h-[40px] shrink-0 hidden flex-col p-[8px_12px] box-border items-start justify-center z-[4]">
                <div className="self-stretch relative font-medium inline-block">
                  Label 5
                </div>
              </div>
              <div className="absolute m-[0_!important] top-[5px] right-[7px] rounded-[21px] bg-gray-700 w-[5px] h-[140px] shrink-0 hidden z-[5]" />
            </div>
          </div>
          <div className="absolute top-[126px] left-[5px] rounded-[8px] bg-white [border:1px_solid_#e0e0e0] box-border w-[188px] flex flex-col p-[4px_0px] items-start justify-center gap-[0px]">
            <div className="h-[40px] shrink-0 flex flex-col p-[8px_12px] box-border items-start justify-center z-[0]">
              <div className="relative font-medium inline-block">
                Plain text (.txt)
              </div>
            </div>
            <div className="bg-gray-300 flex flex-col p-[8px_12px] box-border items-start justify-center z-[1]">
              <div className="relative font-medium inline-block">
                Word document (.docx)
              </div>
            </div>
            <div className="flex flex-col p-[8px_12px] box-border items-start justify-center z-[2]">
              <div className="relative font-medium inline-block">Pdf</div>
            </div>
            <div className="self-stretch h-[40px] shrink-0 hidden flex-col p-[8px_12px] box-border items-start justify-center z-[3]">
              <div className="self-stretch relative font-medium inline-block">
                Highest Price
              </div>
            </div>
            <div className="self-stretch h-[40px] shrink-0 hidden flex-col p-[8px_12px] box-border items-start justify-center z-[4]">
              <div className="self-stretch relative font-medium inline-block">
                Label 5
              </div>
            </div>
            <div className="absolute m-[0_!important] top-[5px] right-[7px] rounded-[21px] bg-gray-700 w-[5px] h-[140px] shrink-0 hidden z-[5]" />
          </div>
          <div className="absolute top-[calc(50%_+_107px)] left-[0px] rounded-[20px] [background:linear-gradient(90deg,_#c38cf2,_#72a4da_55.56%,_#66ffec)] w-[90px] h-[42px] flex flex-row p-[16px_50px] box-border items-center justify-center text-gray-1400 font-montserrat">
            <div className="relative font-semibold inline-block">Convert</div>
          </div>
        </div>
        <div className="absolute top-[202px] left-[290px] h-[300px] flex flex-col items-center justify-start gap-[16px]">
          <div className="relative inline-block w-[310px] text-4xl">
            <span className="font-semibold">{`Step 1  `}</span>
            <span className="text-2xl font-medium">Upload Image</span>
          </div>
          <img
            className="relative w-[91px] h-[91px] shrink-0 object-cover"
            alt=""
            src="../upload@2x.png"
          />
          <div className="flex flex-col items-center justify-start gap-[0px] text-gray-1100">
            <div className="relative inline-block">Drag and Drop files</div>
            <div className="relative inline-block">OR</div>
            <div className="relative inline-block">Browse</div>
          </div>
          <div className="relative w-[224px] h-[44.55px] shrink-0">
            <div className="absolute top-[calc(50%_-_22.27px)] left-[calc(50%_-_112px)] rounded-[20px] bg-gray-500 shadow-[0px_2px_6px_rgba(13,_10,_44,_0.08)] w-[224px] h-[44.55px]" />
            <img
              className="absolute top-[6.36px] left-[171.82px] w-[31.82px] h-[31.82px] object-cover"
              alt=""
              src="../tick@2x.png"
            />
            <div className="absolute top-[12.73px] left-[28px] inline-block w-[76.36px] h-[19.09px]">{`nepali1.jpg `}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop1;
