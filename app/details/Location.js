"use client"
import React,{useState} from "react";
import dynamic from "next/dynamic";
import CongratulationModal from "./CongratulationModal";
import CheckoutModal from "./CheckoutModal";
// import MapComponent from "./MapComponent";

const MapComponent = dynamic(() => import("./MapComponent"), {
    ssr: false,
});

const Location = () => {
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
    const [isCongratulationOpen, setIsCongratulationOpen] = useState(false);

    const handleBuyNow = () => {
        setIsCheckoutOpen(false);
        setIsCongratulationOpen(true);
    };
    return (
        <div className="flex lg:flex-row flex-col justify-between w-full my-10 gap-[35px]">
            {/* Location Section */}
            <div
                className="px-[15px] sm:px-[25px] py-[20px] bg-white rounded-[14px] xl:max-w-[610px] w-full"
                style={{ boxShadow: "0px 0px 11.7px 0px #00000026" }}
            >
                <h2 className="text-[20px] text-primary-color font-semibold mb-[15px]">
                    Location
                </h2>
                <div className="h-[137px] rounded-[10px] overflow-hidden">
                    <MapComponent />
                </div>
            </div>

            {/* Purchase Section */}
            <div className="flex flex-col justify-between w-full">
                <div className="flex justify-between items-center gap-[5px]">
                    <div className="flex flex-col text-primary-color gap-[12px]">
                        <span className="text-[12px] leading-[15px] font-normal">
                            CURRENT PRICE
                        </span>
                        <div className="text-[32px] leading-[32px] font-bold">
                            $860{" "}
                            <span className="text-[14px] font-[600] leading-[32px]">
                                (1.5 BNB)
                            </span>
                        </div>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center justify-between gap-1 bg-[#8165EC] flex-grow max-w-[185px] bg-opacity-[0.1] text-primary-color rounded-full p-[10px]">
                        <button className="w-[38px] h-[38px] rounded-full bg-white flex items-center justify-center">
                            <span className="text-[30px] mt-[-5.5px]">-</span>
                        </button>
                        <span className="text-[28px] font-[600] text-[#954AFC] leading-[35.28px]">
                            2
                        </span>
                        <button className="w-[38px] h-[38px] rounded-full bg-white text-lg flex items-center justify-center">
                            <span className="text-[28px] mt-[-7px]">+</span>
                        </button>
                    </div>
                </div>

                {/* Buy Button */}
                <div className="relative mt-[24px]">
                    <button  onClick={() => setIsCheckoutOpen(true)} className="w-full py-[16px] px-[25px] gap-[6px] rounded-full text-white text-[16px] leading-[20.16px] font-[600] bg-custom-gradient flex items-center justify-center">
                        Buy Now{" "}
                        <span className="w-[22px] h-[22px]">
                            <img src="/assets/icons/wallet-icon.svg" alt="wallet" />
                        </span>
                    </button>
                </div>

                {/* Progress Bar */}
                <div className="mt-[20px]">
                    <p className="text-[20] leading-[32px] font-[700] text-primary-color">
                        795,540 of 860,000 shares bought
                    </p>
                    <div className="w-full bg-[#0000000D] rounded-full h-[26px] mt-[7px]">
                        <div
                            className="bg-gradient-to-r from-[#E5C9FF] to-[#954AFC] h-full rounded-full"
                            style={{ width: "80.5%" }}
                        ></div>
                    </div>
                </div>
            </div>
            <CheckoutModal
                isOpen={isCheckoutOpen}
                onClose={() => setIsCheckoutOpen(false)}
                onBuyNow={handleBuyNow}
            />

            {/* Congratulation Modal */}
            <CongratulationModal
                isOpen={isCongratulationOpen}
                onClose={() => setIsCongratulationOpen(false)}
            />
        </div>
    );
};

export default Location;