import Link from 'next/link'
import React from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

type Props = {}

const Solutions = (props: Props) => {
  return (
    <div className='relative bg-[#1218200D] py-1'>
        <img
            src='https://itsulu-react.netlify.app/_next/static/media/deco-1.07790e8b.svg'
            className='w-[200px] lg:w-auto top-0   hidden lg:right-80 lg:block absolute'
            alt='Decorative Element'
          />
        <div className='xl:w-[75%]  lg:w-[100%] md:w-[90%] mx-auto py-16 px-5 sm:px-16 md:px-0'>
            <div className='lg:flex items-end justify-between flex-wrap'>
                    <div>
                            <div className='flex items-center gap-3 mb-5'>
                                <div className='bg-[#F57C00] w-[7px] h-[7px] rounded-full'></div>
                                <h2 className='font-syne text-[16px]'>Our Services and Solutions</h2>
                            </div>
                            <h2 className='font-syne text-[29px] lg:text-[42px] text-[#121820] '>Technological Applications</h2>
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

            <div className="carousel carousel-center px-0 p-4 space-x-4 lg:space-x-10 rounded-box w-full mt-20  ">
                  <div className="carousel-item border-2 group hover:border-[#F57C00] ease-in-out duration-300 rounded-xl px-5 lg:p-10 py-8 lg:py-16 w-[85%] sm:w-[90%] md:w-[40%] lg:w-[25.20%]">
                       <div>
                                  <h4 className='font-syne text-[22px] text-[#121820] mb-10'>Data Security</h4>
                                  <p className='font-sora text-[15px] text-[#12182066]'>Accelerate innovation with world class tech teams our all service.</p>

                                  <div className='mx-auto flex gap-2 my-10 '>
                                      <div className='w-[30px] h-[2px] bg-[#F57C00]  rounded-full'></div>
                                      <div className='w-full h-[2px] bg-zinc-200 rounded-full'></div>
                                  </div>

                                  <ul className='my-10 space-y-3'>
                                          <li className='font-sora text-[15px] lg:text-base text-[#121820] flex items-center gap-3'>
                                            <div className='bg-[#F57C00] w-[7px] h-[7px] lg:w-[9px] lg:h-[9px] rounded-full'></div> Accelerate innovation.
                                          </li>
                                          <li className='font-sora text-[15px] lg:text-base text-[#121820] flex items-center gap-3'>
                                            <div className='bg-[#F57C00] w-[7px] h-[7px] lg:w-[9px] lg:h-[9px] rounded-full'></div> With world-class tech teams.
                                          </li>
                                          <li className='font-sora text-[15px] lg:text-base text-[#121820] flex items-center gap-3'>
                                            <div className='bg-[#F57C00] w-[7px] h-[7px] lg:w-[9px] lg:h-[9px] rounded-full'></div> Our all service offerings to enhance
                                          </li>
                                          <li className='font-sora text-[15px] lg:text-base text-[#121820] flex items-center gap-3'>
                                            <div className='bg-[#F57C00] w-[7px] h-[7px] lg:w-[9px] lg:h-[9px] rounded-full'></div>Simply drag, drop and customize
                                          </li>
                                  </ul>

                                 <Link className='font-syne text-[16px] flex items-center gap-3 text-[#121820] w-fit ' href='/'>Learn More <div className='bg-[#12182033] group-hover:bg-[#F57C00] p-3 rounded-full relative ease-in-out duration-300 '><BsArrowRight size={15} color='white' className='ease-in-out duration-300'/></div></Link>
                          </div>
                  </div>

                  <div className="carousel-item border-2 group hover:border-[#F57C00] ease-in-out duration-300 rounded-xl px-5 lg:p-10 py-8 lg:py-16 w-[85%] sm:w-[90%] md:w-[40%] lg:w-[25.20%]">
                        <div>
                                <h4 className='font-syne text-[22px] text-[#121820] mb-10'>SEO and Optimazation</h4>
                                <p className='font-sora text-[15px] text-[#12182066]'>Accelerate innovation with world class tech teams our all service.</p>

                                <div className='mx-auto flex gap-2 my-10 '>
                                    <div className='w-[30px] h-[2px] bg-[#F57C00]  rounded-full'></div>
                                    <div className='w-full h-[2px] bg-zinc-200 rounded-full'></div>
                                </div>

                                <ul className='my-10 space-y-3'>
                                        <li className='font-sora text-[15px] lg:text-base text-[#121820] flex items-center gap-3'>
                                          <div className='bg-[#F57C00] w-[7px] h-[7px] lg:w-[9px] lg:h-[9px] rounded-full'></div> Accelerate innovation.
                                        </li>
                                        <li className='font-sora text-[15px] lg:text-base text-[#121820] flex items-center gap-3'>
                                          <div className='bg-[#F57C00] w-[7px] h-[7px] lg:w-[9px] lg:h-[9px] rounded-full'></div> With world-class tech teams.
                                        </li>
                                        <li className='font-sora text-[15px] lg:text-base text-[#121820] flex items-center gap-3'>
                                          <div className='bg-[#F57C00] w-[7px] h-[7px] lg:w-[9px] lg:h-[9px] rounded-full'></div> Our all service offerings to enhance
                                        </li>
                                        <li className='font-sora text-[15px] lg:text-base text-[#121820] flex items-center gap-3'>
                                          <div className='bg-[#F57C00] w-[7px] h-[7px] lg:w-[9px] lg:h-[9px] rounded-full'></div>Simply drag, drop and customize
                                        </li>
                                </ul>

                                <Link className='font-syne text-[16px] flex items-center gap-3 text-[#121820] w-fit ' href='/'>Learn More <div className='bg-[#12182033] group-hover:bg-[#F57C00] p-3 rounded-full relative ease-in-out duration-300'><BsArrowRight size={15} color='white' className='ease-in-out duration-300'/></div></Link>
                            </div>
                  </div>

                  <div className="carousel-item border-2 group hover:border-[#F57C00] ease-in-out duration-300 rounded-xl px-5 lg:p-10 py-8 lg:py-16 sm:w-[90%]  w-[85%] md:w-[40%] lg:w-[25.20%]">
                          <div>
                                  <h4 className='font-syne text-[22px] text-[#121820] mb-10'>Web Development</h4>
                                  <p className='font-sora text-[15px] text-[#12182066]'>Accelerate innovation with world class tech teams our all service.</p>

                                  <div className='mx-auto flex gap-2 my-10 '>
                                        <div className='w-[30px] h-[2px] bg-[#F57C00]  rounded-full'></div>
                                        <div className='w-full h-[2px] bg-zinc-200 rounded-full'></div>
                                    </div>

                                    <ul className='my-10 space-y-3'>
                                            <li className='font-sora text-[15px] lg:text-base text-[#121820] flex items-center gap-3'>
                                              <div className='bg-[#F57C00] w-[7px] h-[7px] lg:w-[9px] lg:h-[9px] rounded-full'></div> Accelerate innovation.
                                            </li>
                                            <li className='font-sora text-[15px] lg:text-base text-[#121820] flex items-center gap-3'>
                                              <div className='bg-[#F57C00] w-[7px] h-[7px] lg:w-[9px] lg:h-[9px] rounded-full'></div> With world-class tech teams.
                                            </li>
                                            <li className='font-sora text-[15px] lg:text-base text-[#121820] flex items-center gap-3'>
                                              <div className='bg-[#F57C00] w-[7px] h-[7px] lg:w-[9px] lg:h-[9px] rounded-full'></div> Our all service offerings to enhance
                                            </li>
                                            <li className='font-sora text-[15px] lg:text-base text-[#121820] flex items-center gap-3'>
                                              <div className='bg-[#F57C00] w-[7px] h-[7px] lg:w-[9px] lg:h-[9px] rounded-full'></div>Simply drag, drop and customize
                                            </li>
                                    </ul>
                                    <Link className='font-syne text-[16px] flex items-center gap-3 text-[#121820] w-fit ' href='/'>Learn More <div className='bg-[#12182033] group-hover:bg-[#F57C00] p-3 rounded-full relative ease-in-out duration-300'><BsArrowRight size={15} color='white' className='ease-in-out duration-300'/></div></Link>
                              </div>
                  </div>

                  <div className="carousel-item border-2 group hover:border-[#F57C00] ease-in-out duration-300 rounded-xl px-5 lg:p-10 py-8 lg:py-16 sm:w-[90%]  w-[85%] md:w-[40%] lg:w-[25.20%]">
                          <div>
                                  <h4 className='font-syne text-[22px] text-[#121820] mb-10'>Web Development</h4>
                                  <p className='font-sora text-[15px] text-[#12182066]'>Accelerate innovation with world class tech teams our all service.</p>

                                  <div className='mx-auto flex gap-2 my-10 '>
                                        <div className='w-[30px] h-[2px] bg-[#F57C00]  rounded-full'></div>
                                        <div className='w-full h-[2px] bg-zinc-200 rounded-full'></div>
                                    </div>

                                    <ul className='my-10 space-y-3'>
                                            <li className='font-sora text-[15px] lg:text-base text-[#121820] flex items-center gap-3'>
                                              <div className='bg-[#F57C00] w-[7px] h-[7px] lg:w-[9px] lg:h-[9px] rounded-full'></div> Accelerate innovation.
                                            </li>
                                            <li className='font-sora text-[15px] lg:text-base text-[#121820] flex items-center gap-3'>
                                              <div className='bg-[#F57C00] w-[7px] h-[7px] lg:w-[9px] lg:h-[9px] rounded-full'></div> With world-class tech teams.
                                            </li>
                                            <li className='font-sora text-[15px] lg:text-base text-[#121820] flex items-center gap-3'>
                                              <div className='bg-[#F57C00] w-[7px] h-[7px] lg:w-[9px] lg:h-[9px] rounded-full'></div> Our all service offerings to enhance
                                            </li>
                                            <li className='font-sora text-[15px] lg:text-base text-[#121820] flex items-center gap-3'>
                                              <div className='bg-[#F57C00] w-[7px] h-[7px] lg:w-[9px] lg:h-[9px] rounded-full'></div>Simply drag, drop and customize
                                            </li>
                                    </ul>
                                    <Link className='font-syne text-[16px] flex items-center gap-3 text-[#121820] w-fit ' href='/'>Learn More <div className='bg-[#12182033] group-hover:bg-[#F57C00] p-3 rounded-full relative ease-in-out duration-300'><BsArrowRight size={15} color='white' className='ease-in-out duration-300'/></div></Link>
                              </div>
                  </div>
              </div>
        
        </div>
    </div>
  )
}

export default Solutions