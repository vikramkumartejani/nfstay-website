import Image from "next/image";
import React from "react";

const SideContent = () => {
  return (
    <div className="min-w-full md:min-w-[338px] h-full shadow-custom-one px-3.5 sm:px-6 py-12 rounded-[14px]">
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-start gap-2">
            <h1 className="text-[#0C0839] font-bold md:text-[20px] text-[18px] mt-[-2px]">
              1.
            </h1>
            <button className="border-b-[3px] border-[#7673E3] text-[#0C0839] md:text-[20px] text-[18px] leading-[25px] tracking-[-0.02em] font-bold pb-2.5">
              Add
            </button>
            <button className="text-[#0C0839] opacity-50 md:text-[20px] text-[18px] leading-[25px] tracking-[-0.02em] font-medium ml-5">
              Remove
            </button>
          </div>
          <div className="flex items-start">
            <img
              className="w-[24px] h-[24px] mt-[-14px]"
              src="/assets/icons/setting-logo.svg"
              alt="setting"
            />
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-2.5">
          <label className="text-[#0C0839] text-[16px] leading-[22px] font-medium">
            Choose Amount
          </label>
          <input
            type="text"
            className="bg-[#F5F5F5] h-[47px] rounded-[14px] px-4 outline-none text-[#0C0839] text-opacity-50 text-[16px] leading-[22px] font-medium"
          />
        </div>
        <div className="mt-3.5 flex flex-col gap-2.5">
          <label className="text-[#0C0839] text-[16px] leading-[22px] font-medium">
            LO Quantity
          </label>
          <div className="bg-[#F5F5F5] h-[47px] rounded-[14px] flex items-center justify-between px-4">
            <input
              type="text"
              placeholder="0.00"
              className="bg-transparent outline-none text-[#0C0839] text-opacity-50 text-[16px] leading-[22px] font-medium"
            />
            <Image src="/assets/icons/lp.svg" alt="LP" width={48} height={18} />
          </div>
        </div>
        <div className="mt-3.5 flex items-center justify-between w-full gap-4">
          <button className="border border-[#954AFC] rounded-lg h-[42px] text-[#954AFC] text-[12px] leading-[15.12px] font-semibold w-full">
            Crypto Payment
          </button>
          <button className="bg-[#954AFC] rounded-lg h-[42px] text-[12px] leading-[15.12px] font-semibold text-white w-full">
            Card Payment
          </button>
        </div>
      </div>

      <div className="mt-12">
        <h1 className="md:text-[20px] text-18px font-bold text-[#0C0839] leading-[25px] tracking-[-0.02em]">
          2. Stake
        </h1>
        <button className="mt-6 bg-[#954AFC] rounded-lg h-[42px] text-[12px] leading-[15.12px] font-semibold text-white w-full">
          Add to Pool
        </button>
      </div>

      <div className="mt-12">
        <h1 className="md:text-[20px] text-[18px] font-bold text-[#0C0839] leading-[25px] tracking-[-0.02em]">
          2. Earn
        </h1>
        <div className="mt-6 mb-3.5 flex items-center justify-between gap-2">
          <h2 className="text-[#0C0839] text-[16px] leading-[22px] font-medium">
            Stay Earned
          </h2>
          <Image src="/assets/icons/n.svg" alt="n" width={27} height={28} />
        </div>
        <input
          type="text"
          placeholder="0.00"
          className="bg-[#F5F5F5] w-full h-[47px] rounded-[14px] px-4 outline-none text-[#0C0839] text-[16px] leading-[22px] font-medium"
        />
        <div className="mt-6 flex items-center justify-between w-full gap-4">
          <button className=" bg-[#954AFC] rounded-lg h-[50px] text-[12px] w-[70%] leading-[15.12px] font-semibold text-white">
            Claim & Reinvest
          </button>
          <button className="border border-[#01060F1F] rounded-[10px] h-[50px] w-[30%] text-[#0C0839] text-[14px] leading-[17px] font-semibold">
            Claim
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideContent;
