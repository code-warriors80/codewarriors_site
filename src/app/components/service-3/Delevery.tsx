import React from 'react'

type Props = {}

const Delevery = (props: Props) => {
  return (
    <div>
        <div className='mx-auto flex gap-2'>
            <div className='w-[30px] h-[2px] bg-[#92519c]  rounded-full'></div>
            <div className='w-full h-[2px] bg-zinc-200 rounded-full'></div>
            <div className='w-[30px] h-[2px] bg-[#92519c]  rounded-full'></div>
        </div>
        <div className='py-36'>
        <h2 className="text-[32px] lg:text-[42px] font-syne mb-20">Delivering <span className="text-[#92519c]">Industry Specific</span> Mobile <br/>App Solutions</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-20'>
            <div className='space-y-5'>
                <div className='relative w-fit'>
                    <img src={'23.svg'} className='relative z-10' alt='Main Image' />
                    <div className='bg-[#92519c] w-[20px] h-[20px] rounded-full  absolute -right-1 top-7 z-0'></div>
                </div>
                <h5 className="text-[18px] font-syne font">eCcommerce</h5>
                <p className='text-[15px] font-sora text-[#12182066]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor facilisis</p>
            </div>

            <div className='space-y-5'>
                <div className='relative w-fit'>
                    <img src={'24.svg'} className='relative z-10' alt='Main Image' />
                    <div className='bg-[#92519c] w-[20px] h-[20px] rounded-full  absolute -right-1 top-7 z-0'></div>
                </div>
                <h5 className="text-[18px] font-syne font">Entertainment</h5>
                <p className='text-[15px] font-sora text-[#12182066]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor facilisis</p>    
            </div>

            <div className='space-y-5'>
                <div className='relative w-fit'>
                    <img src={'20.svg'} className='relative z-10' alt='Main Image' />
                    <div className='bg-[#92519c] w-[20px] h-[20px] rounded-full  absolute -right-1 top-7 z-0'></div>
                </div>
                <h5 className="text-[18px] font-syne font">Enterprise</h5>
                <p className='text-[15px] font-sora text-[#12182066]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor facilisis</p>
            </div>
        </div>
        </div>
        <div className='mx-auto flex gap-2'>
            <div className='w-[30px] h-[2px] bg-[#92519c]  rounded-full'></div>
            <div className='w-full h-[2px] bg-zinc-200 rounded-full'></div>
            <div className='w-[30px] h-[2px] bg-[#92519c]  rounded-full'></div>
        </div>
    </div>
  )
}

export default Delevery