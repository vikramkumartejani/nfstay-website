import Image from "next/image";
import React from "react";
import { LuDownloadCloud } from "react-icons/lu";

const DownloadConfidential = () => {
  return (
    <section className="pb-[30px] sm:pb-[60px]">
      <div className="relative flex flex-col items-center justify-center min-h-[209px] rounded-[14px] bg-[#954AFC] md:px-[15px] px-[12px] py-[25px] overflow-hidden">
        <img
          className="absolute left-0 z-[0] opacity-[0.8] h-full object-cover"
          src="/assets/download-confidential-object.svg"
          alt="object"
        />
        <h3 className="lg:mb-[32px] mb-[20px] font-[700] md:text-[32px] sm:text-[25px] text-[20px] md:leading-[40.32px] leading-[25px] tracking-[-2%] text-center text-white z-[5]">
          Download Confidential documents
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-[15px] z-[5]">
          <button className="flex md:gap-[10px] gap-[5px] text-[14px] font-[500] leading-[23px] tracking-[-2%] bg-white rounded-full px-[15px] py-[7px] items-center justify-center text-primary-color">
            Independent Property Report
            <span>
              <LuDownloadCloud className="text-[#954AFC]" />
            </span>
          </button>
          <button className="flex md:gap-[10px] gap-[5px] text-[14px] font-[500] leading-[23px] tracking-[-2%] bg-white rounded-full px-[15px] py-[7px] items-center justify-center text-primary-color">
            Independent Area Report
            <span>
              <LuDownloadCloud className="text-[#954AFC]" />
            </span>
          </button>
          <button className="flex md:gap-[10px] gap-[5px] text-[14px] font-[500] leading-[23px] tracking-[-2%] bg-white rounded-full px-[15px] py-[7px] items-center justify-center text-primary-color">
            Memorandum & Disclaimer
            <span>
              <LuDownloadCloud className="text-[#954AFC]" />
            </span>
          </button>
          <button className="flex md:gap-[10px] gap-[5px] text-[14px] font-[500] leading-[23px] tracking-[-2%] bg-white rounded-full px-[15px] py-[7px] items-center justify-center text-primary-color">
            Projections Report
            <span>
              <LuDownloadCloud className="text-[#954AFC]" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DownloadConfidential;