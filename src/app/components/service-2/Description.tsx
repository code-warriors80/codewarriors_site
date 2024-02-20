import Link from 'next/link'
import React from 'react'

type Props = {}

const Description = (props: Props) => {
  return (
    <div >
        <div className='grid grid-cols-2 py-20'>
            <div className=' flex items-center gap-5'>
                <div className='relative w-fit'>
                            <img src={'16.svg'} className='relative z-10' alt='Main Image' />
                            <div className='bg-[#92519c] w-[20px] h-[20px] rounded-full  absolute -right-1 top-7 z-0'></div>
                </div>
                <h5 className='font-syne text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    <span className="mil-accent">aliqu quis ipsum suspendisse</span> ultrices gravida.
                </h5>
            </div>
            <Link href='' className='border-2  border-[#92519c] px-10 lg:px-20 py-5 font-sora text-[16px] rounded-full font ease-in-out duration-300 hover:border-[3px]'>Hire UI/UX Designer</Link>
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