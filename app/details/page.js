import React from 'react'
import Detail from './Detail'
import Location from './Location'
import HowMuchOverview from './HowMuchOverview'
import RecentActivity from './RecentActivity'
import FinancialBreakdown from './FinancialBreakdown'
import InviteFriends from './InviteFriends'
import Header from '../components/Header'
import DownloadConfidential from './DownloadConfidential'

const Details = () => {
    return (
        <div className='max-w-[1440px] mx-auto w-full'>
            <Header />
            <div className="bg-white text-primary-color py-6 sm:py-[35px] px-4 sm:px-[25px]">
                <h2 className="text-[32px] leading-[40.32px] tracking-[-2%] font-[700] text-primary-color pb-6 sm:pb-[35px] mt-[100px] lg:mt-0">Overview</h2>

                <Detail />

                <Location />

                <HowMuchOverview />

                <RecentActivity />

                <FinancialBreakdown />

                <DownloadConfidential />

                <InviteFriends />
            </div>
        </div>
    )
}

export default Details