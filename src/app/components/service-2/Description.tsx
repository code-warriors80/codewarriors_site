import Link from 'next/link'
import React from 'react'

type Props = {}

const Description = (props: Props) => {
  return (
    <div >
          <div className='lg:flex items-center justify-between py-10 lg:py-20 space-y-10 lg:space-y-0 '>
            <p className='text-[22px] font-syne lg:w-[45.50%]'>Connect with one of our <span className='text-[#92519c]'>experienced experts</span> who can provide personalized guidance and insights tailored to your needs.</p>
            <div className='lg:flex items-center lg:justify-center gap-10 lg:gap-20 lg:w-[500px]'>
                <Link href={'/contact'} className="font-sora text-sm lg:text-lg border-2 border-[#92519c] text-[#121820]  px-5 lg:px-10 py-4 rounded-full font ease-in-out duration-300 hover:border-[3px]">Hire UI/UX Designers</Link>
            </div>
        </div>

        <div className='mx-auto flex gap-2  mt-20'>
                <div className='w-[30px] h-[2px] bg-[#92519c]  rounded-full'></div>
                <div className='w-full h-[2px] bg-zinc-200 rounded-full'></div>
                <div className='w-[30px] h-[2px] bg-[#92519c]  rounded-full'></div>
        </div>
    </div>
  )
}

export default Description