import Image from "next/image";
import React from "react";
import { FaBuilding } from "react-icons/fa"; // Example icon, replace with actual icon
import { IoIosArrowForward } from "react-icons/io";

const PropertyDashboard = () => {
  return (
    <div
      className="bg-white p-[24px] rounded-[14px] w-full md:w-[45%] max-w-full"
      style={{
        boxShadow: `
        0px 18.1px 54.29px -3.39px #00000006,
        0px 5.78px 17.33px -2.55px #0000000F,
        0px 2.18px 6.55px -1.7px #00000012,
        0px 0.72px 2.16px -0.85px #00000012
        `,
      }}
    >
      {/* Header Section */}
      <div className="flex justify-between gap-[6px] mb-[16px]">
        <div className="flex items-center gap-[15px]">
          <div className="bg-[#954AFC] bg-opacity-[0.1] w-[72px] h-[72px] rounded-full flex items-center justify-center">
            <span className="bg-[#954AFC] bg-opacity-[0.1] w-[56px] h-[56px] rounded-full flex items-center justify-center">
              <Image
                width={40}
                height={40}
                src="/assets/icons/properties.svg"
              />
            </span>
          </div>
          <div>
            <p className="md:text-[28px] text-[22px] font-[700] tracking-[-1%] text-primary-color">
              78
            </p>
            <p className="text-primary-color md:text-[14px] text-[13px] opacity-[0.7] font-[500] leading-[24px]">
              Properties
            </p>
          </div>
        </div>
        <div className="flex flex-col jsutify-between items-end">
          <button className="flex items-center gap-[3px] rotate-[90deg] mt-[14px]">
            <div className="bg-primary-color w-[3px] h-[3px] min-w-[3px] min-h-[3px] rounded-full"></div>
            <div className="bg-primary-color w-[3px] h-[3px] flex min-w-[3px] min-h-[3px] rounded-full"></div>
            <div className="bg-primary-color w-[3px] h-[3px] min-w-[3px] min-h-[3px] rounded-full"></div>
          </button>
          <a
            href="#"
            className="flex items-center mt-auto text-[#954AFC] text-right font-[700] leading-[19.6px] text-[13px]"
          >
            See all properties <IoIosArrowForward color="#954AFC" />
          </a>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-[#954AFC] flex bg-opacity-[0.07] py-[16px] sm:px-[35px] px-[25px] rounded-[8px] flex justify-between">
        <div className="text-center">
          <p className="font-[700] md:text-[20px] text-[16px] tracking-[-1%] text-primary-color">
            22
          </p>
          <p className="text-[13px] text-primary-color font-[500] opacity-[0.7]">
            Clients
          </p>
        </div>
        <div className="w-[2px] min-h-full bg-[#0C0839] bg-opacity-[0.1]"></div>
        <div className="text-center">
          <p className="font-[700] md:text-[20px] text-[16px] tracking-[-1%] text-primary-color">
            39
          </p>
          <p className="text-[13px] text-primary-color font-[500] opacity-[0.7]">
            Transactions
          </p>
        </div>
        <div className="w-[2px] min-h-full bg-[#0C0839] bg-opacity-[0.1]"></div>
        <div className="text-center">
          <p className="font-[700] md:text-[20px] text-[16px] tracking-[-1%] text-primary-color">
            15
          </p>
          <p className="text-[13px] text-primary-color font-[500] opacity-[0.7]">
            Unlisted
          </p>
        </div>
      </div>

      {/* Progress Bars */}
      <p className="text-primary-color md:text-[15px] text-[14px] font-[500] pb-[16px] pt-[34px]">
        Total Shares Sold
      </p>
      <div className="w-full md:h-[16px] h-[12px] bg-[#954AFC] bg-opacity-[0.07] rounded-full mb-[16px]">
        <div
          className="h-full bg-[#954AFC] rounded-[4px]"
          style={{ width: "65%" }}
        ></div>
      </div>
      <div className="w-full md:h-[16px] h-[12px] bg-[#954AFC] bg-opacity-[0.07] rounded-full mb-[24px]">
        <div
          className="h-full bg-primary-color rounded-[4px]"
          style={{ width: "35%" }}
        ></div>
      </div>

      {/* Footer Section */}
      <div className="flex gap-[40px] items-center">
        <div className="flex items-start gap-[8px]">
          <div className="bg-[#954AFC] w-[16px] h-[16px] rounded-[4px]"></div>
          <div>
            <p className="text-primary-color md:text-[18px] text-[16px] md:leading-[28px] font-[700]">
              $45,570
            </p>
            <p className="text-[12px] text-primary-color opacity-[0.7]">
              Amount Collected
            </p>
          </div>
        </div>
        <div className="flex items-start gap-[8px]">
          <div className="bg-primary-color md:w-[16px] w-[14px] md:h-[16px] h-[14px] rounded-[4px]"></div>
          <div>
            <p className="text-primary-color md:text-[18px] text-[16px] md:leading-[28px] font-[700]">
              $4,557
            </p>
            <p className="text-[12px] text-primary-color opacity-[0.7]">
              Commission
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDashboard;
