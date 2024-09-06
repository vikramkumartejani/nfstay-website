import React from "react";
import DashboardLayout from "../components/DashboardLayout";
import Overview from "./Overview";
import PropertyCard from "./PropertyCard";
import PropertyDashboard from "./PropertyDashboard";
import RecentTransaction from "./RecentTransaction";
import BarChart from "../components/BarChart";

const page = () => {
  return (
    <DashboardLayout>
      <div className="md:px-[25px] px-[15px] min-w-full pt-[120px] lg:pt-[32px] flex flex-col gap-[25px] pb-[60px]">
        <Overview />
        <section className="flex md:flex-row flex-col gap-[20px]">
          <PropertyCard />
          <div className="md:w-[70%] md:h-[329px]">
            <BarChart small={true} />
          </div>
        </section>
        <section className="flex md:flex-row flex-col gap-[20px]">
          <PropertyDashboard />
          <RecentTransaction />
        </section>
      </div>
    </DashboardLayout>
  );
};

export default page;
