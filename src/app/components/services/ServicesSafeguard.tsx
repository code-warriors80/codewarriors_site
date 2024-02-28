import Link from 'next/link';
import React from 'react';
import {BsArrowRight} from 'react-icons/bs';

const ServicesSafeguard = () => {
  return (
    <div className='overflow-hidden px-5 lg:px-0'>
        <div className='xl:w-[75%]  md:w-[90%] mx-auto'>
        <div className='font-syne '>
            <ul className='flex flex-row items-center justify-center gap-3 mb-10'>
                        <li className='w-[10px] h-[10px] rounded-full bg-[#92519c]'></li>
                        <li className='font-syne  text-[15px]'>Safeguard Modern</li>
            </ul>
            <p className='font-syne text-center text-[32px] lg:text-[42px]'>
                Ready To Take The Next Step?
            </p>
        </div>
        <div className='lg:mx-auto py-16 mx-auto grid lg:grid-cols-2 gap-20 items-center '>
            <div className='border-2 p-16 h-[400px] hover:border-[#92519c] rounded-lg'>
                <div>
                    <h2 className="text-[22px] font-syne">Get a Live Demo</h2>
                    <p className='font-sora text-[16px] py-10 text-[#12182066]'>
                        Discover our comprehensive approach to enhancing our 
                        digital presence of eductional institution from intuitive design that
                        engage studens and perents to robust features for managing academic informations
                        ,events and resources, our School website project redefines 
                        online educaation experiences.
                    </p>
                    <Link href='/' className='flex gap-3 items-center font-syne text-[16px] lg:mt-0 font'>
                        View Demo
                        <div className='bg-[#92519c] p-3 rounded-full relative ease-in-out duration-300 group-hover:left-3'>
                            <BsArrowRight size={20} color='white'/>
                        </div>
                    </Link>
                </div>
            </div>

            <div className='border-2 h-[400px] p-16 hover:border-[#92519c] rounded-lg'>
                <div>
                    <h2 className="text-[22px] font-syne">Start now</h2>
                    <p className='font-sora text-[16px] py-10 text-[#12182066]'>
                        Beyond business success, we are committed to making a positive 
                        impact on society and the environment 
                        through responsible business practices, ethical decision-making, 
                        and initiatives that contribute to social good and environmental sustainability.
                    </p>
                    <Link href='/' className='flex gap-3 items-center font-syne text-[16px] lg:mt-0 font'>
                                    Start now
                                    <div className='bg-[#92519c] p-3 rounded-full relative ease-in-out duration-300 group-hover:left-3'>
                                        <BsArrowRight size={20} color='white'/>
                                    </div>
                    </Link>
                </div>
            </div>

        </div>
        <div className='mx-auto flex gap-2  mt-5'>
            <div className='w-[30px] h-[2px] bg-[#92519c] rounded-full'></div>
            <div className='w-full h-[2px] bg-zinc-200 rounded-full'></div>
            <div className='w-[30px] h-[2px] bg-[#92519c]  rounded-full'></div>
        </div>

        <div className='lg:mx-auto sm:mx-auto sm:items-center py-16 md:px-0'>
            <div className=' '>
                <div>
                    <ul className='flex items-center gap-5'>
                        <li className='w-[10px] h-[10px] rounded-full bg-[#92519c]'></li>
                        <li className='font-syne  text-[15px]'>High Quality and Performance</li>
                    </ul>
                </div>
            </div>
            <h2 className='font-syne text-[29px] lg:text-[42px] text-[#121820] py-10'>Our Approach To <span className='text-[#92519c]'>SaaS Software </span>Development</h2>

            <div className='grid md:grid-cols-2'>
                <div className='w-full '>
                    <div className=''>
                        <div className='lg:flex gap-20 lg:px-7 py-10'>
                                <div className='relative w-fit'>
                                    <img src='/1.svg' className='relative lg:w-[80px] z-10' alt='Main Image' />
                                    <div className='bg-[#92519c] w-[20px] h-[20px] rounded-full absolute -right-1 top-4 z-0'></div>
                                </div>
                                <div className='mt-5'>
                                    <h4 className='text-[22px] font-syne flex items-center gap-5 mb-5'><span className='text-[#92519c] text-sm'>01</span>Tech Stack Choice</h4>
                                    <p className='font-sora text-[18px] lg:text-[15px] text-[#12182066] '>
                                    Make informed decisions on your tech stack with our expert guidance, ensuring compatibility, efficiency, and future scalability.
                                    </p>
                                </div>
                        </div>
                    </div>

                    <div className=''>
                        <div className='lg:flex gap-20 lg:px-7 py-10'>
                                <div className='relative w-fit'>
                                    <img src='/2.svg' className='relative lg:w-[70px] z-10' alt='Main Image' />
                                    <div className='bg-[#92519c] w-[20px] h-[20px] rounded-full absolute -right-1 top-4 z-0'></div>
                                </div>
                                <div className='mt-5'>
                                    <h4 className='text-[22px] font-syne flex items-center gap-5 mb-5'><span className='text-[#92519c] text-sm'>02</span>Multi Tenant Architecture</h4>
                                    <p className='font-sora text-[18px] lg:text-[15px] text-[#12182066]'> Implement a scalable and efficient multi-tenant architecture that optimizes resource utilization and enhances user experiences. </p>
                                </div>
                        </div>
                    </div>

                    <div className=''>
                        <div className='lg:flex gap-20 lg:px-7 py-10'>
                                <div className='relative w-fit'>
                                    <img src='/3.svg' className='relative lg:w-[70px] z-10' alt='Main Image' />
                                    <div className='bg-[#92519c] w-[20px] h-[20px] rounded-full absolute -right-1 top-4 z-0'></div>
                                </div>
                                <div className='mt-5'>
                                    <h4 className='text-[22px]  font-syne flex items-center gap-5 mb-5'><span className='text-[#92519c] text-sm'>03</span>  External Services Integration</h4>
                                    <p className='font-sora text-[18px] lg:text-[15px] text-[#12182066]'>Seamlessly integrate external services into your system, expanding functionality and improving overall performance. </p>
                                </div>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <div className=''>
                        <div className='lg:flex gap-20 lg:px-7 py-10'>
                                <div className='relative w-fit'>
                                    <img src='/4.svg' className='relative lg:w-[70px] z-10' alt='Main Image' />
                                    <div className='bg-[#92519c] w-[20px] h-[20px] rounded-full absolute -right-1 top-4 z-0'></div>
                                </div>
                                <div className='mt-5'>
                                    <h4 className='text-[22px] font-syne flex items-center gap-5 mb-5'><span className='text-[#92519c] text-sm'>04</span>Scalability On Demand</h4>
                                    <p className='font-sora text-[18px] lg:text-[15px] text-[#12182066] '>Scale your system effortlessly to meet growing demands, ensuring optimal performance and user satisfaction.</p>
                                </div>
                        </div>
                    </div>

                    <div className=''>
                        <div className='lg:flex gap-20 lg:px-7 py-10'>
                                <div className='relative w-fit'>
                                    <img  src='/5.svg' className='relative lg:w-[70px] w-auto z-10' alt='Main Image' />
                                    <div className='bg-[#92519c] w-[20px] h-[20px] rounded-full absolute -right-1 top-4 z-0'></div>
                                </div>
                                <div className='mt-5'>
                                    <h4 className='text-[22px]  font-syne flex items-center gap-5 mb-5'><span className='text-[#92519c] text-sm'>05</span>Security Audit</h4>
                                    <p className='font-sora text-[18px] lg:text-[15px] text-[#12182066] '>Conduct thorough security audits to identify and mitigate potential vulnerabilities, safeguarding your system and data against threats.</p>
                                </div>
                        </div>
                    </div>
                    
                    <div className=''>
                        <div className='lg:flex gap-20 lg:px-7 py-10'>
                                <div className='relative w-fit'>
                                    <img src='/6.svg' className='relative lg:w-[60px] z-10' alt='Main Image' />
                                    <div className='bg-[#92519c] w-[20px] h-[20px] rounded-full absolute -right-1 top-4 z-0'></div>
                                </div>
                                <div className='mt-5'>
                                    <h4 className='text-[22px] font-syne flex items-center gap-5 mb-5'><span className='text-[#92519c] text-sm'>06</span>Smooth Deployment</h4>
                                    <p className='font-sora text-[18px] lg:text-[15px] text-[#12182066]'> Ensure a smooth deployment process with our expert guidance and support, minimizing downtime and ensuring a seamless transition.</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-between items-center lg:mt-20 flex-wrap'>
                <Link href='/' className='border-2 border-[#92519c] px-20 py-5 rounded-full font-sora text-[16px] my-5 hidden lg:block font ease-in-out duration-300 hover:border-[3px]'>Talk To Our SaaS Experts</Link>
                <Link href='/' className='flex gap-3 items-center font-syne text-[16px] font group'>
                    <div className='bg-[#92519c] p-3 rounded-full relative ease-in-out duration-300 group-hover:left-3'>
                        <BsArrowRight size={20} color='white'/>
                    </div>
                </Link>   
            </div>
        </div>
        </div>
    </div>
  )
}

export default ServicesSafeguard;
