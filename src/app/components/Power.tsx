import React from 'react'

type Props = {}

const Power = (props: Props) => {
  return (
    <div className='relative bg-[#1218200D]'>
      <div>
          <img
            src='https://itsulu-react.netlify.app/_next/static/media/deco-1.07790e8b.svg'
            className='w-[200px] lg:w-auto top-0   hidden lg:right-40 lg:block absolute'
            alt='Decorative Element'
          />

          <div className='xl:w-[78%]  lg:w-[100%] md:w-[85%] mx-auto py-16 px-5 sm:px-16' >
              <div className='flex flex-rowlg:flex-row items-center justify-between flex-wrap'>
                  <div className='rounded-2xl overflow-hidden w-full  relative lg:w-[40%]'>
                    <img src='/8.jpg' className='h-[500px] w-full object-cover filter' alt='Main Image' />
                    <div className='bg-[#F57C00] w-[130px] lg:w-[150px] h-[130px] lg:h-[150px] absolute bottom-0 left-0 rounded-tr-full opacity-[.9]'></div>
                  </div>

                  <div className='w-full lg:w-[45%]  mt-10 lg:mt-0'>
                      <span className='font-syne text-[14px] lg:text-base text-[#121820] flex items-center gap-3'>
                        <div className='bg-[#F57C00] w-[7px] h-[7px] lg:w-[9px] lg:h-[9px] rounded-full font-[500]'></div> Designed for Developers
                      </span>

                        <h2 className='font-syne text-[29px] lg:text-[42px] text-[#121820] py-5 lg:py-10'>Powerful and Easy</h2>
                        <p className='font-sora text-[15px] lg:text-base text-[#12182066] w-full '>
                          Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose. There are many variations of passages majority.
                        </p>
                        <ul className='mt-5 space-y-3'>
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
                  </div>
              </div>

              <div className='mx-auto flex gap-2 mt-20 '>
                <div className='w-[30px] h-[2px] bg-[#F57C00]  rounded-full'></div>
                <div className='w-full h-[2px] bg-zinc-200 rounded-full'></div>
                <div className='w-[30px] h-[2px] bg-[#F57C00] rounded-full'></div>
              </div>


            <div>
              <div className='flex flex-col md:row-span-2 lg:flex-row lg:flex-row-2 items-center justify-between my-10 space-y-16 lg:space-y-0'>

                  <div>
                      <div className='relative w-fit mx-auto'>
                          <img src='/1.svg' className='mx-auto relative z-10' alt='Main Image' />
                          <div className='bg-[#F57C00] w-[20px] h-[20px] rounded-full absolute -right-1 top-5 z-0'></div>
                      </div>
                      <p className='text-center py-5 font-sora text-xs font-light text-[#12182066]'>Data Security</p>
                      <h5 className='text-center font-syne text-[19px] text-[#121920]'>Quis ipsum suspendisse <br /> ultrices gravida</h5>
                  </div>

                  <div>
                      <div className='relative w-fit mx-auto'>       
                          <img src='/6.svg' className='mx-auto z-10 relative' alt='Main Image' />
                          <div className='bg-[#F57C00] w-[20px] h-[20px] rounded-full absolute -right-1 top-6 z-0'></div>
                      </div>  
                      <p className='text-center py-5 font-sora text-xs font-light text-[#12182066]'>SEO and Optimazation</p>
                      <h5 className='text-center font-syne text-[19px] text-[#121920]'>Quis ipsum suspendisse <br /> ultrices gravida</h5>
                  </div>

                  <div>
                      <div className='relative w-fit mx-auto'>                        
                         <img src='/4.svg' className='mx-auto relative z-10' alt='Main Image' />
                         <div className='bg-[#F57C00] w-[20px] h-[20px] rounded-full absolute -right-1 top-5 z-0'></div>
                      </div>
                      <p className='text-center py-5 font-sora text-xs font-light text-[#12182066]'>Analytics and Research</p>
                      <h5 className='text-center font-syne text-[19px] text-[#121920]'>Quis ipsum suspendisse <br /> ultrices gravida</h5>
                  </div>

                  <div>
                    <div className='relative w-fit mx-auto'>
                        <img src='/2.svg' className='mx-auto relative z-10' alt='Main Image' />
                        <div className='bg-[#F57C00] w-[20px] h-[20px] rounded-full absolute -right-2 top-5 z-0'></div>
                    </div>
                      
                      <p className='text-center py-5 font-sora text-xs font-light text-[#12182066]'>IT Management Services</p>
                      <h5 className='text-center font-syne text-[19px] text-[#121920]'>Quis ipsum suspendisse <br /> ultrices gravida</h5>
                  </div>
              </div>
          </div>
          </div>
      </div>



  </div>
  )
}

export default Power