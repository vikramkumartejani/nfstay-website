"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import AssetsOverview from "./AssetsOverview";

// Register the components you are going to use
ChartJS.register(ArcElement, Tooltip, Legend);

const RecentPayoutsAndHoldings = () => {
  const data = {
    labels: ["NFTs", "Properties", "STAY"],
    datasets: [
      {
        data: [25, 50, 25],
        backgroundColor: ["#5F90D1", "#9945FF", "#20E19F"],
        hoverBackgroundColor: ["#5F90D1", "#9945FF", "#20E19F"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "40%", // creates a doughnut chart with a thicker inner circle
    plugins: {
      legend: {
        display: false, // hide the default legend
      },
    },
    maintainAspectRatio: false, // to allow custom width and height
  };

  return (
    <section className="flex lg:flex-row flex-col items-start gap-[20px] md:px-[25px] px-[12px] pb-[39px]">
      <AssetsOverview />

      <div
        className="flex flex-col lg:w-[382px] w-full rounded-[14px] bg-white"
        style={{
          boxShadow: `
          0px 18.1px 54.29px -3.39px #00000006,
          0px 5.78px 17.33px -2.55px #0000000F,
          0px 2.18px 6.55px -1.7px #00000012,
          0px 0.72px 2.16px -0.85px #00000012
        `,
        }}
      >
        <h2 className="flex gap-[4px] items-center justify-between sm:text-[24px] text-[20px] leading-[40.32px] tracking-[-2%] font-[700] text-primary-color pt-[25px] pb-[25px] md:px-[20px] px-[12px] border-b border-b-[#0C0839] border-opacity-[0.2]">
          Total Holdings
          <span className="sm:text-[24px] text-[19px] font-[600] leading-[33.6px] text-primary-color opacity-[0.6]">
            $14,520
          </span>
        </h2>
        <div className="py-[27px] px-[25px]">
          <div className="h-[270px] w-[270px] mx-auto border-[20px] rounded-full border-[#ECEEFB]">
            <Doughnut data={data} options={options} />
          </div>
        </div>
        <div className="flex flex-col gap-[10px] pb-[33px] sm:px-[25px] px-[12px]">
          <div className="flex gap-[5px] justify-between">
            <div className="flex items-center">
              <span className="flex border-[4px] border-[#20E19F] rounded-full w-[20px] h-[20px]"></span>
              <p className="ps-[16px] sm:text-[18px] text-[16px] font-[500] text-primary-color leading-[27px] opacity-[0.5]">
                NFTs
              </p>
            </div>
            <p className="text-[#20E19F] sm:text-[18px] text-[16px] font-[700] leading-[25.2px]">
              25%
            </p>
          </div>
          <div className="flex gap-[5px] justify-between">
            <div className="flex items-center">
              <span className="flex border-[4px] border-[#9945FF] rounded-full w-[20px] h-[20px]"></span>
              <p className="ps-[16px] sm:text-[18px] text-[16px] font-[500] text-primary-color leading-[27px] opacity-[0.5]">
                Properties
              </p>
            </div>
            <p className="text-[#9945FF] sm:text-[18px] text-[16px] font-[700] leading-[25.2px]">
              50%
            </p>
          </div>
          <div className="flex gap-[5px] justify-between">
            <div className="flex items-center">
              <span className="flex border-[4px] border-[#5F90D1] rounded-full w-[20px] h-[20px]"></span>
              <p className="ps-[16px] sm:text-[18px] text-[16px] font-[500] text-primary-color leading-[27px] opacity-[0.5]">
                STAY
              </p>
            </div>
            <p className="text-[#5F90D1] sm:text-[18px] text-[16px] font-[700] leading-[25.2px]">
              25%
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentPayoutsAndHoldings;
