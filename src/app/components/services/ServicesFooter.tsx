import React from 'react';

const ServicesFooter = () => {
  return (
    <div className='w-full relative  bg-[rgb(18,24,32)]'>
      <div className="mx-auto p-4 py-6 lg:py-8">
        <img src='https://itsulu-react.netlify.app/_next/static/media/deco-2.8cba2eb2.svg' className='w-[200px] hidden lg:block left-auto absolute '/>
        <div className="xl:w-[75%]  lg:w-[100%] md:w-[90%] mx-auto py-16 px-5 sm:px-16 md:px-0">
            <div className="mx-auto px-6 lg:px-8">
                <div className="mx-auto lg:text-center mb-10 space-y-10">
                    <h2 className="font-sora text-[15px] text-white">Always The Best</h2>
                    <p className="font-syne text-[32px] lg:text-[42px]  text-white ">
                        Types Of <span className='text-[#92519c]'>SaaS Applications</span> We Deliver
                    </p>
                    <p className="text-[15px] font-sora text-[#FFFFFF80]">
                        This applications are typically used for data analysis, 
                        statistical modeling, data visualization, <br/>
                        and reporting in various industries such as healthcare, education, 
                        finance, retail, and telecommunications.
                    </p>
                </div>

                <div className='my-20'>
                    <ul className='grid md:grid-cols-2 lg:grid-cols-4 gap-y-10 text-white mx-auto'>
                        <li className='w-fit font-sora text-[15px] flex gap-5'>
                            <div className='relative w-fit'>
                                <img src='w1.svg' className='relative z-10' alt='Main Image' />
                                <div className='bg-[#92519c] w-[15px] h-[15px] rounded-full absolute -right-1 top-4 z-0'></div>
                            </div>
                            CRMs Platforms
                        </li>
                        <li className='w-fit font-sora text-[15px] flex gap-5'>
                            <div className='relative w-fit'>
                                <img src='w2.svg' className='relative z-10' alt='Main Image' />
                                <div className='bg-[#92519c] w-[15px] h-[15px] rounded-full absolute -right-1 top-4 z-0'></div>
                            </div>
                            ERPs Platforms
                        </li>
                        <li className='w-fit font-sora text-[15px] flex gap-5'>
                            <div className='relative w-fit'>
                                <img src='w2.svg' className='relative z-10' alt='Main Image' />
                                <div className='bg-[#92519c] w-[15px] h-[15px] rounded-full absolute -right-1 top-4 z-0'></div>
                            </div>
                            Marketing Software
                        </li>
                        <li className='w-fit font-sora text-[15px] flex gap-5'>
                            <div className='relative w-fit'>
                                <img src='w2.svg' className='relative z-10' alt='Main Image' />
                                <div className='bg-[#92519c] w-[15px] h-[15px] rounded-full absolute -right-1 top-4 z-0'></div>
                            </div>
                            Project Management Systems
                        </li>
                        <li className='w-fit font-sora text-[15px] flex gap-5'>
                            <div className='relative w-fit'>
                                <img src='w2.svg' className='relative z-10' alt='Main Image' />
                                <div className='bg-[#92519c] w-[15px] h-[15px] rounded-full absolute -right-1 top-4 z-0'></div>
                            </div>
                            Accounting Systems
                        </li>
                        <li className='w-fit font-sora text-[15px]'>Document Auto. Solutions</li>
                        <li className='w-fit font-sora text-[15px]'>Cybersecurity Platforms</li>
                        <li className='w-fit font-sora text-[15px]'>HR/HRM Software</li>
                    </ul>
                </div>

                <div className='py-10 mx-auto w-fit'>
                    <a href="/contact" className="text-[16px] px-[60px] py-5 rounded-full font-sora border-2 border-[#92519c] font text-white"><span>Book an Appointment</span></a>
                </div>


            </div>
        </div>

      </div>

    </div>
  )
}

export default ServicesFooter;
