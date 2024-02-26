import React from 'react'
import Landing from '../components/service-3/Landing'
import Analyst from '../components/service-3/Analyst'
import Delevery from '../components/service-3/Delevery'
import Generation from '../components/service-3/Generation'
import Contact from '../components/Contact'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <Landing />
        <div className='xl:w-[75%] md:w-[90%] mx-auto py-16 px-5 sm:px-16 md:px-0'>
            <Analyst />
            <Delevery />
            <Generation />
        </div>
        <Contact />
    </div>
  )
}

export default page