import Image from 'next/image'
import React from 'react'

type Props = {}

const Experience = (props: Props) => {
  return (
    <div className='relative py-32'>
         <Image
                    src='https://itsulu-react.netlify.app/_next/static/media/deco-1.07790e8b.svg'
                    className='w-[150px] lg:w-auto top-0   hidden lg:left-[30%] lg:block absolute'
                    alt='Decorative Element' width={100} height={100}
        />
        <div className='xl:w-[75%]  lg:w-[100%] md:w-[90%] mx-auto px-10 lg:px-0'>
                <div className='lg:flex items-center justify-between space-y-10 lg:space-y-0'>
                    <div className='space-y-10 lg:w-[45%]'>
                        <div>
                                <div className='font-syne text-[60px]'>2<span className='text-[#92519c]'>+</span></div>
                                <h6 className='font-syne text-[16px]'>Years Experience</h6>
                        </div>
                        <h2 className='font-syne text-[32px] lg:text-[42px]'>We Run All Kinds of IT Services That Vow Your Success</h2>
                    </div>
                    <div className='space-y-10 lg:w-[45%]'>
                    <h3 className='font-syne text-[26px]'>Accelerate <span className='text-[#92519c]'>Innovation</span> with world class tech teams We’ll match you to an entire <span className='text-[#92519c]'>Remote Technology</span></h3>
                    <div className='lg:grid lg:grid-cols-2 gap-10 w-full space-y-10 lg:space-y-0'>

                        <div>
                            <h6 className='text-[16px] font-syne mb-5 font'><span className='text-[#92519c]'>1+</span>&nbsp; Software Development</h6>
                            <div className='mx-auto flex gap-2 '>
                                            <div className='w-[30px] h-[2px] bg-[#92519c]  rounded-full '></div>
                                            <div className='w-full h-[2px] bg-zinc-200 rounded-full'></div>
                            </div>
                        </div>
                        <div>
                            <h6 className='text-[16px] font-syne mb-5 font'><span className='text-[#92519c] '>2+</span>&nbsp; Years Client Engagement</h6>
                            <div className='mx-auto flex gap-2 '>
                                            <div className='w-[30px] h-[2px] bg-[#92519c]  rounded-full'></div>
                                            <div className='w-full h-[2px] bg-zinc-200 rounded-full'></div>
                            </div>
                        </div>
                        <div>
                            <h6 className='text-[16px] font-syne mb-5 font'><span className='text-[#92519c] '>2+</span>&nbsp; App Development</h6>
                            <div className='mx-auto flex gap-2 '>
                                            <div className='w-[30px] h-[2px] bg-[#92519c]  rounded-full'></div>
                                            <div className='w-full h-[2px] bg-zinc-200 rounded-full'></div>
                            </div>
                        </div>
                        <div>
                            <h6 className='text-[16px] font-syne mb-5 font'><span className='text-[#92519c] '>2+</span>&nbsp; Web Development</h6>
                            <div className='mx-auto flex gap-2 '>
                                            <div className='w-[30px] h-[2px] bg-[#92519c]  rounded-full'></div>
                                            <div className='w-full h-[2px] bg-zinc-200 rounded-full'></div>
                            </div>
                        </div>

                    </div>
                    </div>
                    </div>
        </div>
    </div>
  )
}

export default Experience