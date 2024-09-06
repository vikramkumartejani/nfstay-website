import React from "react";

const Overview = () => {
  return (
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[25px]">
      {/* Card 1: Total Revenue */}
      <div
        class="bg-white p-[25px] rounded-[14px]"
        style={{
          boxShadow: `
            0px 18.1px 54.29px -3.39px #00000006,
            0px 5.78px 17.33px -2.55px #0000000F,
            0px 2.18px 6.55px -1.7px #00000012,
            0px 0.72px 2.16px -0.85px #00000012`,
        }}
      >
        <p class="text-primary-color md:text-[16px] text-[14px] font-[400] leading-[24px] opacity-[0.7]">
          Total Revenue
        </p>
        <h3 className="md:text-[28px] text-[22px] font-[700] leading-[40px] tracking-[-1%] text-primary-color">
          $14,437
          <span className="ms-[8px] text-[#27AE60] md:text-[14px] text-[12px] leading-[19.6px] font-[700] px-[10px] py-[6px] bg-[#27AE601A] rounded-[12px]">
            +$235
          </span>
        </h3>
      </div>

      {/* Card 2: Transactions */}
      <div
        class="bg-white p-[25px] rounded-[14px]"
        style={{
          boxShadow: `
            0px 18.1px 54.29px -3.39px #00000006,
            0px 5.78px 17.33px -2.55px #0000000F,
            0px 2.18px 6.55px -1.7px #00000012,
            0px 0.72px 2.16px -0.85px #00000012`,
        }}
      >
        <p class="text-primary-color text-[16px] font-[400] leading-[24px] opacity-[0.7]">
          Transactions
        </p>
        <h3 className="md:text-[28px] text-[22px] font-[700] leading-[40px] tracking-[-1%] text-primary-color">
          1,915
          <span className="ms-[8px] text-[#27AE60] md:text-[14px] text-[12px] leading-[19.6px] font-[700] px-[10px] py-[6px] bg-[#27AE601A] rounded-[12px]">
            +20
          </span>
        </h3>
      </div>

      {/* Card 3: Properties */}
      <div
        class="bg-white p-[25px] rounded-[14px]"
        style={{
          boxShadow: `
            0px 18.1px 54.29px -3.39px #00000006,
            0px 5.78px 17.33px -2.55px #0000000F,
            0px 2.18px 6.55px -1.7px #00000012,
            0px 0.72px 2.16px -0.85px #00000012`,
        }}
      >
        <p class="text-primary-color text-[16px] font-[400] leading-[24px] opacity-[0.7]">
          Properties
        </p>
        <h3 className="md:text-[28px] text-[22px] font-[700] leading-[40px] tracking-[-1%] text-primary-color">
          784
          <span className="ms-[8px] text-[#27AE60] md:text-[14px] text-[12px] leading-[19.6px] font-[700] px-[10px] py-[6px] bg-[#27AE601A] rounded-[12px]">
            +236
          </span>
        </h3>
      </div>

      {/* Card 4: Profit Generated */}
      <div
        class="bg-white p-[25px] rounded-[14px]"
        style={{
          boxShadow: `
            0px 18.1px 54.29px -3.39px #00000006,
            0px 5.78px 17.33px -2.55px #0000000F,
            0px 2.18px 6.55px -1.7px #00000012,
            0px 0.72px 2.16px -0.85px #00000012`,
        }}
      >
        <p class="text-primary-color text-[16px] font-[400] leading-[24px] opacity-[0.7]">
          Profit Generated
        </p>
        <h3 className="md:text-[28px] text-[22px] font-[700] leading-[40px] tracking-[-1%] text-primary-color">
          90%
          <span className="ms-[8px] text-[#F06565] md:text-[14px] text-[12px] leading-[19.6px] font-[700] px-[10px] py-[6px] bg-[#FDF7F7] rounded-[12px]">
            -3%
          </span>
        </h3>
      </div>
    </div>
  );
};

export default Overview;
