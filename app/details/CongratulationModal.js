"use client";
import Image from "next/image";
import Confetti from "react-confetti";
import { useState, useEffect } from "react";

const CongratulationModal = ({ isOpen, onClose }) => {
  const [isConfettiActive, setIsConfettiActive] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsConfettiActive(true);
      const timer = setTimeout(() => {
        setIsConfettiActive(false);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const { innerWidth: width, innerHeight: height } = window;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-[10px]">
      <div className="bg-white rounded-[10px] shadow-xl w-[380px] max-w-[380px] mx-auto overflow-hidden">
        <div className="relative bg-[#954AFC] h-[130px] w-full overflow-hidden z-[5]">
          <img
            className="absolute left-0 object-cover"
            src="/assets/download-confidential-object.svg"
          />
        </div>
        <div className="w-[114px] h-[114px] rounded-full flex items-center justify-center bg-[#0C083938] filter backdrop-blur-sm mx-auto mt-[-50px] relative z-[6]">
          <div className="flex items-center justify-center w-[94px] h-[94px] bg-white rounded-full">
            <Image width={46} height={46} src="/assets/congratulation.svg" />
          </div>
        </div>

        <div className="flex flex-col p-[25px] sm:pb-[31px]">
          <h2 className="text-[24px] leading-[30.24px] font-[700] text-primary-color text-center">
            Congratulations
          </h2>
          <p className="text-center font-[500] text-[15px] leading-[24px] sm:mt-[12px] text-[#0C083999]">
            We’re thrilled to welcome you as our property's Partner and
            Fractional Owner! <span className="ms-[-4px] text-[24px]">🎉</span>
          </p>
          <button
            className="bg-custom-gradient text-white p-[11px] text-[16px] leading-[20.16px] font-[600] rounded-full sm:mt-[35px] mt-[20px] mx-auto w-[250px]"
            onClick={onClose}
          >
            Okay
          </button>
        </div>
      </div>
      {/* Container for Confetti */}
      {isConfettiActive && (
        <div className="absolute inset-0 -top-[10%] flex items-end justify-center pointer-events-none z-[9999]">
          <Confetti
            width={width}
            height={height}
            numberOfPieces={200}
            recycle={false}
            gravity={0.3} // Adjust gravity to control the speed of falling
            initialVelocityX={{ min: -20, max: 20 }} // Burst effect in horizontal direction
            initialVelocityY={{ min: -15, max: -20 }} // Burst effect in vertical direction
            confettiSource={{ x: width / 2, y: height / 2 }} // Center of the screen
          />
        </div>
      )}
    </div>
  );
};

export default CongratulationModal;
