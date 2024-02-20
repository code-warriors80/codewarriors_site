import React from 'react'

type Props = {}

const Tools = (props: Props) => {
  return (
    <div className='py-20'>
        <ul className='flex flex-row items-center gap-3'>
            <li className='w-[10px] h-[10px] rounded-full bg-[#92519c]'></li>
            <li className='font-syne  text-[15px]'>Our Tools</li>
        </ul>
        <h2 className="text-[32px] lg:text-[42px] font-syne mt-10 mb-20">Our Design <span className="text-[#92519c]">Technology Stack</span></h2>

        <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-10 font-syne text-[16px] font'>
            <div className='border-2 text-center py-10 hover:shadow-2xl ease-in-out duration-300'>
                <h6>Adobe XD</h6>
            </div>
            <div className='border-2 text-center py-10 hover:shadow-2xl ease-in-out duration-300'>
                <h6>Photoshop</h6>
            </div>
            <div className='border-2 text-center py-10 hover:shadow-2xl ease-in-out duration-300'>
                <h6>Figma</h6>
            </div>
            <div className='border-2 text-center py-10 hover:shadow-2xl ease-in-out duration-300'>
                <h6>Sketch</h6>
            </div>
            <div className='border-2 text-center py-10 hover:shadow-2xl ease-in-out duration-300'>
                <h6>Illustrator</h6>
            </div>
            <div className='border-2 text-center py-10 hover:shadow-2xl ease-in-out duration-300'>
                <h6>Kotlin</h6>
            </div>
            <div className='border-2 text-center py-10 hover:shadow-2xl ease-in-out duration-300'>
                <h6>Swift</h6>
            </div>
            <div className='border-2 text-center py-10 hover:shadow-2xl ease-in-out duration-300'>
                <h6>Illustrator</h6>
            </div>
            <div className='border-2 text-center py-10 hover:shadow-2xl ease-in-out duration-300'>
                <h6>PHP</h6>
            </div>
            <div className='border-2 text-center py-10 hover:shadow-2xl ease-in-out duration-300'>
                <h6>MariaDB</h6>
            </div>
            <div className='border-2 text-center py-10 hover:shadow-2xl ease-in-out duration-300'>
                <h6>AWS</h6>
            </div>
            <div className='border-2 text-center py-10 hover:shadow-2xl ease-in-out duration-300'>
                <h6>React</h6>
            </div>
        </div>
    </div>
  )
}

export default Tools