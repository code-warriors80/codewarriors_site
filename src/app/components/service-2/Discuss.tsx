import Link from 'next/link'
import React from 'react'

type Props = {}

const Discuss = (props: Props) => {
  return (
    <div className='relative overflow-hidden'>
        <img src='15.jpg' alt='' className='absolute w-full object-cover z-0'/>
        <div className='relative bg-[#121820CC] z-10 py-20'>
            <div className='xl:w-[75%] md:w-[90%] mx-auto py-16 px-5 sm:px-16 md:px-0 lg:flex justify-between'>
                <div className="col-lg-6 mil-mb-30 space-y-3 mb-20 lg:mb-0">
                    <h3 className="text-white font-syne text-[26px]">Let’s Discuss <span className="text-[#92519c]">Your</span> Digital <span className="text-[#92519c]">Opportunity.</span></h3>
                    <p className="text-[#FFFFFF80] text-[15px] font-sora">Unlock your digital transformation opportunities now!</p>
                </div>
                <Link href='' className='border-2  border-[#92519c] px-10 lg:px-20 py-5 font-sora text-[16px] rounded-full font ease-in-out duration-300 hover:border-[3px] text-white'>Get Started</Link>
            </div>
        </div>
    </div>
  )
}

export default Discuss