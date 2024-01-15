import React from 'react'

type Props = {}

const Carousel = (props: Props) => {
  return (
<div className="carousel w-full ">
  <div id="slide1" className="carousel-item relative w-full h-[90vh] ">
    <img src="https://t3.ftcdn.net/jpg/06/26/00/00/360_F_626000010_E0QNIHh0a7XjAQeodbUN4m2FgCgKkO7L.webp" className="w-full" />
    <div className="absolute w-full  h-full flex items-center justify-center">
        <div className='flex items-center justify-between w-[1000px]'>
            <a href="#slide4" className="btn btn-circle  bg-[#FFFFFF1A]">❮</a> 
            <div>
                <h1 className='uppercase text-[60px] text-white text-center special-text'>The Freedom To Focus On Improving Your Business Or Idea</h1>
            </div>
            <a href="#slide2" className="btn btn-circle bg-[#FFFFFF1A]">❯</a>
        </div>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
  )
}

export default Carousel