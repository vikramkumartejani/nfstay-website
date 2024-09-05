import Image from "next/image";
import React from "react";

const FinancialBreakdown = () => {
  return (
    <div className="pb-[60px]">
      <h1 className="text-[25px] sm:text-[32px] leading-[40.32px] tracking-[-2%] font-[700] text-center text-primary-color mb-[40px]">
        Financial Breakdown
      </h1>
      <div className="flex flex-col lg:flex-row gap-[30px] justify-center items-start">
        {/* Transaction Card */}
        <div className="bg-[#F7F6FF] rounded-[14px] px-4 py-6 sm:p-[25px] w-full lg:w-1/2">
          <div className="flex justify-between items-center pb-[20px] border-b border-opacity-[0.1] border-b-[#000000]">
            <div className="flex items-center">
              <div className="bg-white p-[9px] rounded-[10px] mr-2">
                {/* Placeholder for Icon */}
                <span className="w-[22px] h-[22px]">
                  <img src="/assets/icons/wallet-black.svg" alt="wallet" />
                </span>
              </div>
              <div>
                <h2 className="text-[18px] font-[600] leading-[22.68px] text-primary-color">
                  Transaction
                </h2>
                <a
                  href="#"
                  className="text-[12px] font-[400] text-[#954AFC] leading-[14px]"
                >
                  Details
                </a>
              </div>
            </div>
            <div className="flex items-center gap-[12px]">
              <span className="text-[12px] font-[500] leading-[16px] text-primary-color opacity-[0.5]">
                Last Update: 2 days ago
              </span>
              <div className="w-[34px] h-[34px] border border-[#0000001F] rounded-[7px] flex items-center justify-center">
                <div className="h-[1.5px] w-[12px] bg-primary-color"></div>
              </div>
            </div>
          </div>
          <ul className="text-primary-color flex flex-col gap-[14px] pt-[20px]">
            <li className="flex justify-between gap-1">
              <span className="text-[13px] sm:text-[15px] font-[500] leading-[18.9px] opacity-[0.5]">
                Property Listing Price
              </span>
              <span className="text-[13px] sm:text-[15px] font-[600] leading-[18.9px]">
                USD 728,000
              </span>
            </li>
            <li className="flex justify-between gap-1">
              <span className="text-[13px] sm:text-[15px] font-[600] leading-[18.9px]">
                Transaction Costs
              </span>
              <span className="text-[13px] sm:text-[15px] font-[600] leading-[18.9px]">
                USD 72,000
              </span>
            </li>
            <li className="flex justify-between gap-1">
              <span className="text-[13px] sm:text-[15px] font-[500] leading-[18.9px] opacity-[0.5]">
                Title Search & Insurance (0.5% - 1%)
              </span>
              <span className="text-[13px] sm:text-[15px] font-[600] leading-[18.9px]">
                USD 7,200
              </span>
            </li>
            <li className="flex justify-between gap-1">
              <span className="text-[13px] sm:text-[15px] font-[500] leading-[18.9px] opacity-[0.5]">
                Recording Fees (0.2% - 0.5%)
              </span>
              <span className="text-[13px] sm:text-[15px] font-[600] leading-[18.9px]">
                USD 3,600
              </span>
            </li>
            <li className="flex justify-between gap-1">
              <span className="text-[13px] sm:text-[15px] font-[500] leading-[18.9px] opacity-[0.5]">
                Legal Fees (0.5% - 1%)
              </span>
              <span className="text-[13px] sm:text-[15px] font-[600] leading-[18.9px]">
                USD 7,200
              </span>
            </li>
            <li className="flex justify-between gap-1">
              <span className="text-[13px] sm:text-[15px] font-[500] leading-[18.9px] opacity-[0.5]">
                Taxes (1%)
              </span>
              <span className="text-[13px] sm:text-[15px] font-[600] leading-[18.9px]">
                USD 7,200
              </span>
            </li>
            <li className="flex justify-between gap-1">
              <span className="text-[13px] sm:text-[15px] font-[500] leading-[18.9px] opacity-[0.5]">
                Broker Fee (3%)
              </span>
              <span className="text-[13px] sm:text-[15px] font-[600] leading-[18.9px]">
                USD 21,600
              </span>
            </li>
            <li className="flex justify-between gap-1">
              <span className="text-[13px] sm:text-[15px] font-[500] leading-[18.9px] opacity-[0.5]">
                Renovation Costs (2%)
              </span>
              <span className="text-[13px] sm:text-[15px] font-[600] leading-[18.9px]">
                USD 14,400
              </span>
            </li>
            <li className="flex justify-between gap-1">
              <span className="text-[13px] sm:text-[15px] font-[500] leading-[18.9px] opacity-[0.5]">
                Metropoly fee (1.5%)
              </span>
              <span className="text-[13px] sm:text-[15px] font-[600] leading-[18.9px]">
                USD 10,800
              </span>
            </li>
            <li className="flex justify-between text-[#954AFC] font-[700] text-[15px] sm:text-[18px] leading-[22.68px] gap-1">
              <span>Total Acquisition Cost</span>
              <span>USD 7,200</span>
            </li>
            <li className="flex justify-between gap-1">
              <span className="text-[13px] sm:text-[15px] font-[500] leading-[18.9px] opacity-[0.5]">
                Total Number of NFTs
              </span>
              <span className="text-[13px] sm:text-[15px] font-[600] leading-[18.9px]">
                1,000
              </span>
            </li>
            <li className="flex justify-between gap-1">
              <span className="text-[13px] sm:text-[15px] font-[500] leading-[18.9px] opacity-[0.5]">
                Value of One NFT
              </span>
              <span className="text-[13px] sm:text-[15px] font-[600] leading-[18.9px]">
                1/1000
              </span>
            </li>
            <li className="flex justify-between text-[#954AFC] font-[700] text-[15px] sm:text-[18px] leading-[22.68px] gap-1">
              <span>Mint Price Per NFT</span>
              <span>USD 800</span>
            </li>
          </ul>
        </div>

        {/* Rental Card */}
        <div className="bg-[#F7F6FF] rounded-[14px] px-4 py-6 sm:p-[25px] w-full lg:w-1/2">
          <div className="flex justify-between items-center gap-5 pb-[20px] border-b border-opacity-[0.1] border-b-[#000000]">
            <div className="flex items-center ">
              <div className="bg-white p-[9px] rounded-[10px] mr-2">
                {/* Placeholder for Icon */}
                <Image src="/assets/icons/wallet-black.svg" alt="file" width={22} height={22} />
              </div>
              <div>
                <h2 className="text-[18px] font-[600] text-primary-color">
                  Rental
                </h2>
                <a
                  href="#"
                  className="text-[12px] font-[400] text-[#954AFC]"
                >
                  Breakdown
                </a>
              </div>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-[12px]">
              <span className="text-[12px] font-[500] leading-[16px] text-primary-color opacity-[0.5]">
                Last Update: 2 days ago
              </span>
              <div className="w-[34px] h-[34px] border border-[#0000001F] rounded-[7px] flex items-center justify-center">
                <div className="h-[1.5px] w-[12px] bg-primary-color"></div>
              </div>
            </div>
          </div>
          <ul className="text-primary-color flex flex-col gap-[14px] pt-[20px]">
            <li className="flex justify-between gap-1">
              <span className="text-[13px] sm:text-[15px] font-[500] leading-[18.9px] opacity-[0.5]">
                Gross Yield
              </span>
              <span className="text-[13px] sm:text-[15px] font-[600] leading-[18.9px]">
                10.32 %
              </span>
            </li>
            <li className="flex justify-between gap-1">
              <span className="text-[13px] sm:text-[15px] font-[500] leading-[18.9px] opacity-[0.5]">
                Gross Rent Per Year
              </span>
              <span className="text-[13px] sm:text-[15px] font-[600] leading-[18.9px]">
                USD 88,560
              </span>
            </li>
            <li className="flex justify-between gap-1">
              <span className="text-[13px] sm:text-[15px] font-[500] leading-[18.9px] opacity-[0.5]">
                Service Charges (10%)
              </span>
              <span className="text-[13px] sm:text-[15px] font-[600] leading-[18.9px]">
                USD 8,856
              </span>
            </li>
            <li className="flex justify-between gap-1">
              <span className="text-[13px] sm:text-[15px] font-[500] leading-[18.9px] opacity-[0.5]">
                Property Management (15%)
              </span>
              <span className="text-[13px] sm:text-[15px] font-[600] leading-[18.9px]">
                USD 88,560
              </span>
            </li>
            <li className="flex justify-between gap-1">
              <span className="text-[13px] sm:text-[15px] font-[500] leading-[18.9px] opacity-[0.5]">
                Property Insurance
              </span>
              <span className="text-[13px] sm:text-[15px] font-[600] leading-[18.9px]">
                USD 11,937
              </span>
            </li>
            <li className="flex justify-between gap-1">
              <span className="text-[13px] sm:text-[15px] font-[500] leading-[18.9px] opacity-[0.5]">
                Maintenance Charges (10%)
              </span>
              <span className="text-[13px] sm:text-[15px] font-[600] leading-[18.9px]">
                USD 11,937
              </span>
            </li>
            <li className="flex justify-between gap-1">
              <span className="text-[13px] sm:text-[15px] font-[500] leading-[18.9px] opacity-[0.5]">
                Net Dividend Yield
              </span>
              <span className="text-[13px] sm:text-[15px] font-[600] leading-[18.9px]">
                5.32 %
              </span>
            </li>
            <li className="flex justify-between text-[#954AFC] font-[700] text-[15px] sm:text-[18px] leading-[22.68px] gap-1">
              <span>Annual Rental Income</span>
              <span>USD 45,752</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FinancialBreakdown;