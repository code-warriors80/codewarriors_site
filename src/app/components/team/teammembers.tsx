import Link from 'next/link'
import React from 'react'

type Props = {}

const Teammembers = (props: Props) => {
  return (
    <div>
        <h3 className="text-center text-[26px] font-syne py-28">It is a long established fact that a <span className="text-[#92519c]">reader will be <br/> distracted</span> by the readable content.</h3>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-32'>
          <Link href='' className='text-center group relative h-fit ease-in-out duration-200 tran_filter'>
            <img src='team1.jpg' alt='team' className='rounded-full mx-auto'/>
            <h4 className="text-[22px] font-syne my-5">Andrew Kazantzis</h4>
            <p className="text-[15px] font-sora text-[#12182066] group-hover:text-[#92519c] ease-in-out duration-200">CEO ITSulu</p>
            <div className=' absolute top-0 left-0 w-full h-full bottom-2'>
              <div className='h-[150px] w-[150px] bg-[#92519c] absolute bottom-20 right-5 rounded-full ease-in-out invisible  duration-300 group-hover:visible group-hover:translate-x-10'></div>
            </div>
          </Link>

          <Link href='' className='text-center  group relative h-fit tran_filter'>
            <img src='team2.jpg' alt='team' className='rounded-full mx-auto'/>
            <h4 className="text-[22px] font-syne my-5">Jane Meldrum</h4>
            <p className="text-[15px] font-sora text-[#12182066] group-hover:text-[#92519c] ease-in-out duration-200">Designer</p>
            <div className=' absolute top-0 left-0 w-full h-full bottom-2'>
              <div className='h-[150px] w-[150px] bg-[#92519c] absolute bottom-20 right-5 rounded-full ease-in-out invisible  duration-300 group-hover:visible group-hover:translate-x-10'></div>
            </div>
          </Link>

          <Link href='' className='text-center group relative h-fit tran_filter'>
            <img src='team3.jpg' alt='team' className='rounded-full mx-auto'/>
            <h4 className="text-[22px] font-syne my-5">Roy Ellawala</h4>
            <p className="text-[15px] font-sora text-[#12182066] group-hover:text-[#92519c] ease-in-out duration-200">App Developer</p>
            <div className=' absolute top-0 left-0 w-full h-full bottom-2'>
              <div className='h-[150px] w-[150px] bg-[#92519c] absolute bottom-20 right-5 rounded-full ease-in-out invisible  duration-300 group-hover:visible group-hover:translate-x-10'></div>
            </div>
          </Link>

          <Link href='' className='text-center group relative h-fit tran_filter'>
            <img src='team4.jpg' alt='team' className='rounded-full mx-auto'/>
            <h4 className="text-[22px] font-syne my-5">Jane Meldrum</h4>
            <p className="text-[15px] font-sora text-[#12182066] group-hover:text-[#92519c] ease-in-out duration-200">CEO ITSulu</p>
            <div className=' absolute top-0 left-0 w-full h-full bottom-2'>
              <div className='h-[150px] w-[150px] bg-[#92519c] absolute bottom-20 right-5 rounded-full ease-in-out invisible  duration-300 group-hover:visible group-hover:translate-x-10'></div>
            </div>
          </Link>

          <Link href='' className='text-center group relative h-fit tran_filter'>
            <img src='team5.jpg' alt='team' className='rounded-full mx-auto'/>
            <h4 className="text-[22px] font-syne my-5">Jane Meldrum</h4>
            <p className="text-[15px] font-sora text-[#12182066] group-hover:text-[#92519c] ease-in-out duration-200">CEO ITSulu</p>
            <div className=' absolute top-0 left-0 w-full h-full bottom-2'>
              <div className='h-[150px] w-[150px] bg-[#92519c] absolute bottom-20 right-5 rounded-full ease-in-out invisible  duration-300 group-hover:visible group-hover:translate-x-10'></div>
            </div>
          </Link>

          <Link href='' className='text-center group relative h-fit tran_filter'>
            <img src='team6.jpg' alt='team' className='rounded-full mx-auto'/>
            <h4 className="text-[22px] font-syne my-5">Jane Meldrum</h4>
            <p className="text-[15px] font-sora text-[#12182066] group-hover:text-[#92519c] ease-in-out duration-200">CEO ITSulu</p>
            <div className=' absolute top-0 left-0 w-full h-full bottom-2'>
              <div className='h-[150px] w-[150px] bg-[#92519c] absolute bottom-20 right-5 rounded-full ease-in-out invisible duration-300 group-hover:visible group-hover:translate-x-10'></div>
            </div>
          </Link>
        </div>
    </div>
  )
}

export default Teammembers