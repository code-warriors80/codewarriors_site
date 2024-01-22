import React from 'react'
import { BsCheck2Circle } from 'react-icons/bs'

type Props = {}

const Overview = (props: Props) => {
  return (
    <div className='bg-[#1218200D] relative '>
        <img
                    src='https://itsulu-react.netlify.app/_next/static/media/deco-1.07790e8b.svg'
                    className='w-[150px] lg:w-auto top-0   hidden lg:left-[40%] lg:block absolute'
                    alt='Decorative Element'
        />
        <div className='xl:w-[65%]  lg:w-[100%] md:w-[90%] mx-auto'>
        <div className='lg:flex items-center justify-between py-32'>
                <div className='bg-[#F57C00] rounded-full lg:w-[40%] '>
                    <img src='/t3.png' className='w-full rounded-full '/>
                </div>
                <div className='space-y-10 lg:w-[47.50%]'>
                    <div className='flex items-center gap-3'>
                        <div className='bg-[#F57C00] w-[7px] h-[7px] rounded-full'></div>
                        <span className='font-syne text-[16px]'>Firm Overview</span>
                    </div>
                    <h2 className='text-[42px] font-syne text-[#121820]'>We Specialize in <span className='text-[#F57C00]'>Transforming Your Idea</span> or Business in The Current Digital Era.</h2>
                    <p className='text-[15px] font-sora text-[#12182066]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis</p>
                    <div className='lg:flex items-end gap-10'>
                        <ul className='space-y-5'>
                            <li className='flex items-center gap-3 font-sora text-[15px]'><BsCheck2Circle size={20}/> Quis suspendisse ultrices gravida</li>
                            <li className='flex items-center gap-3 font-sora text-[15px]'><BsCheck2Circle size={20}/> Quis suspendisse ultrices gravida</li>
                            <li className='flex items-center gap-3 font-sora text-[15px]'><BsCheck2Circle size={20}/> Quis suspendisse ultrices gravida</li>
                            <li className='flex items-center gap-3 font-sora text-[15px]'><BsCheck2Circle size={20}/> Quis suspendisse ultrices gravida</li>
                        </ul>
                        <div className='flex items-center gap-5'>
                            <img src='/17.jpg' className='w-12 h-12 rounded-full tran_filter'/>
                            <div>
                                <h4 className='text-[22px] text-[#F57C00]'>Jane Meldrum</h4>
                                <p className='font-sora text-[13px] text-[#12182066]'>CEO & Co-Founder</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </div>
    </div>
  )
}

export default Overview