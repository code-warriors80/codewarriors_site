import React from 'react'
import { BsCheck2Circle } from 'react-icons/bs'


type Props = {}

const Mission = (props: Props) => {
  return (
    <div className='relative bg-[#1218200D]'>
        <img
                    src='https://itsulu-react.netlify.app/_next/static/media/deco-1.07790e8b.svg'
                    className='w-[150px] lg:w-auto top-0   hidden lg:right-[20%] lg:block absolute'
                    alt='Decorative Element'
        />
         <div className='xl:w-[75%]  lg:w-[100%] md:w-[90%] mx-auto px-10 lg:px-0'>
            <div className='lg:flex items-center justify-between py-32 space-y-7 lg:space-y-0'>
                    <div className='bg-[#92519c] rounded-full lg:w-[40%] w-full'>
                        <img src='/t4.png' className='w-full rounded-full '/>
                    </div>
                    <div className='space-y-10 lg:w-[47.50%]'>
                        <div className='flex items-center gap-3'>
                            <div className='bg-[#92519c] w-[7px] h-[7px] rounded-full'></div>
                            <span className='font-syne text-[16px]'>IT Enterprise</span>
                        </div>
                        <h2 className='text-[32px] lg:text-[42px] font-syne text-[#121820]'>Our Mission.</h2>
                        <p className='text-[15px] font-sora text-[#12182066]'>
                              To give professional services and support through technology starting from our local to global society, .</p>
                            <ul className='space-y-5'>
                                <li className='flex items-center gap-3 font-sora text-[15px]'><BsCheck2Circle size={20}/> Quis suspendisse ultrices gravida</li>
                                <li className='flex items-center gap-3 font-sora text-[15px]'><BsCheck2Circle size={20}/> Quis suspendisse ultrices gravida</li>
                                <li className='flex items-center gap-3 font-sora text-[15px]'><BsCheck2Circle size={20}/> Quis suspendisse ultrices gravida</li>
                                <li className='flex items-center gap-3 font-sora text-[15px]'><BsCheck2Circle size={20}/> Quis suspendisse ultrices gravida</li>
                            </ul>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Mission