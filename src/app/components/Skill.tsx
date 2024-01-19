import React from 'react'
import { BsArrowLeft, BsArrowRight, BsStar, BsStarFill } from 'react-icons/bs'

type Props = {}

const Skill = (props: Props) => {
  return (
    <div className='relative'>
        <div className='xl:w-[75%]  lg:w-[100%] md:w-[90%] mx-auto py-16 px-5 sm:px-16 md:px-0 '>
                    <div className='lg:flex items-end justify-between'>
                            <div className='overflow-hidden lg:w-[40%]'>
                                    <div className='flex items-center gap-3 mb-5'>
                                        <div className='bg-[#F57C00] w-[7px] h-[7px] rounded-full'></div>
                                        <h2 className='font-syne text-[16px]'>Our Skill</h2>
                                    </div>
                                    <h2 className='font-syne text-[29px] lg:text-[42px] text-[#121820] '>Business <span className='text-[#F57C00]'>Success</span> With Technology</h2>
                            </div>
                            <div className='lg:w-[40.50%]'>
                                <p className='font-sora text-[15px] text-[#12182066]'>It is a long established fact that a reader will be distracted by the readable
                                     content of a page when looking at its layout. The point of using Lorem Ipsum is 
                                     that it has a more-or-less normal distribution of letters, as opposed to using content here.</p>
                            </div>
                    </div>

                    <div className='mx-auto flex gap-2  mt-20'>
                                    <div className='w-[30px] h-[2px] bg-[#F57C00]  rounded-full'></div>
                                    <div className='w-full h-[2px] bg-zinc-200 rounded-full'></div>
                                    <div className='w-[30px] h-[2px] bg-[#F57C00]  rounded-full'></div>
            </div>
        </div>
    </div>
  )
}

export default Skill