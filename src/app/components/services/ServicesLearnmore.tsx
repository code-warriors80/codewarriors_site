import Link from 'next/link'
import React from 'react'
// import { BsArrowLeft, BsArrowRight, BsStar, BsStarFill } from 'react-icons/bs'

type Props = {}

const Learnmore = (props: Props) => {
  return (
    <div className='relative py-10'>
        <div className='xl:w-[75%]  lg:w-[100%] md:w-[90%] mx-auto py-16 px-5 sm:px-16 md:px-0 '>

        <div className='lg:flex items-center justify-between py-20 lg:py-36 space-y-10 lg:space-y-0 '>
            <p className='text-[22px] font-syne lg:w-[45.50%]'>Lorem ipsum dolor sit amet, <span className='text-[#92519c]'>consectetur adipiscing elit</span>, sed do eiusmod tempor incididunt ut labor aliqua.</p>
            <div className='lg:flex items-center lg:justify-center gap-10 lg:gap-20 lg:w-[500px]'>
                <button className="font-sora text-sm lg:text-lg border-2 border-[#92519c] text-[#121820]  px-5 lg:px-10 py-4 rounded-full font-base">Talk To an Expert</button>
            </div>
        </div>

            <div className='mx-auto flex gap-2  mt-20'>
                <div className='w-[30px] h-[2px] bg-[#92519c]  rounded-full'></div>
                <div className='w-full h-[2px] bg-zinc-200 rounded-full'></div>
                <div className='w-[30px] h-[2px] bg-[#92519c]  rounded-full'></div>
            </div>

            <div className='flex mt-16 '>
                <div>
                    <ul className='flex flex-row items-center gap-3'>
                        <li className='w-[10px] h-[10px] rounded-full bg-[#92519c]'></li>
                        <li className='font-syne  text-[15px]'>Services and Solutions</li>
                    </ul>
                    <h2 className=' font-syne text-[42px] mt-5'>Our SaaS Development Services Let You Win Big</h2>
                </div>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-20 my-20'>

                <div className=' '>
                    <div className='flex items-center gap-5 py-5'>
                        <div className='relative w-fit'>
                        <p className=' font-syne text-4xl'>01</p>
                            <div className='bg-[#92519c] w-[15px] h-[15px] rounded-full absolute -right-1 top-4 z-0'></div>
                        </div>
                    </div>
                    <h6 className='font-syne text-[28px] text-[#121820]'>SaaS Development Consulting</h6>
                    <p className='font-sora text-[15px] text-[#12182066]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
                
                <div className=''>
                    <div className='flex items-center gap-5 py-5'>
                        <div className='relative w-fit'>
                        <p className=' font-syne text-4xl'>02</p>
                            <div className='bg-[#92519c] w-[15px] h-[15px] rounded-full absolute -right-1 top-4 z-0'></div>
                        </div>
                    </div>
                    <h6 className='font-syne text-[28px] text-[#121820]'>SaaS Design and Prototyping</h6>
                    <p className='font-sora text-[15px] text-[#12182066]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>

                <div className=''>
                    <div className='flex items-center gap-5 py-5'>
                        <div className='relative w-fit'>
                        <p className=' font-syne text-4xl'>03</p>
                            <div className='bg-[#92519c] w-[15px] h-[15px] rounded-full absolute -right-1 top-4 z-0'></div>
                        </div>
                    </div>
                    <h6 className='font-syne text-[28px] text-[#121820]'>End-to-End SaaS Development</h6>
                    <p className='font-sora text-[15px] text-[#12182066]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>

                <div className=''>
                    <div className='flex items-center gap-5 py-5'>
                        <div className='relative w-fit'>
                        <p className=' font-syne text-4xl'>04</p>
                            <div className='bg-[#92519c] w-[15px] h-[15px] rounded-full absolute -right-1 top-4 z-0'></div>
                        </div>
                    </div>
                    <h6 className='font-syne text-[25px] text-[#121820]'>Migration to SaaS</h6>
                    <p className='font-sora text-[15px] text-[#12182066]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>

                <div className=''>
                    <div className='flex items-center gap-5 py-5'>
                        <div className='relative w-fit'>
                        <p className=' font-syne text-4xl'>05</p>
                            <div className='bg-[#92519c] w-[15px] h-[15px] rounded-full absolute -right-1 top-4 z-0'></div>
                        </div>
                    </div>
                    <h6 className='font-syne text-[25px] text-[#121820]'>Third Party Integrations</h6>
                    <p className='font-sora text-[15px] text-[#12182066]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>

                <div className=''>
                    <div className='flex items-center gap-5 py-5'>
                        <div className='relative w-fit'>
                        <p className=' font-syne text-4xl'>06</p>
                            <div className='bg-[#92519c] w-[15px] h-[15px] rounded-full absolute -right-1 top-4 z-0'></div>
                        </div>
                    </div>
                    <h6 className='font-syne text-[25px] text-[#121820]'>SaaS Support and Maintenance</h6>
                    <p className='font-sora text-[15px] text-[#12182066]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
            </div>
            <Link href='' className='border-2  border-[#92519c] px-20 py-5 font-sora text-[16px] rounded-full'>Tell us about your project</Link>
        </div>
    </div>
  )
}

export default Learnmore;
