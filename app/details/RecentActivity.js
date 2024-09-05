import React from "react";

const RecentActivity = () => {
  const recentActivityData = [
    {
      event: "Sale",
      price: "$ 820",
      from: "June27x",
      to: "Gohard",
      date: "2 days ago",
    },
    {
      event: "Mint",
      price: "$ 800 x 1,000",
      from: "Null address",
      to: "Multiple Accounts",
      date: "1 days ago",
    },
  ];
  return (
    <div className="bg-white text-primary-color py-[60px]">
      <h2 className="text-[25px] sm:text-[32px] leading-[40.32px] tracking-[-2%] font-[700] text-primary-color pb-[25px]">
      Recent Activity
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-[14px] pt-[32px] pb-[20px]">
          <thead>
            <tr className="text-nowrap text-[14px] leading-[16px] font-[500] text-primary-color opacity-[0.5]">
              <th className="px-[23px] py-[32px] text-left">Event</th>
              <th className="px-[23px] py-[32px] text-left min-w-[126px]">
                Price
              </th>
              <th className="px-[23px] py-[32px] text-left">From</th>
              <th className="px-[23px] py-[32px] text-left min-w-[132px]">
                To
              </th>
              <th className="px-[23px] py-[32px] text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {recentActivityData.map((recentActivity, index) => (
              <tr
                key={index}
                className={`text-nowrap border-[#0C0839] border-opacity-[0.2] ${
                  index !== recentActivity.length - 1 ? "border-b" : ""
                }`}
              >
                <td className="ps-[5px] py-[20px] flex items-left">
                  <img
                    src="/assets/icons/event-icon.svg"
                    alt="event"
                    className="w-[22px] h-[22px] rounded-full mr-[4px]"
                  />
                  <div className="pe-[20px] font-[600] text-[16px] leading-[23px] text-primary-color">
                    {recentActivity.event}
                  </div>
                </td>
                <td className="font-[600] text-[16px] leading-[23px] text-primary-color px-[23px] py-[20px] min-w-[126px]">
                  {recentActivity.price}
                </td>
                <td className="font-[600] text-[16px] leading-[23px] text-primary-color px-[23px] py-[20px]">
                  {recentActivity.from}
                </td>
                <td className="font-[600] text-[16px] leading-[23px] text-primary-color px-[23px] py-[20px]">
                  {recentActivity.to}
                </td>
                <td className="font-[600] text-[#8165EC] text-[16px] leading-[23px] px-[23px] py-[20px]">
                  {recentActivity.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentActivity;