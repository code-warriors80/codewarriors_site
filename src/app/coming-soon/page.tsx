import React from 'react'
import Header from './header'
import MaxWidthWrapper from '../components/MaxWidthWrapper'
import Image from 'next/image'
import { BiArrowToRight } from 'react-icons/bi'
import { FaArrowRight } from 'react-icons/fa'

function page() {
    return (
        <div className='w-full text-white font-syne'>
            <img src='/30.jpg' className='w-full h-screen absolute z-0'/>
            <div className="h-screen bg-[#121820] flex items-center relative z-10">
                <MaxWidthWrapper className="">
                    <div className='flex justify-between items-start lg:items-center z-20 flex-col lg:flex-row '>
                        <div className='basis-2/4'>
                            <h1 className='text-[60px] font-syne mb-5'>Coming <span className="text-[#f57c00]">Soon</span></h1>
                            <p className='text-[15px] text-[#FFFFFF80] font-sora'>We are working on our website</p>
                        </div>
                        <div className='lg:w-[45.50%]  flex flex-col items-start justify-between' >
                            <div className="flex  mt-3 items-center justify-between mb-5 w-full">
                                <h4 className="font-syne text-[22px] my-2">Join The <span className="text-[#f57c00]">ITSulu</span><br /> Experience</h4>
                                <p className=" text-[15px] text-[#FFFFFF80] font-sora">Lorem ipsum dolor sit amet, consectetuer <br />adipiscing elit sed diam nonummy.</p>
                            </div>

                            <div className="rounded-full bg-white items-center justify-between w-full p-1 md:flex hidden">
                                <input type="text" placeholder="Your email address" className=' text-[#121820]  rounded-full px-5 outline-none' />
                                <button type="submit" className="bg-[#f57c00] text-[#121820]  rounded-full px-10 py-5">Subscribe Now</button>
                            </div>
                            <a className=" gap-2 items-center hidden md:flex mt-10" href="/contact">
                                <span>Contact Us</span>
                                <div className='bg-[#f57c00] rounded-full  p-2'>
                                    <FaArrowRight size={12}/>
                                </div>  
                            </a>
                        </div>

                        <div className='w-full flex flex-col my-4 space-y-2 md:hidden'>
                            <input type="text" placeholder="Your email address" className='px-[60px] h-[70px] text-nowrap text-center rounded-full' />
                            <button type="submit" className="bg-[#f57c00] px-[60px] h-[70px] text-nowrap text-center  rounded-full border-[2px] border-white ">Subscribe Now</button>
                            <a className="flex gap-2 items-center mt-10" href="/contact">
                                <span>Contact Us</span>
                                <div className='bg-[#f57c00] rounded-full  p-2'>
                                    <FaArrowRight size={12}/>
                                </div>                
                            </a>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </div >
        </div >
    )
}

export default page