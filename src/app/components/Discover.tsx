import Link from 'next/link'
import React from 'react'
import { BsArrowLeft, BsArrowRight, BsStar, BsStarFill } from 'react-icons/bs'

type Props = {}

const Discover = (props: Props) => {
  return (
    <div className='deep_bg relative'>
         <img
                    src='https://itsulu-react.netlify.app/_next/static/media/deco-1.07790e8b.svg'
                    className='w-[150px] lg:w-auto top-0   hidden lg:right-[40%] lg:block absolute'
                    alt='Decorative Element'
        />
        <div className='xl:w-[75%]  lg:w-[100%] md:w-[90%] mx-auto py-16 px-5 sm:px-16 md:px-0 '>
                     <div className='lg:flex items-end justify-between flex-wrap'>
                            <div className='overflow-hidden'>
                                    <div className='flex items-center gap-3 mb-5'>
                                        <div className='bg-[#F57C00] w-[7px] h-[7px] rounded-full'></div>
                                        <h2 className='font-syne text-[16px]'>Discover Our Company</h2>
                                    </div>
                                    <h2 className='font-syne text-[29px] lg:text-[42px] text-[#121820] '>How We <span className='text-[#F57C00]'>Collaborate</span> With You</h2>
                                </div>
                                <div className='flex items-center gap-5 mt-5 lg:mt-0'>
                                    <div className='flex items-center gap-3'>
                                        <BsArrowLeft size={20}/>
                                        <p className='font-syne'>Prev</p>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <p className='font-syne'>Next</p>
                                        <BsArrowRight size={20}/>
                                    </div>
                        </div>
                    </div>

                    <div className='flex flex-wrap items-center justify-between mt-20'>
                        <div className='w-full md:w-1/2 lg:w-1/4'>
                        <div className='flex items-center gap-5 py-5'>
                            <div className='relative w-fit'>
                            <img src='/s1.svg' className='relative z-10' alt='Main Image' />
                            <div className='bg-[#F57C00] w-[15px] h-[15px] rounded-full absolute -right-1 top-4 z-0'></div>
                            </div>
                            <h6 className='font-syne text-[18px] text-[#121820]'>Thinking Big</h6>
                        </div>
                        <p className='font-sora text-[15px] text-[#12182066]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>

                        <div className='w-full md:w-1/2 lg:w-1/4'>
                        <div className='flex items-center gap-5 py-5'>
                            <div className='relative w-fit'>
                            <img src='/s2.svg' className='relative z-10' alt='Main Image' />
                            <div className='bg-[#F57C00] w-[15px] h-[15px] rounded-full absolute -right-1 top-4 z-0'></div>
                            </div>
                            <h6 className='font-syne text-[18px] text-[#121820]'>Starting Small</h6>
                        </div>
                        <p className='font-sora text-[15px] text-[#12182066]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>

                        <div className='w-full md:w-1/2 lg:w-1/4'>
                        <div className='flex items-center gap-5 py-5'>
                            <div className='relative w-fit'>
                            <img src='/s3.svg' className='relative z-10' alt='Main Image' />
                            <div className='bg-[#F57C00] w-[15px] h-[15px] rounded-full absolute -right-1 top-4 z-0'></div>
                            </div>
                            <h6 className='font-syne text-[18px] text-[#121820]'>Creating Fast</h6>
                        </div>
                        <p className='font-sora text-[15px] text-[#12182066]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>

                        <div className='w-full md:w-1/2 lg:w-1/4'>
                        <div className='flex items-center gap-5 py-5'>
                            <div className='relative w-fit'>
                            <img src='/s4.svg' className='relative z-10' alt='Main Image' />
                            <div className='bg-[#F57C00] w-[15px] h-[15px] rounded-full absolute -right-1 top-4 z-0'></div>
                            </div>
                            <h6 className='font-syne text-[18px] text-[#121820]'>Innovating Scale</h6>
                        </div>
                        <p className='font-sora text-[15px] text-[#12182066]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>
                        </div>

                        <div className='flex justify-between items-center mt-20'>
                            <Link href='/' className='flex gap-3 items-center font-syne text-[16px]'>View All Casses<div className='bg-[#F57C00] p-3 rounded-full'><BsArrowRight size={20} color='white'/></div></Link>   
                            <Link href='' className='border-2 border-[#F57C00] px-20 py-5 rounded-full font-sora text-[16px]'>Get Started</Link>
                        </div>
        </div>
    </div>
  )
}

export default Discover