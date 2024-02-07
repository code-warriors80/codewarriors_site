import Image from 'next/image'
import React from 'react'

type Props = {}

const Services = (props: Props) => {
  return (
    <div>
        <div className='xl:w-[75%]  lg:w-[100%] md:w-[90%] mx-auto py-16 px-5 sm:px-16 md:px-0'>
            <h2 className='font-syne text-[29px] lg:text-[42px] text-[#121820] '>How We Can <span className='text-[#92519c]'>Help You</span></h2>

            <div className='lg:flex justify-between'>
                <div className='w-full xl:w-[45%]'>
                    <h4 className='font-syne text-[21px] text-[#121820] py-10 font-bold'>IT Services</h4>
                    <div className=''>
                        <div className='mx-auto flex gap-2 '>
                                    <div className='w-[30px] h-[2px] bg-[#92519c]  rounded-full'></div>
                                    <div className='w-full h-[2px] bg-zinc-200 rounded-full'></div>
                        </div>
                        <div className='lg:flex gap-20 lg:px-7 py-10'>
                                <div className='relative w-fit'>
                                    <img src='/1.svg' className='relative lg:w-[80px] z-10' alt='Main Image' />
                                    <div className='bg-[#92519c] w-[20px] h-[20px] rounded-full absolute -right-1 top-4 z-0'></div>
                                </div>
                                <div className='mt-5'>
                                    <h5 className='text-[22px] font-syne flex items-center gap-5 mb-5'><span className='text-[#92519c] text-sm'>01</span> Dedicated Team</h5>
                                    <p className='font-sora text-[18px] lg:text-[15px] text-[#12182066] '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita corrupti tenetur provident fuga fugit nobis voluptatibus
                                         molestias ad </p>
                                </div>
                        </div>
                    </div>

                    <div className=''>
                        <div className='mx-auto flex gap-2 '>
                                    <div className='w-[30px] h-[2px] bg-[#92519c]  rounded-full'></div>
                                    <div className='w-full h-[2px] bg-zinc-200 rounded-full'></div>
                        </div>
                        <div className='lg:flex gap-20 lg:px-7 py-10'>
                                <div className='relative w-fit'>
                                    <img src='/2.svg' className='relative lg:w-[70px] z-10' alt='Main Image' />
                                    <div className='bg-[#92519c] w-[20px] h-[20px] rounded-full absolute -right-1 top-4 z-0'></div>
                                </div>
                                <div className='mt-5'>
                                    <h5 className='text-[22px] font-syne flex items-center gap-5 mb-5'><span className='text-[#92519c] text-sm'>02</span> QA and Testing</h5>
                                    <p className='font-sora text-[18px] lg:text-[15px] text-[#12182066]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita corrupti tenetur provident fuga fugit nobis voluptatibus
                                         molestias ad </p>
                                </div>
                        </div>
                    </div>

                    <div className=''>
                        <div className='mx-auto flex gap-2 '>
                                    <div className='w-[30px] h-[2px] bg-[#92519c]  rounded-full'></div>
                                    <div className='w-full h-[2px] bg-zinc-200 rounded-full'></div>
                        </div>
                        <div className='lg:flex gap-20 lg:px-7 py-10'>
                                <div className='relative w-fit'>
                                    <img src='/3.svg' className='relative lg:w-[70px] z-10' alt='Main Image' />
                                    <div className='bg-[#92519c] w-[20px] h-[20px] rounded-full absolute -right-1 top-4 z-0'></div>
                                </div>
                                <div className='mt-5'>
                                    <h5 className='text-[22px]  font-syne flex items-center gap-5 mb-5'><span className='text-[#92519c] text-sm'>03</span> SaaS</h5>
                                    <p className='font-sora text-[18px] lg:text-[15px] text-[#12182066]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita corrupti tenetur provident fuga fugit nobis voluptatibus
                                         molestias ad </p>
                                </div>
                        </div>
                    </div>
                </div>

                <div className='xl:w-[45%]'>
                    <h4 className='font-syne text-[21px] py-10 font-bold'>IT Solutions</h4>
                    <div className=''>
                        <div className='mx-auto flex gap-2 '>
                                    <div className='w-[30px] h-[2px] bg-[#92519c]  rounded-full'></div>
                                    <div className='w-full h-[2px] bg-zinc-200 rounded-full'></div>
                        </div>
                        <div className='lg:flex gap-20 lg:px-7 py-10'>
                                <div className='relative w-fit'>
                                    <img src='/4.svg' className='relative lg:w-[70px] z-10' alt='Main Image' />
                                    <div className='bg-[#92519c] w-[20px] h-[20px] rounded-full absolute -right-1 top-4 z-0'></div>
                                </div>
                                <div className='mt-5'>
                                    <h5 className='text-[22px] font-syne flex items-center gap-5 mb-5'><span className='text-[#92519c] text-sm'>04</span> Blockchain</h5>
                                    <p className='font-sora text-[18px] lg:text-[15px] text-[#12182066] '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita corrupti tenetur provident fuga fugit nobis voluptatibus
                                         molestias ad </p>
                                </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className='mx-auto flex gap-2 '>
                                    <div className='w-[30px] h-[2px] bg-[#92519c]  rounded-full'></div>
                                    <div className='w-full h-[2px] bg-zinc-200 rounded-full'></div>
                        </div>
                        <div className='lg:flex gap-20 lg:px-7 py-10'>
                                <div className='relative w-fit'>
                                    <img  src='/5.svg' className='relative lg:w-[70px] w-auto z-10' alt='Main Image' />
                                    <div className='bg-[#92519c] w-[20px] h-[20px] rounded-full absolute -right-1 top-4 z-0'></div>
                                </div>
                                <div className='mt-5'>
                                    <h5 className='text-[22px]  font-syne flex items-center gap-5 mb-5'><span className='text-[#92519c] text-sm'>05</span> Artificial Intelligence</h5>
                                    <p className='font-sora text-[18px] lg:text-[15px] text-[#12182066] '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita corrupti tenetur provident fuga fugit nobis voluptatibus
                                         molestias ad </p>
                                </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className='mx-auto flex gap-2 '>
                                    <div className='w-[30px] h-[2px] bg-[#92519c]  rounded-full'></div>
                                    <div className='w-full h-[2px] bg-zinc-200 rounded-full'></div>
                        </div>
                        <div className='lg:flex gap-20 lg:px-7 py-10'>
                                <div className='relative w-fit'>
                                    <img src='/6.svg' className='relative lg:w-[60px] z-10' alt='Main Image' />
                                    <div className='bg-[#92519c] w-[20px] h-[20px] rounded-full absolute -right-1 top-4 z-0'></div>
                                </div>
                                <div className='mt-5'>
                                    <h5 className='text-[22px] font-syne flex items-center gap-5 mb-5'><span className='text-[#92519c] text-sm'>06</span> Internet of Things</h5>
                                    <p className='font-sora text-[18px] lg:text-[15px] text-[#12182066]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita corrupti tenetur provident fuga fugit nobis voluptatibus
                                         molestias ad </p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-auto flex gap-2  mt-20'>
                <div className='w-[30px] h-[2px] bg-[#92519c]  rounded-full'></div>
                <div className='w-full h-[2px] bg-zinc-200 rounded-full'></div>
                <div className='w-[30px] h-[2px] bg-[#92519c]  rounded-full'></div>
            </div>
        </div>
    </div>
  )
}

export default Services