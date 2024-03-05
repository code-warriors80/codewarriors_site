import React from 'react'

const Tool = [
    {
        id: 1,
        stack: "Adobe XD"
    },
    {
        id: 2,
        stack: "Photoshop"
    },
    {
        id: 3,
        stack: "Figma"
    },
    {
        id: 4,
        stack: "Sketch"
    },
    {
        id: 5,
        stack: "Illustrator"
    },
    {
        id: 6,
        stack: "Kotlin"
    },
    {
        id: 7,
        stack: "Swift"
    },
    {
        id: 8,
        stack: "PHP"
    },
    {
        id: 9,
        stack: "MariaDB"
    },
    {
        id: 10,
        stack: "AWS"
    },
    {
        id: 11,
        stack: "React"
    },
    {
        id: 11,
        stack: "React Native"
    },
]

interface StacksProps {
    tool: string;
}

const Stacks: React.FC<StacksProps> = ({tool}) => (
    <div className='border-2 text-center py-10 hover:shadow-2xl ease-in-out duration-300'>
        <h6>{tool}</h6>
    </div>
)

const Tools = () => {
  return (
    <div className='py-20'>
        <ul className='flex flex-row items-center gap-3'>
            <li className='w-[10px] h-[10px] rounded-full bg-[#92519c]'></li>
            <li className='font-syne  text-[15px]'>Our Tools</li>
        </ul>
        <h2 className="text-[32px] lg:text-[42px] font-syne mt-10 mb-20">Our Design <span className="text-[#92519c]">Technology Stack</span></h2>

        <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-10 font-syne text-[16px] font'>
            {Tool.map((tool, index)=>(
                <Stacks key={index} tool={tool.stack}/>
            ))}
        </div>
    </div>
  )
}

export default Tools