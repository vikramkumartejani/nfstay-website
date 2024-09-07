"use client";
import Image from "next/image";
import React, { useState } from "react";
import { MdInfoOutline } from "react-icons/md";
import { FaDollarSign, FaChevronDown } from "react-icons/fa";

const BuyStayCard = ({ buttonText, cardsLogo, buyingInfo }) => {
  const [isOpen, setIsOpen] = useState(false); // Manage dropdown open/close state
  const [selectedCurrency, setSelectedCurrency] = useState("USD"); // Default selected currency

  const currencies = [
    { symbol: "$", code: "USD" },
    { symbol: "€", code: "EUR" },
    { symbol: "£", code: "GBP" },
  ];

  const handleCurrencySelect = (currency) => {
    setSelectedCurrency(currency);
    setIsOpen(false); // Close dropdown on selection
  };
  return (
    <div
      className="bg-white p-[24px] rounded-[14px] w-full"
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
      <div className="flex justify-between items-center mb-6">
        <h2 className="md:text-[20px] text-[18px] font-[700] leading-[32px] text-primary-color">
          Buy STAY with CARD
        </h2>
        {cardsLogo && (
          <div className="h-[23px] flex space-x-[-12px]">
            <img className="h-full" src="/assets/icons/master-card.svg" />
            <img className="h-full" src="/assets/icons/visa.svg" />
            <img className="h-full" src="/assets/icons/american-express.svg" />
          </div>
        )}
      </div>

      {/* Payment Cards Section */}
      <div className="flex justify-between items-center gap-[20px] mb-6">
        {/* You're Paying */}
        <div className="bg-[#20E19F33] rounded-[12px] p-[16px] w-full">
          <div className="flex justify-between items-center mb-[15px]">
            <p className="md:text-[14px] text-[12px] font-[700] leading-[24px]">
              You're Paying
            </p>
            {!buyingInfo && (
              <MdInfoOutline className="text-primary-color w-[19px] h-[19px]" />
            )}
          </div>
          <div className="text-[30px] font-[700] text-primary-color mb-[18px] opacity-[0.2]">
            0
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-white px-4 py-2 rounded-lg flex items-center space-x-2">
              <span className="text-purple-500 font-semibold">$</span>
              <span className="text-gray-700">USD</span>
            </button>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center items-center min-w-[24px] min-h-[24px]">
          <Image width={24} height={24} src="/assets/icons/swap-arrows.svg" />
        </div>

        {/* You're Buying */}
        <div className="bg-[#9A47FF1A] rounded-[12px] p-[16px] w-full">
          <div className="flex justify-between items-center mb-2">
            <p className="md:text-[14px] text-[12px] font-[700] leading-[24px]">
              You're buying
            </p>
            {buyingInfo && (
              <MdInfoOutline className="text-primary-color w-[19px] h-[19px]" />
            )}
          </div>
          <div className="text-[30px] font-[700] text-primary-color mb-[18px] opacity-[0.2]">
            0.00
          </div>
          <div className="flex items-center justify-between">
            <div className="relative w-full max-w-[200px]">
              {/* Dropdown Trigger */}
              <div
                className="bg-teal-100 rounded-[12px] flex items-center justify-between p-4 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                {/* Left Icon and Selected Currency */}
                <div className="flex items-center space-x-2">
                  <div className="bg-purple-500 p-2 rounded-full flex items-center justify-center">
                    <FaDollarSign className="text-white w-4 h-4" />
                  </div>
                  <span className="text-lg font-bold text-gray-900">
                    {selectedCurrency}
                  </span>
                </div>

                {/* Dropdown Arrow */}
                <FaChevronDown
                  className={`text-gray-900 w-4 h-4 transform ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>

              {/* Dropdown Menu */}
              {isOpen && (
                <div className="absolute z-10 bg-white shadow-md rounded-[12px] mt-2 w-full">
                  <ul>
                    {currencies.map((currency) => (
                      <li
                        key={currency.code}
                        className="flex items-center p-3 hover:bg-teal-50 cursor-pointer"
                        onClick={() => handleCurrencySelect(currency.code)}
                      >
                        <div className="bg-purple-500 p-2 rounded-full flex items-center justify-center mr-2">
                          <span className="text-white">{currency.symbol}</span>
                        </div>
                        <span className="text-gray-900">{currency.code}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Buy Button */}
      <button className="bg-[#954AFC] text-white text-[16px] font-[600] leading-[24px] py-[13px] w-full rounded-[10px]">
        {buttonText}
      </button>
    </div>
  );
};

export default BuyStayCard;
