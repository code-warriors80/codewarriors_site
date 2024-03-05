import Image from 'next/image'
import React from 'react'

type Props = {}

const ContactLanding = (props: Props) => {
  return (
    <div className='relative w-full mt-0 overflow-hidden mil_db '>
        <Image alt='' src='/map.png' className='absolute w-full h-full top-0 left-0 object-cover z-0'/>
      <div className='relative z-10 bg-[#1218200D] px-10 lg:px-0'>
        <div className='flex items-center justify-between h-[500px]  xl:w-[75%]  lg:w-[100%] md:w-[90%]  mx-auto'>
          <div>
              <ul className='flex items-center gap-5 font-sora font'>
                <li className='text-[15px]'><a href='/'>Home</a></li>
                <li className='w-[10px] h-[10px] rounded-full bg-[#6c4f98]'></li>
                <li className='text-[15px]'>Contact Us</li>
              </ul>
                <h2 className='font-syne text-[32px] lg:text-[42px] mt-10 uppercase'>LET’S DISCUSS YOUR OPPORTUNITY</h2>
            </div>
            <Image alt='' src='https://itsulu-react.netlify.app/_next/static/media/deco-2.8cba2eb2.svg' className='w-[200px] hidden lg:block '/>
        </div>
      </div>
    </div>
  )
}

export default ContactLanding