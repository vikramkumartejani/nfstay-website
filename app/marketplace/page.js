import React from 'react'
import DashboardLayout from '../components/DashboardLayout';

const Marketplace = () => {
    const properties = [
        {
            image: "/assets/productone.svg",
            priceLabel: "$215 USD",
            price: "Starting price",
            subtitle: "1-Bedroom studio apartment near the city center",
            location: "Manchester, United Kingdom",
            expectedReturn: "38%",
            dividendYield: "5.66%",
            dividendFrequency: "Monthly",
            nftsMinted: "75",
            totalNfts: "100",
            propertyPrice: "215,000 USD",
            buttons: ["buyNow"], 
            progressWidth: "40%",
        },
        {
            image: "/assets/productone.svg",
            priceLabel: "$215 USD",
            price: "Starting price",
            subtitle: "1-Bedroom studio apartment near the city center",
            location: "Manchester, United Kingdom",
            expectedReturn: "38%",
            dividendYield: "5.66%",
            dividendFrequency: "Monthly",
            nftsMinted: "75",
            totalNfts: "100",
            propertyPrice: "215,000 USD",
            buttons: ["fullyFunded"], 
            progressWidth: "100%",
        },
        {
            image: "/assets/productone.svg",
            priceLabel: "$215 USD",
            price: "Starting price",
            subtitle: "1-Bedroom studio apartment near the city center",
            location: "Manchester, United Kingdom",
            expectedReturn: "38%",
            dividendYield: "5.66%",
            dividendFrequency: "Monthly",
            nftsMinted: "75",
            totalNfts: "100",
            propertyPrice: "215,000 USD",
            buttons: ["fullyFunded"], 
            progressWidth: "100%",
        },
    ];
  return (
    <DashboardLayout>
        <div className='px-3 md:px-[25px] pt-[120px] lg:pt-[32px]'>
            <h1 className='text-[#0C0839] text-[28px] sm:text-[32px] leading-[40.32px] tracking-[-0.02em] font-bold mb-1.5'>Marketplace</h1>
            <p className='text-[#0C0839] text-[16px] sm:text-[18px] leading-[27px] font-medium opacity-50'>Buy and Sell Real Estate NFTs Within Seconds</p>

            <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[25px]'>
                {properties.map((property, index) => (
                    <div key={index} className="relative bg-white rounded-[16px] shadow-lg pb-3.5 border border-[#0C08391A]">
                        <div className="relative rounded-t-[16px]">
                            <img src={property.image} alt="Property Image" className="w-full h-[200px] object-cover rounded-t-[16px]" />

                            <div className="absolute -bottom-[18px] sm:-bottom-[18px] h-[40px] -left-2 z-30 bg-[#954AFC] text-white font-bold text-[20px] leading-[29px] tracking-[-0.01em] px-4 rounded-r-[8px] shadow-lg rounded-t-[8px] flex items-center">
                                {property.priceLabel} <span className="text-[12px] leading-[29px] font-medium ml-1 pt-1">{property.price}</span>
                            </div>

                            <button className="absolute active:scale-100 scale-105 top-2 sm:top-2 right-2 bg-white p-2 rounded-full shadow-sm z-40">
                                <img src="/assets/icons/favorited.svg" alt="favorited" width={16} height={16} />
                            </button>

                            <div className="absolute top-2 left-2 bg-white w-[111px] h-[27px] rounded-[36px] flex items-center justify-center">
                                <h3 className="text-[12px] leading-[16px] tracking-[1px] font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#9945FF] to-[#20E19F]">Buy to let</h3>
                            </div>
                        </div>

                        <div className="px-3.5 md:px-5">
                            <h2 className="text-[#0C0839] text-[20px] sm:text-[22px] sm:leading-[29px] font-bold mt-9 mb-2">{property.subtitle}</h2>
                            <p className="text-[#0C0839] text-[14px] leading-[21px] opacity-50 font-medium">{property.location}</p>

                            <div className="flex justify-between text-start py-3.5 border-y border-[#0C0839] border-opacity-10 mt-3.5">
                                <div className="flex flex-col gap-1.5">
                                    <p className="text-[20px] leading-[29px] tracking-[-0.01em] font-bold text-[#0C0839]">{property.expectedReturn}</p>
                                    <p className="text-[11px] leading-[16px] font-medium opacity-50 text-[#0C0839]">Expected Return</p>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <p className="text-[20px] leading-[29px] tracking-[-0.01em] font-bold text-[#0C0839]">{property.dividendYield}</p>
                                    <p className="text-[11px] leading-[16px] font-medium opacity-50 text-[#0C0839]">Dividend Yield</p>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <p className="text-[20px] leading-[29px] tracking-[-0.01em] font-bold text-[#0C0839]">{property.dividendFrequency}</p>
                                    <p className="text-[11px] leading-[16px] font-medium opacity-50 text-[#0C0839]">Dividend Frequency</p>
                                </div>
                            </div>

                            <div className="border-b border-[#0C0839] border-opacity-10 py-3.5">
                                <h3 className="text-[#0B0924] text-[14px] leading-[21px] font-semibold mb-1.5">{property.nftsMinted} of {property.totalNfts} NFTs minted</h3>
                                <div className="rounded-[53px] w-full h-[10px] bg-[#F7F6FF]">
                                    <div className="bg-custom-three h-[10px] rounded-[53px]" style={{ width: property.progressWidth }}></div>
                                </div>
                            </div>

                            <div className="mt-3.5 flex items-center justify-between">
                                <div>
                                    <h4 className="text-[#0C0839] text-[14px] leading-[21px] font-medium opacity-50">Price of Real Estate</h4>
                                    <h2 className="text-[#0C0839] text-[20px] leading-[29px] tracking-[-0.01em] font-bold">{property.propertyPrice}</h2>
                                </div>
                                <div>
                                    {property.buttons.includes("buyNow") && (
                                        <button className="bg-custom-four w-[126px] h-[40px] rounded-[1111px] text-white text-[16px] leading-[20.16px] font-semibold">Buy Now</button>
                                    )}
                                    {property.buttons.includes("fullyFunded") && (
                                        <button className="bg-[#C7C7C7] w-[145px] h-[40px] rounded-[1111px] text-white text-[16px] leading-[20.16px] font-semibold">Fully funded</button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </DashboardLayout>
  )
}

export default Marketplace