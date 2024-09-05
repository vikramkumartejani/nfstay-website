import Image from "next/image";

 
export default function Home() {
  return (
    <div className="bg-white max-w-[1440px] mx-auto h-full px-3.5 sm:px-6 py-9 w-full">
       <div className="bg-[#954AFC] rounded-[32px] xlg:pr-[54px] w-full grid grid-cols-1 xlg:grid-cols-2 justify-items-center xlg:items-end">
        <div className="px-[20px] sm:px-[30px] md:px-[60px] flex flex-col gap-12 mt-[50px] md:mt-[109px] mb-[50px] md:mb-[100px] text-left w-full">
          <h2 className="text-[25px] xs:text-[44px] xs:leading-[60px] tracking-[-0.02em] font-bold max-w-[508px] text-white">Invest With NFsTay Today And Start Building Your Real Estate Empire</h2>
          <button className="bg-white w-[160px] sm:w-[191px] h-[50px] sm:h-[58px] rounded-full text-[#0B0924] font-semibold text-[18px] sm:text-[20px] leading-[25px] font-jakarta">Get Started</button>
        </div>
        <div className="">
          <Image src='/assets/invest-with-nfstay.svg' alt="invest-with-nfstay" width={600} height={400} className="xlg:min-h-[400px] rounded-[32px]" />
        </div>
       </div>
    </div>
  );
}
