import Link from 'next/link'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='relative bg-[#121820]'>
        <img src='/map.png' className='absolute w-full h-full top-0 left-0 object-cover z-0'/>
        <div className='bg-[#121820CC] w-full relative z-10'>
            <div className='relative bg-[#121820CC]'>
                <div className='xl:w-[75%] md:w-[90%] mx-auto py-16 px-5 sm:px-16 md:px-0'>
                <div className='grid lg:grid-cols-3 gap-10 items-center justify-between mx-auto'>
                    <div className="w-full lg:w-[80%] space-y-5">
                        <img src="logo.png" alt="logo" className="w-32" />
                        <p className="text-[15px] font-sora text-[#FFFFFF80]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                    </div>
                    
                    <div className="w-full lg:w-[80%] space-y-5">
                        <h3 className="text-[32px] font-syne text-white">Join The <span className="text-[#92519c]">ITSulu</span> <br/>Experience</h3>
                        <p className="text-[15px] font-sora text-[#FFFFFF80]">Lorem ipsum dolor sit amet, consectetuer<br/> adipiscing elit, sed diam nonummy.</p>
                    </div>

                    <div className="w-full lg:w-[80%]">
                        <form className='space-y-5'>
                            <input className="block w-full text-center py-5 rounded-full font-sora text-[16px] outline-none" type="text" placeholder="Your email address" />
                            <button className="block w-full bg-[#92519c] rounded-full py-5 text-white font-sora text-[16px]"><span>Subscribe Now</span></button>
                        </form>
                    </div>
                </div>

                <div className='mx-auto flex gap-2  mt-20'>
                    <div className='w-[30px] h-[2px] bg-[#92519c]  rounded-full'></div>
                    <div className='w-full h-[2px] bg-zinc-200 rounded-full'></div>
                    <div className='w-[30px] h-[2px] bg-[#92519c]  rounded-full'></div>
                </div>

                <div className='text-white text-center lg:flex items-center justify-between py-10'>
                    <ul className='flex items-center gap-5 font-sora text-[15px]'>
                        <li><Link href={''}>Facebook</Link></li>
                        <li><Link href={''}>Instagram</Link></li>
                        <li><Link href={''}>Twitter</Link></li>
                        <li><Link href={''}>Github</Link></li>
                    </ul>
                    <ul className='flex items-center gap-5 font-sora text-[15px]'>
                        <li><Link href={''}>Terms & Condition</Link></li>
                        <li><Link href={''}>Privacy Policy</Link></li>
                    </ul>
                </div>
                </div>
            </div>
            <div className=' text-white bg-[#121820]'>
                <div className='xl:w-[75%] md:w-[90%] mx-auto flex items-center justify-between py-10 font-sora text-[13px] px-5 lg:px-0'>
                    <p className="">© ITSulu 2023.</p>
                    <p className="mil-text-sm mil-light">All Rights Reserved.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer