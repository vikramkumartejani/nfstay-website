import React from "react";
import { HiCalculator } from "react-icons/hi";
import {
    IoIosArrowBack,
    IoIosArrowForward,
    IoIosInformationCircleOutline,
} from "react-icons/io";

const YourProperties = () => {
    return (
        <section className="relative flex flex-col pb-[25px]">
            <div className="flex justify-between">
                <h2 className="md:text-[32px] text-[25px] leading-[40.32px] tracking-[-2%] font-[700] text-primary-color mb-[40px]">
                    Your Properties
                </h2>
                <div className="flex gap-[10px]">
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
                            className="w-full h-full min-h-[300px] object-cover rounded-t-[16px]"
                        />

                        <div className="flex gap-[6px] absolute top-[18px] sm:top-[15px] right-[18px] bg-[#0000004D] text-white p-[10px] rounded-[10px] z-10">
                            <span className="w-[24px] h-[24px]">
                                <HiCalculator size={24} />
                            </span>
                            <div className="flex flex-col">
                                <p className="flex gap-[6px]">
                                    <span className="font-[700] text-[16px] tracking-[-1%]">
                                        17%
                                    </span>
                                    <span className="mt-auto font-[400] text-[12px] tracking-[-1%]">
                                        22%
                                    </span>
                                </p>
                                <p className="font-[500] text-[10px] leading-[16px] opacity-[0.7]">
                                    Current APR
                                </p>
                            </div>
                            <span className="w-[16px] h-[16px] my-auto">
                                <IoIosInformationCircleOutline size={16} />
                            </span>
                        </div>
                    </div>

                    <div className="p-[12px] md:p-[20px] flex flex-col gap-[15px] justify-between">
                        <div className="flex flex-wrap gap-[15px]">
                            <div className="min-w-[289px] flex-grow lg:w-[289px] flex-shrink-1">
                                <p className="text-[#0C0839] text-[13px] leading-[21px] opacity-50 font-medium">
                                    Manchester, United Kingdom
                                </p>
                                <h2 className="text-[#0C0839] text-[18px] sm:text-[21px] sm:leading-[29px] font-bold mt-[5px]">
                                    1-Bedroom studio apartment near of the city center
                                </h2>
                            </div>

                            <div className="flex flex-wrap gap-[13px] text-start mt-auto">
                                <div className="flex flex-col gap-1.5">
                                    <p className="text-[17px] leading-[29px] tracking-[-0.01em] font-bold text-[#0C0839]">
                                        38%
                                    </p>
                                    <p className="text-[11px] leading-[16px] font-medium opacity-50 text-[#0C0839] w-max">
                                        Expected Return
                                    </p>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <p className="text-[17px] leading-[29px] tracking-[-0.01em] font-bold text-[#0C0839]">
                                        5.66%
                                    </p>
                                    <p className="text-[11px] leading-[16px] font-medium opacity-50 text-[#0C0839] w-max">
                                        Dividend Yield
                                    </p>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <p className="text-[17px] leading-[29px] tracking-[-0.01em] font-bold text-[#0C0839]">
                                        Monthly
                                    </p>
                                    <p className="text-[11px] leading-[16px] font-medium opacity-50 text-[#0C0839] w-max">
                                        Dividend Frequency
                                    </p>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <p className="text-[17px] leading-[29px] tracking-[-0.01em] font-bold text-[#0C0839]">
                                        Monthly
                                    </p>
                                    <p className="text-[11px] leading-[16px] font-medium opacity-50 text-[#0C0839] w-max">
                                        Value of your Share
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[12px] flex gap-[15px] items-center justify-end">
                            <button className="w-[154px] h-[41px] p-[10px] rounded-full border border-[#0C0839] text-primary-color text-[16px] leading-[20.16px] font-[600]">
                                Vote Now
                            </button>
                            <button className="bg-custom-four w-[154px] h-[41px] p-[10px] rounded-full text-white text-[16px] leading-[20.16px] font-semibold">
                                Sell
                            </button>
                        </div>
                    </div>
                </div>
                <div className="md:w-[362px] relative bg-white rounded-[16px] shadow-lg border border-[#0C08391A] max-h-[100%]">
                    <div className="relative rounded-t-[16px]">
                        <img
                            src="/assets/productone.svg"
                            alt="Property Image"
                            className="w-full md:h-[262px] h-[200px] object-cover rounded-t-[16px]"
                        />

                        <div className="absolute -bottom-[18px] sm:-bottom-[18px] h-[40px] -left-2 z-30 bg-[#954AFC] text-white font-bold text-[20px] leading-[29px] tracking-[-0.01em] px-4 rounded-r-[8px] shadow-lg rounded-t-[8px] flex items-center">
                            $215 USD{" "}
                            <span className="text-[12px] leading-[29px] font-medium ml-1 pt-1">
                                Starting price
                            </span>
                        </div>

                        <button className="absolute active:scale-100 scale-105 top-2 sm:top-2 right-2 bg-white p-2 rounded-full shadow-sm z-40">
                            <img
                                src="/assets/icons/favorited.svg"
                                alt="favorited"
                                width={16}
                                height={16}
                            />
                        </button>

                        <div className="absolute top-2 left-2 bg-white w-[111px] h-[27px] rounded-[36px] flex items-center justify-center">
                            <h3 className="text-[12px] leading-[16px] tracking-[1px] font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#9945FF] to-[#20E19F]">
                                Buy to let
                            </h3>
                        </div>
                    </div>

                    <div className="flex flex-col gap-[13px] px-[12px] md:px-[15px]">
                        <div>
                            <h2 className="text-[#0C0839] text-[20px] sm:text-[22px] sm:leading-[29px] font-bold mt-[25px] mb-[7px]">
                                1-Bedroom studio apartment near of the city center
                            </h2>
                            <p className="text-[#0C0839] text-[14px] leading-[21px] opacity-50 font-medium">
                                Manchester, United Kingdom
                            </p>
                        </div>

                        <div className="flex justify-between text-start py-[13px] border-y border-[#0C0839] border-opacity-10">
                            <div className="flex flex-col gap-1.5">
                                <p className="text-[20px] leading-[29px] tracking-[-0.01em] font-bold text-[#0C0839]">
                                    38%
                                </p>
                                <p className="text-[11px] leading-[16px] font-medium opacity-50 text-[#0C0839]">
                                    Expected Return
                                </p>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <p className="text-[20px] leading-[29px] tracking-[-0.01em] font-bold text-[#0C0839]">
                                    5.66%
                                </p>
                                <p className="text-[11px] leading-[16px] font-medium opacity-50 text-[#0C0839]">
                                    Dividend Yield
                                </p>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <p className="text-[20px] leading-[29px] tracking-[-0.01em] font-bold text-[#0C0839]">
                                    Monthly
                                </p>
                                <p className="text-[11px] leading-[16px] font-medium opacity-50 text-[#0C0839]">
                                    Dividend Frequency
                                </p>
                            </div>
                        </div>

                        <div className="border-b border-[#0C0839] border-opacity-10 py-3.5">
                            <h3 className="text-[#0B0924] text-[14px] leading-[21px] font-semibold mb-1.5">
                                75 of 100 NFTs minted
                            </h3>
                            <div className="rounded-[53px] w-full h-[10px] bg-[#F7F6FF]">
                                <div
                                    className="bg-custom-three h-[10px] rounded-[53px]"
                                    style={{ width: "45%" }}
                                ></div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between pb-[13px]">
                            <div>
                                <h4 className="text-[#0C0839] text-[14px] leading-[21px] font-medium opacity-50">
                                    Price of Real Estate
                                </h4>
                                <h2 className="text-[#0C0839] text-[20px] leading-[29px] tracking-[-0.01em] font-bold">
                                    215,000 USD
                                </h2>
                            </div>
                            <div>
                                <button className="bg-custom-four w-[126px] h-[40px] rounded-[1111px] text-white text-[16px] leading-[20.16px] font-semibold">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default YourProperties;