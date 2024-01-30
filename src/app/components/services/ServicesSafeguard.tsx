import Link from 'next/link';
import React from 'react';
import {BsArrowRight} from 'react-icons/bs';

const ServicesSafeguard = () => {
  return (
    <div className=''>
        <div className='font-syne mx-auto'>
                <p className=' text-center'>
                    Safeguard Modern
                </p>
                <p className='text-center font-bold text-4xl'>
                    Ready To Take The Next Step?
                </p>
        </div>
        <div className='py-10 sm:py-20 mx-auto items-center justify-between max-w-4xl flex flex-row px-4 lg:px-6'>
            <div className="mt-2 max-w-6xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:max-w-none">
                <div className="-mt-2 p-2 duration-200 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                    <div className="rounded-2xl py-10 ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                        <div className="max-w-xs px-8">
                            <p className="font-semibold text-3xl font-syne text-black">Get a Live Demo</p>
                            <p className="mt-6 text-xs leading-5 font-syne text-gray-600">
                                Dissuade ecstatic and properly saw entirely sir why laughter endeavor.
                                In on my jointure horrible margaret suitable he followed speedily.
                                Indeed vanity excuse or mr lovers of on.
                            </p>
                            <Link href='/' className='flex gap-3 items-center font-syne text-[16px] mt-5 lg:mt-0  font group'>
                                Request a Free Demo
                                <div className='bg-[#F57C00] p-3 rounded-full relative ease-in-out duration-300 group-hover:left-3'>
                                    <BsArrowRight size={20} color='white'/>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-2 w-100 h-100  rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:max-w-none">
                <div className="-mt-2 p-2  lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                    <div className="rounded-2xl py-10 ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                        <div className="max-w-xs px-8">
                            <p className="font-semibold text-3xl font-syne text-black">Start Now</p>
                            <p className="mt-6 text-xs leading-5 font-syne text-gray-600">
                                Dissuade ecstatic and properly saw entirely sir why laughter endeavor.
                                In on my jointure horrible margaret suitable he followed speedily.
                                Indeed vanity excuse or mr lovers of on.
                            </p>
                            <Link href='/' className='flex gap-3 items-center font-syne text-[16px] mt-5 lg:mt-0  font group'>
                                Get In Touch
                                <div className='bg-[#F57C00] p-3 rounded-full relative ease-in-out duration-300 group-hover:left-3'>
                                    <BsArrowRight size={20} color='white'/>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        <div className='mx-auto w-[1030px] flex gap-2  mt-5'>
            <div className='w-[30px] h-[2px] bg-[#F57C00]  rounded-full'></div>
            <div className='w-full h-[2px] bg-zinc-200 rounded-full'></div>
            <div className='w-[30px] h-[2px] bg-[#F57C00]  rounded-full'></div>
        </div>

        <div className='xl:w-[75%]  lg:w-[100%] md:w-[90%] mx-auto py-16 px-5 sm:px-16 md:px-0'>
        <div className='flex mt-16 '>
                <div>
                    <ul className='flex flex-row'>
                        <li className='w-[10px] h-[10px] rounded-full bg-[#F57C00]'></li>
                        <li className='font-syne  text-[15px]'>High Quality and Performance</li>
                    </ul>
                    <div className='bg-[#F57C00] w-[20px] h-[20px] rounded-full absolute -right-1 top-4 z-0'></div>
                </div>
            </div>
            <h2 className='font-syne text-[29px] lg:text-[42px] text-[#121820] '>Our Approach To <span className='text-[#F57C00]'>SaaS Software</span>Development</h2>

            <div className='lg:flex justify-between'>
                <div className='w-full xl:w-[45%]'>
                    <div className=''>
                        <div className='lg:flex gap-20 lg:px-7 py-10'>
                                <div className='relative w-fit'>
                                    <img src='/1.svg' className='relative lg:w-[80px] z-10' alt='Main Image' />
                                    <div className='bg-[#F57C00] w-[20px] h-[20px] rounded-full absolute -right-1 top-4 z-0'></div>
                                </div>
                                <div className='mt-5'>
                                    <h5 className='text-[22px] font-syne flex items-center gap-5 mb-5'><span className='text-[#F57C00] text-sm'>01</span>Tech Stack Choice</h5>
                                    <p className='font-sora text-[18px] lg:text-[15px] text-[#12182066] '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita corrupti tenetur provident fuga fugit nobis voluptatibus
                                         molestias ad </p>
                                </div>
                        </div>
                    </div>

                    <div className=''>
                        <div className='lg:flex gap-20 lg:px-7 py-10'>
                                <div className='relative w-fit'>
                                    <img src='/2.svg' className='relative lg:w-[70px] z-10' alt='Main Image' />
                                    <div className='bg-[#F57C00] w-[20px] h-[20px] rounded-full absolute -right-1 top-4 z-0'></div>
                                </div>
                                <div className='mt-5'>
                                    <h5 className='text-[22px] font-syne flex items-center gap-5 mb-5'><span className='text-[#F57C00] text-sm'>02</span>Multi Tenant Architecture</h5>
                                    <p className='font-sora text-[18px] lg:text-[15px] text-[#12182066]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita corrupti tenetur provident fuga fugit nobis voluptatibus
                                         molestias ad </p>
                                </div>
                        </div>
                    </div>

                    <div className=''>
                        <div className='lg:flex gap-20 lg:px-7 py-10'>
                                <div className='relative w-fit'>
                                    <img src='/3.svg' className='relative lg:w-[70px] z-10' alt='Main Image' />
                                    <div className='bg-[#F57C00] w-[20px] h-[20px] rounded-full absolute -right-1 top-4 z-0'></div>
                                </div>
                                <div className='mt-5'>
                                    <h5 className='text-[22px]  font-syne flex items-center gap-5 mb-5'><span className='text-[#F57C00] text-sm'>03</span>  External Services Integration</h5>
                                    <p className='font-sora text-[18px] lg:text-[15px] text-[#12182066]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita corrupti tenetur provident fuga fugit nobis voluptatibus
                                         molestias ad </p>
                                </div>
                        </div>
                    </div>
                </div>

                <div className='xl:w-[45%]'>
                    <div className=''>
                        <div className='lg:flex gap-20 lg:px-7 py-10'>
                                <div className='relative w-fit'>
                                    <img src='/4.svg' className='relative lg:w-[70px] z-10' alt='Main Image' />
                                    <div className='bg-[#F57C00] w-[20px] h-[20px] rounded-full absolute -right-1 top-4 z-0'></div>
                                </div>
                                <div className='mt-5'>
                                    <h5 className='text-[22px] font-syne flex items-center gap-5 mb-5'><span className='text-[#F57C00] text-sm'>04</span>Scalability On Demand</h5>
                                    <p className='font-sora text-[18px] lg:text-[15px] text-[#12182066] '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita corrupti tenetur provident fuga fugit nobis voluptatibus
                                         molestias ad </p>
                                </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className='lg:flex gap-20 lg:px-7 py-10'>
                                <div className='relative w-fit'>
                                    <img  src='/5.svg' className='relative lg:w-[70px] w-auto z-10' alt='Main Image' />
                                    <div className='bg-[#F57C00] w-[20px] h-[20px] rounded-full absolute -right-1 top-4 z-0'></div>
                                </div>
                                <div className='mt-5'>
                                    <h5 className='text-[22px]  font-syne flex items-center gap-5 mb-5'><span className='text-[#F57C00] text-sm'>05</span>Security Audit</h5>
                                    <p className='font-sora text-[18px] lg:text-[15px] text-[#12182066] '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita corrupti tenetur provident fuga fugit nobis voluptatibus
                                         molestias ad </p>
                                </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className='lg:flex gap-20 lg:px-7 py-10'>
                                <div className='relative w-fit'>
                                    <img src='/6.svg' className='relative lg:w-[60px] z-10' alt='Main Image' />
                                    <div className='bg-[#F57C00] w-[20px] h-[20px] rounded-full absolute -right-1 top-4 z-0'></div>
                                </div>
                                <div className='mt-5'>
                                    <h5 className='text-[22px] font-syne flex items-center gap-5 mb-5'><span className='text-[#F57C00] text-sm'>06</span>Smooth Deployment</h5>
                                    <p className='font-sora text-[18px] lg:text-[15px] text-[#12182066]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita corrupti tenetur provident fuga fugit nobis voluptatibus
                                         molestias ad </p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-between items-center lg:mt-20 flex-wrap'>
                <Link href='/' className='border-2 border-[#F57C00] px-20 py-5 rounded-full font-sora text-[16px] my-5 hidden lg:block font ease-in-out duration-300 hover:border-[3px]'>Talk To Our SaaS Experts</Link>
                <Link href='/' className='flex gap-3 items-center font-syne text-[16px] font group'>
                    <div className='bg-[#F57C00] p-3 rounded-full relative ease-in-out duration-300 group-hover:left-3'>
                        <BsArrowRight size={20} color='white'/>
                    </div>
                </Link>   
            </div>
        </div>
    </div>
  )
}

export default ServicesSafeguard;
