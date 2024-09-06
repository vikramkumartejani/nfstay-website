import React from "react";
import DashboardLayout from "../components/DashboardLayout";
import Overview from "./Overview";
import PropertyCard from "./PropertyCard";
import BarChartSmall from "../components/BarChartSmall";

const page = () => {
  return (
    <DashboardLayout>
      <div className="md:px-[25px] px-[15px] pt-[120px] lg:pt-[32px]">
        <Overview />
        <section className="flex md:flex-row flex-col gap-[25px]">
          <PropertyCard />
          <div className="md:w-[70%] md:h-[329px]">
            <BarChartSmall />
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
};

export default page;
