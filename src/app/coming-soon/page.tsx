import React from 'react'
import Header from './header'
import MaxWidthWrapper from '../components/MaxWidthWrapper'
import Image from 'next/image'
import { BiArrowToRight } from 'react-icons/bi'
import { FaArrowRight } from 'react-icons/fa'

function page() {
    return (
        <div className='w-full text-white font-syne'>
            <div className="h-screen bg-[#121820] flex items-center">
                <MaxWidthWrapper className="  xl:w-[90%] ">
                    <Image
                        src={"/20.jpg"}
                        width={1020}
                        height={1020}
                        alt='Logo'
                        className=' absolute bg-center filter grayscale-0 inset-0 object-cover w-full h-full -z-10'
                    />
                    <div className='flex justify-between items-start lg:items-center z-20 flex-col lg:flex-row '>
                        <div className='basis-2/4'>
                            <h1 className='text-[64px] leading-[60px]'>Coming <span className="text-[#f57c00]">Soon</span></h1>
                            <p className='text-sm text-gray-400'>We are working on our website</p>
                        </div>
                        <div className='w-full basis-2/4 flex flex-col items-start' >
                            <div className="flex flex-col lg:flex-row mt-3 justify-between mb-5">
                                <h4 className="font-bold text-lg my-2">Join The <span className="text-[#f57c00]">ITSulu</span><br /> Experience</h4>
                                <p className=" text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetuer <br />adipiscing elit sed diam nonummy.</p>
                            </div>

                            <div className="rounded-full bg-white md:flex items-center mb-7 relative w-full hidden">
                                <input type="text" placeholder="Your email address" className='px-[60px] h-[70px] text-nowrap text-center rounded-full' />
                                <button type="submit" className="bg-[#f57c00] px-[60px] h-[70px] text-nowrap text-center absolute top-0 rounded-full right-0 border-[2px] border-white ">Subscribe Now</button>
                            </div>
                            <a className=" gap-2 items-center hidden md:flex" href="/contact">
                                <span>Contact Us</span>
                                <FaArrowRight className='bg-[#f57c00] rounded-full w-6 h-6 p-1' />
                            </a>
                        </div>

                        <div className='w-full flex flex-col my-4 space-y-2 md:hidden'>
                            <input type="text" placeholder="Your email address" className='px-[60px] h-[70px] text-nowrap text-center rounded-full' />
                            <button type="submit" className="bg-[#f57c00] px-[60px] h-[70px] text-nowrap text-center  rounded-full border-[2px] border-white ">Subscribe Now</button>
                            <a className="flex gap-2 items-center mt-2" href="/contact">
                                <span>Contact Us</span>
                                <FaArrowRight className='bg-[#f57c00] rounded-full w-6 h-6 p-1' />
                            </a>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </div >
        </div >
    )
}

export default page