import React from 'react'

type Props = {}

const Things = ({image, title, description}) => (
    <div>
        <div className='mx-auto flex gap-2  my-20'>
                        <div className='w-[30px] h-[2px] bg-[#92519c]  rounded-full'></div>
                        <div className='w-full h-[2px] bg-zinc-200 rounded-full'></div>
                        <div className='w-[30px] h-[2px] bg-[#92519c]  rounded-full'></div>
        </div>
        <div className='md:flex items-center justify-between space-y-5'>
            <div className='relative w-fit'>
                    <img src={image} className='relative z-10' alt='Main Image' />
                    <div className='bg-[#92519c] w-[20px] h-[20px] rounded-full absolute -right-1 top-6 z-0'></div>
            </div>
            <h4 className='font-syne text-[22px]'>{title}</h4>
            <p className='md:w-[45.50%] font-sora text-[15px] text-[#12182066]'>{description}</p>
        </div>
    </div>
)

const Discover = (props: Props) => {
  return (
    <div className='py-32 px-10 lg:px-0'>
        <div className='xl:w-[75%]  lg:w-[100%] md:w-[90%] mx-auto'>
                <div>
                    <div className='flex items-center gap-3'>
                        <div className='bg-[#92519c] w-[7px] h-[7px] rounded-full'></div>
                        <span className='font-syne text-[16px]'>Discover Our Company</span>
                    </div>
                    <h2 className='font-syne text-[32px] lg:text-[42px] mt-10'>Why Work With Us</h2>
                </div>

                <Things image='6.svg' title={'Top Expertise'} description={'Et iusto odio dignissim qui blandit praesent luptatum zzril delenit. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.'}/>
                <Things image='10.svg' title={'Quality Management'} description={'Et iusto odio dignissim qui blandit praesent luptatum zzril delenit. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.'}/>
                <Things image='2.svg' title={'Utmost Flexibility'} description={'Et iusto odio dignissim qui blandit praesent luptatum zzril delenit. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.'}/>
                <Things image='4.svg' title={'Agility'} description={'Et iusto odio dignissim qui blandit praesent luptatum zzril delenit. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.'}/>
                <Things image='5.svg' title={'Innovation'} description={'Et iusto odio dignissim qui blandit praesent luptatum zzril delenit. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.'}/>
                
                <div className='mx-auto flex gap-2  my-20'>
                        <div className='w-[30px] h-[2px] bg-[#92519c]  rounded-full'></div>
                        <div className='w-full h-[2px] bg-zinc-200 rounded-full'></div>
                        <div className='w-[30px] h-[2px] bg-[#92519c]  rounded-full'></div>
                </div>
        </div>
    </div>
  )
}

export default Discover