import React from "react";
import { BiDollar } from "react-icons/bi";
import LineChart from "./LineChart";
import CongratulationModal from "./CongratulationModal";

const HowMuchOverview = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-[26px]">
            {/* Left Section */}
            <div
                className="flex-grow rounded-[14px] bg-white w-full"
                style={{ boxShadow: "0px 0px 11.7px 0px #00000026" }}
            >
                <h3 className="text-[20px] font-[600] leading-[25.2px] text-primary-color px-[23px] pt-[24px] pb-[20px]">
                    How much can you earn with this Property?
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[18px] gap-y-[32px] mb-4 p-[25px] border-t border-t-[#0C0839] border-opacity-[0.2]">
                    <div className="text-primary-color">
                        <label className="block opacity-[0.5] text-[18px] font-[500] leading-[27px] mb-[8px]">
                            Initial Amount
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="20,000"
                                className="w-full outline-none ps-[42px] px-[21px] py-[19px] text-[18px] placeholder:text-[#0C0839] font-[600] leading-[27px] border border-[#0000001F] bg-white rounded-[14px]"
                            />

                            <BiDollar
                                size={20}
                                className="absolute left-[21px] inset-y-0 top-1/2 transform -translate-y-1/2"
                            />
                        </div>
                    </div>
                    <div className="text-primary-color">
                        <label className="block opacity-[0.5] text-[18px] font-[500] leading-[27px] mb-[8px]">
                            Expected Annual Appreciation
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                value="20%"
                                className="w-full px-[21px] outline-none py-[19px] text-[18px] font-[600] leading-[27px] text-primary-color text-opacity-[0.6] bg-[#F5F5F5] rounded-[14px]"
                                readOnly
                            />
                            <span className="absolute right-[21px] w-[22px] h-[22px] inset-y-0 top-1/2 transform -translate-y-1/2">
                                <img src="/assets/icons/lock-icon.svg" alt="lock-icon" />
                            </span>
                        </div>
                    </div>
                    <div className="text-primary-color">
                        <label className="block opacity-[0.5] text-[18px] font-[500] leading-[27px] mb-[8px]">
                            Net Dividend Yield
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                value="14.86%"
                                className="w-full px-[21px] outline-none py-[19px] text-[18px] font-[600] leading-[27px] text-primary-color text-opacity-[0.6] bg-[#F5F5F5] rounded-[14px]"
                                readOnly
                            />
                            <span className="absolute right-[21px] w-[22px] h-[22px] inset-y-0 top-1/2 transform -translate-y-1/2">
                                <img src="/assets/icons/lock-icon.svg" alt="lock-icon" />
                            </span>
                        </div>
                    </div>
                    <div className="text-primary-color">
                        <label className="block opacity-[0.5] text-[18px] font-[500] leading-[27px] mb-[8px]">
                            Holding Period
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                value="6 Years"
                                className="w-full px-[21px] outline-none py-[19px] text-[18px] font-[600] leading-[27px] text-primary-color text-opacity-[0.6] bg-[#F5F5F5] rounded-[14px]"
                                readOnly
                            />

                            <span className="absolute right-[21px] w-[22px] h-[22px] inset-y-0 top-1/2 transform -translate-y-1/2">
                                <img src="/assets/icons/lock-icon.svg" alt="lock-icon" />
                            </span>
                        </div>
                    </div>
                </div>

                <div className="px-4 md:px-[25px] pt-[20px] bg-white">
                    <div className="w-full h-full">
                        <LineChart />
                    </div>
                    <div className="flex max-w-[533px] mx-auto items-center justify-center py-[18px]">
                        <p className="text-center text-[12px] font-[500] leading-[16px] text-primary-color text-opacity-[0.5]">
                            This calculator is for illustrative purposes only. Buying a
                            real-estate NFT carries risk and you may not receive the
                            anticipated returns.
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div
                className="lg:max-w-[400px] w-full rounded-[14px] bg-white"
                style={{ boxShadow: "0px 0px 11.7px 0px #00000026" }}
            >
                <h3 className="text-primary-color text-[20px] font-[600] leading-[25.2px] px-[23px] pt-[24px] pb-[20px]">
                    Overview
                </h3>
                <div className="flex flex-col justify-between">
                    <ul className="text-primary-color border-t border-t-[#0C0839] border-opacity-[0.2] px-[25px] pt-[27px] pb-[31px]">
                        <li className="flex flex-col gap-[10px] justify-between pb-[25px] border-b border-b-[#000000] border-opacity-[0.1]">
                            <span className="text-[20px] font-[600] leading-[23px]">
                                14.86%
                            </span>
                            <span className="text-[16px] leading-[16px] font-[500] opacity-[0.5]">
                                Total Average Annualized Return
                            </span>
                        </li>
                        <li className="flex flex-col gap-[10px] justify-between py-[25px] border-b border-b-[#000000] border-opacity-[0.1]">
                            <span className="text-[20px] font-[600] leading-[23px]">
                                USD 17,832
                            </span>
                            <span className="text-[16px] leading-[16px] font-[500] opacity-[0.5]">
                                Total Rental Income
                            </span>
                        </li>
                        <li className="flex flex-col gap-[10px] justify-between py-[25px]  border-b border-b-[#000000] border-opacity-[0.1]">
                            <span className="text-[20px] font-[600] leading-[23px]">
                                USD 4,000
                            </span>
                            <span className="text-[16px] leading-[16px] font-[500] opacity-[0.5]">
                                Expected Capital Appreciation
                            </span>
                        </li>
                        <li className="flex flex-col gap-[10px] justify-between py-[25px] border-b border-b-[#000000] border-opacity-[0.1]">
                            <span className="text-[20px] font-[600] leading-[23px]">
                                USD 21,832 (109.12%)
                            </span>
                            <span className="text-[16px] leading-[16px] font-[500] opacity-[0.5]">
                                Total Return
                            </span>
                        </li>
                        <li className="flex flex-col gap-[10px] justify-between py-[25px] border-b border-b-[#000000] border-opacity-[0.1]">
                            <span className="text-[20px] font-[600] leading-[23px]">
                                USD 41,832
                            </span>
                            <span className="text-[16px] leading-[16px] font-[500] opacity-[0.5]">
                                Total Expected Value After 6 Years
                            </span>
                        </li>
                    </ul>
                    <div className="px-[25px] pb-[23px]">
                        <button className="w-full py-[16px] gap-[6px] rounded-full text-white text-[16px] leading-[20.16px] font-[600] bg-custom-gradient flex items-center justify-center">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowMuchOverview;