import Link from 'next/link'
import React from 'react'
// import { BsArrowLeft, BsArrowRight, BsStar, BsStarFill } from 'react-icons/bs'

interface SolutionProps {
    id: string; // Assuming image is a string. Adjust the type as needed.
    title: string;
    description: string;
}


const Solution: React.FC<SolutionProps> = ({id, title, description}) => (
    <div className=' '>
        <div className='flex items-center gap-5 py-5'>
            <div className='relative w-fit'>
            <p className=' font-syne text-4xl'>{id}</p>
                <div className='bg-[#92519c] w-[15px] h-[15px] rounded-full absolute -right-1 top-4 z-0'></div>
            </div>
        </div>
        <h4 className='font-syne text-[22px] text-[#121820] mb-2'>{title}</h4>
        <p className='font-sora text-[15px] text-[#12182066]'>{description}</p>
    </div>
)

const Learnmore = () => {
  return (
    <div className='relative py-10'>
        <div className='xl:w-[75%]  lg:w-[100%] md:w-[90%] mx-auto py-16 px-5 sm:px-16 md:px-0 '>

        <div className='lg:flex items-center justify-between py-10 lg:py-20 space-y-10 lg:space-y-0 '>
            <p className='text-[22px] font-syne lg:w-[45.50%]'>Connect with one of our <span className='text-[#92519c]'>experienced experts</span> who can provide personalized guidance and insights tailored to your needs.</p>
            <div className='lg:flex items-center lg:justify-center gap-10 lg:gap-20 lg:w-[500px]'>
                <button className="font-sora text-sm lg:text-lg border-2 border-[#92519c] text-[#121820]  px-5 lg:px-10 py-4 rounded-full font ease-in-out duration-300 hover:border-[3px]">Talk To an Expert</button>
            </div>
        </div>

            <div className='mx-auto flex gap-2  mt-20 mb-36'>
                <div className='w-[30px] h-[2px] bg-[#92519c]  rounded-full'></div>
                <div className='w-full h-[2px] bg-zinc-200 rounded-full'></div>
                <div className='w-[30px] h-[2px] bg-[#92519c]  rounded-full'></div>
            </div>

            <div className='flex mt-16 '>
                <div>
                    <ul className='flex flex-row items-center gap-3'>
                        <li className='w-[10px] h-[10px] rounded-full bg-[#92519c]'></li>
                        <li className='font-syne  text-[15px]'>Services and Solutions</li>
                    </ul>
                    <h2 className=' font-syne text-[32px] lg:text-[42px] mt-5'>Our SaaS Development Services Let You Win Big</h2>
                    <p className="text-[15px] font-sora mt-5">We empower you to achieve greatness, delivering innovative solutions that drive <br/> success and growth. Lets build something incredible together</p>
                </div>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-20 my-20'>
                <Solution id={'01'} title={'SaaS Development Consulting'} description={'Receive tailored guidance to maximize efficiency and scalability in your SaaS journey, ensuring your success in the digital landscape.'}/>
                <Solution id={'02'} title={'SaaS Design and Prototyping'} description={'Transform your ideas into reality with user-centric interfaces that elevate user experiences, setting your SaaS product apart.'}/>
                <Solution id={'03'} title={'End-to-End SaaS Development'} description={'From concept to product launch, our comprehensive solutions exceed expectations, delivering value and innovation at every stage.'}/>
                <Solution id={'04'} title={'Migration to SaaS'} description={'Seamlessly transition your data, applications, and processes to the cloud, ensuring a smooth and efficient migration process.'}/>
                <Solution id={'05'} title={'Third Party Integrations'} description={'Enhance the functionality of your SaaS product with seamless integration of third-party services, enriching user experiences and expanding capabilities.'}/>
                <Solution id={'06'} title={'SaaS Support and Maintenance'} description={'Ensure the continuous and optimal performance of your SaaS product with reliable support and maintenance services, minimizing downtime and maximizing productivity.'}/>
            </div>
            <Link href='' className='border-2  border-[#92519c] px-10 lg:px-20 py-5 font-sora text-[16px] rounded-full font ease-in-out duration-300 hover:border-[3px]'>Tell us about your project</Link>

            <div className='mx-auto flex gap-2 mt-36'>
                <div className='w-[30px] h-[2px] bg-[#92519c]  rounded-full'></div>
                <div className='w-full h-[2px] bg-zinc-200 rounded-full'></div>
                <div className='w-[30px] h-[2px] bg-[#92519c]  rounded-full'></div>
            </div>
        </div>
    </div>
  )
}

export default Learnmore;
