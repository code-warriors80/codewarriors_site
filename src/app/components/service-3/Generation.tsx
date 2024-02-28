import Link from 'next/link'
import React from 'react'

type Props = {}

const Generation = (props: Props) => {
  return (
    <div className='py-32'>
        <ul className='flex flex-row items-center gap-3'>
            <li className='w-[10px] h-[10px] rounded-full bg-[#92519c]'></li>
            <li className='font-syne  text-[15px]'>Tech, Business and Talents</li>
        </ul>
        <div className='lg:flex justify-between items-center'>
            <h2 className="text-[32px] lg:text-[42px] font-syne mt-10 mb-20">Next <span className="text-[#92519c]">Gen Tech</span> For Mobile App <br/> Development</h2>
            <Link href='' className='border-2  border-[#92519c] px-10 lg:px-20 py-5 font-sora text-[16px] rounded-full font ease-in-out duration-300 hover:border-[3px]'>Learn More</Link>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-y-20 mt-20 items-center justify-center font-syne text-[16px] font'>
            <div className='text-center space-y-5'>
                <div className='relative w-fit mx-auto'>
                    <img src={'1.svg'} className='relative z-10' alt='Main Image' />
                    <div className='bg-[#92519c] w-[20px] h-[20px] rounded-full  absolute -right-1 top-7 z-0'></div>
                </div>
                <h6>Cloud</h6>
            </div>

            <div className='text-center space-y-5'>
                <div className='relative w-fit mx-auto'>
                    <img src={'30.svg'} className='relative z-10' alt='Main Image' />
                    <div className='bg-[#92519c] w-[20px] h-[20px] rounded-full  absolute -right-1 top-7 z-0'></div>
                </div>
                <h6>AI / ML</h6>
            </div>

            <div className='text-center space-y-5'>
                <div className='relative w-fit mx-auto'>
                    <img src={'2.svg'} className='relative z-10' alt='Main Image' />
                    <div className='bg-[#92519c] w-[20px] h-[20px] rounded-full  absolute -right-1 top-7 z-0'></div>
                </div>
                <h6>AR / VR</h6>
            </div>

            <div className='text-center space-y-5'>
                <div className='relative w-fit mx-auto'>
                    <img src={'23.svg'} className='relative z-10' alt='Main Image' />
                    <div className='bg-[#92519c] w-[20px] h-[20px] rounded-full  absolute -right-1 top-7 z-0'></div>
                </div>
                <h6>IoT</h6>
            </div>
        </div>
    </div>
  )
}

export default Generation