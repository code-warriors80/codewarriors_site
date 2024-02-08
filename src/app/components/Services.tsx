import Image from 'next/image'
import React from 'react'

type Props = {}

const Service = ({image, index, title, description}) => {
    return (
        <div className=''>
                <div className='mx-auto flex gap-2 '>
                    <div className='w-[30px] h-[2px] bg-[#92519c]  rounded-full'></div>
                    <div className='w-full h-[2px] bg-zinc-200 rounded-full'></div>
                </div>
                        <div className='lg:flex gap-20 lg:px-7 py-10'>
                                <div className='relative w-fit'>
                                    <img src={image} className='relative lg:w-[80px] z-10' alt='Main Image' />
                                    <div className='bg-[#92519c] w-[20px] h-[20px] rounded-full absolute -right-1 top-4 z-0'></div>
                                </div>
                                <div className='mt-5'>
                                    <h5 className='text-[22px] font-syne flex items-center gap-5 mb-5'><span className='text-[#92519c] text-sm'>{index}</span> {title}</h5>
                                    <p className='font-sora text-[18px] lg:text-[15px] text-[#12182066] '>{description}</p>
                                </div>
                        </div>
        </div>
    )
}

const Services = (props: Props) => {
  return (
    <div>
        <div className='xl:w-[75%]  lg:w-[100%] md:w-[90%] mx-auto py-16 px-5 sm:px-16 md:px-0'>
            <h2 className='font-syne text-[29px] lg:text-[42px] text-[#121820] '>How We Can <span className='text-[#92519c]'>Help You</span></h2>

            <div className='lg:flex justify-between'>
                <div className='w-full xl:w-[45%]'>
                    <h4 className='font-syne text-[21px] text-[#121820] py-10 font-bold'>IT Services</h4>
                    <Service image='1.svg' index={'01'} title='Dedicated Team' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita corrupti tenetur provident fuga fugit nobis voluptatibusmolestias ad'/>
                    <Service image='2.svg' index={'02'} title='QA and Testing' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita corrupti tenetur provident fuga fugit nobis voluptatibusmolestias ad'/>
                    <Service image='3.svg' index={'03'} title='SaaS' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita corrupti tenetur provident fuga fugit nobis voluptatibusmolestias ad'/>
                </div>

                <div className='xl:w-[45%]'>
                    <h4 className='font-syne text-[21px] py-10 font-bold'>IT Solutions</h4>
                    <Service image='4.svg' index={'04'} title='Blockchain' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita corrupti tenetur provident fuga fugit nobis voluptatibusmolestias ad'/>
                    <Service image='5.svg' index={'05'} title='Artificial Intelligence' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita corrupti tenetur provident fuga fugit nobis voluptatibusmolestias ad'/>
                    <Service image='9.svg' index={'06'} title='Internet of Things' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita corrupti tenetur provident fuga fugit nobis voluptatibusmolestias ad'/>
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