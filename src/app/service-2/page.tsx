import React from 'react'
import Landing from '../components/service-2/Landing'
import Experience from '../components/service-2/Experience'
import Tools from '../components/service-2/Tools'
import Discuss from '../components/service-2/Discuss'
import Contact from '../components/Contact'
import Description from '../components/service-2/description'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <Landing />
        <div className='xl:w-[75%] md:w-[90%] mx-auto py-16 px-5 sm:px-16 md:px-0'>
          <Description />
          <Experience />
        </div>
        <Discuss />
        <div className='xl:w-[75%] md:w-[90%] mx-auto py-16 px-5 sm:px-16 md:px-0'>
          <Tools />
        </div>
        <Contact />
    </div>
  )
}

export default page