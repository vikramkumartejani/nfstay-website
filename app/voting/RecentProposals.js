import React from "react";

const RecentProposals = () => {
  const recentProposals = [
    {
      id: 5238,
      name: "Villa Ibiza",
      propertyType: "Holiday Home",
      date: "22 Aug, 2024",
      votes: "80/20",
      noOfOwners: "100 of 300",
      proposal: "Increase rent by 12.5%",
    },
    {
      id: 2630,
      name: "Apart, Berlin",
      propertyType: "Null Address",
      date: "1 Aug, 2024",
      votes: "200/50",
      noOfOwners: "250 of 600",
      proposal: "Sell the property for $875,000",
    },
  ];
  return (
    <div className="px-6">
      <div className="bg-white text-primary-color">
        <h2 className="md:text-[26px] text-[25px] md:leading-[40.32px] tracking-[-2%] font-bold text-primary-color md:pb-[24px] pb-[16px]">
          Recent Proposals
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-[14px] pt-[32px] pb-[20px]">
            <thead>
              <tr className="text-[12px] text-nowrap lg:text-wrap leading-[16px] font-medium text-primary-color opacity-50">
                <th className="py-[32px] text-left">
                  NFT<span className="ps-[2px]">ID</span>
                </th>
                <th className="px-[23px] py-[32px] text-left min-w-[126px]">
                  Name
                </th>
                <th className="px-[23px] py-[32px] text-left">Property Type</th>
                <th className="px-[23px] py-[32px] text-left min-w-[132px]">
                  Date
                </th>
                <th className="px-[23px] py-[32px] text-left">Yes/No</th>
                <th className="px-[23px] py-[32px] text-left">No. of Owners</th>
                <th className="px-[23px] py-[32px] text-left">Proposal</th>
              </tr>
            </thead>
            <tbody>
              {recentProposals.map((proposal, index) => (
                <tr
                  key={index}
                  className={`border-[#0C0839] text-nowrap lg:text-wrap border-opacity-[0.2] ${
                    index !== recentProposals - 1 ? "border-b" : ""
                  }`}
                >
                  <td className="font-semibold md:text-[14px] text-[12px] leading-[23px] text-primary-color py-[20px] text-left">
                    {proposal.id}
                  </td>
                  <td className="font-semibold md:text-[14px] text-[12px] leading-[23px] text-primary-color px-[23px] py-[20px] text-left min-w-[126px]">
                    {proposal.name}
                  </td>
                  <td className="font-semibold md:text-[14px] text-[12px] leading-[23px] text-primary-color px-[23px] py-[20px] text-left">
                    {proposal.propertyType}
                  </td>
                  <td className="font-semibold md:text-[14px] text-[12px] leading-[23px] text-primary-color px-[23px] py-[20px] text-left">
                    {proposal.date}
                  </td>
                  <td className="font-semibold md:text-[14px] text-[12px] leading-[23px] text-primary-color px-[23px] py-[20px] text-left">
                    {proposal.votes}
                  </td>
                  <td className="font-semibold md:text-[14px] text-[12px] leading-[23px] text-primary-color px-[23px] py-[20px] text-left">
                    {proposal.noOfOwners}
                  </td>
                  <td className="font-semibold text-[#8165EC] md:text-[14px] text-[12px] leading-[23px] px-[23px] py-[20px] text-left">
                    {proposal.proposal}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecentProposals;
