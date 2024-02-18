import React from 'react'

type Props = {}

const Values = (props: Props) => {
  return (
    <div className='py-10'>
        <div className='mx-auto flex gap-2  my-20'>
                <div className='w-[30px] h-[2px] bg-[#92519c]  rounded-full'></div>
                <div className='w-full h-[2px] bg-zinc-200 rounded-full'></div>
                <div className='w-[30px] h-[2px] bg-[#92519c]  rounded-full'></div>
        </div>

        <div className='lg:flex justify-between space-y-5'>
            <h2 className='text-[32px] lg:text-[42px] font-syne'>Values that <span className="text-[#92519c]">Lead Us</span></h2>
            <p className='text-[15px] text-[#12182066] font-sora lg:w-[35%]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 mt-20 gap-16'>
            <div className='text-center space-y-5'>
                <div className='relative w-fit mx-auto'>
                        <img src='5.svg' className='relative z-10' alt='Main Image' />
                        <div className='bg-[#92519c] w-[20px] h-[20px] rounded-full absolute -right-1 top-6 z-0'></div>
                </div>
                <h5 className="text-[18px] font-syne"><span className="text-[#92519c]">01.</span>&nbsp; Productivity</h5>
                <p className="text-[15px] font-sora text-[#12182066]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore magna aliqua.</p>
            </div>

            <div className='text-center space-y-5'>
                <div className='relative w-fit mx-auto'>
                        <img src='5.svg' className='relative z-10' alt='Main Image' />
                        <div className='bg-[#92519c] w-[20px] h-[20px] rounded-full absolute -right-1 top-6 z-0'></div>
                </div>
                <h5 className="text-[18px] font-syne"><span className="text-[#92519c]">02.</span>&nbsp;  Transparency</h5>
                <p className="text-[15px] font-sora text-[#12182066]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore magna aliqua.</p>
            </div>

            <div className='text-center space-y-5'>
                <div className='relative w-fit mx-auto'>
                        <img src='5.svg' className='relative z-10' alt='Main Image' />
                        <div className='bg-[#92519c] w-[20px] h-[20px] rounded-full absolute -right-1 top-6 z-0'></div>
                </div>
                <h5 className="text-[18px] font-syne"><span className="text-[#92519c]">03.</span>&nbsp; Personality</h5>
                <p className="text-[15px] font-sora text-[#12182066]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore magna aliqua.</p>
            </div>

            <div className='text-center space-y-5'>
                <div className='relative w-fit mx-auto'>
                        <img src='5.svg' className='relative z-10' alt='Main Image' />
                        <div className='bg-[#92519c] w-[20px] h-[20px] rounded-full absolute -right-1 top-6 z-0'></div>
                </div>
                <h5 className="text-[18px] font-syne"><span className="text-[#92519c]">04.</span>&nbsp; Volition</h5>
                <p className="text-[15px] font-sora text-[#12182066]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore magna aliqua.</p>
            </div>
        </div>
    </div>
  )
}

export default Values