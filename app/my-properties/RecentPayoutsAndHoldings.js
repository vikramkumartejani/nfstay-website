"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register the components you are going to use
ChartJS.register(ArcElement, Tooltip, Legend);

const RecentPayoutsAndHoldings = () => {
    const data = {
        labels: ["NFTs", "Properties", "STAY"],
        datasets: [
            {
                data: [25, 50, 25],
                backgroundColor: ["#20E19F", "#9945FF", "#FFA634"],
                hoverBackgroundColor: ["#20E19F", "#9945FF", "#FFA634"],
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

    const payoutsData = [
        {
            img: "/assets/payouts-img.png",
            propertyName: "3–Bedroom Family Home",
            date: "5–07–22",
            payout: "$250.12",
            status: "Pending",
        },
        {
            img: "/assets/payouts-img.png",
            propertyName: "3–Bedroom Family Home",
            date: "5–07–22",
            payout: "$250.12",
            status: "Pending",
        },
        {
            img: "/assets/payouts-img.png",
            propertyName: "3–Bedroom Family Home",
            date: "5–07–22",
            payout: "$250.12",
            status: "Pending",
        },
        {
            img: "/assets/payouts-img.png",
            propertyName: "3–Bedroom Family Home",
            date: "5–07–22",
            payout: "$250.12",
            status: "Pending",
        },
        {
            img: "/assets/payouts-img.png",
            propertyName: "3–Bedroom Family Home",
            date: "5–07–22",
            payout: "$250.12",
            status: "Pending",
        },
        {
            img: "/assets/payouts-img.png",
            propertyName: "3–Bedroom Family Home",
            date: "5–07–22",
            payout: "$250.12",
            status: "Pending",
        },
    ];
    return (
        <section className="flex lg:flex-row flex-col items-start gap-[20px] md:px-[25px] px-[12px] pb-[39px]">
            <div
                className="bg-white flex-grow w-full text-primary-color rounded-[14px] overflow-hidden"
                style={{
                    boxShadow: `
        0px 18.1px 54.29px -3.39px #00000006,
        0px 5.78px 17.33px -2.55px #0000000F,
        0px 2.18px 6.55px -1.7px #00000012,
        0px 0.72px 2.16px -0.85px #00000012
    `,
                }}
            >
                <h2 className="text-[24px] leading-[40.32px] tracking-[-2%] font-[700] text-primary-color pt-[27px] pb-[25px] md:px-[23px] px-[12px] border-b border-b-[#0C0839] border-opacity-[0.2]">
                    Recent payouts
                </h2>
                <div className="overflow-x-auto">
                    <table
                        className="min-w-full bg-white" // Adds padding to the bottom
                    >
                        <thead>
                            <tr className="text-nowrap text-[14px] leading-[16px] font-[500] text-primary-color opacity-[0.5]">
                                <th className="px-[23px] pb-[20px] pt-[30px] text-left">
                                    Property Name
                                </th>
                                <th className="px-[23px] pb-[20px] pt-[30px] text-center min-w-[126px]">
                                    Date
                                </th>
                                <th className="px-[23px] pb-[20px] pt-[30px] text-center">
                                    Payout
                                </th>
                                <th className="px-[23px] pb-[20px] pt-[30px] text-center">
                                    Status
                                </th>
                                <th className="px-[23px] pb-[20px] pt-[30px] text-center"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {payoutsData.map((payout, index) => (
                                <tr key={index} className="text-nowrap">
                                    <td className="ps-[23px] py-[20px] flex items-center">
                                        <img
                                            src={payout.img}
                                            alt="property"
                                            className="w-[44px] h-[44px] rounded-full mr-4"
                                        />
                                        <div className="pe-[20px] font-[600] text-[16px] leading-[23px] text-primary-color text-left">
                                            {payout.propertyName}
                                        </div>
                                    </td>
                                    <td className="font-[600] text-[16px] leading-[23px] text-primary-color px-[23px] py-[20px] text-center min-w-[126px]">
                                        {payout.date}
                                    </td>
                                    <td className="font-[600] text-[16px] leading-[23px] text-primary-color px-[23px] py-[20px] text-center">
                                        {payout.payout}
                                    </td>
                                    <td className="font-[600] text-[16px] leading-[23px] px-[23px] py-[20px] text-center">
                                        <div className="text-[#43CD61] mx-auto flex gap-[5px]">
                                            <div className="my-auto w-[4px] h-[4px] rounded-full bg-[#43CD61]"></div>
                                            {payout.status}
                                        </div>
                                    </td>
                                    <td className="font-[600] text-[12px] leading-[23px] text-primary-color px-[23px] py-[20px] text-center">
                                        <button className="text-[#D9D9D9] hover:text-gray-600 mx-auto">
                                            •••
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

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
                            <p className="ps-[16px] sm:text-[18px] text-[16px] font-[500] text-primary-color leading-[27px]">
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
                            <p className="ps-[16px] sm:text-[18px] text-[16px] font-[500] text-primary-color leading-[27px]">
                                Properties
                            </p>
                        </div>
                        <p className="text-[#9945FF] sm:text-[18px] text-[16px] font-[700] leading-[25.2px]">
                            50%
                        </p>
                    </div>
                    <div className="flex gap-[5px] justify-between">
                        <div className="flex items-center">
                            <span className="flex border-[4px] border-[#FFA634] rounded-full w-[20px] h-[20px]"></span>
                            <p className="ps-[16px] sm:text-[18px] text-[16px] font-[500] text-primary-color leading-[27px]">
                                STAY
                            </p>
                        </div>
                        <p className="text-[#FFA634] sm:text-[18px] text-[16px] font-[700] leading-[25.2px]">
                            25%
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecentPayoutsAndHoldings;