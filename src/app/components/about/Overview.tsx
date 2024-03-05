import Image from 'next/image'
import React from 'react'
import { BsCheck2Circle } from 'react-icons/bs'

type Props = {}

const Overview = (props: Props) => {
  return (
    <div className='bg-[#1218200D] relative '>
        <Image
                    src='https://itsulu-react.netlify.app/_next/static/media/deco-1.07790e8b.svg'
                    className='w-[150px] lg:w-auto top-0   hidden lg:left-[40%] lg:block absolute'
                    alt='Decorative Element' width={100} height={100}
        />
        <div className='xl:w-[75%]  lg:w-[100%] md:w-[90%] mx-auto px-10 lg:px-0'>
        <div className='lg:flex items-center justify-between py-32 space-y-7 lg:space-y-0'>
                <div className='bg-[#92519c] rounded-full lg:w-[40%] '>
                    <Image alt='' src='/t3.png' className='w-full rounded-full' width={500} height={500}/>
                </div>
                <div className='space-y-10 lg:w-[47.50%]'>
                    <div className='flex items-center gap-3'>
                        <div className='bg-[#92519c] w-[7px] h-[7px] rounded-full'></div>
                        <span className='font-syne text-[16px]'>Firm Overview</span>
                    </div>
                    <h2 className='text-[32px] lg:text-[42px] font-syne text-[#121820]'>We Specialize in <span className='text-[#92519c]'>Transforming Your Idea</span> or Business in The Current Digital Era.</h2>
                    <p className='text-[15px] font-sora text-[#12182066]'>We specialize in transforming your ideas or business to thrive in the current digital era. Our expertise lies in leveraging cutting-edge technologies and innovative strategies to bring your vision to life, helping you stay ahead of the competition and achieve your goals in the digital landscape.</p>
                    <div className='lg:flex items-end gap-10 space-y-7 lg:space-y-0'>
                        <ul className='space-y-5'>
                            <li className='flex items-center gap-3 font-sora text-[15px]'><BsCheck2Circle size={20}/> Maintenance and Support</li>
                            <li className='flex items-center gap-3 font-sora text-[15px]'><BsCheck2Circle size={20}/> SEO and Digital Marketing</li>
                            <li className='flex items-center gap-3 font-sora text-[15px]'><BsCheck2Circle size={20}/> Consulting and Strategy</li>
                            <li className='flex items-center gap-3 font-sora text-[15px]'><BsCheck2Circle size={20}/> Data Analytics and Reporting</li>
                        </ul>
                        <div className='flex items-center gap-5'>
                            <Image alt='' src='/ceo.jpg' className='w-12 h-12 rounded-full tran_filter object-cover' width={100} height={100}/>
                            <div>
                                <h4 className='text-[22px] text-[#92519c]'>Abdulrahman Sadiq</h4>
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

export default Overview;
