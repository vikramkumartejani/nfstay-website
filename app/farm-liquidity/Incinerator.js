export default function Incinerator() {
  const tableData = [
    {
      id: 1,
      source: "Boardroom",
      date: "11 Dec, 2024 - 9:26 PM",
      amount: "8.75 MyUSD",
      status: "Burned",
    },
    {
      id: 2,
      source: "Boardroom",
      date: "11 Dec, 2024 - 9:26 PM",
      amount: "8.75 MyUSD",
      status: "Burned",
    },
    {
      id: 3,
      source: "Farm",
      date: "11 Dec, 2024 - 9:26 PM",
      amount: "8.75 MyUSD",
      status: "Burned",
    },
    {
      id: 4,
      source: "STAYking",
      date: "11 Dec, 2024 - 9:26 PM",
      amount: "8.75 MyUSD",
      status: "Burned",
    },
    {
      id: 5,
      source: "Boardroom",
      date: "11 Dec, 2024 - 9:26 PM",
      amount: "8.75 MyUSD",
      status: "Burned",
    },
  ];

  return (
    <div
      className="relative py-[50px] md:px-[50px] sm:px-[25px] px-[16px] rounded-[28px] shadow-lg overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #01060F 0%, #1F242D 100%)",
      }}
    >
      <div className="absolute top-0 left-0 h-[196px] w-full rounded-full z-[3]">
        {" "}
        <img
          className="w-full object-cover"
          src="assets/incinerator-effect.svg"
        />
      </div>
      <img
        className="absolute fire-div z-[4] top-0 right-0"
        src="assets/fire-bg.png"
      />
      {/* Header Section */}
      <div className="flex flex-wrap justify-between items-center gap-[10px] pb-[60px] pt-[8px] relative z-[5]">
        <div className="text-white max-w-[454px]">
          <h1 className="md:text-[48px] text-[30px] md:leading-[67.2px] font-[700] mb-[15px]">
            Incinerator
          </h1>
          <p className="md:text-[18px] text-[16px] font-[500] md:leading-[28.8px] mb-[35px]">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nunc At
            Orci Ac Mauris Rutrum Placerat.
          </p>
          <button
            className="text-white md:py-[17px] py-[14px] md:px-[30px] px-[20px] md:text-[16px] text-[14px] font-[500] leading-[19.09px] rounded-[12px] border"
            style={{
              background:
                "linear-gradient(90.57deg, rgba(153, 69, 255, 0.3) 0%, rgba(32, 225, 159, 0.3) 100%)",
            }}
          >
            CTA Button
          </button>
        </div>

        {/* Burned Tokens Section */}
        <div className="w-[45%] fire-div">
          <div className="flex gap-[13px] items-start border-2 border-[#FFFFFF73] bg-[#FFFFFF25] px-[24px] py-[40px] w-fit h-fit rounded-[18px] backdrop-blur-sm me-[2%]">
            <img className="w-[70px] mt-[-10px]" src="/assets/fire.png" />
            <div className="flex flex-col gap-[8px]">
              <span className="text-[48px] text-white font-[800] leading-[67.2px]">
                1,833,234
              </span>
              <div className="text-[20px] font-[500] text-white leading-[32px] opacity-[0.6]">
                Tokens Burned
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto relative z-[5]">
        <table className="min-w-full bg-transparent table-auto text-left">
          <thead className="bg-[#F3F3F3] bg-opacity-[0.16] rounded-[20px] overflow-hidden text-white md:text-[14px] text-[12px] leading-[17.64px] text-opacity-[0.8] capitalize text-xs">
            <tr>
              <th className="py-[13.5px] ps-[19px] font-[500] w-[43px]">#</th>
              <th className="py-[13.5px] px-[12px] font-[500]">Source</th>
              <th className="py-[13.5px] pe-[12px] font-[500] min-w-[83px]">
                Date
              </th>
              <th className="py-[13.5px] pe-[12px] font-[500]">Amount</th>
              <th className="py-[13.5px] pe-[19px] font-[500]">Status</th>
            </tr>
          </thead>
          <tbody className="bg-transparent text-white">
            {tableData.map((row) => (
              <tr
                key={row.id}
                className="border-b border-[#FFFFFF30] md:text-[14px] text-[12px] leading-[17.64px]"
              >
                <td className="py-[13.5px] ps-[19px] font-[500]">{row.id}</td>
                <td className="py-[13.5px] px-[12px] font-[500]">
                  {row.source}
                </td>
                <td className="py-[13.5px] pe-[12px] font-[500]">{row.date}</td>
                <td className="py-[13.5px] pe-[12px] font-[500]">
                  {row.amount}
                </td>
                <td className="py-[13.5px] pe-[19px] font-[500]">
                  <span
                    className="inline-block px-[18.5px] py-[7px] text-[12px] font-[500] text-white rounded-full leading-[15.12px]"
                    style={{
                      background:
                        "linear-gradient(180deg, #FF6445 0%, #FF9E43 100%)",
                    }}
                  >
                    {row.status}
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
