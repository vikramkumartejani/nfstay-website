'use client'
import React,{useState} from 'react'

const agents = [
    {
        id: 1,
        img: "/assets/leaderboard.svg",
        propertyName: "Gohard",
        sharesSold: "$850,230",
        valueRaised: "8.28%",
        commissionReceived: "+20%",
    },
    {
        id: 2,
        img: "/assets/leaderboard.svg",
        propertyName: "Gohard",
        sharesSold: "$850,230",
        valueRaised: "8.28%",
        commissionReceived: "+20%",
    },
    {
        id: 3,
        img: "/assets/leaderboard.svg",
        propertyName: "Gohard",
        sharesSold: "$850,230",
        valueRaised: "8.28%",
        commissionReceived: "+20%",
    },
    {
        id: 4,
        img: "/assets/leaderboard.svg",
        propertyName: "Gohard",
        sharesSold: "$850,230",
        valueRaised: "8.28%",
        commissionReceived: "+20%",
    },
    {
        id: 5,
        img: "/assets/leaderboard.svg",
        propertyName: "Gohard",
        sharesSold: "$850,230",
        valueRaised: "8.28%",
        commissionReceived: "+20%",
    },
    {
        id: 6,
        img: "/assets/leaderboard.svg",
        propertyName: "Gohard",
        sharesSold: "$850,230",
        valueRaised: "8.28%",
        commissionReceived: "+20%",
    },
    {
        id: 7,
        img: "/assets/leaderboard.svg",
        propertyName: "Gohard",
        sharesSold: "$850,230",
        valueRaised: "8.28%",
        commissionReceived: "+20%",
    },
    {
        id: 8,
        img: "/assets/leaderboard.svg",
        propertyName: "Gohard",
        sharesSold: "$850,230",
        valueRaised: "8.28%",
        commissionReceived: "+20%",
    },
    {
        id: 9,
        img: "/assets/leaderboard.svg",
        propertyName: "Gohard",
        sharesSold: "$850,230",
        valueRaised: "8.28%",
        commissionReceived: "+20%",
    },
    {
        id: 10,
        img: "/assets/leaderboard.svg",
        propertyName: "Gohard",
        sharesSold: "$850,230",
        valueRaised: "8.28%",
        commissionReceived: "+20%",
    },
    {
        id: 11,
        img: "/assets/leaderboard.svg",
        propertyName: "Gohard",
        sharesSold: "$850,230",
        valueRaised: "8.28%",
        commissionReceived: "+20%",
    },
    {
        id: 12,
        img: "/assets/leaderboard.svg",
        propertyName: "Gohard",
        sharesSold: "$850,230",
        valueRaised: "8.28%",
        commissionReceived: "+20%",
    },
];
const TopEstateAgents = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; 

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = agents.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(agents.length / itemsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <div>
            <h1 className='text-[#0C0839] text-[25px] sm:text-[32px] font-bold font-jakarta leading-[40px] tracking-[-0.02em]'>Top Estate Agents</h1>
            <div>
                <div className="w-full overflow-x-auto mt-10">
                    <table className="min-w-full bg-white rounded-[14px] overflow-hidden">
                        <thead>
                            <tr className="text-nowrap lg:text-wrap">
                                <th className="text-[#0C0839] text-opacity-50 text-[14px] font-medium font-jakarta leading-[16px] px-[12px] md:px-[25px] text-center">
                                    Username
                                </th>
                                <th className="text-[#0C0839] text-opacity-50 text-[14px] font-medium font-jakarta leading-[16px] px-[12px] md:px-[25px]">
                                    Shares Sold
                                </th>
                                <th className="text-[#0C0839] text-opacity-50 text-[14px] font-medium font-jakarta leading-[16px] px-[12px] md:px-[25px]">
                                    Value Raised
                                </th>
                                <th className="text-[#0C0839] text-opacity-50 text-[14px] font-medium font-jakarta leading-[16px] px-[12px] md:px-[25px]">
                                    Commission Received
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((payout, index) => (
                                <tr
                                    key={index}
                                    className={`border-[#0C0839] text-nowrap border-opacity-[0.2] ${index !== currentItems.length - 1 ? "border-b" : ""}`}
                                >
                                    <td className="font-semibold text-[14px] md:text-[16px] leading-[23px] text-[#0C0839] py-[20px] flex items-center">
                                        {payout.id}
                                        <img
                                            src={payout.img}
                                            alt="property"
                                            className="ml-5 md:ml-10 w-[32px] h-[32px] md:w-[44px] md:h-[44px] rounded-full mr-2 md:mr-4"
                                        />
                                        <div className='flex items-start flex-col'>
                                            <h1 className="text-[16px] leading-[24px] font-semibold font-jakarta text-[#0C0839] pr-4 md:pr-6">
                                                {payout.propertyName}
                                            </h1>
                                            <p className='text-[#0C0839] text-opacity-50 text-[14px] leading-[16px] font-medium mt-0.5'>Stockholm, Sweden</p>
                                        </div>
                                    </td>

                                    <td className="font-[600] text-[14px] md:text-[16px] leading-[23px] text-[#0C0839] px-[12px] md:px-[23px] py-[20px] text-center min-w-[126px]">
                                        {payout.sharesSold}
                                    </td>

                                    <td className="font-[600] text-[14px] md:text-[16px] leading-[23px] text-[#0C0839] px-[12px] md:px-[23px] py-[20px] text-center">
                                        {payout.valueRaised}
                                    </td>

                                    <td className="font-semibold text-[14px] md:text-[16px] leading-[23px] text-[#43CD61] px-[12px] md:px-[23px] py-[20px] text-center">
                                        {payout.commissionReceived}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* Pagination */}
                <div className='my-5 flex items-center gap-8 justify-center'>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => paginate(index + 1)}
                            className={`w-[40px] h-[40px] ${currentPage === index + 1 ? 'bg-[#F7F6FF]' : 'bg-transparent'} rounded-full text-[#0C0839] font-semibold text-[16px] leading-[23px]`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TopEstateAgents