export default function RecentTransaction() {
  const transactions = [
    {
      date: "Dec 9, 2021",
      clientInitial: "O",
      clientName: "Omar Khan",
      amount: "$1,500",
      status: "Overdue",
      statusClass: "bg-[#FDF7F7] text-[#F06565]",
    },
    {
      date: "Dec 6, 2021",
      clientInitial: "K",
      clientName: "Kevin Jonas",
      amount: "$2,500",
      status: "Paid",
      statusClass: "bg-[#27AE601A] text-[#27AE60]",
    },
    {
      date: "Dec 6, 2021",
      clientInitial: "Y",
      clientName: "Yusuf Reigen",
      amount: "$1,460",
      status: "Paid",
      statusClass: "bg-[#27AE601A] text-[#27AE60]",
    },
    {
      date: "Dec 9, 2021",
      clientInitial: "O",
      clientName: "Omar Khan",
      amount: "$1,500",
      status: "Overdue",
      statusClass: "bg-[#FDF7F7] text-[#F06565]",
    },
  ];

  return (
    <div
      className="bg-white md:w-[55%] w-full rounded-[14px] overflow-x-auto"
      style={{
        boxShadow: `
          0px 18.1px 54.29px -3.39px #00000006,
          0px 5.78px 17.33px -2.55px #0000000F,
          0px 2.18px 6.55px -1.7px #00000012,
          0px 0.72px 2.16px -0.85px #00000012
          `,
      }}
    >
      <h2 className="text-[20px] font-[700] text-primary-color leading-[20px] py-[24px] px-[25px]">
        Recent Transactions
      </h2>
      <div className="w-full">
        <table className="min-w-full text-left">
          <thead>
            <tr className="border-y border-y-[#0C0839] border-y-[2px] border-opacity-[0.1]">
              <th className="py-[16px] ps-[25px] min-w-[74px] md:text-[14px] text-[12px] font-[500] leading-[24px] text-primary-color opacity-[0.4]">
                Due Date
              </th>
              <th className="py-[16px] px-[16px] min-w-[74px] md:text-[14px] text-[12px] font-[500] leading-[24px] text-primary-color opacity-[0.4]">
                Client
              </th>
              <th className="py-[16px] pe-[16px] min-w-[74px] md:text-[14px] text-[12px] font-[500] leading-[24px] text-primary-color opacity-[0.4]">
                Amount
              </th>
              <th className="py-[16px] pe-[25px] min-w-[74px] md:text-[14px] text-[12px] font-[500] leading-[24px] text-primary-color opacity-[0.4]">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td className="py-[16px] ps-[25px] min-w-[74px] md:text-[14px] text-[12px] font-[500] leading-[24px] text-primary-color">
                  {transaction.date}
                </td>
                <td className="flex items-center min-w-[74px] sm:gap-[16px] gap-[8px] px-[12px] py-[16px] md:text-[14px] text-[12px] font-[500] leading-[24px] text-primary-color">
                  <span className="w-[28px] h-[28px] min-w-[28px] min-h-[28px] flex items-center justify-center text-white font-[#954AFC] rounded-full bg-[#954AFC]">
                    {transaction.clientInitial}
                  </span>
                  <span>{transaction.clientName}</span>
                </td>
                <td className="py-[16px] pe-[12px] min-w-[74px] md:text-[14px] text-[12px] font-[500] leading-[24px] text-primary-color">
                  {transaction.amount}
                </td>
                <td className="py-[16px] pe-[25px] min-w-[74px] md:text-[14px] text-[12px] font-[500] leading-[24px] text-primary-color">
                  <span
                    className={`px-[10px] py-[8px] md:text-[14px] text-[12px] rounded-[4px] ${transaction.statusClass}`}
                  >
                    {transaction.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
