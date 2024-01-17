'use client'
import Link from 'next/link'
import React from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

type Props = {}

const Project = (props: Props) => {
    
  return (
    <div className='relative'>
        <img
            src='https://itsulu-react.netlify.app/_next/static/media/deco-1.07790e8b.svg'
            className='w-[200px] lg:w-auto top-0   hidden lg:right-80 lg:block absolute'
            alt='Decorative Element'
          />
        <div className='xl:w-[75%]  lg:w-[100%] md:w-[90%] mx-auto py-16 px-5 sm:px-16 md:px-0 '>
                <div className='lg:flex items-end justify-between flex-wrap'>
                        <h2 className='font-syne text-[29px] lg:text-[42px]  px-5 text-[#121820] '>Latest Projects</h2>
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

            <div className="carousel w-full space-x-20 mt-20">
                    <div className="carousel-item w-full lg:w-[47.50%]">
                        <div className='overflow-hidden'>
                                <img src="/20.jpg" className="w-full object-cover rounded-xl h-[400px] lg:h-[450px] tran_filter ease-in-out duration-300 " />
                                <div className='lg:flex justify-between gap-10 my-5'>
                                    <div className='lg:w-[40%]'>
                                            <h4 className='font-syne text-[22px]'>Easy And Most Powerful Platform</h4>
                                            <div className='font-sora text-[15px] my-2'>by: <span className='text-[#F57C00]'>Jane Meldrun</span></div>
                                    </div>
                                    <p className='font-sora text-[18px] lg:text-[15px] text-[#12182066] w-[400px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, tenetur inventore praesentium eaque consectetur ullam quod architecto odit!</p>
                                </div>
                        </div>
                    </div> 
                    <div className="carousel-item w-full lg:w-[47.50%] ">
                        <div className='overflow-hidden'>
                                <img src="/21.jpg" className="w-full object-cover rounded-xl h-[400px] lg:h-[450px] tran_filter ease-in-out duration-300 " />
                                <div className='lg:flex justify-between gap-10 my-5'>
                                    <div className='lg:w-[40%]'>
                                            <h4 className='font-syne text-[22px]'>Easy And Most Powerful Platform</h4>
                                            <div className='font-sora text-[15px] my-2'>by: <span className='text-[#F57C00]'>Jane Meldrun</span></div>
                                    </div>
                                    <p className='font-sora text-[18px] lg:text-[15px] text-[#12182066] w-[400px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, tenetur inventore praesentium eaque consectetur ullam quod architecto odit!</p>
                                </div>
                        </div>
                    </div> 

                    <div className="carousel-item w-full lg:w-[47.50%]">
                        <div className='overflow-hidden'>
                                <img src="/23.jpg" className="w-full object-cover rounded-xl h-[400px] lg:h-[450px] tran_filter ease-in-out duration-300 " />
                                <div className='lg:flex justify-between gap-10 my-5'>
                                    <div className='lg:w-[40%]'>
                                            <h4 className='font-syne text-[22px]'>Easy And Most Powerful Platform</h4>
                                            <div className='font-sora text-[15px] my-2'>by: <span className='text-[#F57C00]'>Jane Meldrun</span></div>
                                    </div>
                                    <p className='font-sora text-[18px] lg:text-[15px] text-[#12182066] w-[400px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, tenetur inventore praesentium eaque consectetur ullam quod architecto odit!</p>
                                </div>
                        </div>
                    </div> 
            </div>

            <div className='flex justify-between items-center mt-20'>
                <Link href='/' className='flex gap-3 items-center font-syne text-[16px]'>Learn More<div className='bg-[#F57C00] p-3 rounded-full'><BsArrowRight size={20} color='white'/></div></Link>   
                <Link href='' className='border-2 border-[#F57C00] px-20 py-5 rounded-full font-sora text-[16px]'>How We Work</Link>
            </div>
    </div>
    </div>
  )
}

export default Project