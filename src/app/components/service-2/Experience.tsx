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
                <p className="text-[15px] font-sora text-[#12182066]">
                    We start by understanding your users through in-depth research, including interviews, surveys, and data analysis, to uncover insights that inform our design decisions.
                </p>
            </div>

            <div className='space-y-7'>
                <div className='relative w-fit'>
                    <img src={'15.svg'} className='relative z-10' alt='Main Image' />
                    <div className='bg-[#92519c] w-[20px] h-[20px] rounded-full  absolute -right-1 top-7 z-0'></div>
                </div>
                <h4 className="font-syne text-[22px]">Prototyping</h4>
                <p className="text-[15px] font-sora text-[#12182066]">
                    Using industry-standard tools, we create interactive prototypes that allow you to visualize and test the user experience before development begins.
                </p>
            </div>

            <div className='space-y-7'>
                <div className='relative w-fit'>
                    <img src={'4.svg'} className='relative z-10' alt='Main Image' />
                    <div className='bg-[#92519c] w-[20px] h-[20px] rounded-full  absolute -right-1 top-7 z-0'></div>
                </div>
                <h4 className="font-syne text-[22px]">UX Design</h4>
                <p className="text-[15px] font-sora text-[#12182066]">
                    Our UX designers focus on creating seamless user journeys, information architecture, and content strategy to ensure a cohesive and intuitive user experience.
                </p>
            </div>

            <div className='space-y-7'>
                <div className='relative w-fit'>
                    <img src={'16.svg'} className='relative z-10' alt='Main Image' />
                    <div className='bg-[#92519c] w-[20px] h-[20px] rounded-full  absolute -right-1 top-7 z-0'></div>
                </div>
                <h4 className="font-syne text-[22px]">UI Design</h4>
                <p className="text-[15px] font-sora text-[#12182066]">
                    Our UI designers bring prototypes to life with visually appealing interfaces that align with your brand identity and enhance usability.
                </p>
            </div>

            <div className='space-y-7'>
                <div className='relative w-fit'>
                    <img src={'19i.svg'} className='relative z-10' alt='Main Image' />
                    <div className='bg-[#92519c] w-[20px] h-[20px] rounded-full  absolute -right-1 top-7 z-0'></div>
                </div>
                <h4 className="font-syne text-[22px]">UI/UX Audit and Consulting</h4>
                <p className="text-[15px] font-sora text-[#12182066]">
                    We evaluate existing designs against best practices and industry standards, providing actionable insights and recommendations for improvement.
                </p>
            </div>

            <div className='space-y-7'>
                <div className='relative w-fit'>
                    <img src={'10.svg'} className='relative z-10' alt='Main Image' />
                    <div className='bg-[#92519c] w-[20px] h-[20px] rounded-full  absolute -right-1 top-7 z-0'></div>
                </div>
                <h4 className="font-syne text-[22px]">Usability Testing</h4>
                <p className="text-[15px] font-sora text-[#12182066]">
                    Through user testing sessions, we gather feedback on the usability of your product, allowing us to make data-driven design decisions and iterate for optimal results.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Experience