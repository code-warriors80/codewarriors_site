import React from 'react'

type Props = {}

const Enterprice = (props: Props) => {
  return (
    <div className='relative bg-[#1218200D] py-32'>
        <img
                    src='https://itsulu-react.netlify.app/_next/static/media/deco-1.07790e8b.svg'
                    className='w-[150px] lg:w-auto top-0   hidden lg:right-[30%] lg:block absolute'
                    alt='Decorative Element'
        />
        <div className='xl:w-[65%]  lg:w-[100%] md:w-[90%] mx-auto px-10 lg:px-0'>
            <div>
                    <div className='flex items-center gap-3'>
                        <div className='bg-[#92519c] w-[7px] h-[7px] rounded-full'></div>
                        <span className='font-syne text-[16px]'>For Enterprise</span>
                    </div>
                    <h2 className='font-syne text-[32px] lg:text-[42px] mt-10'>We Live by <span className='text-[#92519c]'>Powerful</span> Values</h2>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-10 mt-20'>

                    <div className='space-y-5'>
                        <div className='relative w-fit'>
                                <img src='/10.svg' className='relative z-10' alt='Main Image' />
                                <div className='bg-[#92519c] w-[20px] h-[20px] rounded-full absolute -right-1 top-6 z-0'></div>
                        </div>
                        <h4 className='font-syne text-[22px]'>We Are</h4>
                        <p className='font-sora text-[15px] text-[#12182066]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className='space-y-5'>
                            <div className='relative w-fit '>
                                    <img src='/10.svg' className='relative z-10' alt='Main Image' />
                                    <div className='bg-[#92519c] w-[20px] h-[20px] rounded-full absolute -right-1 top-6 z-0'></div>
                            </div>
                        <h4 className='font-syne text-[22px]'>We Deep Dive</h4>
                        <p className='font-sora text-[15px] text-[#12182066]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className='space-y-5'>
                        <div className='relative w-fit'>
                                <img src='/10.svg' className='relative z-10' alt='Main Image' />
                                <div className='bg-[#92519c] w-[20px] h-[20px] rounded-full absolute -right-1 top-6 z-0'></div>
                        </div>
                        <h4 className='font-syne text-[22px]'>We Take</h4>
                        <p className='font-sora text-[15px] text-[#12182066]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className='space-y-5'>
                            <div className='relative w-fit '>
                                    <img src='/10.svg' className='relative z-10' alt='Main Image' />
                                    <div className='bg-[#92519c] w-[20px] h-[20px] rounded-full absolute -right-1 top-6 z-0'></div>
                            </div>
                        <h4 className='font-syne text-[22px]'>We Value</h4>
                        <p className='font-sora text-[15px] text-[#12182066]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className='space-y-5'>
                        <div className='relative w-fit'>
                                <img src='/10.svg' className='relative z-10' alt='Main Image' />
                                <div className='bg-[#92519c] w-[20px] h-[20px] rounded-full absolute -right-1 top-6 z-0'></div>
                        </div>
                        <h4 className='font-syne text-[22px]'>We Believe</h4>
                        <p className='font-sora text-[15px] text-[#12182066]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className='space-y-5'>
                            <div className='relative w-fit '>
                                    <img src='/10.svg' className='relative z-10' alt='Main Image' />
                                    <div className='bg-[#92519c] w-[20px] h-[20px] rounded-full absolute -right-1 top-6 z-0'></div>
                            </div>
                        <h4 className='font-syne text-[22px]'>We Say “We”</h4>
                        <p className='font-sora text-[15px] text-[#12182066]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                </div>
        </div>
    </div>
  )
}

export default Enterprice