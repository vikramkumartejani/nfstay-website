import React from 'react'
import DashboardLayout from '../components/DashboardLayout'
import BecomeAnNFsTayAgent from '../components/BecomeAnNFsTayAgent'
import PropertyOfTheDay from '../components/PropertyOfTheDay'
import TopEarnersLeaderboard from '../components/TopEarnersLeaderboard'
import Image from 'next/image'
import FeaturedProperties from '../components/FeaturedProperties'
import TopEstateAgents from '../components/TopEstateAgents'

const dashboardhome = () => {
    return (
        <DashboardLayout>
            <div className='px-3 md:px-6 py-9 pt-32 lg:pt-9'>

                <div className='bg-[#F7F7FD] w-full relative bg-custom-two shadow-custom rounded-[32px] overflow-hidden mb-12'>
                    <div className='grid xlg:grid-cols-2 grid-cols-1 items-end w-full'>
                        <div className='px-5 lg:ml-[30px] xl:ml-[60px] py-[30px] md:py-[56px]'>
                            <h1 className='text-[30px] xs:text-[38px] xl:text-[44px] tracking-[-0.02em] xs:leading-[60px] font-bold xlg:max-w-[478px]'>Buy Your First Real Estate in Seconds</h1>
                            <p className='xs:text-[18px] leading-[30px] font-medium xlg:max-w-[422px] pt-2.5 pb-5'>The world's highest yield generator NFT backed by Real Estate.</p>
                            <button className='bg-[#954AFC] w-[160px] xs:w-[170px] h-[45px] xs:h-[53px] rounded-[104px] text-[16px] leading-[20.16px] font-semibold text-white'>Get Started</button>
                        </div>
                        <div className='w-full'>
                            <Image src='/assets/dashboard-hero.svg' alt='dashboard-hero' width={400} height={400} className='h-full w-full xlg:w-[90%] lg:mt-10 relative z-40' />
                        </div>
                    </div>
                    <div className='lg:w-[50%] bg-[#b9d1fd4a] h-full absolute -right-40 top-0 rounded-full'></div>
                </div>

                <FeaturedProperties/>

                <TopEarnersLeaderboard/>

                <PropertyOfTheDay/>

                <TopEstateAgents/>

                <BecomeAnNFsTayAgent/>
            </div>
        </DashboardLayout>
    )
}

export default dashboardhome