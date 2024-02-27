import React from 'react'
import Landing from '../components/blog/BlogLanding'
import BlogPosts from '../components/blog/BlogPosts'
import BlogSide from '../components/blog/BlogSide'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <Landing />
        <div className='xl:w-[75%]  lg:w-[100%] md:w-[90%] lg:flex justify-between items-start mx-auto'>
          <BlogPosts />
          <BlogSide />
        </div>
    </div>
  )
}

export default page