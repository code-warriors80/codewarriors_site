import React from 'react';

const ServicesFooter = () => {
  return (
    <div className='w-full relative  bg-[#121820]'>
      <img src='/map.png' className='absolute w-full h-full px-8 py-8  top-0 left-0 object-cover opacity-10 z-0'/>
      <div className="mx-auto max-w-screen-xl p-4 py-6 lg:py-8"></div>
      <div className="mx-auto max-w-screen-xl p-4 py-6 lg:py-8">
        <img src='https://itsulu-react.netlify.app/_next/static/media/deco-2.8cba2eb2.svg' className='w-[200px] hidden lg:block left-auto absolute '/>
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center mb-10">
                    <h2 className="text-base font-semibold font-syne leading-7 text-white">Always The Best</h2>
                    <p className="mt-2 text-3xl font-bold font-syne tracking-tight text-white sm:text-4xl">
                        Types Of <span className='text-[#92519c]'>SaaS Applications</span> We Deliver
                    </p>
                    <p className="mt-6 text-lg leading-8 font-syne text-gray-400">
                        This applications are typically used for data analysis, 
                        statistical modeling, data visualization, 
                        and reporting in various industries such as healthcare, education, 
                        finance, retail, and telecommunications.
                    </p>
                </div>

                <div className=" lg:grid mt-8 lg:grid-cols-3 mx-auto mt-10 justify-center align-middle gap-4">
                    <div className='flex'>
                        <h1 className='text-white text-2xl font-bold font-syne'>Hospital Billing Systems</h1>
                    </div>
                    <div>
                        <h1 className='text-white text-2xl font-bold font-syne'>School Management Systems</h1>
                    </div>
                    <div>
                        <h1 className='text-white text-2xl font-bold font-syne'>Eventory Management Systems</h1>
                    </div>
                </div>
            </div>
        </div>
      </div>

    </div>
  )
}

export default ServicesFooter;
