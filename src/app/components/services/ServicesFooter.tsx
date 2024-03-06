import Image from 'next/image';
import React from 'react';

interface WorksProps {
    image: string;
    work: string;
}

const Works: React.FC<WorksProps> = ({image, work}) => (
    <li className='w-fit font-sora text-[15px] flex gap-5 items-center'>
        <div className='relative w-fit'>
            <Image width={40} height={40} src={image} className='relative z-10 bg-white p-3 rounded-full' alt='Main Image' />
            <div className='bg-[#92519c] w-[15px] h-[15px] rounded-full absolute -right-1 top-6 z-20'></div>
        </div>
        {work}
    </li>
)

const ServicesFooter = () => {
  return (
    <div className='w-full relative  bg-[rgb(18,24,32)]'>
      <div className="mx-auto p-4 py-6 lg:py-8">
        <Image width={500} height={500} alt='' src='https://itsulu-react.netlify.app/_next/static/media/deco-2.8cba2eb2.svg' className='w-[200px] hidden lg:block left-40 absolute '/>
        <div className="xl:w-[75%]  lg:w-[100%] md:w-[90%] mx-auto py-16 px-5 sm:px-16 md:px-0">
            <div className="mx-auto lg:px-8">
                <div className="mx-auto lg:text-center mb-10 space-y-10">
                    <h2 className="font-sora text-[15px] text-white">Always The Best</h2>
                    <p className="font-syne text-[32px] lg:text-[42px]  text-white ">
                        Types Of <span className='text-[#92519c]'>SaaS Applications</span> We Deliver
                    </p>
                    <p className="text-[15px] font-sora text-[#FFFFFF80]">
                        This applications are typically used for data analysis, 
                        statistical modeling, data visualization, <br/>
                        and reporting in various industries such as healthcare, education, 
                        finance, retail, and telecommunications.
                    </p>
                </div>

                <div className='my-20'>
                    <ul className='grid md:grid-cols-2 lg:grid-cols-4 gap-y-20 text-white mx-auto'>
                        <Works image={'w1.svg'} work={'CRMs Platforms'}/>
                        <Works image={'w2.svg'} work={'ERPs Platforms'}/>
                        <Works image={'w3.svg'} work={'Marketing Software'}/>
                        <Works image={'w4.svg'} work={'Project Management Systems'}/>
                        <Works image={'w5.svg'} work={'Accounting Systems'}/>
                        <Works image={'w6.svg'} work={'Document Auto. Solutions'}/>
                        <Works image={'w7.svg'} work={'Cybersecurity Platforms'}/>
                        <Works image={'w8.svg'} work={'HR/HRM Software'}/>
                    </ul>
                </div>

                <div className='py-10 mx-auto w-fit'>
                    <a href="/contact" className="text-[16px] px-10 lg:px-20 py-5 rounded-full font-sora border-2 border-[#92519c] font text-white"><span>Talk To Our Saas Experts</span></a>
                </div>


            </div>
        </div>

      </div>

    </div>
  )
}

export default ServicesFooter;
