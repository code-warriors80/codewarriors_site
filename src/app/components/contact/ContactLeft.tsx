import React from 'react'

type Props = {}

const ContactLeft = (props: Props) => {
  return (
    <div className='lg:w-[70.50%] py-10 px-10'>
        <div className='py-10'>            
            <h4 className="text-[22px] font-syne my-10"><span className="text-[#6c4f98]">01.</span> Tell Us About Yourself</h4>
            <div className='grid lg:grid-cols-2 gap-10 w-full'>
                <div className='border-b-2 brder-gray-200'>
                    <label className='block font-syne text-[16px]'>First Name</label>
                    <input type='text' placeholder='John' className='w-full bg-transparent py-5 font-sora font-sm outline-none'/>
                </div>

                <div className='border-b-2 brder-gray-200'>
                    <label className='block font-syne text-[16px]'>Last Name</label>
                    <input type='text' placeholder='Jones' className='w-full bg-transparent py-5 font-sora font-sm outline-none'/>
                </div>

                <div className='border-b-2 brder-gray-200'>
                    <label className='block font-syne text-[16px]'>Email Address</label>
                    <input type='text' placeholder='doe@mydomain.com' className='w-full bg-transparent py-5 font-sora font-sm outline-none'/>
                </div>

                <div className='border-b-2 brder-gray-200'>
                    <label className='block font-syne text-[16px]'>Phone</label>
                    <input type='text' placeholder='Enter your phone number' className='w-full bg-transparent py-5 font-sora font-sm outline-none'/>
                </div>

                <div className='border-b-2 brder-gray-200'>
                    <label className='block font-syne text-[16px]'>Company</label>
                    <input type='text' placeholder='Your Company name' className='w-full bg-transparent py-5 font-sora font-sm outline-none'/>
                </div>

                <div className='border-b-2 brder-gray-200'>
                    <label className='block font-syne text-[16px]'>Role</label>
                    <input type='text' placeholder='Your Role' className='w-full bg-transparent py-5 font-sora font-sm outline-none'/>
                </div>
            </div>
        </div>

        <div>
            <h4 className="text-[22px] font-syne my-10"><span className="text-[#6c4f98]">02.</span> What Can We Help You With?</h4>
            <div className='grid lg:grid-cols-2 gap-10 w-full'>
                <div className='border-b-2 brder-gray-200'>
                    <label className='block font-syne text-[16px]'>Product Design</label>
                    <input type='text' placeholder='Web Designer' className='w-full bg-transparent py-5 font-sora font-sm outline-none'/>
                </div>
            </div>
        </div>

        <div className='space-y-5'>
            <h4 className="text-[22px] font-syne my-10"><span className="text-[#6c4f98]">03.</span> Tell Us About Your Project</h4>
            <div>
                <div className='w-full border-b-2 brder-gray-200'>
                    <label className='block font-syne text-[16px] mb-5'>Project Description</label>
                    <textarea placeholder='Your Message' className='w-full h-[250px] font-sora font-sm outline-none'/>
                </div>

                <div className='w-[50%] border-b-2 brder-gray-200 mt-10'>
                    <label className='block font-syne text-[16px]'>Project Budget</label>
                    <input type='number' value='5' className='w-full bg-transparent py-5 font-sora font-sm outline-none'/>
                </div>
            </div>
        </div>
        <button className='w-full border-2 border-[#6c4f98] my-10 p-5 rounded-full font-sora text-[16px]'>Submit Now</button>
    </div>
  )
}

export default ContactLeft