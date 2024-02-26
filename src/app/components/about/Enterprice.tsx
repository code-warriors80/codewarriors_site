import React from 'react'

type Props = {}

const value = [
    {
        id: 1,
        title: 'We Are',
        description: 'A cohesive collective driven by a shared passion for excellence. Our diverse expertise combines to achieve remarkable results through collaboration and mutual respect.'
    },
    {
        id: 2,
        title: 'We Deep Dive',
        description: 'Meticulously analyzing projects, we delve into details to deliver innovative, future-proof solutions, ensuring effectiveness and uniqueness.'
    },
    {
        id: 3,
        title: 'We Take',
        description: 'Embodying ownership and accountability, we embrace challenges as opportunities for growth, leading with responsibility and resilience.'
    },
    {
        id: 4,
        title: 'We Value',
        description: 'Upholding integrity, honesty, diversity, and collaboration, we foster an inclusive environment where everyone feels valued and respected'
    },
    {
        id: 5,
        title: 'We Believe',
        description: 'In the power of teamwork, innovation, and continuous improvement, pushing boundaries to achieve extraordinary outcomes.'
    },
    {
        id: 6,
        title: 'We Say “We”',
        description: 'Signifying our unity and collaborative spirit, "we" embodies our shared goals, successes, and commitment to each other and our clients.'
    },
]

const Values = ({title, description}) => (
    <div className='space-y-5'>
        <div className='relative w-fit'>
                <img src='/10.svg' className='relative z-10' alt='Main Image' />
                <div className='bg-[#92519c] w-[20px] h-[20px] rounded-full absolute -right-1 top-6 z-0'></div>
        </div>
        <h4 className='font-syne text-[22px]'>{title}</h4>
        <p className='font-sora text-[15px] text-[#12182066]'>{description}</p>
    </div>
)

const Enterprice = (props: Props) => {
  return (
    <div className='relative bg-[#1218200D] py-32'>
        <img
                    src='https://itsulu-react.netlify.app/_next/static/media/deco-1.07790e8b.svg'
                    className='w-[150px] lg:w-auto top-0   hidden lg:right-[30%] lg:block absolute'
                    alt='Decorative Element'
        />
        <div className='xl:w-[75%]  lg:w-[100%] md:w-[90%] mx-auto px-10 lg:px-0'>
            <div>
                    <div className='flex items-center gap-3'>
                        <div className='bg-[#92519c] w-[7px] h-[7px] rounded-full'></div>
                        <span className='font-syne text-[16px]'>For Enterprise</span>
                    </div>
                    <h2 className='font-syne text-[32px] lg:text-[42px] mt-10'>We Live by <span className='text-[#92519c]'>Powerful</span> Values</h2>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-10 mt-20'>
                    {value.map((value, index) => (
                        <Values key={index} title={value.title} description={value.description}/>
                    ))}  
                </div>
        </div>
    </div>
  )
}

export default Enterprice