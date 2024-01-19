import Link from 'next/link'
import React from 'react'
import { BsArrowLeft, BsArrowRight, BsStar, BsStarFill } from 'react-icons/bs'

type Props = {}

const Training = (props: Props) => {
  return (
    <div className='deep_bg relative py-10'>
                <img
                    src='https://itsulu-react.netlify.app/_next/static/media/deco-1.07790e8b.svg'
                    className='w-[150px] lg:w-auto top-0   hidden lg:right-[40%] lg:block absolute'
                    alt='Decorative Element'
                />
            <div className='xl:w-[75%]  lg:w-[100%] md:w-[90%] mx-auto py-16 px-5 sm:px-16 md:px-0'>
                        <div className='lg:flex items-end justify-between flex-wrap'>
                            <div className='overflow-hidden'>
                                    <div className='flex items-center gap-3 mb-5'>
                                        <div className='bg-[#F57C00] w-[7px] h-[7px] rounded-full'></div>
                                        <h2 className='font-syne text-[16px]'>Unlimited Training</h2>
                                    </div>
                                    <h2 className='font-syne text-[29px] lg:text-[42px] text-[#121820] '>Latest Courses</h2>
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

                        <div className="carousel carousel-center px-0 p-4 space-x-4 lg:space-x-10 rounded-box w-full mt-20  ">
                            <div className='carousel-item w-[99%] md:w-[48.80%] lg:w-[30.50%]'>
                                <Link href='/' className='overflow-hidden tran_filter ease-in-out duration-300'>
                                    <img src='/1.jpg' className='w-full rounded-xl  h-[400px] lg:h-fit object-cover'/>
                                    <div className='flex  items-center justify-between gap-5 py-5 '>
                                        <div className='flex items-center justify-between w-full relative top-1'>
                                            <ul className='flex items-center gap-3'>
                                                <li className='font-sora text-[15px]'>Security</li>
                                                <li className='font-sora text-[15px]'>Team</li>
                                            </ul>
                                            <p className='font-sora text-[15px]'>4.5</p>
                                        </div>
                                            
                                            <div className='flex items-center gap-2'>
                                                    <BsStarFill size={18} color='#F57C00'/>
                                                    <BsStarFill size={18} color='#F57C00'/>
                                                    <BsStarFill size={18} color='#F57C00'/>
                                                    <BsStarFill size={18} color='#F57C00'/>
                                                    <BsStarFill size={18} className='text-zinc-300'/>
                                        </div>
                                    </div>
                                    <div className='mx-auto flex gap-2  '>
                                            <div className='w-[30px] h-[2px] bg-[#F57C00]  rounded-full'></div>
                                            <div className='w-full h-[2px] bg-zinc-200 rounded-full'></div>
                                    </div>

                                    <h4 className='text-[21px] font-syne mt-5'>Cibersecurity Premium</h4>
                                    <p className='text-[14px] font-sora text-[#12182066] my-5'>John Stone</p>
                                    <div className='font-sora text-[20px] lg:text-[17px]'>$22.99 us</div>
                                </Link>
                            </div>

                            <div className='carousel-item w-[99%] md:w-[48.80%] lg:w-[30.50%]'>
                                 <Link href='' className='overflow-hidden tran_filter ease-in-out duration-300'>
                                    <img src='/2.jpg' className='w-full rounded-xl h-[400px] lg:h-fit object-cover'/>
                                    <div className='flex  items-center justify-between gap-5 py-5 '>
                                        <div className='flex items-center justify-between w-full relative top-1'>
                                            <ul className='flex items-center gap-3'>
                                                <li className='font-sora text-[15px]'>Security</li>
                                                <li className='font-sora text-[15px]'>Team</li>
                                            </ul>
                                            <p className='font-sora text-[15px]'>4.5</p>
                                        </div>
                                            
                                            <div className='flex items-center gap-2'>
                                                    <BsStarFill size={18} color='#F57C00'/>
                                                    <BsStarFill size={18} color='#F57C00'/>
                                                    <BsStarFill size={18} color='#F57C00'/>
                                                    <BsStarFill size={18} color='#F57C00'/>
                                                    <BsStarFill size={18} className='text-zinc-300'/>
                                        </div>
                                    </div>
                                    <div className='mx-auto flex gap-2  '>
                                            <div className='w-[30px] h-[2px] bg-[#F57C00]  rounded-full'></div>
                                            <div className='w-full h-[2px] bg-zinc-200 rounded-full'></div>
                                    </div>

                                    <h4 className='text-[21px] font-syne mt-5'>Cibersecurity Premium</h4>
                                    <p className='text-[14px] font-sora text-[#12182066] my-5'>John Stone</p>
                                    <div className='font-sora text-[20px] lg:text-[17px]'>$22.99 us</div>
                                </Link>
                            </div>

                            <div className='carousel-item w-[99%] md:w-[48.80%] lg:w-[30.50%] group'>
                            <Link href='' className='overflow-hidden tran_filter ease-in-out duration-300'>
                                    <img src='/3.jpg' className='w-full rounded-xl h-[400px] lg:h-fit object-cover'/>
                                    <div className='flex  items-center justify-between gap-5 py-5 '>
                                        <div className='flex items-center justify-between w-full relative top-1'>
                                            <ul className='flex items-center gap-3'>
                                                <li className='font-sora text-[15px]'>Security</li>
                                                <li className='font-sora text-[15px]'>Team</li>
                                            </ul>
                                            <p className='font-sora text-[15px]'>4.5</p>
                                        </div>
                                            
                                            <div className='flex items-center gap-2'>
                                                    <BsStarFill size={18} color='#F57C00'/>
                                                    <BsStarFill size={18} color='#F57C00'/>
                                                    <BsStarFill size={18} color='#F57C00'/>
                                                    <BsStarFill size={18} color='#F57C00'/>
                                                    <BsStarFill size={18} className='text-zinc-300'/>
                                        </div>
                                    </div>
                                    <div className='mx-auto flex gap-2  '>
                                            <div className='w-[30px] h-[2px] bg-[#F57C00]  rounded-full'></div>
                                            <div className='w-full h-[2px] bg-zinc-200 rounded-full'></div>
                                    </div>

                                    <h4 className='text-[21px] font-syne mt-5'>Cibersecurity Premium</h4>
                                    <p className='text-[14px] font-sora text-[#12182066] my-5'>John Stone</p>
                                    <div className='font-sora text-[20px] lg:text-[17px]'>$22.99 us</div>
                                </Link>
                            </div>
                        </div>
                </div>
    </div>
  )
}

export default Training