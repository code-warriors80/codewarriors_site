import Link from 'next/link'
import React from 'react'
import { BsArrowLeft, BsArrowRight, BsStar, BsStarFill } from 'react-icons/bs'

type Props = {}

const New = (props: Props) => {
  return (
    <div className='relative py-10'>
        <img
                    src='https://itsulu-react.netlify.app/_next/static/media/deco-1.07790e8b.svg'
                    className='w-[150px] lg:w-auto top-0   hidden lg:right-[30%] lg:block absolute'
                    alt='Decorative Element'
        />
        <div className='xl:w-[75%]  lg:w-[100%] md:w-[90%] mx-auto py-16 px-5 sm:px-16 md:px-0'>
                        <div className='lg:flex items-end justify-between flex-wrap'>
                                <div>
                                        <div className='flex items-center gap-3 mb-5'>
                                            <div className='bg-[#92519c] w-[7px] h-[7px] rounded-full'></div>
                                            <h2 className='font-syne text-[16px]'>Our Latest News</h2>
                                        </div>
                                        <h2 className='font-syne text-[29px] lg:text-[42px] text-[#121820] '>Latest Thinking</h2>
                                    </div>
                                    <div className='flex items-center gap-5 mt-5 lg:mt-0'>
                                        <div className='flex items-center gap-3'>
                                            <BsArrowLeft size={20} color='#121820'/>
                                            <p className='font-syne'>Prev</p>
                                        </div>
                                        <div className='flex items-center gap-3'>
                                            <p className='font-syne'>Next</p>
                                            <BsArrowRight size={20}/>
                                        </div>
                            </div>
                        </div>

                        <div className='carousel carousel-center px-0 p-4 space-x-4 lg:space-x-10 rounded-box w-full mt-20 '>
                            <div className='carousel-item w-[99%] md:w-[48.50%] lg:w-[45.50%] group'>
                                <Link href='/' className='overflow-hidden tran_filter ease-in-out duration-300'>
                                        <img src='/1.jpg' alt='' className='rounded-xl w-full h-[350px] lg:h-[400px] object-cover'/>
                                        <div className='lg:flex justify-between gap-10 my-5'>
                                            <div className='lg:w-[60%]'>
                                                <h4 className='font-syne text-[22px]'>Easy And Most Powerful Platform</h4>
                                                <div className='font-sora text-[15px] my-2'>by: <span className='text-[#92519c]'>Jane Meldrun</span></div>
                                            </div>
                                            <p className='font-sora lg:text-[15px] text-[#12182066] lg:w-[400px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, tenetur inventore praesentium eaque consectetur ullam quod architecto odit!</p>
                                        </div>
                                </Link>
                            </div>

                            <div className='carousel-item w-[99%] md:w-[48.50%] lg:w-[23.95%]'>
                                <Link href='' className='overflow-hidden tran_filter ease-in-out duration-300'>
                                    <div className='hidden lg:block'>
                                        <h4 className='font-syne text-[22px]'>Print 3d Technology &amp; Simple Design</h4>
                                        <p className='font-sora text-[18px] lg:text-[15px] text-[#12182066] my-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque placeat ut illo ratione officiis dolorem impedit pariatur iusto!</p>
                                    </div>
                                    <img src='/12.jpg' alt='' className='rounded-xl w-full h-[350px] object-cover'/>
                                    <div className='lg:hidden'>
                                        <h4 className='font-syne text-[22px] my-5'>Print 3d Technology &amp; Simple Design</h4>
                                        <p className='font-sora lg:text-[15px] text-[#12182066]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque placeat ut illo ratione officiis dolorem impedit pariatur iusto!</p>
                                    </div>
                                </Link>
                            </div>

                            <div className='carousel-item w-[99%] md:w-[48.50%] lg:w-[23.95%]'>
                                <Link href='/' className='overflow-hidden tran_filter ease-in-out duration-300'>
                                    <img src='/6.jpg' alt='' className='rounded-xl w-full h-[350px] object-cover'/>
                                    <h4 className='font-syne text-[22px] my-5'>Sed iaculis massa est, nec rutrum magna</h4>
                                    <p className='font-sora lg:text-[15px] text-[#12182066]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quis incidunt, nesciunt earum officiis soluta nisi delectus laboriosam?</p>
                                </Link>
                            </div>

                            <div className='carousel-item w-[99%] md:w-[48.50%] lg:w-[45.50%]'>
                                <Link href='/' className='overflow-hidden tran_filter ease-in-out duration-300'>
                                        <img src='/15.jpg' alt='' className='rounded-xl w-full h-[350px] lg:h-[400px] object-cover'/>
                                        <div className='lg:flex justify-between gap-10 my-5'>
                                            <div className='lg:w-[60%]'>
                                                <h4 className='font-syne text-[22px]'>Easy And Most Powerful Platform</h4>
                                                <div className='font-sora text-[15px]  my-3'>by: <span className='text-[#92519c]'>Jane Meldrun</span></div>
                                            </div>
                                            <p className='font-sora lg:text-[15px] text-[#12182066] lg:w-[400px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, tenetur inventore praesentium eaque consectetur ullam quod architecto odit!</p>
                                        </div>
                                </Link>
                            </div>

                            <div className='carousel-item w-[99%] md:w-[48.50%] lg:w-[23.50%] '>
                                <Link href='' className='overflow-hidden tran_filter ease-in-out duration-300'>
                                    <div className='hidden lg:block'>
                                        <h4 className='font-syne text-[22px] '>Print 3d Technology &amp; Simple Design</h4>
                                        <p className='font-sora lg:text-[15px] text-[#12182066] my-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque placeat ut illo ratione officiis dolorem impedit pariatur iusto!</p>
                                    </div>
                                    <img src='/4.jpg' alt='' className='rounded-xl w-full h-[350px] object-cover'/>
                                    <div className='lg:hidden'>
                                        <h4 className='font-syne text-[22px] my-5'>Print 3d Technology &amp; Simple Design</h4>
                                        <p className='font-sora lg:text-[15px] text-[#12182066]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque placeat ut illo ratione officiis dolorem impedit pariatur iusto!</p>
                                    </div>
                                </Link>
                            </div>

                            <div className='carousel-item w-[99%] md:w-[48.50%] lg:w-[23.50%]'>
                                <Link href='/' className='overflow-hidden tran_filter ease-in-out duration-300'>
                                    <img src='/3.jpg' alt='' className='rounded-xl w-full h-[350px] object-cover'/>
                                    <h4 className='font-syne text-[22px] my-5'>Sed iaculis massa est, nec rutrum magna</h4>
                                    <p className='font-sora lg:text-[15px] text-[#12182066]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quis incidunt, nesciunt earum officiis soluta nisi delectus laboriosam?</p>
                                </Link>
                            </div>
                        </div>
                        <Link href='/' className='flex gap-3 items-center font-syne font mt-10 group'>View More Insight<div className='bg-[#92519c] p-3 rounded-full relative group-hover:left-3'><BsArrowRight size={20} color='white'/></div></Link>
        </div>
    </div>
  )
}

export default New