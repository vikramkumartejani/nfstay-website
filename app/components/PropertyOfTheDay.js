import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PropertyOfTheDay = () => {
  return (
    <div className='mb-10'>
      <h2 className='text-[#0C0839] text-[25px] sm:text-[32px] font-bold font-jakarta leading-[40px] tracking-[-0.02em] mb-7 sm:mb-10'>Property of the Day</h2>
      <div>
        <div className='relative'>
          <Image src='/assets/property-of-the-day.svg' alt='property-of-the-day' width={1137} height={509} className='' />
          <div className='bg-[#A260FD] absolute top-2.5 md:top-10 left-0 rounded-e-[50px] w-[200px] md:w-[322px] h-[40px] md:h-[50px] text-white flex items-center justify-center'>
            <h3 className='text-[15px] md:text-[24px] leading-[39px] tracking-[-0.02em] font-bold flex items-center gap-2'>$5,700 USD*<span className='text-[12px] md:text-[16px] font-semibold leading-[23px]'>starting price</span></h3>
          </div>
        </div>

        <div className='flex items-center gap-1 py-5 sm:pt-7'>
          <Image src='/assets/icons/tag.svg.svg' alt='location' width={15} height={19}/>
          <h3 className='text-[#0C0839] opacity-50 text-[18px] leading-[27px] font-medium'>Cannes, France</h3>
        </div>

        <div className='flex items-start flex-wrap justify-between gap-4'>
          <h2 className='text-[#0C0839] text-[20px] sm:text-[24px] sm:leading-[37px] font-bold tracking-[-0.02em] xl:max-w-[252px] xl:mr-5'>Beautiful 5-Bedroom Villa near the Beach</h2>
          <div className='grid grid-cols-2 sm:flex items-center gap-6 flex-wrap'>
            <div className='pr-4 sm:pr-6 border-r border-[#0C0839] border-opacity-20'>
              <h2 className='text-[#0C0839] text-[20px] xs:text-[24px] leading-[30px] font-semibold tracking-[-0.02em] pb-2'>38%</h2>
              <h4 className='text-[#0C0839] text-[14px] leading-[21px] tracking-[-0.03em] font-medium opacity-50'>Expected Return</h4>
            </div>
            <div className='pr-4 sm:pr-6 sm:border-r border-[#0C0839] border-opacity-20'>
              <h2 className='text-[#0C0839] text-[20px] xs:text-[24px] leading-[30px] font-semibold tracking-[-0.02em] pb-2'>5.66%</h2>
              <h4 className='text-[#0C0839] text-[14px] leading-[21px] tracking-[-0.03em] font-medium opacity-50'>Dividend Yield</h4>
            </div>
            <div className='pr-4 sm:pr-6 border-r border-[#0C0839] border-opacity-20'>
              <h2 className='text-[#0C0839] text-[20px] xs:text-[24px] leading-[30px] font-semibold tracking-[-0.02em] pb-2'>Monthly</h2>
              <h4 className='text-[#0C0839] text-[14px] leading-[21px] tracking-[-0.03em] font-medium opacity-50'>Dividend Frequency</h4>
            </div>
            <div className=''>
              <h4 className='text-[#0C0839] text-[16px] xs:text-[18px] leading-[27px] font-medium opacity-50 pb-2.5'>Price of Real Estate*</h4>
              <h2 className='text-[#0C0839] text-[20px] xs:text-[24px] leading-[30px] font-semibold tracking-[-0.02em]'>5,700,000 USD</h2>
            </div>
          </div>
          <Link href='/details' className='flex items-center justify-center bg-[#954AFC] rounded-full w-full xs:w-[140px] h-[50px] text-white text-[20px] leading-[25px] font-semibold xs:mt-0 mt-5'>Buy Now</Link>
        </div>
      </div>
    </div>
  )
}

export default PropertyOfTheDay