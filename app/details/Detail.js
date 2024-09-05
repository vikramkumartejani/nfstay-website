import React from "react";
import { LuBedDouble, LuCodesandbox, LuUsers } from "react-icons/lu";
import { FiEye } from "react-icons/fi";
import { FaLock, FaRegHeart } from "react-icons/fa6";
import { IoIosInformationCircleOutline } from "react-icons/io";

const Detail = () => {
  return (
    <div className="flex lg:flex-row flex-col gap-[30px] bg-white rounded-xl">
      <div className="relative w-full xl:max-w-[610px] xl:h-[460px]">
        <img
          src="/assets/image.svg"
          className="w-full h-full rounded-xl object-cover"
          alt="Property Image"
        />
        <div className="absolute top-[22px] left-2 sm:left-[21px] bg-white rounded-[36px] flex items-center justify-center">
          <h3 className="flex gap-[5px] items-center text-[12px] leading-[16px] tracking-[1px] font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#9945FF] to-[#20E19F] px-2 py-[5px]">
            <span className="min-w-[16px] min-h-[16px]">
              <img src="/assets/icons/map-pin.svg" alt="location icon" />
            </span>
            Manchester, United Kingdom
          </h3>
        </div>
        <div className="absolute top-[21px] right-2 sm:right-[21px] bg-white text-gray-700 text-sm font-semibold w-[30px] h-[30px] p-[7px] rounded-full shadow-md">
          <span className="w-[16px] h-[16px]">
            <img
              className="w-full h-full"
              src="/assets/icons/favorited.svg"
              alt="favorite-icon"
            />
          </span>
        </div>
      </div>

      <div className=" text-primary-color">
        <div className="flex w-fit gap-[10px] items-center justify-start border-[#8165EC] border rounded-[11px] px-[14px] py-[10px] mb-4">
          <span className="w-[20px] h-[20px] text-[#8165EC]">
            <LuBedDouble size={20} />
          </span>
          <span className="text-[#8165EC] text-[14px] font-normal leading-[21px]">
            3 Beds | 1,800 sqft
          </span>
        </div>

        <h2 className="text-primary-color lg:text-[32px] text-[25px] font-bold lg:leading-[40.32px] tracking-[-0.02em]">
          Authentic 3-Bedroom Penthouse with a Private Terrace
        </h2>

        <div className="grid grid-cols-2 sm:flex items-center gap-7 flex-warp text-primary-color text-[15px] font-semibold leading-[21px] mt-[24px] mb-[30px]">
          <div className="flex w-max gap-[6px] items-center flex-wrap">
            <span className="w-[20px] h-[20px] opacity-[0.5]">
              <LuUsers size={20} />
            </span>
            650 Owners
          </div>
          <div className="flex gap-[6px] items-center flex-wrap">
            <span className="w-[20px] h-[20px] opacity-[0.5]">
              <LuCodesandbox size={20} />
            </span>
            1000 Total NFTs
          </div>
          <div className="flex gap-[6px] items-center flex-wrap">
            <span className="w-[20px] h-[20px] opacity-[0.5]">
              <FiEye size={20} />
            </span>
            0 Views
          </div>
          <div className="flex gap-[6px] items-center flex-wrap">
            <span className="w-[20px] h-[20px] opacity-[0.5]">
              <FaRegHeart size={20} />
            </span>
            1.2k Favorites
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[15px]">
          <div className="flex flex-col gap-[15px] bg-[#F5F5F5] px-3 py-4 sm:p-4 rounded-[14px]">
            <h3 className="text-[14px] sm:text-[16px] sm:leading-[24px] font-normal text-primary-color">
              Property Listing Price
            </h3>
            <p className="text-[20px] sm:text-[30px] font-bold text-primary-color">
              860,000 USD
            </p>
          </div>
          <div className="flex flex-col gap-[15px] bg-[#F5F5F5] px-3 py-4 sm:p-4 rounded-[14px]">
            <h3 className="text-[14px] sm:text-[16px] leading-[24px] font-[400] text-primary-color">
              Annual Yield
            </h3>
            <p className="text-[20px] sm:text-[30px] font-[700] text-primary-color">
              14.86%
            </p>
          </div>
          <div className="flex flex-col gap-[15px] bg-[#F5F5F5] px-3 py-4 sm:p-4 rounded-[14px]">
            <h3 className="text-[14px] sm:text-[16px] leading-[24px] font-[400] text-primary-color">
              6 YR Expected Asset Appreciation
            </h3>
            <p className="text-[20px] sm:text-[30px] font-[700] text-primary-color">
              20%
            </p>
          </div>
          <div className="flex flex-col gap-[15px] bg-[#F5F5F5] px-3 py-4 sm:p-4 rounded-[14px]">
            <h3 className="flex gap-[9px] items-center text-[14px] sm:text-[16px] leading-[24px] font-[400] text-primary-color">
              6 YR Expected ROI
              <IoIosInformationCircleOutline />
            </h3>
            <p className="text-[20px] sm:text-[30px] font-[700] text-primary-color">
              109.12%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;