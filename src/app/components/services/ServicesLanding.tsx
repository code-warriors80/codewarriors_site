import React from 'react';

type Props = {}

const Landing = (props: Props) => {
  return (
    <div className='relative w-full mt-28 overflow-hidden mil_db '>
        <img src='/map.png' className='absolute w-full h-full top-0 left-0 object-cover z-0'/>
          <div className='relative z-10 bg-[#1218200D]'>
            <div className='flex items-center justify-between h-[500px]  xl:w-[65%]  lg:w-[100%] md:w-[90%]  mx-auto'>
              <div>
                  <ul className='flex items-center gap-5 font-sora'>
                    <li className='text-[15px]'>Home</li>
                    <li className='w-[10px] h-[10px] rounded-full bg-[#F57C00]'></li>
                    <li className='text-[15px]'>Our Services</li>
                  </ul>
                    <h2 className='font-syne text-[42px] mt-10 uppercase'>SAAS DEVELOPMENT SERVICES</h2>
                </div>
                <img src='https://itsulu-react.netlify.app/_next/static/media/deco-2.8cba2eb2.svg' className='w-[200px] hidden lg:block '/>
            </div>
          </div>
    </div>
  )
}

export default Landing;