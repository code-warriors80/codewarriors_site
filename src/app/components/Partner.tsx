import React from 'react'

type Props = {}

const Partner = (props: Props) => {
  return (
    <div className='hidden lg:block'>
        <div className='xl:w-[75%]  lg:w-[100%] md:w-[90%] mx-auto py-12 px-5 sm:px-16 md:px-0'>
            <div className='flex gap-10'>
                <img src='bluefox.png' alt='' className='w-[150px] rounded-full'/>
            </div>

            <div className='mx-auto flex gap-2  mt-20'>
                <div className='w-[30px] h-[2px] bg-[#92519c]  rounded-full'></div>
                <div className='w-full h-[2px] bg-zinc-200 rounded-full'></div>
                <div className='w-[30px] h-[2px] bg-[#92519c]  rounded-full'></div>
            </div>
        </div>
    </div>
  )
}

export default Partner