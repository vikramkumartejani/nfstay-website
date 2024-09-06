import Image from "next/image";
import React from "react";
import { FaBuilding } from "react-icons/fa"; // Example icon, replace with actual icon

const PropertyDashboard = () => {
  return (
    <div
      className="bg-white p-[24px] rounded-[14px] w-full md:w-[350px] max-w-full"
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
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-3">
          <div className="bg-[#954AFC] bg-opacity-[0.1] w-[72px] h-[72px] p-2 rounded-full flex items-center justify-center">
            <span className="bg-[#954AFC] bg-opacity-[0.1] w-[56px] h-[56px] rounded-full flex items-center justify-center">
              <Image
                width={40}
                height={40}
                src="/assets/icons/properties.svg"
              />
            </span>
          </div>
          <div>
            <p className="text-[32px] font-bold text-primary-color">78</p>
            <p className="text-gray-600">Properties</p>
          </div>
        </div>
        <a href="#" className="text-purple-600 text-[14px]">
          See all properties →
        </a>
      </div>

      {/* Stats Section */}
      <div className="bg-[#954AFC] bg-opacity-[0.07] p-3 rounded-[10px] flex justify-between items-center mb-6">
        <div className="text-center">
          <p className="font-bold text-primary-color">22</p>
          <p className="text-[14px] text-gray-500">Clients</p>
        </div>
        <div className="w-[1px] h-full bg-gray-300"></div>
        <div className="text-center">
          <p className="font-bold text-primary-color">39</p>
          <p className="text-[14px] text-gray-500">Transactions</p>
        </div>
        <div className="w-[1px] h-full bg-gray-300"></div>
        <div className="text-center">
          <p className="font-bold text-primary-color">15</p>
          <p className="text-[14px] text-gray-500">Unlisted</p>
        </div>
      </div>

      {/* Progress Bars */}
      <p className="text-gray-700 font-[500] mb-3">Total Shares Sold</p>
      <div className="w-full h-[16px] bg-[#954AFC] bg-opacity-[0.07] rounded-full mb-3">
        <div
          className="h-full bg-[#954AFC] rounded-[4px]"
          style={{ width: "65%" }}
        ></div>
      </div>
      <div className="w-full h-[16px] bg-[#954AFC] bg-opacity-[0.07] rounded-[4px] mb-6">
        <div
          className="h-full bg-[#0C0839] rounded-[4px]"
          style={{ width: "50%" }}
        ></div>
      </div>

      {/* Footer Section */}
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-purple-200 w-4 h-4 rounded-full mr-2"></div>
          <div>
            <p className="text-primary-color font-bold">$45,570</p>
            <p className="text-[12px] text-gray-500">Amount Collected</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="bg-black w-4 h-4 rounded-full mr-2"></div>
          <div>
            <p className="text-primary-color font-bold">$4,557</p>
            <p className="text-[12px] text-gray-500">Commission</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDashboard;
