import Image from 'next/image'
import React from 'react'

type Props = {}

const Service = ({image, index, title, description}) => {
    return (
        <div className=''>
                <div className='mx-auto flex gap-2 '>
                    <div className='w-[30px] h-[2px] bg-[#92519c]  rounded-full'></div>
                    <div className='w-full h-[2px] bg-zinc-200 rounded-full'></div>
                </div>
                        <div className='lg:flex items-start gap-20 lg:px-7 py-10'>
                                <div className='relative'>
                                    <img src={image} className='z-10' alt='Main Image' />
                                    <div className='bg-[#92519c] w-[20px] h-[20px] rounded-full absolute -right-1 top-4 z-0'></div>
                                </div>
                            
                                <div className='w-fit'>
                                    <h5 className='text-[22px] font-syne flex items-center gap-5 mb-5'><span className='text-[#92519c] text-sm'>{index}</span> {title}</h5>
                                    <p className='font-sora lg:text-[15px] text-[#12182066] '>{description}</p>
                                </div>
                        </div>
        </div>
    )
}

const Services = (props: Props) => {
  return (
    <div>
        <div className='xl:w-[75%]  lg:w-[100%] md:w-[90%] mx-auto py-16 px-5 sm:px-16 md:px-0'>
            <h2 className='font-syne text-[29px] lg:text-[42px] text-[#121820] '>How We Can <span className='text-[#92519c]'>Help You</span></h2>

            <div className='lg:flex justify-between'>
                <div className='w-full xl:w-[45%]'>
                    <h4 className='font-syne text-[21px] text-[#121820] py-10 font-bold'>IT Services</h4>
                    <Service image='1.svg' index={'01'} title='Dedicated Team' 
                    description='Empower your projects with our dedicated team of skilled professionals. From developers to project managers, we assemble a tailored team to meet your specific needs. Benefit from a cohesive unit working exclusively on your project, ensuring focused expertise and efficient collaboration.'/>
                    <Service image='2.svg' index={'02'} title='QA and Testing' 
                    description='Quality assurance is at the heart of our services. Our dedicated QA and testing team meticulously assesses every aspect of your software, ensuring it meets the highest standards of functionality, reliability, and performance. Trust us to deliver solutions that exceed expectations.'/>
                    <Service image='3.svg' index={'03'} title='SaaS (Software as a Service)' 
                    description='Elevate your business with our SaaS solutions. We specialize in developing scalable and user-friendly software delivered as a service. Experience the flexibility and efficiency of cloud-based applications designed to enhance your operational processes.'/>
                    <Service image='9.svg' index={'04'} title='Internet of Things' 
                    description='Connect and control your devices seamlessly with our IoT solutions. From smart homes to industrial automation, we enable efficient communication and data exchange between devices. Embrace the future of interconnected systems with our IoT expertise.'/>
                </div>

                <div className='xl:w-[45%]'>
                    <h4 className='font-syne text-[21px] py-10 font-bold'>IT Solutions</h4>
                    <Service image='4.svg' index={'05'} title='Blockchain' 
                    description='Unlock the potential of blockchain technology with our expertise. From decentralized applications (DApps) to smart contracts, we offer comprehensive blockchain solutions. Ensure transparency, security, and efficiency in your transactions and data management.'/>
                    <Service image='5.svg' index={'06'} title='Artificial Intelligence' 
                    description='Transform your business with the power of Artificial Intelligence. Our AI solutions leverage machine learning and deep learning to provide insights, automate processes, and enhance decision-making. Stay ahead in the era of intelligent automation with our cutting-edge AI services.'/>  
                    <Service image='21.svg' index={'07'} title='Software Development' 
                    description='Our software development services bring your ideas to life with diverse technologies and methodologies. From concept to final product, we deliver custom solutions, leveraging our expertise in various languages and frameworks for projects of any scale or complexity.'/>   
                    <Service image='22.svg' index={'08'} title='Andriod & IOS' 
                    description='
                    We specialize in developing user-friendly and innovative mobile apps for Android and iOS. Whether you need a native app or a cross-platform solution, we deliver high-quality applications tailored to your requirements, engaging your audience and driving results.'/>              
                </div>
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

export default Services