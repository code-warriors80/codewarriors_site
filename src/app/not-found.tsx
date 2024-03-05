import React from 'react'
import Header from './coming-soon/header'
import MaxWidthWrapper from './components/MaxWidthWrapper'
import Link from 'next/link'
import Image from 'next/image'


function notfound() {
    return (
        <div className="  font-sora block">
            <Image alt='' width={500} height={500} src='30.jpg' className='w-full h-screen absolute z-0'/>
            <div className='h-screen bg-[#121820CC] flex items-center relative z-10'>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 items-center  xl:w-[75%] md:w-[90%] mx-auto space-y-5'>
                    <div className='text-white text-center space-y-5'>
                        <span className="font-semibold text-[18px] font-syne">Error</span>
                        <h1 className="text-[100px] font-sora text-white font-bold">404</h1>
                        <p>Page <span className="text-[#92519c]">not</span> found</p>
                    </div>
                    <div className='space-y-5 text-center'>
                        <p className=" text-[#FFFFFF80] text-[15px] pb-5">The page you are looking for does not exist; <br />it may have been moved or removed altogether.</p>
                        <div>
                            <Link href="/" className='border-[2px] border-[#92519c] text-white px-10 py-3 rounded-full'>Back to homepage</Link>
                        </div>
                    </div>
                    <div className=''>
                        <Image alt='' width={500} height={500} src='https://itsulu-react.netlify.app/_next/static/media/deco-2.8cba2eb2.svg' className='w-[220px] hidden md:block mx-auto'/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default notfound