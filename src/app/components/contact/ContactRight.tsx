import Link from 'next/link'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

type Props = {}

const ContactRight = (props: Props) => {
  return (
    <div className='lg:w-[25.50%] py-10 px-10 lg:px-0 mt-20'>
        <div>
            <div className='flex items-center gap-5'>
                <div className='w-[10px] h-[10px] rounded-full bg-[#6c4f98]'></div>
                <h5 className='font-syne text-[18px] text-[#121820]'>Support Request</h5>
            </div>
            <p className='py-7 font-sora text-[15px] text-[#12182066]'>
                Our experts are ready to answer your questions.
            </p>
            <Link href='' className='flex items-center gap-5  font-syne text-[14px]'>
                Support Now
                <div className='bg-[#6c4f98] p-2 rounded-full w-fit'><BsArrowRight size={15} color='white'/></div>
            </Link>
        </div>
        <div className='mx-auto flex gap-2  my-10'>
                <div className='w-[30px] h-[2px] bg-[#6c4f98]  rounded-full'></div>
                <div className='w-full h-[2px] bg-zinc-200 rounded-full'></div>
                <div className='w-[30px] h-[2px] bg-[#6c4f98]  rounded-full'></div>
        </div>
        <div>
            <div className='relative w-fit mb-10'>
                <img src='/27.svg' className='relative z-10' alt='Main Image' />
                <div className='bg-[#6c4f98] w-[20px] h-[20px] rounded-full absolute -right-1 top-6 z-0'></div>
            </div>
            <div className='flex items-center gap-5'>
                <div className='w-[10px] h-[10px] rounded-full bg-[#6c4f98]'></div>
                <h5 className='font-syne text-[18px] text-[#121820]'>Need Help?</h5>
            </div>
            <p className='py-7 font-sora text-[15px] text-[#12182066]'>
                For technical questions or billing questions, please contact Customer Care.
            </p>
        </div>
        <div>
            <div className='relative w-fit mb-10'>
                <img src='/9.svg' className='relative z-10' alt='Main Image' />
                <div className='bg-[#6c4f98] w-[20px] h-[20px] rounded-full absolute -right-1 top-6 z-0'></div>
            </div>
            <div className='flex items-center gap-5'>
                <div className='w-[10px] h-[10px] rounded-full bg-[#6c4f98]'></div>
                <h5 className='font-syne text-[18px] text-[#121820]'>Needs More Info?</h5>
            </div>
            <p className='py-7 font-sora text-[15px] text-[#12182066]'>
                For technical questions or billing questions, please contact Customer Care.
            </p>
        </div>

        <div className='mx-auto flex gap-2  my-10'>
                <div className='w-[30px] h-[2px] bg-[#6c4f98]  rounded-full'></div>
                <div className='w-full h-[2px] bg-zinc-200 rounded-full'></div>
                <div className='w-[30px] h-[2px] bg-[#6c4f98]  rounded-full'></div>
        </div>
        <Link href='' className='flex items-center gap-5  font-syne text-[14px] mb-10'>
                Legality Guide
                <div className='bg-[#6c4f98] p-2 rounded-full w-fit'><BsArrowRight size={15} color='white'/></div>
        </Link>
        <Link href='' className='flex items-center gap-5  font-syne text-[14px]'>
                Security Center
                <div className='bg-[#6c4f98] p-2 rounded-full w-fit'><BsArrowRight size={15} color='white'/></div>
        </Link>
    </div>
  )
}

export default ContactRight