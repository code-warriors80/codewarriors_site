import Link from 'next/link'
import React from 'react'
// import { BsArrowLeft, BsArrowRight, BsStar, BsStarFill } from 'react-icons/bs'

type Props = {}

const Learnmore = (props: Props) => {
  return (
    <div className='relative py-10'>
        <div className='xl:w-[75%]  lg:w-[100%] md:w-[90%] mx-auto py-16 px-5 sm:px-16 md:px-0 '>
            <div className='flex justify-between items-center flex-wrap lg:mt-20'>
                <p className='font-sora text-xl w-2/3 flex gap-10 mb-5 text-black'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu quis ipsum suspendisse ultrices gravida.
                </p>   
                <Link href='' className='border-2 ml-4 border-[#F57C00] px-20 py-5 rounded-full font-sora text-[16px] hidden lg:block font ease-in-out duration-300 hover:border-[3px]'>Get In Touch</Link>
            </div>
            <div className='mx-auto flex gap-2  mt-20'>
                <div className='w-[30px] h-[2px] bg-[#F57C00]  rounded-full'></div>
                <div className='w-full h-[2px] bg-zinc-200 rounded-full'></div>
                <div className='w-[30px] h-[2px] bg-[#F57C00]  rounded-full'></div>
            </div>
            <div className='flex mt-16 '>
                <div>
                    <ul className='flex flex-row'>
                        <li className='w-[10px] h-[10px] rounded-full bg-[#F57C00]'></li>
                        <li className='font-syne  text-[15px]'>Services and Solutions</li>
                    </ul>
                    <h2 className=' font-syne text-[43px] font-semibold text-black mt-5'>Our SaaS Development Services Let You Win Big</h2>
                </div>
            </div>
            <div className='flex flex-wrap items-center justify-between mt-20'>
                <div className='w-full md:w-1/2 lg:w-[30.50%]'>
                <div className='flex items-center gap-5 py-5'>
                    <div className='relative w-fit'>
                    <p className=' font-syne text-4xl'>01</p>
                        <div className='bg-[#F57C00] w-[15px] h-[15px] rounded-full absolute -right-1 top-4 z-0'></div>
                    </div>
                </div>
                <h6 className='font-syne text-[28px] text-[#121820]'>SaaS Development Consulting</h6>
                <p className='font-sora text-[15px] text-[#12182066]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
                
                <div className='w-full md:w-1/2 lg:w-[30.50%]'>
                <div className='flex items-center gap-5 py-5'>
                    <div className='relative w-fit'>
                    <p className=' font-syne text-4xl'>02</p>
                        <div className='bg-[#F57C00] w-[15px] h-[15px] rounded-full absolute -right-1 top-4 z-0'></div>
                    </div>
                </div>
                <h6 className='font-syne text-[28px] text-[#121820]'>SaaS Design and Prototyping</h6>
                <p className='font-sora text-[15px] text-[#12182066]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>

                <div className='w-full md:w-1/2 lg:w-[30.50%]'>
                <div className='flex items-center gap-5 py-5'>
                    <div className='relative w-fit'>
                    <p className=' font-syne text-4xl'>03</p>
                        <div className='bg-[#F57C00] w-[15px] h-[15px] rounded-full absolute -right-1 top-4 z-0'></div>
                    </div>
                </div>
                <h6 className='font-syne text-[28px] text-[#121820]'>End-to-End SaaS Development</h6>
                <p className='font-sora text-[15px] text-[#12182066]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
            </div>

            <div className='flex flex-wrap items-center justify-between mt-10'>
                <div className='w-full md:w-1/2 lg:w-[30.50%]'>
                <div className='flex items-center gap-5 py-5'>
                    <div className='relative w-fit'>
                    <p className=' font-syne text-4xl'>04</p>
                        <div className='bg-[#F57C00] w-[15px] h-[15px] rounded-full absolute -right-1 top-4 z-0'></div>
                    </div>
                </div>
                <h6 className='font-syne text-[25px] text-[#121820]'>Migration to SaaS</h6>
                <p className='font-sora text-[15px] text-[#12182066]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
                
                <div className='w-full md:w-1/2 lg:w-[30.50%]'>
                <div className='flex items-center gap-5 py-5'>
                    <div className='relative w-fit'>
                    <p className=' font-syne text-4xl'>05</p>
                        <div className='bg-[#F57C00] w-[15px] h-[15px] rounded-full absolute -right-1 top-4 z-0'></div>
                    </div>
                </div>
                <h6 className='font-syne text-[25px] text-[#121820]'>Third Party Integrations</h6>
                <p className='font-sora text-[15px] text-[#12182066]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>

                <div className='w-full md:w-1/2 lg:w-[30.50%]'>
                <div className='flex items-center gap-5 py-5'>
                    <div className='relative w-fit'>
                    <p className=' font-syne text-4xl'>06</p>
                        <div className='bg-[#F57C00] w-[15px] h-[15px] rounded-full absolute -right-1 top-4 z-0'></div>
                    </div>
                </div>
                <h6 className='font-syne text-[25px] text-[#121820]'>SaaS Support and Maintenance</h6>
                <p className='font-sora text-[15px] text-[#12182066]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>

                <Link href='' className='border-2 ml-0 mt-5  border-[#F57C00] px-20 py-5 rounded-full font-sora text-[16px] hidden lg:block font ease-in-out duration-300 hover:border-[3px]'>Tell us about your project</Link>
            </div>
        </div>
    </div>
  )
}

export default Learnmore;
