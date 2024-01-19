import React from 'react'

type Props = {}

const Contact = (props: Props) => {
  return (
    <div className='relative  bg-[#121820] py-10'>
                <div className='xl:w-[75%]  lg:w-[100%] md:w-[90%] mx-auto py-16 px-5 sm:px-16 md:px-0 '>
                    <div className='lg:flex items-end justify-between'>
                            <div className='overflow-hidden lg:w-[40%]'>
                                    <h2 className='font-syne text-[29px] lg:text-[42px] text-white '>Contact <span className='text-[#F57C00]'>Us</span></h2>
                            </div>
                    </div>


                    <div className='mt-20'>
                        <div className='lg:flex justify-between'>
                            <div className='lg:w-[48%] space-y-8'>
                                    <div className='w-full'>
                                            <label htmlFor='Name' className='text-white font-syne text-[15px]'>Name <span className='text-[#F57C00]'>Required</span></label>
                                            <div>
                                                <input type='text' className='w-full py-5 outline-none form_btm bg-transparent text-white font-sora'/>
                                            </div>
                                    </div>
                                    <div className='w-full'>
                                            <label htmlFor='email ' className='text-white font-syne text-[15px]'>Email <span className='text-[#F57C00]'>Required</span></label>
                                            <div>
                                                <input type='email' className='w-full py-5 outline-none form_btm bg-transparent text-white font-sora'/>
                                            </div>
                                    </div>
                                    <div className='w-full'>
                                            <label htmlFor='phone' className='text-white font-syne text-[15px]'>Phone <span className='text-[#FFFFFF80]'>Optional</span></label>
                                            <div>
                                                <input type='text'  className='w-full py-5 outline-none form_btm bg-transparent text-white font-sora'/>
                                            </div>
                                    </div>
                            </div>

                            <div className='lg:w-[48%]  relative lg:h-full mt-8 lg:mt-0'>
                                <div className=''>
                                    <label htmlFor='message' className='text-white font-syne text-[15px]'>Message <span className='text-[#F57C00]'>Required</span></label>
                                    <div className='w-full h-[200px]'>
                                        <textarea className='w-full h-full outline-none form_btm bg-transparent text-white font-sora'/>
                                    </div>
                                </div>
                                <div className='mt-10'>
                                        <p className='mb-5 text-[#FFFFFF80] font-sora text-[13px]'>
                                            We will process your personal information in accordance with our Privacy Policy.
                                        </p>
                                    <div className='flex items-center gap-5'>
                                        <input type='checkbox' className='p-3 bg-[#F57C00]'/>
                                        <p className='text-white font-sora text-[13px]'>I would like to be contacted with news and updates about your <span className='text-[#F57C00]'>events and services</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className='bg-[#F57C00] text-[#121820] w-full rounded-full py-5 mt-10 font-sora text-[16px] font-bold'>Send Message Now</button>
                    </div>
                </div>
    </div>
  )
}

export default Contact