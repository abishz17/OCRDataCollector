import { TextField } from "@mui/material";

const OCR = () => {
  return (
    <div className="relative bg-gray-1000 w-full h-[2230px] overflow-auto text-left text-5xs text-white font-inter">
      <div className="absolute h-[6.73%] w-full top-[0%] right-[0%] bottom-[93.27%] left-[0%] text-xs">
        <div className="absolute top-[calc(50%_-_45px)] left-[70px] flex flex-row items-center justify-center gap-[20px]">
          <img
            className="relative w-[90px] h-[90px] shrink-0 object-cover"
            alt=""
            src="../image-3@2x.png"
          />
          <div className="relative font-semibold inline-block">HamroOCR</div>
        </div>
        <div className="absolute top-[calc(50%_-_14px)] right-[70px] flex flex-row items-center justify-start gap-[69px] text-2xs text-turquoise">
          <div className="relative inline-block">Home</div>
          <div className="relative inline-block">Features</div>
          <div className="relative inline-block">FAQ</div>
          <div className="relative inline-block">About</div>
          <div className="relative inline-block">Contacts</div>
        </div>
      </div>
      <div className="absolute h-[23.77%] w-full top-[6.73%] right-[0%] bottom-[69.51%] left-[0%] text-[80px] font-montserrat">
        <div className="absolute h-[70.4%] top-[11.2%] bottom-[18.4%] left-[calc(50%_-_495px)] w-[1033px] flex flex-col items-center justify-center">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
            alt=""
            src="../vector-pencil.svg"
          />
        </div>
        <div className="absolute h-[62.8%] top-[13.8%] bottom-[23.4%] left-[calc(50%_-_538px)] w-[659px] flex flex-col items-start justify-center gap-[33px]">
          <div className="w-[659px] h-[210px] shrink-0 flex flex-col items-start justify-center gap-[20px]">
            <b className="self-stretch flex-1 relative inline-block">
              Are You Ready?
            </b>
            <div className="self-stretch flex-1 relative text-base font-medium font-inter inline-block">
              Lets start converting your handwriting into digital text
            </div>
          </div>
          <div className="w-[526px] h-[71px] shrink-0 flex flex-row items-center justify-center gap-[33px]">
            <button className="cursor-pointer [border:none] p-[16px_50px] bg-[transparent] self-stretch flex-1 rounded-[20px] [background:linear-gradient(90deg,_#c38cf2,_#72a4da_55.56%,_#66ffec)] flex flex-row box-border items-center justify-center">
              <div className="relative text-sm font-semibold font-montserrat text-gray-700 text-left inline-block">
                Convert
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-[15px_25px] bg-[transparent] self-stretch flex-1 rounded-[20px] [background:linear-gradient(90deg,_#c38cf2,_#72a4da_55.56%,_#66ffec)] flex flex-row box-border items-center justify-center">
              <div className="relative text-sm font-semibold font-montserrat text-gray-700 text-left inline-block">
                Watch Video
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute h-[20.18%] w-full top-[30.49%] right-[0%] bottom-[49.33%] left-[0%] bg-gray-900 text-base text-teal font-zilla-slab">
        <div className="absolute h-[72.89%] top-[13.56%] bottom-[13.56%] left-[calc(50%_-_540px)] w-[1079px] flex flex-row items-center justify-start gap-[130px]">
          <div className="flex-1 relative font-medium inline-block">
            HamroOCR is an initiative to help computers learn how people write
            in Nepali and understand it.
          </div>
          <div
            className="[border:none] bg-[transparent] font-inter text-2xs flex-1 relative text-gray-300 text-left inline-block"
            placeholder={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices eros in cursus turpis massa tincidunt dui ut ornare.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices eros in cursus turpis massa tincidunt dui ut ornare.

`}
          >
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ultrices eros in cursus turpis massa tincidunt dui ut ornare.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ultrices eros
              in cursus turpis massa tincidunt dui ut ornare.
            </p>
            <p className="m-[0]">&nbsp;</p>
          </div>
        </div>
      </div>
      <div className="absolute h-[24.66%] w-full top-[50.67%] right-[0%] bottom-[24.66%] left-[0%] bg-gray-100 text-gray-600">
        <div className="absolute top-[calc(50%_-_213px)] left-[calc(50%_-_542px)] w-[530px] h-[426.08px]">
          <div className="absolute top-[calc(50%_-_213.04px)] left-[calc(50%_-_265px)] rounded-[20px] bg-white shadow-[0px_2px_6px_rgba(13,_10,_44,_0.08)] w-[530px] h-[426.08px]" />
          <div className="absolute top-[calc(50%_+_163.16px)] left-[calc(50%_-_196.04px)] w-[426.68px] h-[16.63px] text-center">
            <div className="absolute top-[calc(50%_-_8.31px)] left-[calc(50%_-_213.34px)] leading-[16px] inline-block w-[48.84px] h-[16.63px]">
              Week 1
            </div>
            <div className="absolute top-[calc(50%_-_8.31px)] left-[calc(50%_-_97.11px)] leading-[16px] inline-block w-[50.92px] h-[16.63px]">
              Week 2
            </div>
            <div className="absolute top-[calc(50%_-_8.31px)] left-[calc(50%_+_44.05px)] leading-[16px] inline-block w-[51.96px] h-[16.63px]">{`Week 3 `}</div>
            <div className="absolute top-[calc(50%_-_8.31px)] left-[calc(50%_+_161.38px)] leading-[16px] inline-block w-[51.96px] h-[16.63px]">
              Week 4
            </div>
          </div>
          <div className="absolute top-[calc(50%_-_70.15px)] left-[calc(50%_-_230.33px)] w-[23.9px] h-[200.69px] text-right">
            <div className="absolute top-[calc(50%_+_83.72px)] left-[calc(50%_+_2.6px)] leading-[16px] inline-block w-[9.35px] h-[16.63px]">
              0
            </div>
            <div className="absolute top-[calc(50%_+_22.37px)] left-[calc(50%_-_3.64px)] leading-[16px] inline-block w-[15.59px] h-[16.63px]">
              1k
            </div>
            <div className="absolute top-[calc(50%_-_38.99px)] left-[calc(50%_-_5.72px)] leading-[16px] inline-block w-[17.67px] h-[16.63px]">
              5k
            </div>
            <div className="absolute top-[calc(50%_-_100.35px)] left-[calc(50%_-_11.95px)] leading-[16px] inline-block w-[23.9px] h-[16.63px]">
              10k
            </div>
          </div>
          <img
            className="absolute top-[calc(50%_-_63.34px)] left-[calc(50%_-_196.04px)] w-[426.37px] h-[213.06px]"
            alt=""
            src="../chart-lines.svg"
          />
          <img
            className="absolute top-[calc(50%_-_48.8px)] left-[calc(50%_-_196.03px)] w-[426.07px] h-[160.22px]"
            alt=""
            src="../lines.svg"
          />
          <div className="absolute top-[calc(50%_-_103.27px)] left-[calc(50%_-_230.83px)] border-t-[1px_solid_#e5e5ef] box-border w-[461.66px] h-[1px]" />
          <div className="absolute top-[calc(50%_-_174.64px)] left-[calc(50%_+_134.98px)] w-[94.04px] h-[41.54px]">
            <div className="absolute top-[calc(50%_-_20.77px)] left-[calc(50%_-_47.02px)] rounded-[10px] h-[16px] flex flex-row items-center justify-end gap-[8px]">
              <div className="relative rounded-[10px] bg-gray-400 w-[10px] h-[10px] shrink-0" />
              <div className="relative leading-[16px] inline-block">
                Last Month
              </div>
            </div>
            <div className="absolute top-[calc(50%_+_4.77px)] left-[calc(50%_-_46.98px)] rounded-[10px] h-[16px] flex flex-row items-center justify-end gap-[9px]">
              <div className="relative rounded-[8px] bg-tan w-[10px] h-[10px] shrink-0" />
              <div className="relative leading-[16px] inline-block">
                This Month
              </div>
            </div>
          </div>
          <div className="absolute top-[calc(50%_-_179.67px)] left-[calc(50%_-_230.33px)] w-[155.76px] h-[54.04px] text-gray-500">
            <div className="absolute top-[calc(50%_+_2.49px)] left-[calc(50%_-_11.49px)] leading-[16px] inline-block w-[89.37px] h-[16.63px]">
              past 30 days
            </div>
            <b className="absolute top-[calc(50%_-_2.08px)] left-[calc(50%_-_77.88px)] text-3xs leading-[28px] inline-block text-gray-800 w-[66.51px] h-[29.1px]">
              9,845
            </b>
            <div className="absolute top-[calc(50%_-_27.02px)] left-[calc(50%_-_77.88px)] text-4xs leading-[20px] inline-block w-[127.82px] h-[20.78px]">
              Words Trained
            </div>
          </div>
        </div>
        <div className="absolute top-[calc(50%_-_213px)] left-[calc(50%_+_11px)] w-[530px] h-[426.08px]">
          <div className="absolute top-[calc(50%_-_213.04px)] left-[calc(50%_-_265px)] rounded-[20px] bg-white shadow-[0px_2px_6px_rgba(13,_10,_44,_0.08)] w-[530px] h-[426.08px]" />
          <div className="absolute top-[calc(50%_+_163.16px)] left-[calc(50%_-_196.04px)] w-[426.68px] h-[16.63px] text-center">
            <div className="absolute top-[calc(50%_-_8.31px)] left-[calc(50%_-_213.34px)] leading-[16px] inline-block w-[48.84px] h-[16.63px]">
              Week 1
            </div>
            <div className="absolute top-[calc(50%_-_8.31px)] left-[calc(50%_-_97.11px)] leading-[16px] inline-block w-[50.92px] h-[16.63px]">
              Week 2
            </div>
            <div className="absolute top-[calc(50%_-_8.31px)] left-[calc(50%_+_44.05px)] leading-[16px] inline-block w-[51.96px] h-[16.63px]">{`Week 3 `}</div>
            <div className="absolute top-[calc(50%_-_8.31px)] left-[calc(50%_+_161.38px)] leading-[16px] inline-block w-[51.96px] h-[16.63px]">
              Week 4
            </div>
          </div>
          <div className="absolute top-[calc(50%_-_70.15px)] left-[calc(50%_-_230.33px)] w-[23.9px] h-[200.69px] text-right">
            <div className="absolute top-[calc(50%_+_83.72px)] left-[calc(50%_+_2.6px)] leading-[16px] inline-block w-[9.35px] h-[16.63px]">
              0
            </div>
            <div className="absolute top-[calc(50%_+_22.37px)] left-[calc(50%_-_3.64px)] leading-[16px] inline-block w-[15.59px] h-[16.63px]">
              1k
            </div>
            <div className="absolute top-[calc(50%_-_38.99px)] left-[calc(50%_-_5.72px)] leading-[16px] inline-block w-[17.67px] h-[16.63px]">
              5k
            </div>
            <div className="absolute top-[calc(50%_-_100.35px)] left-[calc(50%_-_11.95px)] leading-[16px] inline-block w-[23.9px] h-[16.63px]">
              10k
            </div>
          </div>
          <img
            className="absolute top-[calc(50%_-_63.34px)] left-[calc(50%_-_196.04px)] w-[426.37px] h-[213.06px]"
            alt=""
            src="../chart-lines1.svg"
          />
          <img
            className="absolute top-[calc(50%_-_48.8px)] left-[calc(50%_-_196.03px)] w-[426.07px] h-[160.22px]"
            alt=""
            src="../lines1.svg"
          />
          <div className="absolute top-[calc(50%_-_103.27px)] left-[calc(50%_-_230.83px)] border-t-[1px_solid_#e5e5ef] box-border w-[461.66px] h-[1px]" />
          <div className="absolute top-[calc(50%_-_174.64px)] left-[calc(50%_+_134.98px)] w-[94.04px] h-[41.54px]">
            <div className="absolute top-[calc(50%_-_20.77px)] left-[calc(50%_-_47.02px)] rounded-[10px] h-[16px] flex flex-row items-center justify-end gap-[8px]">
              <div className="relative rounded-[10px] bg-gray-400 w-[10px] h-[10px] shrink-0" />
              <div className="relative leading-[16px] inline-block">
                Last Month
              </div>
            </div>
            <div className="absolute top-[calc(50%_+_4.77px)] left-[calc(50%_-_46.98px)] rounded-[10px] h-[16px] flex flex-row items-center justify-end gap-[9px]">
              <div className="relative rounded-[8px] bg-tan w-[10px] h-[10px] shrink-0" />
              <div className="relative leading-[16px] inline-block">
                This Month
              </div>
            </div>
          </div>
          <div className="absolute top-[calc(50%_-_179.67px)] left-[calc(50%_-_230.33px)] w-[162.5px] h-[54.04px] text-gray-500">
            <div className="absolute top-[calc(50%_+_2.49px)] left-[calc(50%_-_8.12px)] leading-[16px] inline-block w-[89.37px] h-[16.63px]">
              past 30 days
            </div>
            <b className="absolute top-[calc(50%_-_2.08px)] left-[calc(50%_-_81.25px)] text-3xs leading-[28px] inline-block text-gray-800 w-[66.51px] h-[29.1px]">
              9,845
            </b>
            <div className="absolute top-[calc(50%_-_27.02px)] left-[calc(50%_-_81.25px)] text-4xs leading-[20px] inline-block">
              Words Validated
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[22.42%] w-full top-[75.34%] right-[0%] bottom-[2.24%] left-[0%] bg-gray-200 text-2xs text-black">
        <div className="absolute h-[56.2%] top-[32.4%] bottom-[11.4%] left-[calc(50%_-_541px)] w-[1080px]">
          <div className="absolute top-[0px] left-[0px] w-[1080px] h-[281px]">
            <div className="absolute top-[169px] left-[0px] [border:1px_solid_#9291a5] box-border w-[1080px] h-[112px]">
              <div className="absolute top-[36.61%] left-[calc(50%_-_490px)] font-light inline-block">
                Message
              </div>
            </div>
            <TextField
              className="[border:none] bg-[transparent] absolute top-[84px] left-[550px]"
              sx={{ width: 530 }}
              color="primary"
              variant="filled"
              type="text"
              label="Email"
              placeholder="Placeholder"
              size="medium"
              margin="none"
            />
            <div className="absolute top-[84px] left-[0px] [border:1px_solid_#9291a5] box-border w-[530px] h-[61px]">
              <div className="absolute top-[26.23%] left-[calc(50%_-_215px)] font-light inline-block">
                Feedback/Collaboration
              </div>
              <img
                className="absolute h-[65.57%] top-[18.03%] right-[15px] bottom-[16.39%] max-h-full w-[24px]"
                alt=""
                src="../group-17.svg"
              />
            </div>
            <TextField
              className="[border:none] bg-[transparent] absolute top-[0px] left-[550px]"
              sx={{ width: 530 }}
              color="primary"
              variant="filled"
              type="text"
              label="Last Name"
              placeholder="Placeholder"
              size="medium"
              margin="none"
            />
            <TextField
              className="[border:none] bg-[transparent] absolute top-[0px] left-[0px]"
              sx={{ width: 530 }}
              color="primary"
              variant="filled"
              type="text"
              label="First Name"
              placeholder="Placeholder"
              size="medium"
              margin="none"
            />
          </div>
        </div>
        <div className="absolute top-[11.4%] left-[calc(50%_-_264px)] text-base font-semibold inline-block">
          Share your experience with us
        </div>
      </div>
      <div className="absolute h-[0.9%] top-[98.57%] bottom-[0.53%] left-[calc(50%_-_540px)] w-[154px] font-font-awesome-5-free">
        <div className="absolute h-[95.24%] top-[4.76%] left-[calc(50%_-_77px)] leading-[22px] uppercase inline-block w-[16px]">{` `}</div>
        <div className="absolute h-[95.24%] top-[0%] left-[calc(50%_-_58px)] leading-[22px] uppercase font-light font-inter inline-block w-[135px]">
          kiran bhattarai
        </div>
      </div>
    </div>
  );
};

export default OCR;
