import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Notification = () => {
  return (
    <div>
        <div className="flex items-center justify-between gap-2 pb-[24px] border-b border-[#00000026]">
                <h1 className="text-[#0C0839] text-[18px] font-bold">Notifications</h1>
                <div className="flex items-center gap-2">
                  <Image src='/assets/icons/check-check.svg' alt="check" width={20} height={20} />
                  <h3 className="text-[#954AFC] text-[14px] font-semibold">Mark all as read</h3>
                </div>
              </div>
              <div className="py-6 flex flex-col gap-6 border-b border-[#00000026]">
                <div className="flex items-start gap-5">
                  <Image src='/assets/icons/dollar-square.svg' alt="dollar-square" width={26} height={26} />
                  <div>
                    <h2 className="pb-1 text-[#0C0839] text-[16px] font-semibold leading-[23px]">P2P Order Notifications</h2>
                    <h4 className="text-[#0C0839] text-[14px] font-medium leading-[16px] opacity-50 line-clamp-1">No news to report</h4>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <Image src='/assets/icons/home.svg' alt="dollar-square" width={26} height={26} />
                  <div className="w-full">
                    <div className="pb-0.5 flex items-center justify-between w-full">
                      <h2 className="pb-1 text-[#0C0839] text-[16px] font-semibold leading-[23px]">System Messages</h2>
                      <div className="bg-[#20E19F] rounded-full h-[12px] w-[12px]"></div>
                    </div>
                    <div className="flex items-center justify-between w-full">
                      <h4 className="text-[#0C0839] text-[14px] font-medium leading-[16px] opacity-50 line-clamp-1">Login attempted from New IP</h4>
                      <h3 className="text-[#0C0839] text-[12px] font-medium leading-[16px] opacity-50">11:25</h3>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <Image src='/assets/icons/directbox-notif.svg' alt="dollar-square" width={26} height={26} />
                  <div className="w-full">
                    <h2 className="pb-1 text-[#0C0839] text-[16px] font-semibold leading-[23px]">System Messages</h2>
                    <div className="flex items-center justify-between w-full">
                      <h4 className="text-[#0C0839] text-[14px] font-medium leading-[16px] opacity-50 line-clamp-1">Sed dictum elementum eros, in interdum sem egestas a</h4>
                      <h3 className="text-[#0C0839] text-[12px] font-medium leading-[16px] opacity-50">11:25</h3>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <Image src='/assets/chart.svg' alt="dollar-square" width={26} height={26} />
                  <h2 className="pb-1 text-[#0C0839] text-[16px] font-semibold leading-[23px] line-clamp-1">Lorem Ipsum Dolar</h2>
                </div>
              </div>
              <div className="pt-5 flex items-center justify-between">
                <Link href='/view-all' className="text-[#0B0924] text-[14px] font-semibold underline underline-offset-2">View All</Link>
                <Image src='/assets/icons/setting-icon.svg' alt="setting-icon" width={24} height={24} />
              </div>
    </div>
  )
}

export default Notification