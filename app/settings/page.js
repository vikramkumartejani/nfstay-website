"use client";
import { useState } from "react";
import { FaUser, FaXTwitter } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import DashboardLayout from "../components/DashboardLayout";
import Image from "next/image";

const Settings = () => {
  const [isRealEstateSold, setIsRealEstateSold] = useState(false);
  const [isAuctionExpires, setIsAuctionExpires] = useState(false);
  const [isNftUpdate, setIsNftUpdate] = useState(false);
  const [isSuccessfulPurchase, setIsSuccessfulPurchase] = useState(false);

  return (
    <DashboardLayout>
      <div className="max-w-[1200px] mx-auto px-3 md:px-[25px] pt-[120px] lg:pt-[32px] mb-[109px] text-primary-color">
        <div className="flex flex-wrap gap-5 justify-between items-center mb-[29px]">
          <div className="flex items-center flex-wrap justify-between max-w-[730px] w-full gap-5">
            <div>
              <h1 className="text-[#0C0839] font-bold font-jakarta text-[25px] sm:text-[32px] leading-[40.32px] tracking-[-0.02em] mb-1.5">General Settings</h1>
              <p className="text-[#0C0839] font-jakarta font-medium text-[15px] sm:text-[18px] leading-[27px] opacity-50">Upload your photo and details here</p>
            </div>
            <button className="bg-custom-one w-full sm:w-[225px] h-[44px] rounded-full text-white text-[18px] leading-[22.68px] font-semibold font-jakarta">Verify your account</button>
          </div>

          <div className="flex gap-[19px] w-full sm:w-[300px]">
            <button className="text-[16px] leading-[20.16px] rounded-full font-semibold font-jakarta text-white w-full sm:w-[126px] h-[41px] bg-[#954AFC]">Save</button>
            <button className="text-[16px] leading-[20.16px] rounded-full font-semibold text-[#0C0839] font-jakarta w-full sm:w-[126px] h-[41px] bg-[#F4F4F4]">Cancel</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[25px]">
          <div className="md:col-span-2 md:order-1 order-2">
            <div className="bg-white rounded-[14px]" style={{ boxShadow: "0px 0px 11.7px 0px #00000026" }} >
              {/* Title */}
              <div className="border-b border-[#0C0839] border-opacity-20">
                <p className="text-[#0C0839] text-[20px] font-semibold leading-[25.2px] px-4 sm:px-6 pt-6 pb-5 font-jakarta">Personal Information</p>
              </div>

              <div className="px-4 sm:px-6 pb-9 pt-6 flex flex-col gap-[34px]">
                {/* Username */}
                <div className="flex flex-col gap-2">
                  <label className="text-[#0C0839] font-medium font-jakarta text-[18px] leading-[27px] opacity-50">Username *</label>
                  <div className="h-[66px] w-full bg-[#F5F5F5] rounded-[14px] py-2 pr-4 flex px-5">
                    <Image src='/assets/icons/user.svg' alt="user" width={24} height={24} />
                    <input type="text" className="w-full h-full bg-transparent outline-none px-2 text-[18px] text-[#0C0839] opacity-80 font-jakarta font-medium" />
                    <Image src='/assets/icons/circle.svg' alt="circle" width={20} height={20} />
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-2">
                  <label className="text-[#0C0839] font-medium font-jakarta text-[18px] leading-[27px] opacity-50">Email Address *</label>
                  <div className="h-[66px] w-full bg-[#F5F5F5] rounded-[14px] py-2 pr-4 flex px-5">
                    <Image src='/assets/icons/email.svg' alt="email" width={24} height={24} />
                    <input type="text" className="w-full h-full bg-transparent outline-none px-2 text-[18px] text-[#0C0839] opacity-80 font-jakarta font-medium" />
                    <Image src='/assets/icons/circle.svg' alt="circle" width={20} height={20} />
                  </div>
                </div>

                {/* Wallet address */}
                <div className="flex flex-col gap-2">
                  <label className="text-[#0C0839] font-medium font-jakarta text-[18px] leading-[27px] opacity-50">Wallet address</label>
                  <div className="h-[66px] w-full bg-[#F5F5F5] rounded-[14px] py-2 px-4">
                    <input type="text" className="w-full h-full bg-transparent outline-none text-[18px] text-[#0C0839] opacity-80 font-jakarta font-medium" />
                  </div>
                </div>

                {/* Twitter */}
                <div className="flex flex-col gap-2">
                  <label className="text-[#0C0839] font-medium font-jakarta text-[18px] leading-[27px] opacity-50">Twitter</label>
                  <div className="h-[66px] w-full bg-[#F5F5F5] rounded-[14px] py-2 pr-4 flex px-5">
                    <Image src='/assets/icons/twitter.svg' alt="twitter" width={24} height={24} />
                    <input type="text" className="w-full h-full bg-transparent outline-none pl-2 text-[18px] text-[#0C0839] opacity-80 font-jakarta font-medium" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-[37px] bg-white rounded-[14px]" style={{ boxShadow: "0px 0px 11.7px 0px #00000026" }}>
              <div className="border-b border-[#0C0839] border-opacity-20">
                <p className="text-[#0C0839] text-[20px] font-semibold font-jakarta leading-[25.2px] px-4 sm:px-6 pt-6 pb-5">Personal Information</p>
              </div>

              <div className="px-4 py-6 sm:p-6 flex flex-col gap-[28px]">
                {/* Real Estate NFT Sold */}
                <div className="flex justify-between gap-[10px]">
                  <div className="flex flex-col gap-[5px]">
                    <h6 className="text-[#0C0839] font-medium text-[18px] leading-[27px] font-jakarta">Real Estate NFT Sold</h6>
                    <p className="text-[#0C0839] font-medium text-[14px] leading-[21px] opacity-50 font-jakarta">When someone purchases one of your NFTs</p>
                  </div>

                  <div className="toggle-switch flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="isRealEstateSold"
                      className="hidden"
                      checked={isRealEstateSold}
                      onChange={() => setIsRealEstateSold(!isRealEstateSold)}
                    />
                    <label
                      htmlFor="isRealEstateSold"
                      id="slider"
                      className={`toggleSwitch relative sm:mr-4 w-[41px] h-[26px] rounded-full cursor-pointer ${isRealEstateSold ? "bg-[#9945FF]" : "bg-gray-300"
                        }`}
                    ></label>
                  </div>
                </div>

                {/* Auction Expires */}
                <div className="flex justify-between gap-[10px]">
                  <div className="flex flex-col gap-[5px]">
                    <h6 className="text-[#0C0839] font-medium text-[18px] leading-[27px] font-jakarta">Auction Expires</h6>
                    <p className="text-[#0C0839] font-medium text-[14px] leading-[21px] opacity-50 font-jakarta">When an auction you participate in ends</p>
                  </div>

                  <div className="toggle-switch flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="isAuctionExpires"
                      className="hidden"
                      checked={isAuctionExpires}
                      onChange={() => setIsAuctionExpires(!isAuctionExpires)}
                    />
                    <label
                      htmlFor="isAuctionExpires"
                      id="slider"
                      className={`toggleSwitch relative sm:mr-4 w-[41px] h-[26px] rounded-full cursor-pointer ${isAuctionExpires ? "bg-[#9945FF]" : "bg-gray-300"
                        }`}
                    ></label>
                  </div>
                </div>

                {/* Individual NFTs Update */}
                <div className="flex justify-between gap-[10px]">
                  <div className="flex flex-col gap-[5px]">
                    <h6 className="text-[#0C0839] font-medium text-[18px] leading-[27px] font-jakarta">Individual NFTs Update</h6>
                    <p className="text-[#0C0839] font-medium text-[14px] leading-[21px] opacity-50 font-jakarta">When important updates occur regarding your NFT</p>
                  </div>

                  <div className="toggle-switch flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="isNftUpdate"
                      className="hidden"
                      checked={isNftUpdate}
                      onChange={() => setIsNftUpdate(!isNftUpdate)}
                    />
                    <label
                      htmlFor="isNftUpdate"
                      id="slider"
                      className={`toggleSwitch relative sm:mr-4 w-[41px] h-[26px] rounded-full cursor-pointer ${isNftUpdate ? "bg-[#9945FF]" : "bg-gray-300"
                        }`}
                    ></label>
                  </div>
                </div>

                {/* Successful Purchase */}
                <div className="flex justify-between gap-[10px]">
                  <div className="flex flex-col gap-[5px]">
                    <h6 className="text-[#0C0839] font-medium text-[18px] leading-[27px]">Successful Purchase</h6>
                    <p className="text-[#0C0839] font-medium text-[14px] leading-[21px] opacity-50">When you successfully buy an NFT</p>
                  </div>

                  <div className="toggle-switch flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="isSuccessfulPurchase"
                      className="hidden"
                      checked={isSuccessfulPurchase}
                      onChange={() =>
                        setIsSuccessfulPurchase(!isSuccessfulPurchase)
                      }
                    />
                    <label
                      htmlFor="isSuccessfulPurchase"
                      id="slider"
                      className={`toggleSwitch relative sm:mr-4 w-[41px] h-[26px] rounded-full cursor-pointer ${isSuccessfulPurchase ? "bg-[#9945FF]" : "bg-gray-300"
                        }`}
                    ></label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[14px] flex flex-col items-center h-fit w-full md:order-2 order-1" style={{ boxShadow: "0px 0px 11.7px 0px #00000026" }} >
            <div className="border-b border-[#0C0839] border-opacity-20 w-full">
              <p className="text-[#0C0839] px-[25px] pt-[24px] pb-[20px] text-[20px] font-semibold leading-[25.2px] font-jakarta">Your Photo</p>
            </div>
            <div className="flex flex-col gap-[28px] mt-[42px] mb-[40px]">
              <div className="w-[108px] h-[108px] mx-auto rounded-full overflow-hidden">
                <img
                  src="/assets/setting-profile.svg"
                  alt="Profile photo"
                  className="object-cover h-full w-full"
                />
              </div>
              <button className="bg-white text-[#954AFC] border border-[#954AFC] rounded-full text-[16px] leading-[20.16px] font-[600] px-[23px] py-[14px]">
                Update profile photo
              </button>
              <button className="text-[#FF2424] text-[16px] font-[600] leading-[20.16px]">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;