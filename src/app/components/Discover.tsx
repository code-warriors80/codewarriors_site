import Link from 'next/link'
import React from 'react'
import { BsArrowLeft, BsArrowRight, BsStar, BsStarFill } from 'react-icons/bs'

type Props = {}

const Discovery = ({image, title, description}) => {
    return (
        <div className='w-full md:w-1/2 lg:w-[22.50%]'>
            <div className='flex items-center gap-5 py-5'>
                <div className='relative w-fit'>
                    <img src={image} className='relative z-10' alt='Main Image' />
                    <div className='bg-[#92519c] w-[15px] h-[15px] rounded-full absolute -right-1 top-4 z-0'></div>
                </div>
                <h6 className='font-syne text-[22px] text-[#121820]'>{title}</h6>
            </div>
            <p className='font-sora text-[14px] text-[#12182066]'>{description}</p>
        </div>
    )
}

const Discover = (props: Props) => {
  return (
    <div className='deep_bg relative py-10'>
         <img
                    src='https://itsulu-react.netlify.app/_next/static/media/deco-1.07790e8b.svg'
                    className='w-[150px] lg:w-auto top-0   hidden lg:right-[40%] lg:block absolute'
                    alt='Decorative Element'
        />
        <div className='xl:w-[75%]  lg:w-[100%] md:w-[90%] mx-auto py-16 px-5 sm:px-16 md:px-0 '>
                     <div className='lg:flex items-end justify-between flex-wrap'>
                            <div className='overflow-hidden'>
                                    <div className='flex items-center gap-3 mb-5'>
                                        <div className='bg-[#92519c] w-[7px] h-[7px] rounded-full'></div>
                                        <h2 className='font-syne text-[16px] text-[#121820]  font1'>Discover Our Company</h2>
                                    </div>
                                    <h2 className='font-syne text-[29px] lg:text-[45.50px] text-[#121820]'>How We <span className='text-[#92519c]'>Collaborate</span> With You</h2>
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

                    <div className='flex flex-wrap items-start justify-between mt-20 space-y-10 lg:space-y-0'>
                        <Discovery image='/s1.svg' title='Thinking Big' 
                        description='Embracing ambitious goals, we begin by grasping your vision. Through strategic analysis, we craft comprehensive solutions that align with your long-term objectives, fostering innovation and scalability..' />
                        <Discovery image='/s2.svg' title='Starting Small' 
                        description='We start small, breaking down complex projects into manageable phases. This focused, incremental approach ensures precision and tangible results, laying a strong foundation for future growth.' />
                        <Discovery image='/s3.svg' title='Creating Fast' 
                        description='We prioritize speed, delivering solutions promptly without compromising quality. Our agile methodology enables quick adaptation to changing requirements, ensuring efficiency and responsiveness to market dynamics.' />
                        <Discovery image='/s4.svg' title='Innovating Scale' 
                        description='Innovation drives us. From concepts to implementation, we seek innovation. Staying at the forefront of tech and trends ensures our solutions are scalable and cutting-edge.' />
                    </div>

                    <div className='flex justify-between items-center flex-wrap lg:mt-20'>
                        <Link href='/' className='flex gap-3 items-center font-syne text-[16px] mt-5 lg:mt-0  font group'>View All Casses<div className='bg-[#92519c] p-3 rounded-full relative ease-in-out duration-300 group-hover:left-3'><BsArrowRight size={20} color='white'/></div></Link>   
                        <Link href='/contact' className='border-2 border-[#92519c] px-20 py-5 rounded-full font-sora text-[16px] hidden lg:block font ease-in-out duration-300 hover:border-[3px]'>Get Started</Link>
                    </div>
        </div>
        <img
                    src='https://itsulu-react.netlify.app/_next/static/media/deco-1.07790e8b.svg'
                    className='w-[150px] lg:w-auto top-0   hidden lg:right-[40%] lg:block absolute'
                    alt='Decorative Element'
        />
    </div>
  )
}

export default Discover