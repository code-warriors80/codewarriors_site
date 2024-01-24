import React from 'react'
import Header from './coming-soon/header'
import MaxWidthWrapper from './components/MaxWidthWrapper'


function notfound() {
    return (
        <div className="  font-sora block">
            <div className='h-screen bg-[#121820] flex items-center'>
                <MaxWidthWrapper className=''>
                    <div className=' grid grid-cols-1 md:grid-cols-3 gap-5 text-white text-center '>
                        <div className=" items-center  block">
                            <h5 className="font-semibold">Error</h5>
                            <h1 className=" text-[100px] font-bold">404</h1>
                            <h5 className="font-semibold block">Page <span className="text-[#f57c00]">not</span> found</h5>
                        </div>
                        <div className="flex flex-col ">
                            <div className="mt flex flex-col   items-center md:items-start">
                                <p className=" text-gray-300 text-sm mb-4 block text-center md:text-start">The page you are looking for does not exist; <br />it may have been moved or removed altogether.</p>
                                <a className="border-[2px] border-[#f57c00] text-white px-10 py-3 rounded-full  inline-flex" href="/">
                                    <span>Back to homepage</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </div>

        </div>
    )
}

export default notfound