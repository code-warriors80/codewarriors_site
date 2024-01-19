import React from 'react'

type Props = {}

const BlogAbout = (props: Props) => {
  return (
    <div>
        <div className='flex items-center gap-5'>
            <div className='w-[10px] h-[10px] rounded-full bg-[#F57C00]'></div>
            <h5 className='font-syne text-[18px] text-[#121820]'>About ITSulu</h5>
        </div>
        <p className='text-[15px] text-[#12182066] py-10 font-sora'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut labore ipsam in veritatis molestiae.</p>
        <div className='flex items-center gap-5'>
            <img src='/17.jpg' className='w-16 h-16 rounded-full tran_filter'/>
            <div>
                <h4 className='text-[22px] text-[#F57C00]'>Jane Meldrum</h4>
                <p className='font-sora text-[13px] text-[#12182066]'>CEO & Co-Founder</p>
            </div>
        </div>
    </div>
  )
}

export default BlogAbout