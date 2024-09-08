import Image from "next/image";
import React from "react";
import { HiMapPin } from "react-icons/hi2";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const YourProperties = () => {
  return (
    <section className="relative flex flex-col pb-[25px]">
      <div className="flex justify-between">
        <h2 className="md:text-[32px] text-[25px] leading-[40.32px] tracking-[-2%] font-[700] text-primary-color mb-[40px]">
          Your Properties
        </h2>
        <div className="flex gap-[10px] items-center">
          <p className="text-primary-color md:text-[16px] text-[14px] font-[500] leading-[24px] ">
            View all
          </p>
          <button
            className="w-[34px] h-[34px] rounded-full flex items-center justify-center opacity-[0.5] border border-[#0C08391A]"
            style={{
              boxShadow: `
            0px 2px 4px 0px #00000014,
            0px 0px 6px 0px #00000005;
            `,
            }}
          >
            <IoIosArrowBack />
          </button>
          <button
            className="w-[34px] h-[34px] rounded-full flex items-center justify-center border border-[#0C08391A]"
            style={{
              boxShadow: `
            0px 2px 4px 0px #00000014,
            0px 0px 6px 0px #00000005;
            `,
            }}
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
      <div className="flex md:flex-row flex-col lg:gap-[20px] gap-[15px]">
        <div className="flex-grow bg-white rounded-[16px] shadow-lg border border-[#0C08391A]">
          <div className="relative rounded-t-[16px]">
            <img
              src="/assets/productone.svg"
              alt="Property Image"
              className="w-full h-full min-h-[423px] object-cover rounded-t-[16px]"
            />

            <div className="flex gap-[2px] items-end absolute top-[25px] sm:top-[18px] left-0 text-white z-10 px-[17px] py-[8px] rounded-r-full bg-[#954AFC] ">
              <h3 className="flex items-end text-[18px] font-[700] leading-[29px] tracking-[-1%]">
                $5,700 USD*
              </h3>
              <span className="text-[12px] font-[500]">Starting price</span>
            </div>
          </div>

          <div className="px-[12px] py-[20px] md:px-[20px] flex flex-col gap-[15px] justify-between">
            <div className="flex items-end flex-wrap gap-[15px]">
              <div className="flex-grow lg:w-[66.6%] w-full">
                <div className="flex items-center gap-[5px]">
                  <span className="w-[18px] h-[18px] mt-[-2px]">
                    <HiMapPin size={18} color="#954AFC" />
                  </span>
                  <p className="text-[#0C0839] text-[14px] leading-[21px] opacity-50 font-medium">
                    Manchester, United Kingdom
                  </p>
                </div>
                <div className="flex sm:flex-row flex-col gap-[15px] w-full">
                  <h2 className="text-[#0C0839] text-[18px] sm:text-[21px] sm:leading-[29px] font-bold mt-[5px] sm:border-r-2 sm:border-black sm:border-opacity-[0.1] lg:w-[55%] sm:w-[60%]">
                    Beautiful 5-Bedroom Villa near the Beach
                  </h2>
                  <div className="flex flex-col gap-[4px] text-start lg:w-[45%] sm:w-[40%]">
                    <p className="text-[14px] leading-[21px] font-[500] text-primary-color">
                      Property Starting Price
                    </p>
                    <h3 className="md:text-[20px] text-[16px] leading-[29px] font-[700] tracking-[-1%] text-primary-color">
                      5,700,000 USD
                    </h3>
                  </div>
                </div>
              </div>
              <div className="lg:flex hidden gap-[15px] items-center justify-end w-[31%]">
                <button className="bg-white border border-primary-color text-primary-color w-[102px] h-[41px] p-[10px] rounded-full text-[16px] leading-[20.16px] font-[600]">
                  Sell
                </button>
                <button className="w-[126px] h-[41px] p-[10px] rounded-full bg-[#0C0839] border border-[#0C0839] text-white text-[16px] leading-[20.16px] font-[600]">
                  Vote Now
                </button>
              </div>
            </div>
            <div className="lg:hidden flex gap-[15px] w-full items-center justify-end">
              <button className="bg-white border border-primary-color text-primary-color w-[102px] h-[41px] p-[10px] rounded-full text-[16px] leading-[20.16px] font-[600]">
                Sell
              </button>
              <button className="w-[126px] h-[41px] p-[10px] rounded-full bg-[#0C0839] border border-[#0C0839] text-white text-[16px] leading-[20.16px] font-[600]">
                Vote Now
              </button>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col sm:flex-row flex-col gap-[26px]">
          <div
            className="bg-white rounded-[14px] xl:p-[20px] py-[20px] p-[12px]"
            style={{
              boxShadow: `0px 18.1px 54.29px -3.39px rgba(0, 0, 0, 0.06),
                            0px 5.78px 17.33px -2.55px rgba(0, 0, 0, 0.06),
                            0px 2.18px 6.55px -1.7px rgba(0, 0, 0, 0.06),
                            0px 0.72px 2.16px -0.85px rgba(0, 0, 0, 0.06)`,
            }}
          >
            <h2 className="md:text-[20px] text-[16px] font-[700] text-primary-color tracking-[-1%]">
              Current APR: 17%
            </h2>
            <p className="text-sm font-[500] leading-[21px] text-primary-color opacity-[0.5] mt-[7px]">
              Not Boosted
            </p>

            <div className="py-[13px] my-[13px] border-y border-primary-color border-opacity-[0.1] flex flex-wrap gap-[20px]">
              <div>
                <p className="md:text-[20px] text-[16px] font-[700] text-primary-color tracking-[-1%]">
                  $5,500
                </p>
                <p className="text-xs font-[500] leading-[21px] text-primary-color opacity-[0.5]">
                  Your Shares
                </p>
              </div>
              <div>
                <p className="md:text-[20px] text-[16px] font-[700] text-primary-color tracking-[-1%]">
                  89%
                </p>
                <p className="text-xs font-[500] leading-[21px] text-primary-color opacity-[0.5]">
                  6YR Expected ROI
                </p>
              </div>
              <div>
                <p className="md:text-[20px] text-[16px] font-[700] text-primary-color tracking-[-1%]">
                  Monthly
                </p>
                <p className="text-xs font-[500] leading-[21px] text-primary-color opacity-[0.5]">
                  Payout Frequency
                </p>
              </div>
            </div>

            <p className="text-sm font-[500] leading-[21px] text-primary-color opacity-[0.5] opacity-[0.5]">
              Price of Real Estate
            </p>
            <p className="md:text-[20px] text-[16px] font-[700] text-primary-color tracking-[-1%]">
              215,000 USD
            </p>
          </div>

          <div
            className="bg-white rounded-[14px] xl:p-[20px] py-[20px] p-[12px]"
            style={{
              boxShadow: `0px 18.1px 54.29px -3.39px rgba(0, 0, 0, 0.06),
                          0px 5.78px 17.33px -2.55px rgba(0, 0, 0, 0.06),
                          0px 2.18px 6.55px -1.7px rgba(0, 0, 0, 0.06),
                          0px 0.72px 2.16px -0.85px rgba(0, 0, 0, 0.06)`,
            }}
          >
            <div className="flex justify-between items-center">
              <h2 className="md:text-[20px] text-[16px] font-[700] text-primary-color tracking-[-1%]">
                Boosted APR: 22%
              </h2>
              <span className="w-[28px] h-[28px]">
                <Image width={28} height={28} src="/assets/rocket.png" />
              </span>
            </div>

            <div className="py-[13px] my-[13px] border-y border-primary-color border-opacity-[0.1] flex flex-wrap gap-[20px]">
              <div>
                <p className="md:text-[20px] text-[16px] font-[700] text-primary-color tracking-[-1%]">
                  $5,500
                </p>
                <p className="text-xs font-[500] leading-[21px] text-primary-color opacity-[0.5]">
                  Your Shares
                </p>
              </div>
              <div>
                <p className="md:text-[20px] text-[16px] font-[700] text-primary-color tracking-[-1%]">
                  115%
                </p>
                <p className="text-xs font-[500] leading-[21px] text-primary-color opacity-[0.5]">
                  6YR Expected ROI
                </p>
              </div>
              <div>
                <p className="md:text-[20px] text-[16px] font-[700] text-primary-color tracking-[-1%]">
                  Monthly
                </p>
                <p className="text-xs font-[500] leading-[21px] text-primary-color opacity-[0.5]">
                  Payout Frequency
                </p>
              </div>
            </div>

            <p className="text-xs font-[500] leading-[21px] text-primary-color opacity-[0.5]">
              Cost of Booster
            </p>
            <p className="md:text-[20px] text-[16px] font-[700] text-primary-color tracking-[-1%]">
              25,975 STAYS
            </p>

            <button className="flex gap-[4px] w-full mt-[10px] bg-custom-one text-white text-[16px] leading-[20.16px] font-[600] py-[10.5px] px-[15px] rounded-full flex justify-center items-center">
              Boost APR{" "}
              <Image width={20} height={20} src="/assets/rocket.png" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourProperties;
