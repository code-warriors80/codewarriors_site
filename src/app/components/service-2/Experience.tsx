import Image from 'next/image';
import React from 'react'

const ServiceList = [
    {
        id: 1,
        image: "1.svg",
        title: "User Research",
        description: "We start by understanding your users through in-depth research, including interviews, surveys, and data analysis, to uncover insights that inform our design decisions."
    },
    {
        id: 2,
        image: "15.svg",
        title: "Prototyping",
        description: "Using industry-standard tools, we create interactive prototypes that allow you to visualize and test the user experience before development begins."
    },
    {
        id: 3,
        image: "4.svg",
        title: "UX Design",
        description: "Our UX designers focus on creating seamless user journeys, information architecture, and content strategy to ensure a cohesive and intuitive user experience."
    },
    {
        id: 4,
        image: "16.svg",
        title: "UI Design",
        description: "Our UI designers bring prototypes to life with visually appealing interfaces that align with your brand identity and enhance usability."
    },
    {
        id: 5,
        image: "19i.svg",
        title: "UI/UX Audit and Consulting",
        description: "We evaluate existing designs against best practices and industry standards, providing actionable insights and recommendations for improvement."
    },
    {
        id: 6,
        image: "10.svg",
        title: "Usability Testing",
        description: "Through user testing sessions, we gather feedback on the usability of your product, allowing us to make data-driven design decisions and iterate for optimal results."
    },
]

interface ServicesProps {
    image: string;
    title: string;
    description: string;
}

const Services: React.FC<ServicesProps> = ({image, title, description}) => (
    <div className='space-y-7'>
        <div className='relative w-fit'>
            <Image width={40} height={40} src={image} className='relative z-10' alt='Main Image' />
            <div className='bg-[#92519c] w-[20px] h-[20px] rounded-full  absolute -right-1 top-7 z-0'></div>
        </div>
        <h4 className="font-syne text-[22px]">{title}</h4>
        <p className="text-[15px] font-sora text-[#12182066]">
            {description}
        </p>
    </div>
)

const Experience = () => {
  return (
    <div className='py-20'>
        <ul className='flex flex-row items-center gap-3'>
            <li className='w-[10px] h-[10px] rounded-full bg-[#92519c]'></li>
            <li className='font-syne  text-[15px]'>High Experience</li>
        </ul>
        <h2 className="text-[32px] lg:text-[42px] font-syne mt-10 mb-20">UI/UX <span className="text-[#92519c]">Design Services</span> That Set Us Apart</h2>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-16 gap-y-20'>
            {ServiceList.map((services, index) => (
                <Services key={index} image={services.image} title={services.title} description={services.description}/>
            ))}

        </div>
    </div>
  )
}

export default Experience