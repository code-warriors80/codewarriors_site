import React from 'react'

type Props = {}

const Experience = (props: Props) => {
  return (
    <div className='py-20'>
        <ul className='flex flex-row items-center gap-3'>
            <li className='w-[10px] h-[10px] rounded-full bg-[#92519c]'></li>
            <li className='font-syne  text-[15px]'>High Experience</li>
        </ul>
        <h2 className="text-[32px] lg:text-[42px] font-syne mt-10 mb-20">UI/UX <span className="text-[#92519c]">Design Services</span> That Set Us Apart</h2>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-16 gap-y-20'>
            <div className='space-y-7'>
                <div className='relative w-fit'>
                    <img src={'1.svg'} className='relative z-10' alt='Main Image' />
                    <div className='bg-[#92519c] w-[20px] h-[20px] rounded-full  absolute -right-1 top-7 z-0'></div>
                </div>
                <h4 className="font-syne text-[22px]">User Research</h4>
                <p className="text-[15px] font-sora text-[#12182066]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className='space-y-7'>
                <div className='relative w-fit'>
                    <img src={'15.svg'} className='relative z-10' alt='Main Image' />
                    <div className='bg-[#92519c] w-[20px] h-[20px] rounded-full  absolute -right-1 top-7 z-0'></div>
                </div>
                <h4 className="font-syne text-[22px]">Prototyping</h4>
                <p className="text-[15px] font-sora text-[#12182066]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className='space-y-7'>
                <div className='relative w-fit'>
                    <img src={'4.svg'} className='relative z-10' alt='Main Image' />
                    <div className='bg-[#92519c] w-[20px] h-[20px] rounded-full  absolute -right-1 top-7 z-0'></div>
                </div>
                <h4 className="font-syne text-[22px]">UX Design</h4>
                <p className="text-[15px] font-sora text-[#12182066]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className='space-y-7'>
                <div className='relative w-fit'>
                    <img src={'16.svg'} className='relative z-10' alt='Main Image' />
                    <div className='bg-[#92519c] w-[20px] h-[20px] rounded-full  absolute -right-1 top-7 z-0'></div>
                </div>
                <h4 className="font-syne text-[22px]">UI Design</h4>
                <p className="text-[15px] font-sora text-[#12182066]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className='space-y-7'>
                <div className='relative w-fit'>
                    <img src={'19i.svg'} className='relative z-10' alt='Main Image' />
                    <div className='bg-[#92519c] w-[20px] h-[20px] rounded-full  absolute -right-1 top-7 z-0'></div>
                </div>
                <h4 className="font-syne text-[22px]">UI/UX Audit and Consulting</h4>
                <p className="text-[15px] font-sora text-[#12182066]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className='space-y-7'>
                <div className='relative w-fit'>
                    <img src={'10.svg'} className='relative z-10' alt='Main Image' />
                    <div className='bg-[#92519c] w-[20px] h-[20px] rounded-full  absolute -right-1 top-7 z-0'></div>
                </div>
                <h4 className="font-syne text-[22px]">Usability Testing</h4>
                <p className="text-[15px] font-sora text-[#12182066]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    </div>
  )
}

export default Experience