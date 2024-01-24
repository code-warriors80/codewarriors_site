import React from 'react'
import Header from './coming-soon/header'
import MaxWidthWrapper from './components/MaxWidthWrapper'


function notfound() {
    return (
        <div className="  font-sora block">
            <img src='/map.png' className='w-full h-screen absolute z-0'/>
            <div className='h-screen bg-[#121820] flex items-center relative z-10'>
                <MaxWidthWrapper className=''>
                    <div className=' grid grid-cols-1 md:grid-cols-3 gap-5 text-white text-center '>
                        <div className=" items-center  block">
                            <h5 className="font-semibold text-[18px] font-syne">Error</h5>
                            <h1 className=" text-[100px] font-sora">404</h1>
                            <h5 className="text-[18px] font-syne block">Page <span className="text-[#f57c00]">not</span> found</h5>
                        </div>
                        <div className="flex flex-col ">
                            <div className="mt flex flex-col   items-center md:items-start">
                                <p className=" text-[#FFFFFF80] text-[15px] mb-4 block text-center md:text-start">The page you are looking for does not exist; <br />it may have been moved or removed altogether.</p>
                                <a className="border-[2px] border-[#f57c00] text-white px-10 py-3 rounded-full  inline-flex" href="/">
                                    <span>Back to homepage</span>
                                </a>
                            </div>
                        </div>
                        <img src='https://itsulu-react.netlify.app/_next/static/media/deco-2.8cba2eb2.svg' className='w-[220px]'/>
                    </div>
                </MaxWidthWrapper>
            </div>

        </div>
    )
}

export default notfound