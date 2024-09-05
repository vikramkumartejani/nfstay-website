"use client";
import { useState } from "react";
import { BiSolidCopy } from "react-icons/bi";

export default function InviteFriends() {
  const [buttonText, setButtonText] = useState("Copy");
  const link = "https://app.nfstay.com/agentX10%propertyA";

  const handleCopyClick = () => {
    navigator.clipboard.writeText(link).then(() => {
      setButtonText("Copied");

      setTimeout(() => {
        setButtonText("Copy");
      }, 2000);
    });
  };
  return (
    <div className=" pb-[30px]">
      <div
        className="bg-white rounded-[14px] px-[25px] py-[60px] flex flex-col items-center justify-center text-center"
        style={{ boxShadow: "0px 0px 11.7px 0px #00000026" }}
      >
        <div className="flex flex-wrap justify-center items-center gap-[12px]">
          <h2 className="text-[16px] font-semibold text-[#0C0839]">Agent URL</h2>
          <div className="flex justify-center items-center bg-[#9945FF] bg-opacity-[0.1] rounded-[10px] md:px-[20px] px-[12px] py-[13px] border border-[1.5px] border-dashed border-[#9945FF]">
            <span className="md:text-[16px] sm:text-[14px] text-[13px] leading-[19.09px] font-semibold text-[#9945FF]">
              {link}
            </span>
          </div>
          <button
            onClick={handleCopyClick}
            className="bg-[#9945FF] text-white sm:px-[23px] px-[18px] md:py-[13px] py-[11px] rounded-[10px] text-[16px] font-[500] leading-[19.09px] flex items-center gap-[12px]"
          >
            <span className="w-[21px] h-[21px]">
              <BiSolidCopy size={21} color="white" />
            </span>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}