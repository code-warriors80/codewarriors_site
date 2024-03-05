import Image from 'next/image'
import React from 'react'
import { BsArrowRight, BsPlayFill } from 'react-icons/bs'

type Props = {
  
}

const Carousel = (props: Props) => {
  return (
<div className="carousel w-full h-screen">

  <div id="slide1" className="carousel-item relative w-screen">
        <Image alt='' width={500} height={500} src="/bg6.jpg" className="w-full h-full object-cover" />
        <div className='w-full h-full absolute bg-[#121820CC] flex justify-center'>
            <Image alt='' width={500} height={500} src='https://itsulu-react.netlify.app/_next/static/media/deco-2.8cba2eb2.svg' className='w-[220px] top-0 left-[200px] hidden lg:block  absolute'/>
            <div className='flex items-center justify-center'>
                <a href="#slide3" className="btn btn-circle bg-[#FFFFFF1A] text-white hidden lg:flex">❮</a>
                    <div className='lg:w-[75%] lg:px-20'>
                        <p className='text-center mb-10 text-white text-[18px] font-syne'>The Next <span className=" text-[#92519c]">Gen</span></p>
                        <h1 className='font-syne text-center text-white text-4xl lg:text-6xl font-medium px-10 mil_1'>
                          <span>The</span> 
                          <span className="font-satisfy text-[#92519c]"> Freedom</span> 
                          <span>To Focus On <br/> Improving</span> 
                          <span className="font-satisfy text-[#92519c]"> Your </span> 
                          <span>Business Or Idea</span>
                        </h1>
                        <p className='font-sora text-xs md:text-xl lg:text-sm text-[#FFFFFF80] text-center py-12 px-5'> Building custom software solutions, such as web applications, <br /> mobile applications (iOS, Android), desktop applications, and enterprise software. </p>
                        <div className='flex items-center justify-center gap-10 lg:gap-20'>
                          <button className="font-sora text-sm lg:text-lg bg-[#92519c] text-white  px-5 lg:px-10 py-4 rounded-full font-base">Read More</button>
                          <div className='flex items-center gap-5'>
                              <button className="border-2 border-[#92519c] rounded-full  p-3 lg:p-4"><BsPlayFill size={30} color='white'/></button>
                              <span className='font-sora text-white text-sm lg:text-sm'>Watch Video</span>
                          </div>
                        </div>
                    </div>
                <a href="#slide2" className="btn btn-circle bg-[#FFFFFF1A] text-white hidden lg:flex">❯</a>
            </div>
        </div>
  </div>

  <div id="slide2" className="carousel-item relative w-screen">
        <Image alt='' width={500} height={500} src="/bg5.jpg" className="w-full h-full object-cover" />
        <div className='w-full h-full absolute bg-[#121820CC] flex justify-center '>
            <Image alt='' width={500} height={500} src='https://itsulu-react.netlify.app/_next/static/media/deco-2.8cba2eb2.svg' className='w-[220px] object-cover top-0 left-[200px] hidden lg:block  absolute'/>
            <div className=' flex items-center justify-center'>
                <a href="#slide1" className="btn btn-circle bg-[#FFFFFF1A] text-white hidden lg:flex">❮</a>
                <div className='lg:w-[75%] lg:px-20'>
                    <p className='text-center mb-10 text-white text-[18px] font-syne'>Our <span className=" text-[#92519c]">Inspiration</span></p>
                    <h1 className='font-syne text-center text-white text-4xl lg:text-6xl font-medium px-10 mil_1'>
                      <span>Deliver </span> 
                      <span> Tailored </span><br />
                      <span className="font-satisfy text-[#92519c]"> Solutions </span>
                      <span>for </span>
                      <span className="font-satisfy text-[#92519c]">Unique </span>
                      <span>Needs</span>
                    </h1>
                    <p className='font-sora text-xs md:text-xl lg:text-sm text-[#FFFFFF80] text-center py-12 px-5'>We are committed to understanding the unique needs and objectives of each client <br /> and driving tangible business outcomes and success.</p>
                    <div className='flex items-center justify-center gap-10 lg:gap-20'>
                      <button className="font-sora text-sm lg:text-lg bg-[#92519c] text-white  px-5 lg:px-10 py-4 rounded-full font-base">Read More</button>
                    </div>
                </div>
                <a href="#slide3" className="btn btn-circle bg-[#FFFFFF1A] text-white hidden lg:flex">❯</a>
            </div>
        </div>
  </div>

  <div id="slide3" className="carousel-item relative w-screen">
        <Image alt=''  width={500} height={500} src="/bg4.jpg" className="w-full h-full object-cover" />
        <div className='w-full h-full absolute bg-[#121820CC] flex justify-center '>
            <Image alt='' width={500} height={500} src='https://itsulu-react.netlify.app/_next/static/media/deco-2.8cba2eb2.svg' className='w-[220px] object-cover top-0 left-[200px] hidden lg:block  absolute'/>
            <div className=' flex items-center justify-center'>
                <a href="#slide2" className="btn btn-circle bg-[#FFFFFF1A] text-white hidden lg:flex">❮</a>
                <div className='lg:w-[75%] lg:px-20'>
                    <p className='text-center mb-10 text-white text-[18px] font-syne'>Our <span className=" text-[#92519c]">Drive</span></p>
                    <h1 className='font-syne text-center text-white text-4xl lg:text-6xl font-medium px-10 mil_1'>
                      <span > Empower  Businesses with </span> 
                      <span className="font-satisfy text-[#92519c]">  Innovative Digital</span>  <br />
                      <span>Solutions</span>
                    </h1>
                    <p className='font-sora text-xs md:text-xl lg:text-sm text-[#FFFFFF80] text-center py-12 px-5'> with innovative and cutting-edge digital solutions,<br /> we including websites and software, that enhance efficiency, productivity, and competitiveness in todays digital landscape. </p>
                    <div className='flex items-center justify-center gap-10 lg:gap-20'>
                      <button className="font-sora text-sm lg:text-lg bg-[#92519c] text-white  px-5 lg:px-10 py-4 rounded-full font-base">Read More</button>
                    </div>
                </div>
                <a href="#slide1" className="btn btn-circle bg-[#FFFFFF1A] text-white hidden lg:flex">❯</a>
            </div>
        </div>
  </div>

</div>
  )
}

export default Carousel;
