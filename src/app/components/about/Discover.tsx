import Image from 'next/image';
import React from 'react'


const Reason = [
    {
        id: 1,
        image: '6.svg',
        title: 'Top Expertise',
        description: 'We boast top-notch expertise in our field, ensuring that our team is equipped with the knowledge and skills to tackle even the most challenging projects.'
    },
    {
        id: 2,
        image: '10.svg',
        title: 'Quality Management',
        description: 'Our commitment to quality management ensures that every project is executed with precision and attention to detail, delivering high-quality results that meet and exceed expectations.'
    },
    {
        id: 3,
        image: '2.svg',
        title: 'Utmost Flexibility',
        description: 'We understand that every client and project is unique. Thats why we offer utmost flexibility, adapting our approach to suit your specific needs and requirements.'
    },
    {
        id: 4,
        image: '4.svg',
        title: 'Agility',
        description: 'In todays fast-paced world, agility is key. We pride ourselves on our ability to quickly adapt to changes and challenges, ensuring that your project stays on track and on schedule.'
    },
    {
        id: 5,
        image: '5.svg',
        title: 'Innovation',
        description: 'Innovation is at the heart of everything we do. We continuously seek out new ideas and technologies to bring fresh and innovative solutions to our clients, helping them stay ahead of the curve.'
    },
]

interface ThingsProps {
    image: string;
    title: string;
    description: string;
}


const Things: React.FC<ThingsProps> = ({image, title, description}) => (
    <div>
        <div className='mx-auto flex gap-2  my-20'>
                        <div className='w-[30px] h-[2px] bg-[#92519c]  rounded-full'></div>
                        <div className='w-full h-[2px] bg-zinc-200 rounded-full'></div>
                        <div className='w-[30px] h-[2px] bg-[#92519c]  rounded-full'></div>
        </div>
        <div className='md:flex items-center justify-between space-y-5'>
            <div className='relative w-fit'>
                    <Image src={image} className='relative z-10' alt='Main Image' width={40} height={40}/>
                    <div className='bg-[#92519c] w-[20px] h-[20px] rounded-full absolute -right-1 top-6 z-0'></div>
            </div>
            <h4 className='font-syne text-[22px]'>{title}</h4>
            <p className='md:w-[45.50%] font-sora text-[15px] text-[#12182066]'>{description}</p>
        </div>
    </div>
)

const Discover = () => {
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

                {Reason.map((reason, index) => (
                    <Things key={index} image={reason.image} title={reason.title} description={reason.description}/>
                ))}
                
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