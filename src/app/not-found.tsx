import React from 'react'
import Header from './coming-soon/header'
import MaxWidthWrapper from './components/MaxWidthWrapper'


function notfound() {
    return (
        <div>
            <div className='h-screen bg-[#121820] flex items-center'>
                <MaxWidthWrapper>
                    <div className=' flex items-center gap-5 text-white text-center '>
                        <div className=" items-center  block">
                            <h5 className="font-semibold">Error</h5>
                            <h1 className=" text-[100px] font-bold">404</h1>
                            <h5 className="font-semibold block">Page <span className="text-[#f57c00]">not</span> found</h5>
                        </div>
                        <div className="flex flex-col ">
                            <div className="mt">
                                <p className=" text-gray-300 text-sm mb-4 block">The page you are looking for does not exist; <br />it may have been moved or removed altogether.</p>
                                <a className="border-[2px] border-[#f57c00] text-white px-10 py-3 rounded-full  inline-flex" href="/home-2">
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