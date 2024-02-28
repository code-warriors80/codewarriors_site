'use client'
import Link from 'next/link'
import React from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

type Props = {}

const Projects = ({image, title, author, description, link}) => {
    return (
        <div className="carousel-item w-full md:w-[48.50%]  lg:w-[47.50%]">
            <a href={`${link}`} className='overflow-hidden tran_filter ease-in-out duration-300 w-full'>
                    <img src={image} className="w-full object-cover rounded-xl h-[450px]" />
                    <div className='lg:flex justify-between gap-10 my-5'>
                        <div className='lg:w-[40%]'>
                                <h4 className='font-syne text-[22px]'>{title}</h4>
                                <div className='font-sora text-[15px] my-2'>Client: <span className='text-[#92519c]'>{author}</span></div>
                        </div>
                        <p className='font-sora lg:text-[15px] text-[#12182066] lg:w-[400px]'>{description}</p>
                    </div>
            </a>
        </div>
    )
}

const Project = (props: Props) => {
    
  return (
    <div className='relative '>
        <img
            src='https://itsulu-react.netlify.app/_next/static/media/deco-1.07790e8b.svg'
            className='w-[200px] lg:w-auto top-0   hidden lg:right-80 lg:block absolute'
            alt='Decorative Element'
          />
        <div className='xl:w-[75%]  lg:w-[100%] md:w-[90%] mx-auto py-16 px-5 sm:px-16 md:px-0 '>
                <div className='lg:flex items-end justify-between flex-wrap'>
                        <h2 className='font-syne text-[29px] lg:text-[45.50px]  px-5 text-[#121820]  '>Latest Projects</h2>
                        <div className='flex items-center gap-5 mt-5 lg:mt-0'>
                            <div className='flex items-center gap-3'>
                                <BsArrowLeft size={20}/>
                                <p className='font-syne'>Prev</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <p className='font-syne'>Next</p>
                                <BsArrowRight size={20}/>
                            </div>
                        </div>
                    </div>

            <div className="carousel w-full space-x-5 lg:space-x-20 mt-20  ">
                <Projects link={''} image='/school.jpg' title='School Website' author='School' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, tenetur inventore praesentium eaque consectetur ullam quod architecto odit!'/>
                <Projects link={'https://code-warriors80.github.io/gym_website/'} image='/gym.png' title='Gym & Fitness Website' author='Jane Meldrun' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, tenetur inventore praesentium eaque consectetur ullam quod architecto odit!'/>
                <Projects link={'tinyurl.com/reeskitchen/'} image='/2.jpg' title='Food Ordering Andriod App' author="Ree's Kitchen" description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, tenetur inventore praesentium eaque consectetur ullam quod architecto odit!'/>
            </div>

            <div className='flex justify-between items-center lg:mt-20 flex-wrap'>
                <Link href='/' className='hidden lg:flex gap-3 items-center font-syne text-[16px] font group'>Learn More<div className='bg-[#92519c] p-3 rounded-full relative ease-in-out duration-300 group-hover:left-3'><BsArrowRight size={20} color='white'/></div></Link>   
                <Link href='/services' className='border-2  border-[#92519c] px-10 lg:px-20 py-5 font-sora text-[16px] rounded-full font ease-in-out duration-300 hover:border-[3px]'>How We Work</Link>
            </div>
    </div>
    </div>
  )
}

export default Project