import React from 'react'
import ContactLanding from '../components/contact/ContactLanding'
import ContactLeft from '../components/contact/ContactLeft'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <ContactLanding />
        <div className='xl:w-[65%]  lg:w-[100%] md:w-[90%] lg:flex justify-between items-start mx-auto'>
            <ContactLeft />
        </div>
    </div>
  )
}

export default page