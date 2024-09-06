import React from "react";
import DashboardLayout from "../components/DashboardLayout";

const Payouts = () => {
  const payouts = [
    {
      img: "/assets/leaderboard.svg",
      propertyName: "3-Bedroom Family Home",
      date: "5-07-22",
      price: "$36,250",
      nftssowned: "50/1000",
      payout: "$250.12",
      status: "Pending",
    },
    {
      img: "/assets/leaderboard.svg",
      propertyName: "3-Bedroom Family Home",
      date: "5-07-22",
      price: "$36,250",
      nftssowned: "50/1000",
      payout: "$250.12",
      status: "Pending",
    },
    {
      img: "/assets/leaderboard.svg",
      propertyName: "3-Bedroom Family Home",
      date: "5-07-22",
      price: "$36,250",
      nftssowned: "50/1000",
      payout: "$250.12",
      status: "Pending",
    },
    {
      img: "/assets/leaderboard.svg",
      propertyName: "3-Bedroom Family Home",
      date: "5-07-22",
      price: "$36,250",
      nftssowned: "50/1000",
      payout: "$250.12",
      status: "Pending",
    },
    {
      img: "/assets/leaderboard.svg",
      propertyName: "3-Bedroom Family Home",
      date: "5-07-22",
      price: "$36,250",
      nftssowned: "50/1000",
      payout: "$250.12",
      status: "Pending",
    },
    {
      img: "/assets/leaderboard.svg",
      propertyName: "3-Bedroom Family Home",
      date: "5-07-22",
      price: "$36,250",
      nftssowned: "50/1000",
      payout: "$250.12",
      status: "Pending",
    },
    {
      img: "/assets/leaderboard.svg",
      propertyName: "3-Bedroom Family Home",
      date: "5-07-22",
      price: "$36,250",
      nftssowned: "50/1000",
      payout: "$250.12",
      status: "Pending",
    },
    {
      img: "/assets/leaderboard.svg",
      propertyName: "3-Bedroom Family Home",
      date: "5-07-22",
      price: "$36,250",
      nftssowned: "50/1000",
      payout: "$250.12",
      status: "Pending",
    },
  ];
  return (
    <DashboardLayout>
      <div className="px-4 md:px-6">
        <div className="bg-white text-primary-color">
          <h2 className="md:text-[26px] text-[20px] md:leading-[40.32px] tracking-[-2%] font-bold text-primary-color pt-[120px] lg:pt-[16px] md:pb-[30px] pb-[16px]">
            Payouts
          </h2>
          <div className="overflow-x-auto payouts px-5">
            <table className="min-w-full bg-white rounded-[14px] overflow-hidden mt-5">
              <thead>
                <tr className="text-nowrap lg:text-wrap">
                  <th className="text-[#0C0839] text-opacity-50 text-[14px] font-medium font-jakarta leading-[16px] px-[12px] md:px-[25px] text-left">
                    Property Name
                  </th>
                  <th className="text-[#0C0839] text-opacity-50 text-[14px] font-medium font-jakarta leading-[16px] px-[12px] md:px-[25px]">
                    Date
                  </th>
                  <th className="text-[#0C0839] text-opacity-50 text-[14px] font-medium font-jakarta leading-[16px] px-[12px] md:px-[25px]">
                    price
                  </th>
                  <th className="text-[#0C0839] text-opacity-50 text-[14px] font-medium font-jakarta leading-[16px] px-[12px] md:px-[25px]">
                    NFTs Owned
                  </th>
                  <th className="text-[#0C0839] text-opacity-50 text-[14px] font-medium font-jakarta leading-[16px] px-[12px] md:px-[25px]">
                    Payout
                  </th>
                  <th className="text-[#0C0839] text-opacity-50 text-[14px] font-medium font-jakarta leading-[16px] px-[12px] md:px-[25px]">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {payouts.map((payout, index) => (
                  <tr
                    key={index}
                    className={`border-[#0C0839] text-nowrap border-opacity-[0.2] ${
                      index !== payouts.length - 1 ? "border-b" : ""
                    }`}
                  >
                    <td className="font-semibold text-[12px] md:text-[14px] leading-[23px] text-[#0C0839] py-[20px] flex items-center">
                      <img
                        src={payout.img}
                        alt="property"
                        className="w-[32px] h-[32px] md:w-[44px] md:h-[44px] rounded-full mr-2 md:mr-4"
                      />
                      <div className="flex items-start flex-col">
                        <h1 className="md:text-[14px] text-[12px] leading-[23px] font-semibold font-jakarta text-[#0C0839] pr-4 md:pr-6">
                          {payout.propertyName}
                        </h1>
                      </div>
                    </td>

                    <td className="font-[600] text-[12px] md:text-[14px] leading-[23px] text-[#0C0839] px-[12px] md:px-[23px] py-[20px] text-center min-w-[126px]">
                      {payout.date}
                    </td>

                    <td className="font-[600] text-[12px] md:text-[14px] leading-[23px] text-[#0C0839] px-[12px] md:px-[23px] py-[20px] text-center">
                      {payout.price}
                    </td>

                    <td className="font-semibold text-[12px] md:text-[14px] leading-[23px] text-[#0C0839] px-[12px] md:px-[23px] py-[20px] text-center">
                      {payout.nftssowned}
                    </td>
                    <td className="font-semibold text-[12px] md:text-[14px] leading-[23px] text-[#0C0839] px-[12px] md:px-[23px] py-[20px] text-center">
                      {payout.payout}
                    </td>
                    <td className=" font-semibold text-[12px] md:text-[14px] leading-[23px] text-[#43CD61] px-[12px] md:px-[23px] py-[20px] text-center">
                      <div className="flex items-center  justify-center gap-2">
                        <div className="bg-[#43CD61] w-[4px] h-[4px] rounded-full"></div>
                        {payout.status}
                      </div>
                    </td>
                    <td className="font-semibold text-[12px] leading-[23px] text-primary-color px-[12px] md:px-[23px] py-[20px] text-center">
                      <div className="relative inline-block rounded-[6px]">
                        {/* Gradient border wrapper */}
                        <div
                          className="absolute inset-0 rounded-[6px] border-[1px] border-transparent"
                          style={{
                            borderImage:
                              "linear-gradient(90.69deg, #9945FF -0.25%, #20E19F 100%) 1", // Gradient border
                            borderRadius: "6px",
                            zIndex: "0", // Ensure it’s behind the button
                            pointerEvents: "none", // Prevent interaction
                          }}
                        />
                        {/* Button with gradient background */}
                        <button
                          className="relative z-10 rounded-[6px] px-[15px] py-[5px] text-primary-color"
                          style={{
                            background:
                              "linear-gradient(90.57deg, rgba(153, 69, 255, 0.2) 0%, rgba(32, 225, 159, 0.2) 100%)",
                            border: "none", // No border on button itself
                            borderRadius: "6px",
                          }}
                        >
                          Claim & Reinvest
                        </button>
                      </div>
                    </td>

                    <td className="font-semibold text-[12px] leading-[23px] text-white px-[12px] md:px-[23px] py-[20px] text-center">
                      <div>
                        <button className="flex items-center gap-[3px]">
                          <div className="bg-[#D9D9D9] w-[5px] h-[5px] rounded-full"></div>
                          <div className="bg-[#D9D9D9] w-[5px] h-[5px] rounded-full"></div>
                          <div className="bg-[#D9D9D9] w-[5px] h-[5px] rounded-full"></div>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Payouts;
