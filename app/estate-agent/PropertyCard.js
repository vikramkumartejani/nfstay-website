"use client";
import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const PropertyCard = () => {
  const percentage = 35; // Set the progress percentage

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensures rendering only on the client side
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Return null on the server-side to avoid hydration issues
  }

  return (
    <div
      className="bg-white p-[24px] rounded-[14px] w-full md:w-[265px] h-[329px] md:max-w-[30%] max-w-full"
      style={{
        boxShadow: `
          0px 18.1px 54.29px -3.39px #00000006,
          0px 5.78px 17.33px -2.55px #0000000F,
          0px 2.18px 6.55px -1.7px #00000012,
          0px 0.72px 2.16px -0.85px #00000012
        `,
      }}
    >
      {/* Header Text */}
      <p className="text-primary-color font-[700] md:text-[20px] text-[18px] leading-[28px]">
        Your Properties
      </p>
      <p className="text-primary-color md:text-[14px] text-[12px] font-[400] leading-[19.6px] opacity-[0.6]">
        Total Properties available
      </p>

      {/* Circular Progress Bar with text overlay */}
      <div className="relative w-[200px] h-[200px] mx-auto my-6">
        {" "}
        {/* Adjusted size */}
        {/* Circular Progress Bar */}
        <CircularProgressbar
          value={percentage}
          strokeWidth={11} // Increased stroke width to 20px
          styles={buildStyles({
            pathColor: `#954AFC`, // The darker part of the circle
            trailColor: `#954AFC33`, // The lighter part of the circle
            // Optionally, you can adjust text styles here if needed
            // textColor: '#111827',
            // textSize: '16px',
          })}
        />
        {/* Centered Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="md:text-[40px] text-[30px] tracking-[-1%] font-[700] text-primary-color">
            15
          </span>
          {/* Number */}
          <span className="md:text-[14px] text-[12px] font-[500] text-center text-primary-color opacity-[0.5]">
            Properties
            <br /> available
          </span>
          {/* Label */}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
