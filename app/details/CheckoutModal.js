"use client";
import Image from "next/image";
import React, { useState } from "react";
import { LuMapPin } from "react-icons/lu";

const CheckoutModal = ({ isOpen, onClose, onBuyNow }) => {
  if (!isOpen) return null;
  const [selected, setSelected] = useState("card");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-[10px]">
      <div className="bg-white rounded-[20px] shadow-lg md:px-[25px] md:py-[25px] py-[20px] px-[15px] max-w-[580px] max-h-screen w-full overflow-y-auto">
        <div className="flex justify-between items-center pb-[20px] border-b border-[#000000] border-opacity-[0.1]">
          <h2 className="md:text-[24px] text-[19px] font-[700] leading-[30.24px] text-primary-color">
            Complete Checkout
          </h2>
          <button
            className="text-[24px] w-[30px] h-[30px] border-[1.5px] border-opacity-[0.1] border-[#000000] rounded-full flex items-center justify-center"
            onClick={onClose}
          >
            <span className="mt-[-6px]">&times;</span>
          </button>
        </div>
        <div className="sm:pt-[25px] pt-[15px]">
          <p className="text-primary-color text-[14px] uppercase font-[500] opacity-[0.5] leading-[16px] pb-[10px]">
            ITEM
          </p>
          <div className="flex sm:flex-row flex-col sm:gap-[18px] gap-[6px] md:items-center justify-between bg-[#0C0839] bg-opacity-[0.04] rounded-[14px] p-[15px]">
            <Image
              src="/assets/bedroom-family.svg"
              alt="item"
              className="rounded-md"
              width={60}
              height={60}
            />
            <div className="flex flex-col sm:gap-[8px] gap-[4px]">
              <p
                className="text-[16px] font-[600] leading-[23px] text-primary-color"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 1,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                Lorem Ipsum Dolor Sit Amet, Consectetur Lorem Ipsum Dolor Sit
                Amet,
              </p>

              <p className="flex gap-[7px] text-[14px] font-[500] leading-[16px] text-[#954AFC]">
                <span className="w-[19px] h-[19px]">
                  <LuMapPin size={19} />
                </span>
                Manchester, United Kingdom
              </p>
            </div>
            <div className="text-right">
              <p className="text-[20px] leading-[25.2px] font-[700] text-primary-color">
                $860
              </p>
              <p className="text-[14px] w-max ms-auto leading-[17.64px] font-[500] opacity-[0.6] text-secondary-color">
                (1.5 BNB)
              </p>
            </div>
          </div>
          <div className="sm:pt-[25px] pt-[15px]">
            <p className="text-primary-color uppercase text-[14px] opacity-[0.5] font-[500] leading-[16px] pb-[10px]">
              Payment Method
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
                      selected === "card" ? "bg-white" : "bg-[#0C08390F]"
                    }`}
                  >
                    <Image
                      width={20}
                      height={20}
                      src="/assets/card.svg"
                      alt="Card Icon"
                    />
                  </div>
                  <span className="font-[500] text-[16px] leading-[23px]">
                    Card
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
                      selected === "crypto" ? "bg-white" : "bg-[#0C08390F]"
                    }`}
                  >
                    <Image
                      width={20}
                      height={20}
                      src="/assets/crypto.svg"
                      alt="Crypto Icon"
                    />
                  </div>
                  <span className="font-[500] text-[16px] leading-[23px]">
                    Crypto
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
            <div className="flex mt-[15px]">
              <div className="w-full h-[23px] flex space-x-[-9px]">
                <img className="h-full" src="/assets/icons/master-card.svg" />
                <img className="h-full" src="/assets/icons/visa.svg" />
                <img
                  className="h-full"
                  src="/assets/icons/american-express.svg"
                />
              </div>
              <div className="w-full h-[21px] flex space-x-[-9px]">
                <img className="h-full" src="/assets/icons/usdt-btc.svg" />
                <img className="h-full" src="/assets/icons/coin.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-[20px] justify-between items-center sm:mt-[40px] mt-[20px]">
          <button
            className="text-[#8165EC] text-[16px] font-[600] flex-grow p-[11px] rounded-full bg-white border"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="text-white text-[16px] font-[600] flex-grow py-[11px] rounded-full bg-custom-gradient"
            onClick={onBuyNow}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
