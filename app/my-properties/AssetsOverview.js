import { FiHome } from "react-icons/fi";

export default function AssetsOverview() {
  return (
    <div
      className="bg-white rounded-[14px] flex-grow lg:w-auto w-full"
      style={{
        boxShadow: `
      0px 18.1px 54.29px -3.39px #00000006,
      0px 5.78px 17.33px -2.55px #0000000F,
      0px 2.18px 6.55px -1.7px #00000012,
      0px 0.72px 2.16px -0.85px #00000012
  `,
      }}
    >
      {/* Header */}
      <h2 className="flex gap-[4px] items-center justify-between sm:text-[24px] text-[20px] leading-[40.32px] tracking-[-2%] font-[700] text-primary-color pt-[25px] pb-[25px] md:px-[20px] px-[12px] border-b border-b-[#0C0839] border-opacity-[0.2]">
        Assets Overview
      </h2>

      {/* Properties Section */}
      <div className="md:px-[25px] px-[12px] py-[30px]">
        <div className="border-b border-b-[#A0A3AA] pb-[40px]">
          <div className="flex justify-between items-center">
            <div className="flex items-start gap-[10px] w-full">
              {/* Icon */}
              <div className="min-w-[42px] min-h-[42px] w-[42px] h-[42px] text-white bg-custom-one rounded-full flex items-center justify-center">
                <FiHome size={24} />
              </div>
              {/* Text */}
              <div className="flex flex-col w-full">
                <div className="flex flex-wrap gap-[4px] justify-between items-center">
                  <div>
                    <div className="flex items-center gap-[6px]">
                      <h3 className="text-[18px] leading-[22.68px] font-[600] text-primary-color">
                        Properties
                      </h3>
                      <span className="bg-[#0C083917] rounded-full">
                        <p className="text-[12px] leading-[15.12px] py-[6px] px-[10px] font-[500] text-[#01060F]">
                          4.33 stacked
                        </p>
                      </span>
                    </div>
                    <p className="md:text-[14px] text-[12px] leading-[17.64px] font-[500] text-[#9945FF] mt-[8px]">
                      Current Price: $501
                    </p>
                  </div>

                  {/* Amount */}
                  <div className="sm:text-right">
                    <h3 className="md:text-[20px] text-[18px] font-[700] leading-[26.46px] text-[#01060F]">
                      $27,4433.87
                    </h3>
                    <p className="md:text-[14px] text-[12px] text-[#7F8798] mt-[8px]">
                      Amount: 32,236.77
                    </p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="flex gap-[18px] items-center pt-[20px]">
                  <div className="overflow-hidden w-full h-[7px] text-xs flex rounded-full bg-[#A0A3AA] bg-opacity-[0.2]">
                    <div
                      style={{ width: "30%" }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#0C0839] rounded-full"
                    ></div>
                  </div>
                  <div className="text-[14px] leading-[17.64px] font-[500] text-[#01060F]">
                    30%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LP Token Section */}
        <div className="border-b border-b-[#A0A3AA] py-[40px]">
          <div className="flex justify-between items-center">
            <div className="flex items-start gap-[10px] w-full">
              {/* Icon */}
              <div className="flex space-x-[-17px]">
                <div className="min-w-[42px] min-h-[42px] w-[42px] h-[42px] text-white bg-custom-one rounded-full flex items-center justify-center">
                  <img className="h-full w-full" src="/assets/icons/usdc.svg" />
                </div>
                <div className="min-w-[42px] min-h-[42px] w-[42px] h-[42px] text-white bg-custom-one rounded-full flex items-center justify-center">
                  <img className="h-full w-full" src="/assets/icons/stay.svg" />
                </div>
              </div>
              {/* Text */}
              <div className="flex flex-col w-full">
                <div className="flex flex-wrap gap-[4px] justify-between items-center">
                  <div>
                    <div className="flex items-center gap-[6px]">
                      <h3 className="text-[18px] leading-[22.68px] font-[600] text-primary-color">
                        LP Token
                      </h3>
                      <span className="bg-[#0C083917] rounded-full">
                        <p className="text-[12px] leading-[15.12px] py-[6px] px-[10px] font-[500] text-[#01060F]">
                          0 stacked
                        </p>
                      </span>
                    </div>
                    <p className="md:text-[14px] text-[12px] leading-[17.64px] font-[500] text-[#9945FF] mt-[8px]">
                      Current Price: $2.18
                    </p>
                  </div>

                  {/* Amount */}
                  <div className="sm:text-right">
                    <h3 className="md:text-[20px] text-[18px] font-[700] leading-[26.46px] text-[#01060F]">
                      $0
                    </h3>
                    <p className="md:text-[14px] text-[12px] text-[#7F8798] mt-[8px]">
                      Amount: 0
                    </p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="flex gap-[18px] items-center pt-[15px]">
                  <div className="overflow-hidden w-full h-[7px] text-xs flex rounded-full bg-[#A0A3AA] bg-opacity-[0.2]">
                    <div
                      style={{ width: "1.3%" }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#0C0839] rounded-full"
                    ></div>
                  </div>
                  <div className="text-[14px] leading-[17.64px] font-[500] text-[#01060F]">
                    00%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stay Token Section */}
        <div className="py-[40px]">
          <div className="flex justify-between items-center">
            <div className="flex items-start gap-[10px] w-full">
              {/* Icon */}
              <div className="min-w-[42px] min-h-[42px] w-[42px] h-[42px] text-white rounded-full flex items-center justify-center">
                <img className="h-full w-full" src="/assets/icons/stay.svg" />
              </div>
              {/* Text */}
              <div className="flex flex-col w-full">
                <div className="flex flex-wrap gap-[4px] justify-between items-center">
                  <div>
                    <div className="flex items-center gap-[6px]">
                      <h3 className="text-[18px] leading-[22.68px] font-[600] text-primary-color">
                        Stay
                      </h3>
                      <span className="bg-[#0C083917] rounded-full">
                        <p className="text-[12px] leading-[15.12px] py-[6px] px-[10px] font-[500] text-[#01060F]">
                          0 stacked
                        </p>
                      </span>
                    </div>
                    <p className="md:text-[14px] text-[12px] leading-[17.64px] font-[500] text-[#9945FF] mt-[8px]">
                      Current Price: $0.00014
                    </p>
                  </div>

                  {/* Amount */}
                  <div className="sm:text-right">
                    <h3 className="md:text-[20px] text-[18px] font-[700] leading-[26.46px] text-[#01060F]">
                      $0
                    </h3>
                    <p className="md:text-[14px] text-[12px] text-[#7F8798] mt-[8px]">
                      Amount: 0
                    </p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="flex gap-[18px] items-center pt-[15px]">
                  <div className="overflow-hidden w-full h-[7px] text-xs flex rounded-full bg-[#A0A3AA] bg-opacity-[0.2]">
                    <div
                      style={{ width: "1.3%" }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#0C0839] rounded-full"
                    ></div>
                  </div>
                  <div className="text-[14px] leading-[17.64px] font-[500] text-[#01060F]">
                    00%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
