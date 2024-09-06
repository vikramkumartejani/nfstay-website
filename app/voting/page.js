"use client";
import React, { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import { SlLocationPin } from "react-icons/sl";
import { LuThumbsDown, LuThumbsUp } from "react-icons/lu";
import { IoIosCheckmarkCircle } from "react-icons/io";
import RecentProposals from "./RecentProposals";
import Image from "next/image";
import VotePopup from "./VotePopup";

const Voting = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleClose = () => {
    setIsPopupOpen(false);
  };

  const handleBuyNow = () => {
    // Add your buy now logic here
    console.log("Buy Now clicked!");
  };

  return (
    <DashboardLayout>
      <h2 className="text-[26px] leading-[40.32px] tracking-[-2%] font-[700] text-primary-color pt-[120px] lg:pt-[32px] pb-[32px] px-4 sm:px-6">
        Proposals
      </h2>

      <div className="flex flex-col gap-7 md:gap-14 pb-[80px]">
        <div className="vote-card text-primary-color flex justify-between rounded-lg px-4 md:px-[25px] gap-[25px]">
          <div
            className="bg-white flex items-center md:items-start lg:p-6 py-5 px-2.5 rounded-[14px]"
            style={{ boxShadow: "0px 0px 11.7px 0px #00000026" }}
          >
            {/* Main Content Section */}
            <div className="flex-grow flex flex-col md:gap-[18px] gap-[10px]">
              {/* Image Section */}
              <div className="flex md:flex-row flex-col lg:gap-[25px] md:gap-[18px] gap-[10px]">
                <Image
                  src="/assets/bedroom-family.svg"
                  alt="Property"
                  width={130}
                  height={130}
                />
                <div className="flex flex-col">
                  <div className="flex sm:flex-row flex-col items-start justify-between md:space-x-2">
                    <h2 className="lg:text-[20px] md:text-[18px] text-[16px] font-[700] leading-[28.24px]">
                      3-Bedroom Family home
                    </h2>
                    <p className="py-2 sm:py-0 text-primary-color font-[400] lg:text-[14px] text-[12px] leading-[20px] opacity-[0.6] flex items-center gap-[3.6px]">
                      <SlLocationPin
                        className="flex-shrink-0"
                        stroke="1.5px"
                        size={17}
                      />
                      Stockholm, Sweden
                    </p>
                  </div>
                  <p className="text-primary-color font-[400] md:text-[14px] text-[12px] leading-[24px] md:mt-[15px] mt-[6px]">
                    Should we sell the property at a future market valuation of
                    $1,000,000? Nibh risus dui ac in quis cursus nibh nulla.
                    Amet ut tristique quisque.
                  </p>
                </div>
              </div>

              {/* Voting Section */}
              <div className="flex sm:flex-row flex-col sm:gap-[18px] gap-[6px]">
                <div className="flex flex-col justify-between text-left items-start min-h-full lg:min-w-[130px] md:min-w-[100px] min-w-[80px]">
                  <div className="flex flex-col items-start gap-[5px]">
                    <p className="text-primary-color leading-[24px] font-[400] text-[11px] opacity-50">
                      {" "}
                      CREATED BY
                    </p>
                    <div className="font-[400] leading-[20px] flex gap-[6px] text-[14px]">
                      <div className="w-[24px] h-[24px]">
                        <Image
                          src="/assets/chat-profile3.jpg"
                          alt="profile"
                          width={24}
                          height={24}
                          className="rounded-full"
                        />
                      </div>
                      <span className="border-b border-b-primary-color">
                        Gohard
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] font-[400] leading-[24px] opacity-[0.5]">
                    120 of 600 voted
                  </span>
                </div>

                <div className="flex flex-col gap-[6px] w-full">
                  <p className="opacity-[0.5] text-[11px] font-[400] leading-[24px]">
                    VOTE
                  </p>
                  <div className="flex flex-col gap-[10px]">
                    <div className="flex space-x-4">
                      <div className="relative flex items-center w-[100%] bg-gray-100 rounded-[10px] h-10 overflow-hidden">
                        <div className="relative flex items-center gap-[10px] pl-[12px] z-10">
                          <span className="text-black">
                            <LuThumbsUp size={20} />
                          </span>
                          <span className="text-black text-[14px] leading-[20.16px] font-[500]">
                            Yes
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <div className="relative flex items-center w-[100%] bg-gray-100 rounded-[10px] h-10 overflow-hidden">
                        <div className="relative flex items-center gap-[10px] pl-[12px] z-10">
                          <span className="text-black">
                            <LuThumbsDown size={20} />
                          </span>
                          <span className="text-black text-[14px] leading-[20.16px] font-[500]">
                            No
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-end justify-end">
                  <button
                    className="min-w-[140px] h-[49px] text-[14px] font-semibold bg-[#0C0839] rounded-[1111px] text-white"
                    onClick={togglePopup}
                  >
                    Vote Now
                  </button>

                  {/* Popup */}
                  <VotePopup
                    isOpen={isPopupOpen}
                    onClose={handleClose}
                    onBuyNow={handleBuyNow}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Time Remaining Section */}
          <div
            className="time-card bg-[#F5F5F5] rounded-[14px] lg:px-[20px] px-[10px] py-[10px] lg:py-[25px]"
            style={{ boxShadow: "0px 0px 11.7px 0px #00000026" }}
          >
            <p className="lg:text-[26px] md:text-[22px] text-[18px] leading-[37.8px] font-[700] text-primary-color">
              1d : 12h : 47m : <span className="text-[#954AFC]">22s</span>
            </p>
            <p className="text-primary-color md:text-[14px] text-[12px] font-[400] leading-[24px] md:mt-[10px] md:pb-[20px] pb-[8px] border-[#0000001F] border-b-[1.5px]">
              Time Remaining
            </p>

            <div className="md:pt-[24px] pt-[8px]">
              <p className="text-primary-color md:text-[14px] text-[12px] leading-[24px] font-[400] opacity-[0.6]">
                Minimum Requirements
              </p>
              <ul className="flex flex-col md:gap-[15px] gap-[10px] text-primary-color md:text-[14px] text-[12px] leading-[20.16px] font-[500] mt-2 space-y-1">
                <li className="flex sm:items-start items-center gap-[10px]">
                  <span className="w-[22px] h-[22px]">
                    <IoIosCheckmarkCircle size={20} />
                  </span>
                  At least 50% of all owners must vote
                </li>
                <li className="flex sm:items-start items-center gap-[10px]">
                  <span className="w-[22px] h-[22px]">
                    <IoIosCheckmarkCircle size={20} />
                  </span>
                  Overall, 75% must accept the proposal
                </li>
                <li className="flex sm:items-start items-center gap-[10px]">
                  <span className="w-[22px] h-[22px]">
                    <IoIosCheckmarkCircle size={20} />
                  </span>
                  A vote is valid for 7 days
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="vote-card text-primary-color flex justify-between rounded-lg px-4 md:px-[25px] gap-[25px]">
          <div
            className="bg-white flex items-center md:items-start lg:p-6 py-5 px-2.5 rounded-[14px]"
            style={{ boxShadow: "0px 0px 11.7px 0px #00000026" }}
          >
            {/* Main Content Section */}
            <div className="flex-grow flex flex-col md:gap-[18px] gap-[10px]">
              <div className="flex md:flex-row flex-col lg:gap-[25px] md:gap-[18px] gap-[10px]">
                <Image
                  src="/assets/bedroom-family.svg"
                  alt="Property"
                  width={130}
                  height={130}
                />
                <div className="flex flex-col">
                  <div className="flex sm:flex-row flex-col items-start justify-between md:space-x-2">
                    <h2 className="lg:text-[20px] md:text-[18px] text-[16px] font-[700] leading-[30.24px]">
                      3-Bedroom Family home
                    </h2>
                    <p className="py-2 sm:py-0 text-primary-color font-[400] lg:text-[14px] text-[12px] leading-[20px] opacity-[0.6] flex items-center gap-[3.6px]">
                      <SlLocationPin
                        className="flex-shrink-0"
                        stroke="1.5px"
                        size={17}
                      />
                      Stockholm, Sweden
                    </p>
                  </div>
                  <p className="text-primary-color font-[400] md:text-[14px] text-[12px] leading-[24px] md:mt-[15px] mt-[6px]">
                    Should we sell the property at a future market valuation of
                    $1,000,000? Nibh risus dui ac in quis cursus nibh nulla.
                    Amet ut tristique quisque.
                  </p>
                </div>
              </div>

              <div className="flex sm:flex-row flex-col sm:gap-[25px] gap-[6px]">
                <div className="flex flex-col justify-between text-left items-start min-h-full lg:min-w-[130px] md:min-w-[100px] min-w-[80px]">
                  <div className="flex flex-col items-start gap-[5px]">
                    <p className="text-primary-color leading-[24px] font-[400] text-[11px] opacity-50">
                      {" "}
                      CREATED BY
                    </p>
                    <div className="font-[400] leading-[20px] flex gap-[6px] text-[14px]">
                      <div className="w-[24px] h-[24px]">
                        <Image
                          src="/assets/chat-profile3.jpg"
                          alt="profile"
                          width={24}
                          height={24}
                          className="rounded-full"
                        />
                      </div>
                      <span className="border-b border-b-primary-color">
                        Gohard
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] font-[400] leading-[24px] opacity-[0.5]">
                    120 of 600 voted
                  </span>
                </div>

                <div className="flex flex-col gap-[6px] w-full">
                  <p className="opacity-[0.5] text-[11px] font-[400] leading-[24px]">
                    VOTE
                  </p>
                  <div className="flex flex-col gap-[10px]">
                    <div className="flex space-x-4">
                      <div className="relative flex items-center w-full bg-gray-100 rounded-[10px] h-10 overflow-hidden">
                        <div
                          className="absolute left-0 top-0 h-full bg-[#20E19F] rounded-[10px]"
                          style={{ width: "30%" }}
                        ></div>

                        <div className="relative flex items-center gap-[10px] pl-[12px] z-10">
                          <span className="text-white">
                            <LuThumbsUp size={20} />
                          </span>
                          <span className="text-white text-[14px] leading-[20.16px] font-[500]">
                            Yes
                          </span>
                        </div>

                        <div className="absolute right-[7px] top-0 h-full flex items-center z-10">
                          <p className="text-primary-color opacity-[0.5] text-[13px] font-[400] leading-[17.64px]">
                            12 votes
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      {/* Progress Bar Container */}
                      <div className="relative flex items-center w-full bg-gray-100 rounded-[10px] h-10 overflow-hidden">
                        {/* Progress Bar */}
                        <div
                          className="absolute left-0 top-0 h-full bg-[#954AFC] rounded-[10px]"
                          style={{ width: "80%" }}
                        ></div>

                        {/* Thumbs Up and Text */}
                        <div className="relative flex items-center gap-[10px] pl-[12px] z-10">
                          <span className="text-white">
                            <LuThumbsDown size={20} />
                          </span>
                          <span className="text-white text-[14px] leading-[20.16px] font-[500]">
                            No
                          </span>
                        </div>

                        {/* Votes Count */}
                        <div className="absolute right-[7px] top-0 h-full flex items-center z-10">
                          <p className="text-primary-color opacity-[0.5] text-[13px] font-[400] leading-[17.64px]">
                            68 votes
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Time Remaining Section */}
          <div
            className="time-card bg-[#F5F5F5] rounded-[14px] lg:px-[20px] px-[10px] py-[10px] lg:py-[25px]"
            style={{ boxShadow: "0px 0px 11.7px 0px #00000026" }}
          >
            <p className="lg:text-[26px] md:text-[22px] text-[18px] leading-[37.8px] font-[700] text-primary-color">
              1d : 12h : 47m : <span className="text-[#954AFC]">22s</span>
            </p>
            <p className="text-primary-color md:text-[14px] text-[12px] font-[400] leading-[24px] md:mt-[10px] md:pb-[20px] pb-[8px] border-[#0000001F] border-b-[1.5px]">
              Time Remaining
            </p>

            <div className="md:pt-[24px] pt-[8px]">
              <p className="text-primary-color md:text-[14px] text-[12px] leading-[24px] font-[400] opacity-[0.6]">
                Minimum Requirements
              </p>
              <ul className="flex flex-col md:gap-[15px] gap-[10px] text-primary-color md:text-[14px] text-[12px] leading-[20.16px] font-[500] mt-2 space-y-1">
                <li className="flex sm:items-start items-center gap-[10px]">
                  <span className="w-[22px] h-[22px]">
                    <IoIosCheckmarkCircle size={20} />
                  </span>
                  At least 50% of all owners must vote
                </li>
                <li className="flex sm:items-start items-center gap-[10px]">
                  <span className="w-[22px] h-[22px]">
                    <IoIosCheckmarkCircle size={20} />
                  </span>
                  Overall, 75% must accept the proposal
                </li>
                <li className="flex sm:items-start items-center gap-[10px]">
                  <span className="w-[22px] h-[22px]">
                    <IoIosCheckmarkCircle size={20} />
                  </span>
                  A vote is valid for 7 days
                </li>
              </ul>
            </div>
          </div>
        </div>

        <RecentProposals />
      </div>
    </DashboardLayout>
  );
};

export default Voting;
