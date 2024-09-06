"use client";
import React, { useState } from "react";
import { LuThumbsDown, LuThumbsUp } from "react-icons/lu";

const VotePopup = ({ isOpen, onClose, onBuyNow }) => {
  if (!isOpen) return null;
  const [selected, setSelected] = useState("card");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-[10px]">
      <div className="bg-white rounded-[20px] shadow-lg md:px-[25px] md:py-[25px] py-[20px] px-[15px] max-w-[580px] max-h-screen w-full overflow-y-auto">
        <div className="flex justify-between items-center pb-[20px] border-b border-[#000000] border-opacity-[0.1]">
          <h2 className="md:text-[20px] text-[18px] font-[700] leading-[30.24px] text-primary-color">
            3-Bedroom Family home
          </h2>
          <button
            className="text-[24px] w-[30px] h-[30px] border-[1.5px] border-opacity-[0.1] border-[#000000] rounded-full flex items-center justify-center"
            onClick={onClose}
          >
            <span className="mt-[-6px]">&times;</span>
          </button>
        </div>
        <div className="sm:pt-[25px] pt-[15px]">
          <p className="text-primary-color text-[12px] uppercase font-[500] opacity-[0.5] leading-[16px] pb-[10px]">
            Proposal
          </p>
          <div className="flex sm:flex-row flex-col sm:gap-[18px] gap-[6px] md:items-center justify-between bg-[#0C0839] bg-opacity-[0.04] rounded-[14px] p-[15px]">
            <p className="text-[#0C0839] text-[14px] font-medium leading-[24px] capitalize">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              nunc ipsum, accumsan vitae quam nec, vestibulum eleifend massa.
              Morbi varius accumsan laoreet. Aenean imperdiet ut dui ac
              imperdiet. Donec eu metus at ipsum fermentum ornare.
            </p>
          </div>

          <div className="sm:pt-[25px] pt-[15px]">
            <p className="text-primary-color uppercase text-[12px] opacity-[0.5] font-[500] leading-[16px] pb-[10px]">
              CAST YOUR VOTE
            </p>
            <div className="flex flex-wrap sm:gap-[20px] gap-[6px] items-center justify-between">
              <button
                onClick={() => setSelected("card")}
                className={`flex items-center sm:gap-[12px] gap-[6px] text-primary-color flex-1 p-3 rounded-[10px] justify-between ${
                  selected === "card"
                    ? "bg-[#954AFC0D] border-[1.5px] border-[#954AFC]"
                    : "bg-white border-[1.5px] border-[#0000001A]"
                }`}
              >
                <div className="flex items-center gap-[6px]">
                  <div
                    className={`p-[8px] rounded-[10px] ${
                      selected === "Yes" ? "bg-white" : "bg-[#0C08390F]"
                    }`}
                  >
                    <div className=" flex items-center gap-3 bg-transparent">
                      <span className="text-black">
                        <LuThumbsUp size={20} />
                      </span>
                    </div>
                  </div>
                  <span className="text-black text-[14px] leading-[20.16px] font-[500]">
                    Yes
                  </span>
                </div>
                <span
                  className={`w-[16px] h-[16px] border-[1.5px] rounded-full flex items-center justify-center ${
                    selected === "card"
                      ? "border-[#954AFC]"
                      : "border-[#0000001F]"
                  }`}
                >
                  {selected === "card" && (
                    <span className="w-[8px] h-[8px] bg-[#954AFC] rounded-full"></span>
                  )}
                </span>
              </button>

              <button
                onClick={() => setSelected("crypto")}
                className={`flex items-center sm:gap-[12px] gap-[6px] text-primary-color flex-1 p-3 rounded-[10px] justify-between ${
                  selected === "crypto"
                    ? "bg-[#954AFC0D] border-[1.5px] border-[#954AFC]"
                    : "bg-white border-[1.5px] border-[#0000001A]"
                }`}
              >
                <div className="flex items-center gap-[6px]">
                  <div
                    className={`p-[8px] rounded-[10px] ${
                      selected === "No" ? "bg-white" : "bg-[#0C08390F]"
                    }`}
                  >
                    <span className="text-black">
                      <LuThumbsDown size={20} />
                    </span>
                  </div>
                  <span className="text-black text-[14px] leading-[20.16px] font-[500]">
                    No
                  </span>
                </div>
                <span
                  className={`w-[16px] h-[16px] border-[1.5px] rounded-full flex items-center justify-center ${
                    selected === "crypto"
                      ? "border-[#954AFC]"
                      : "border-[#0000001F]"
                  }`}
                >
                  {selected === "crypto" && (
                    <span className="w-[8px] h-[8px] bg-[#954AFC] rounded-full"></span>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-[20px] justify-between items-center sm:mt-[40px] mt-[20px]">
          <button
            className="text-primary-color text-[14px] font-[600] flex-grow p-[11px] rounded-full bg-white border"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="text-white text-[14px] font-[600] flex-grow py-[11px] rounded-full bg-custom-gradient"
            onClick={onBuyNow}
          >
            Vote Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default VotePopup;
