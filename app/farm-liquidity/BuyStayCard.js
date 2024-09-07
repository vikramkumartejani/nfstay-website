"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { MdInfoOutline } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const BuyStayCard = ({ buttonText, cardsLogo, buyingInfo }) => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [selectedCurrency1, setSelectedCurrency1] = useState(
    cardsLogo ? "USD" : "usdc"
  );
  const [selectedCurrencyIcon1, setSelectedCurrencyIcon1] = useState(
    cardsLogo ? "/assets/icons/usd.svg" : "/assets/icons/usdc.svg"
  );
  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedCurrency2, setSelectedCurrency2] = useState("STAY");
  const [selectedCurrencyIcon2, setSelectedCurrencyIcon2] = useState(
    "/assets/icons/stay.svg"
  );
  const dropdown1Ref = useRef(null);
  const dropdown2Ref = useRef(null);

  // Close both dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdown1Ref.current &&
        !dropdown1Ref.current.contains(event.target)
      ) {
        setIsOpen1(false); // Close the first dropdown
      }
      if (
        dropdown2Ref.current &&
        !dropdown2Ref.current.contains(event.target)
      ) {
        setIsOpen2(false); // Close the second dropdown
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const currencies1 = [
    { icon: "/assets/icons/usd.svg", code: "USD" },
    { icon: "/assets/icons/usdc.svg", code: "usdc" },
    { icon: "/assets/icons/coin.svg", code: "usdt" },
  ];

  const currencies2 = [
    { icon: "/assets/icons/stay.svg", code: "STAY" },
    { icon: "/assets/icons/stay.svg", code: "STAY2" },
    { icon: "/assets/icons/stay.svg", code: "STAY3" },
  ];

  const handleCurrencySelect1 = (currency, icon) => {
    setSelectedCurrency1(currency);
    setSelectedCurrencyIcon1(icon);
    setIsOpen1(false); // Close dropdown on selection
  };

  const handleCurrencySelect2 = (currency, icon) => {
    setSelectedCurrency2(currency);
    setSelectedCurrencyIcon2(icon);
    setIsOpen2(false); // Close dropdown on selection
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
      <div className="payment-cards flex justify-between items-center gap-[20px] mb-6">
        {/* You're Paying */}
        <div className="bg-[#20E19F33] rounded-[12px] p-[16px] w-full min-w-[149px]">
          <div className="flex justify-between items-center mb-[15px]">
            <p className="md:text-[14px] text-[12px] font-[700] leading-[24px]">
              You're Paying
            </p>
            {!buyingInfo && (
              <MdInfoOutline className="text-primary-color w-[19px] h-[19px]" />
            )}
          </div>
          <input
            className="text-[30px] font-[700] w-full outline-none bg-transparent text-primary-color placeholder:text-primary-color mb-[18px] placeholder:opacity-[0.2] text-opacity-[0.6]"
            type="number"
            placeholder="0"
          />

          <div ref={dropdown1Ref} className="relative w-full">
            {/* Dropdown Trigger */}
            <div
              className="bg-[#1FE09D33] rounded-[12px] flex items-center justify-between px-[10px] py-[5px] cursor-pointer"
              onClick={() => setIsOpen1(!isOpen1)}
            >
              {/* Left Icon and Selected Currency */}
              <div className="flex items-center gap-[4px]">
                <div className="flex items-center justify-center w-[20px] h-[20px]">
                  <img src={selectedCurrencyIcon1} alt="icon" />
                </div>
                <span className="text-[14px] uppercase font-[700] leading-[24px] text-primary-color">
                  {selectedCurrency1}
                </span>
              </div>

              {/* Dropdown Arrow */}
              <IoIosArrowDown
                className={`text-primary-color w-[16px] h-[16px] transform ${
                  isOpen1 ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>

            {/* Dropdown Menu */}
            {isOpen1 && (
              <div className="absolute z-10 bg-white shadow-md rounded-[12px] mt-2 w-full">
                <ul>
                  {currencies1.map((currency) => (
                    <li
                      key={currency.code}
                      className="flex items-center px-[10px] py-[4px] gap-[4px] hover:bg-[#9A47FF1A] cursor-pointer"
                      onClick={() =>
                        handleCurrencySelect1(currency.code, currency.icon)
                      }
                    >
                      <div className="flex items-center justify-center w-[20px] h-[20px]">
                        <img src={currency.icon} alt="icon" />
                      </div>
                      <span className="text-[14px] uppercase font-[700] leading-[24px] text-primary-color">
                        {currency.code}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center items-center min-w-[24px] min-h-[24px]">
          <Image width={24} height={24} src="/assets/icons/swap-arrows.svg" />
        </div>

        {/* You're Buying */}
        <div className="bg-[#9A47FF1A] rounded-[12px] p-[16px] w-full min-w-[149px]">
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

          <div ref={dropdown2Ref} className="relative w-full">
            {/* Dropdown Trigger */}
            <div
              className="bg-[#9A47FF33] rounded-[12px] flex items-center justify-between px-[10px] py-[5px] cursor-pointer"
              onClick={() => setIsOpen2(!isOpen2)}
            >
              {/* Left Icon and Selected Currency */}
              <div className="flex items-center gap-[4px]">
                <div className="flex items-center justify-center w-[20px] h-[20px]">
                  <img src={selectedCurrencyIcon2} alt="icon" />
                </div>
                <span className="text-[14px] uppercase font-[700] leading-[24px] text-primary-color">
                  {selectedCurrency2}
                </span>
              </div>

              {/* Dropdown Arrow */}
              <IoIosArrowDown
                className={`text-primary-color w-[16px] h-[16px] transform ${
                  isOpen2 ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>

            {/* Dropdown Menu */}
            {isOpen2 && (
              <div className="absolute z-10 bg-white shadow-md rounded-[12px] mt-2 w-full">
                <ul>
                  {currencies2.map((currency) => (
                    <li
                      key={currency.code}
                      className="flex items-center px-[10px] py-[4px] gap-[4px] hover:bg-[#9A47FF1A] cursor-pointer"
                      onClick={() =>
                        handleCurrencySelect2(currency.code, currency.icon)
                      }
                    >
                      <div className="flex items-center justify-center w-[20px] h-[20px]">
                        <img src={currency.icon} alt="icon" />
                      </div>
                      <span className="text-[14px] uppercase font-[700] leading-[24px] text-primary-color">
                        {currency.code}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
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
