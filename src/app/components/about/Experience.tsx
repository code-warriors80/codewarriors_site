import React from 'react'

type Props = {}

const Experience = (props: Props) => {
  return (
    <div className='relative py-32'>
         <img
                    src='https://itsulu-react.netlify.app/_next/static/media/deco-1.07790e8b.svg'
                    className='w-[150px] lg:w-auto top-0   hidden lg:left-[30%] lg:block absolute'
                    alt='Decorative Element'
        />
        <div className='xl:w-[65%]  lg:w-[100%] md:w-[90%] mx-auto'>
                <div className='lg:flex items-center justify-between space-y-10 lg:space-y-0'>
                    <div className='space-y-10 lg:w-[45%]'>
                        <div>
                                <div className='font-syne text-[60px]'>8<span className='text-[#F57C00]'>+</span></div>
                                <h6 className='font-syne text-[16px]'>Years Experience</h6>
                        </div>
                        <h2 className='font-syne text-[42px]'>We Run All Kinds of IT Services That Vow Your Success</h2>
                    </div>
                    <div className='space-y-10 lg:w-[45%]'>
                    <h3 className='font-syne text-[26px]'>Accelerate <span className='text-[#F57C00]'>Innovation</span> with world class tech teams We’ll match you to an entire <span className='text-[#F57C00]'>Remote Technology</span></h3>
                    <div className='lg:grid lg:grid-cols-2 w-fit gap-10 w-full'>

                        <div>
                            <h6 className='text-[16px] font-syne mb-5'><span className='text-[#F57C00]  '>16+</span>&nbsp; Software Development</h6>
                            <div className='mx-auto flex gap-2 '>
                                            <div className='w-[30px] h-[2px] bg-[#F57C00]  rounded-full'></div>
                                            <div className='w-full h-[2px] bg-zinc-200 rounded-full'></div>
                            </div>
                        </div>
                        <div>
                            <h6 className='text-[16px] font-syne mb-5'><span className='text-[#F57C00] '>16+</span>&nbsp; Years Client Engagement</h6>
                            <div className='mx-auto flex gap-2 '>
                                            <div className='w-[30px] h-[2px] bg-[#F57C00]  rounded-full'></div>
                                            <div className='w-full h-[2px] bg-zinc-200 rounded-full'></div>
                            </div>
                        </div>
                        <div>
                            <h6 className='text-[16px] font-syne mb-5'><span className='text-[#F57C00] '>16+</span>&nbsp; App Development</h6>
                            <div className='mx-auto flex gap-2 '>
                                            <div className='w-[30px] h-[2px] bg-[#F57C00]  rounded-full'></div>
                                            <div className='w-full h-[2px] bg-zinc-200 rounded-full'></div>
                            </div>
                        </div>
                        <div>
                            <h6 className='text-[16px] font-syne mb-5'><span className='text-[#F57C00] '>16+</span>&nbsp; Web Development</h6>
                            <div className='mx-auto flex gap-2 '>
                                            <div className='w-[30px] h-[2px] bg-[#F57C00]  rounded-full'></div>
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