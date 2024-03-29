import Link from 'next/link'
import React from 'react'
import { BsArrowRight, BsPlayFill } from 'react-icons/bs'

type Props = {}

const Expert = (props: Props) => {
  return (
    <div className=''>
      <div className='xl:w-[75%]  lg:w-[100%] md:w-[90%] mx-auto px-10 lg:px-0'>
        <div className='lg:flex items-center justify-between py-20 lg:py-36 space-y-10 lg:space-y-0 '>
            <p className='text-[22px] font-syne lg:w-[45.50%]'>Connect with one of our <span className='text-[#92519c]'>experienced experts</span> who can provide personalized guidance and insights tailored to your needs.</p>
            <div className='lg:flex items-center lg:justify-center gap-10 lg:gap-20 lg:w-[500px]'>
                <Link href={'/contact'} className="font-sora text-sm lg:text-lg border-2 border-[#92519c] text-[#121820]  px-5 lg:px-10 py-4 rounded-full font ease-in-out duration-300 hover:border-[3px]">Talk To an Expert</Link>
                <div className='lg:flex items-center gap-5 hidden'>
                    <button className="border-2 border-[#92519c] rounded-full  p-3 lg:p-4 ease-in-out duration-300 hover:border-[3px]"><BsPlayFill size={30} /></button>
                    <span className='font-sora  text-sm lg:text-sm font'>Watch Video</span>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Expert
