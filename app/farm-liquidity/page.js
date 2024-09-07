import React from "react";
import DashboardLayout from "../components/DashboardLayout";
import Image from "next/image";
import SideContent from "./SideContent";
import Graph from "./Graph";
import BuyStayCard from "./BuyStayCard";
import Incinerator from "./Incinerator";

const FarmLiquidity = () => {
  return (
    <DashboardLayout>
      <div className="w-full p-4 pt-32 lg:pt-9">
        <div className="pb-10 flex items-start justify-between md:flex-row flex-col gap-5">
          <div>
            <h1 className="text-[#0C0839] text-[30px] font-bold tracking-[-0.64px]">
              Farm
            </h1>
            <h3 className="text-[#0C0839] leading-[27px] font-medium md:text-[18px] text-[16px] opacity-50">
              Earn $STAY by providing liquidity
            </h3>
          </div>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <div className="border-2 border-[#0C0839] rounded-[14px] border-opacity-10 p-3.5 flex items-start gap-3">
              <Image
                src="/assets/icons/your-liquidity.svg"
                alt="your-liquidity"
                width={22}
                height={22}
              />
              <div className="mt-[-5px]">
                <h2 className="text-[#0C0839] md:text-[24px] text-[20px] leading-[32px] font-semibold">
                  0.00$
                </h2>
                <h3 className="text-[#0C0839] md:text-[16px] text-[14px] leading-[21px] font-medium opacity-50">
                  Your Liquidity
                </h3>
              </div>
            </div>
            <div className="border-2 border-[#0C0839] rounded-[14px] border-opacity-10 p-3.5 flex items-start gap-3">
              <Image
                src="/assets/icons/apr.svg"
                alt="your-liquidity"
                width={22}
                height={22}
              />
              <div className="mt-[-5px]">
                <h2 className="text-[#0C0839] md:text-[24px] text-[20px] leading-[32px] font-semibold">
                  93.52%
                </h2>
                <h3 className="text-[#0C0839] md:text-[16px] text-[14px] leading-[21px] font-medium opacity-50">
                  APR
                </h3>
              </div>
            </div>
            <div className="border-2 border-[#0C0839] rounded-[14px] border-opacity-10 p-3.5 flex items-start gap-3">
              <Image
                src="/assets/icons/dollar.svg"
                alt="your-liquidity"
                width={22}
                height={22}
              />
              <div className="mt-[-5px]">
                <h2 className="text-[#0C0839] md:text-[24px] text-[20px] leading-[32px] font-semibold">
                  $0.00
                </h2>
                <h3 className="text-[#0C0839] md:text-[16px] text-[14px] leading-[21px] font-medium opacity-50">
                  Unclaimed Rewards
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <img
            className="md:w-[62px] w-[50px]"
            src="/assets/icons/usdt-btc.svg"
            alt="usdt-btc"
          />
          <h2 className="text-[#0C0839] md:text-[24px] text-[20px] leading-[30px] tracking-[-0.02em] font-bold">
            USDT/BTC
          </h2>
        </div>
        <div className="flex items-start md:flex-row flex-col justify-between gap-6">
          <div className="mt-10 w-full">
            <div className="flex items-end gap-2">
              <h2 className="text-[#0C0839] xl:text-[44px] lg:text-[35px] md:text-[30px] sm:text-[25px] text-[24px] md:leading-[50.44px] tracking-[-0.02em] font-bold">
                63.125 USDT/ BTC
              </h2>
              <span className="text-[#0C0839] text-opacity-70 text-[16px] leading-[28px] font-medium">
                (+6.57%)
              </span>
            </div>
            <Graph />
            <div className="mt-8 bg-white rounded-[14px] shadow-custom-one py-6 sm:py-8 px-4 sm:px-10 grid grid-cols-2 sm:flex items-center justify-between gap-7 flex-wrap">
              <div>
                <div className="flex items-center gap-2.5">
                  <Image
                    src="/assets/icons/n.svg"
                    alt="n"
                    width={20}
                    height={20}
                  />
                  <h2 className="text-[#0C0839] text-[18px] leading-[27px] font-semibold">
                    90.560.000
                  </h2>
                </div>
                <div className="mt-2.5 flex items-center gap-2.5">
                  <Image
                    src="/assets/icons/btc.svg"
                    alt="n"
                    width={20}
                    height={20}
                  />
                  <h2 className="text-[#0C0839] text-[18px] leading-[27px] font-semibold">
                    1,528
                  </h2>
                </div>
              </div>
              <div>
                <h2 className="text-[#0C0839] md:text-[26px] text-[22px] leading-[32px] tracking-[-0.02em] font-semibold">
                  $181M
                </h2>
                <h4 className="mt-1 text-[#0C0839] text-[14px] leading-[27px] font-semibold opacity-50">
                  Total volume locked
                </h4>
              </div>
              <div>
                <h2 className="text-[#0C0839] md:text-[26px] text-[22px] leading-[32px] tracking-[-0.02em] font-semibold">
                  $381M
                </h2>
                <h4 className="mt-1 text-[#0C0839] text-[14px] leading-[27px] font-semibold opacity-50">
                  24h trade volume
                </h4>
              </div>
              <div>
                <h2 className="text-[#0C0839] md:text-[26px] text-[22px] leading-[32px] tracking-[-0.02em] font-semibold">
                  3.91%
                </h2>
                <h4 className="mt-1 text-[#0C0839] text-[14px] leading-[27px] font-semibold opacity-50">
                  APR
                </h4>
              </div>
            </div>
          </div>
          <SideContent />
        </div>
        <div className="flex md:flex-row flex-col gap-[19px] my-[30px]">
          <BuyStayCard
            buttonText={"Buy with Flat"}
            cardsLogo={true}
            buyingInfo={false}
          />
          <BuyStayCard
            buttonText={"Swap Now"}
            cardsLogo={false}
            buyingInfo={true}
          />
        </div>

        <Incinerator />
      </div>
    </DashboardLayout>
  );
};

export default FarmLiquidity;
