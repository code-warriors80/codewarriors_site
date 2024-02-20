import React from 'react'
import Landing from '../components/service-3/Landing'
import Analyst from '../components/service-3/Analyst'
import Delevery from '../components/service-3/Delevery'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <Landing />
        <div className='xl:w-[75%] md:w-[90%] mx-auto py-16 px-5 sm:px-16 md:px-0'>
            <Analyst />
            <Delevery />
        </div>
    </div>
  )
}

export default page