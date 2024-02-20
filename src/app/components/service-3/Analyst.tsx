import React from 'react'

type Props = {}

const Analyst = (props: Props) => {
  return (
    <div className='py-36'>
        <ul className='flex flex-row items-center gap-3'>
            <li className='w-[10px] h-[10px] rounded-full bg-[#92519c]'></li>
            <li className='font-syne  text-[15px]'>Our Data Analytics Expertise</li>
        </ul>
        <h2 className="text-[32px] lg:text-[42px] font-syne mt-10 mb-20">Custom <span className="text-[#92519c]">App Solutions</span> For any Mobile Platform</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
            <div className='text-center space-y-5'>
                <div className='relative w-fit mx-auto'>
                    <img src={'22.svg'} className='relative z-10' alt='Main Image' />
                    <div className='bg-[#92519c] w-[20px] h-[20px] rounded-full  absolute -right-1 top-7 z-0'></div>
                </div>
                <h5 className="text-[18px] font-syne font">Android Platform</h5>
                <p className="text-[15px] font-sora text-[#12182066]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua accumsan lacus vel facilisis.</p>
                <ul className='flex items-center justify-center gap-5 font-sora font'>
                    <li className='text-[15px]'>Java</li>
                    <li className='w-[10px] h-[10px] rounded-full bg-[#92519c]'></li>
                    <li className='text-[15px]'>Kotlin</li>
                </ul>
            </div>

            <div className='text-center space-y-5'>
                <div className='relative w-fit mx-auto'>
                    <img src={'22.svg'} className='relative z-10' alt='Main Image' />
                    <div className='bg-[#92519c] w-[20px] h-[20px] rounded-full absolute -right-1 top-7 z-0'></div>
                </div>
                <h5 className="text-[18px] font-syne font">IOS Platform</h5>
                <p className="text-[15px] font-sora text-[#12182066]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua accumsan lacus vel facilisis.</p>
                <ul className='flex items-center justify-center gap-5 font-sora font'>
                    <li className='text-[15px]'>Swift</li>
                    <li className='w-[10px] h-[10px] rounded-full bg-[#92519c]'></li>
                    <li className='text-[15px]'>Object C</li>
                </ul>
            </div>

            <div className='text-center space-y-5'>
                <div className='relative w-fit mx-auto'>
                    <img src={'22.svg'} className='relative z-10' alt='Main Image' />
                    <div className='bg-[#92519c] w-[20px] h-[20px] rounded-full absolute -right-1 top-7 z-0'></div>
                </div>
                <h5 className="text-[18px] font-syne font">Cross Platform</h5>
                <p className="text-[15px] font-sora text-[#12182066]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua accumsan lacus vel facilisis.</p>
                <ul className='flex items-center justify-center gap-5 font-sora font'>
                    <li className='text-[15px]'>React Native</li>
                    <li className='w-[10px] h-[10px] rounded-full bg-[#92519c]'></li>
                    <li className='text-[15px]'>Flutter</li>
                    <li className='w-[10px] h-[10px] rounded-full bg-[#92519c]'></li>
                    <li className='text-[15px]'>Xamarin</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Analyst